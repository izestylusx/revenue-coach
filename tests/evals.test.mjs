import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("behavior evaluation cases cover unique high-risk scenarios", async () => {
  const cases = JSON.parse(await fs.readFile(path.join(root, "evals", "cases.json"), "utf8"));
  assert.ok(cases.length >= 8);
  assert.equal(new Set(cases.map((entry) => entry.id)).size, cases.length);
  for (const entry of cases) {
    assert.ok(entry.prompt.length > 20, `${entry.id}: prompt is too short`);
    assert.ok(entry.expected.length >= 3, `${entry.id}: insufficient expected behaviors`);
    assert.ok(entry.forbidden.length >= 2, `${entry.id}: insufficient forbidden behaviors`);
  }
});
