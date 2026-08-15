import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { initWorkspace, installSkills, uninstallSkills } from "../src/installer.mjs";

async function temporaryDirectory(t) {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), "revenue-coach-test-"));
  t.after(() => fs.rm(directory, { recursive: true, force: true }));
  return directory;
}

test("install, inspectable manifest, and recoverable uninstall", async (t) => {
  const cwd = await temporaryDirectory(t);
  const target = path.join(cwd, ".agents", "skills");
  const installed = await installSkills({ target, cwd });
  assert.equal(installed.skills.length, 11);
  assert.ok(await fs.stat(path.join(target, "revenue-coach", "SKILL.md")));
  assert.ok(await fs.stat(path.join(cwd, ".agents", "revenue-coach-install.json")));

  const removed = await uninstallSkills({ target, cwd });
  assert.equal(removed.skills.length, 11);
  await assert.rejects(fs.stat(path.join(target, "revenue-coach")));
  assert.ok(await fs.stat(path.join(removed.removedRoot, "revenue-coach", "SKILL.md")));
});

test("install refuses unmanaged collisions and force backs them up", async (t) => {
  const cwd = await temporaryDirectory(t);
  const target = path.join(cwd, ".agents", "skills");
  const collision = path.join(target, "revenue-coach");
  await fs.mkdir(collision, { recursive: true });
  await fs.writeFile(path.join(collision, "SKILL.md"), "user content\n");

  await assert.rejects(installSkills({ target, cwd }), /Refusing to overwrite/);
  const result = await installSkills({ target, cwd, force: true });
  assert.ok(result.backupRoot);
  assert.equal(
    await fs.readFile(path.join(result.backupRoot, "revenue-coach", "SKILL.md"), "utf8"),
    "user content\n",
  );
});

test("dry-run does not create a target", async (t) => {
  const cwd = await temporaryDirectory(t);
  const target = path.join(cwd, "never-created", "skills");
  const result = await installSkills({ target, cwd, dryRun: true });
  assert.equal(result.dryRun, true);
  await assert.rejects(fs.stat(target));
});

test("init scaffolds private local coaching state", async (t) => {
  const cwd = await temporaryDirectory(t);
  const result = await initWorkspace({ cwd });
  assert.equal(result.files.length, 6);
  assert.match(
    await fs.readFile(path.join(cwd, ".revenue-coach", ".gitignore"), "utf8"),
    /PROFILE\.md/,
  );
  assert.match(
    await fs.readFile(path.join(cwd, ".revenue-coach", "STATE.md"), "utf8"),
    /Current bottleneck/,
  );
});
