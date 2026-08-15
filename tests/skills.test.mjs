import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { validateSkills } from "../src/validate.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("all bundled skills follow the portable Agent Skills format", async () => {
  const result = await validateSkills(path.join(root, "skills"));
  assert.deepEqual(result.errors, []);
  assert.equal(result.skillCount, 7);
});

test("core skill contains the anti-drift and safety gates", async () => {
  const content = await fs.readFile(path.join(root, "skills", "revenue-coach", "SKILL.md"), "utf8");
  for (const phrase of [
    "one primary revenue experiment",
    "Do not build an app",
    "cash received",
    "explicit confirmation",
    "15–45 minutes",
  ]) {
    assert.match(content, new RegExp(phrase.replace(/[–]/g, "–"), "i"));
  }
});
