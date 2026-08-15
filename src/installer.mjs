import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  copyDirectory,
  exists,
  hashDirectory,
  readJson,
  safeTimestamp,
  writeJson,
} from "./fs-utils.mjs";
import { resolveSkillsRoot } from "./targets.mjs";

const PACKAGE_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_SKILLS_ROOT = path.join(PACKAGE_ROOT, "skills");
const TEMPLATE_ROOT = path.join(PACKAGE_ROOT, "templates");
const MANIFEST_NAME = "revenue-coach-install.json";

async function sourceSkillNames() {
  const entries = await fs.readdir(SOURCE_SKILLS_ROOT, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function metadataPaths(skillsRoot) {
  const configRoot = path.dirname(skillsRoot);
  return {
    manifest: path.join(configRoot, MANIFEST_NAME),
    backups: path.join(configRoot, ".revenue-coach-backups"),
    removed: path.join(configRoot, ".revenue-coach-removed"),
  };
}

async function inspectCollision(destination, previousHash) {
  if (!(await exists(destination))) return { exists: false, modified: false };
  const currentHash = await hashDirectory(destination);
  return {
    exists: true,
    modified: !previousHash || currentHash !== previousHash,
    currentHash,
  };
}

export async function installSkills(options = {}) {
  const skillsRoot = resolveSkillsRoot(options);
  const { manifest: manifestPath, backups } = metadataPaths(skillsRoot);
  const previous = await readJson(manifestPath, { skills: {} });
  const names = await sourceSkillNames();
  const collisions = [];

  for (const name of names) {
    const collision = await inspectCollision(
      path.join(skillsRoot, name),
      previous.skills?.[name]?.hash,
    );
    if (collision.exists && collision.modified) collisions.push(name);
  }

  if (collisions.length && !options.force) {
    throw new Error(
      `Refusing to overwrite modified or unmanaged skills: ${collisions.join(", ")}. ` +
        "Re-run with --force to create a recoverable backup first.",
    );
  }

  if (options.dryRun) {
    return { action: "install", dryRun: true, skillsRoot, skills: names, collisions };
  }

  await fs.mkdir(skillsRoot, { recursive: true });
  const backupRoot = path.join(backups, safeTimestamp());
  const installed = {};

  for (const name of names) {
    const source = path.join(SOURCE_SKILLS_ROOT, name);
    const destination = path.join(skillsRoot, name);
    if (await exists(destination)) {
      const collision = await inspectCollision(destination, previous.skills?.[name]?.hash);
      if (collision.modified) {
        await fs.mkdir(backupRoot, { recursive: true });
        await fs.rename(destination, path.join(backupRoot, name));
      } else {
        await fs.rm(destination, { recursive: true, force: true });
      }
    }
    await copyDirectory(source, destination);
    installed[name] = { hash: await hashDirectory(destination) };
  }

  const packageJson = JSON.parse(
    await fs.readFile(path.join(PACKAGE_ROOT, "package.json"), "utf8"),
  );
  await writeJson(manifestPath, {
    package: packageJson.name,
    version: packageJson.version,
    installedAt: new Date().toISOString(),
    skillsRoot,
    skills: installed,
  });

  return {
    action: "install",
    dryRun: false,
    skillsRoot,
    skills: names,
    backupRoot: collisions.length ? backupRoot : null,
  };
}

export async function uninstallSkills(options = {}) {
  const skillsRoot = resolveSkillsRoot(options);
  const { manifest: manifestPath, removed } = metadataPaths(skillsRoot);
  const manifest = await readJson(manifestPath);
  if (!manifest) {
    throw new Error(`No Revenue Coach installation manifest found near ${skillsRoot}.`);
  }

  const modified = [];
  const present = [];
  for (const [name, record] of Object.entries(manifest.skills ?? {})) {
    const destination = path.join(skillsRoot, name);
    if (!(await exists(destination))) continue;
    present.push(name);
    if ((await hashDirectory(destination)) !== record.hash) modified.push(name);
  }

  if (modified.length && !options.force) {
    throw new Error(
      `Refusing to uninstall locally modified skills: ${modified.join(", ")}. ` +
        "Use --force to move them to a recoverable removed-items folder.",
    );
  }

  if (options.dryRun) {
    return { action: "uninstall", dryRun: true, skillsRoot, skills: present, modified };
  }

  const removedRoot = path.join(removed, safeTimestamp());
  for (const name of present) {
    await fs.mkdir(removedRoot, { recursive: true });
    await fs.rename(path.join(skillsRoot, name), path.join(removedRoot, name));
  }
  await fs.rm(manifestPath, { force: true });

  return {
    action: "uninstall",
    dryRun: false,
    skillsRoot,
    skills: present,
    removedRoot: present.length ? removedRoot : null,
  };
}

export async function initWorkspace({
  cwd = process.cwd(),
  directory = ".revenue-coach",
  force = false,
  dryRun = false,
} = {}) {
  const destinationRoot = path.resolve(cwd, directory);
  const entries = await fs.readdir(TEMPLATE_ROOT, { withFileTypes: true });
  const templates = entries
    .filter((entry) => entry.isFile())
    .map((entry) => ({
      source: entry.name,
      destination: entry.name === "gitignore.template" ? ".gitignore" : entry.name,
    }))
    .sort((a, b) => a.destination.localeCompare(b.destination));
  const files = templates.map((entry) => entry.destination);
  const collisions = [];

  for (const template of templates) {
    if (await exists(path.join(destinationRoot, template.destination))) {
      collisions.push(template.destination);
    }
  }
  if (collisions.length && !force) {
    throw new Error(
      `State files already exist: ${collisions.join(", ")}. ` +
        "Use --force only if you intend to replace them; backups will be created.",
    );
  }
  if (dryRun) {
    return { action: "init", dryRun: true, destinationRoot, files, collisions };
  }

  let backupRoot = null;
  if (collisions.length) {
    backupRoot = path.join(
      path.dirname(destinationRoot),
      ".revenue-coach-state-backups",
      safeTimestamp(),
    );
    await fs.mkdir(backupRoot, { recursive: true });
    for (const file of collisions) {
      await fs.rename(path.join(destinationRoot, file), path.join(backupRoot, file));
    }
  }

  await fs.mkdir(destinationRoot, { recursive: true });
  for (const template of templates) {
    await fs.copyFile(
      path.join(TEMPLATE_ROOT, template.source),
      path.join(destinationRoot, template.destination),
    );
  }

  return { action: "init", dryRun: false, destinationRoot, files, backupRoot };
}

export async function inspectInstallation(options = {}) {
  const skillsRoot = resolveSkillsRoot(options);
  const { manifest: manifestPath } = metadataPaths(skillsRoot);
  const manifest = await readJson(manifestPath);
  const sourceNames = await sourceSkillNames();
  const checks = [];

  for (const name of sourceNames) {
    const destination = path.join(skillsRoot, name);
    const present = await exists(destination);
    const expectedHash = manifest?.skills?.[name]?.hash;
    const currentHash = present ? await hashDirectory(destination) : null;
    checks.push({
      name,
      present,
      managed: Boolean(expectedHash),
      modified: Boolean(present && expectedHash && currentHash !== expectedHash),
    });
  }

  return { skillsRoot, manifest, checks };
}
