import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { exists } from "./fs-utils.mjs";
import { parseFrontmatter } from "./frontmatter.mjs";

const PACKAGE_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DEFAULT_SKILLS_ROOT = path.join(PACKAGE_ROOT, "skills");
const NAME_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const PORTABLE_FIELDS = new Set([
  "name",
  "description",
  "license",
  "compatibility",
  "metadata",
  "allowed-tools",
]);

export async function validateSkills(skillsRoot = DEFAULT_SKILLS_ROOT) {
  const errors = [];
  const warnings = [];
  const entries = await fs.readdir(skillsRoot, { withFileTypes: true });
  const directories = entries.filter((entry) => entry.isDirectory()).sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  if (!directories.length) errors.push("No skill directories found.");

  for (const directory of directories) {
    const skillRoot = path.join(skillsRoot, directory.name);
    const skillFile = path.join(skillRoot, "SKILL.md");
    if (!(await exists(skillFile))) {
      errors.push(`${directory.name}: missing SKILL.md.`);
      continue;
    }

    const content = await fs.readFile(skillFile, "utf8");
    let parsed;
    try {
      parsed = parseFrontmatter(content, skillFile);
    } catch (error) {
      errors.push(error.message);
      continue;
    }

    const { data, body } = parsed;
    if (!data.name) errors.push(`${directory.name}: missing name.`);
    if (!data.description) errors.push(`${directory.name}: missing description.`);
    if (data.name && !NAME_PATTERN.test(data.name)) {
      errors.push(`${directory.name}: invalid name "${data.name}".`);
    }
    if (data.name && data.name !== directory.name) {
      errors.push(`${directory.name}: frontmatter name must match directory name.`);
    }
    if (String(data.name ?? "").length > 64) {
      errors.push(`${directory.name}: name exceeds 64 characters.`);
    }
    const descriptionLength = String(data.description ?? "").length;
    if (descriptionLength > 1024) {
      errors.push(`${directory.name}: description exceeds 1024 characters.`);
    }
    if (content.split("\n").length > 500) {
      warnings.push(`${directory.name}: SKILL.md exceeds the recommended 500 lines.`);
    }
    for (const field of Object.keys(data)) {
      if (!PORTABLE_FIELDS.has(field)) {
        warnings.push(`${directory.name}: non-portable frontmatter field "${field}".`);
      }
    }
    if (!body.trim()) errors.push(`${directory.name}: instruction body is empty.`);

    const references = [...body.matchAll(/(?:references|assets|scripts)\/[A-Za-z0-9._/-]+/g)];
    for (const match of references) {
      const referenced = match[0].replace(/[),.;:`]+$/, "");
      if (!(await exists(path.join(skillRoot, referenced)))) {
        errors.push(`${directory.name}: missing referenced file ${referenced}.`);
      }
    }
  }

  return { ok: errors.length === 0, errors, warnings, skillCount: directories.length };
}

async function main() {
  const requestedRoot = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_SKILLS_ROOT;
  const result = await validateSkills(requestedRoot);
  for (const warning of result.warnings) console.warn(`warning: ${warning}`);
  if (!result.ok) {
    for (const error of result.errors) console.error(`error: ${error}`);
    process.exitCode = 1;
    return;
  }
  console.log(`Validated ${result.skillCount} portable Agent Skills.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
