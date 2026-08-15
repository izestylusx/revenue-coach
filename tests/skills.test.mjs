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
  assert.equal(result.skillCount, 11);
});

test("adaptive collaboration separates capability from desired assistance", async () => {
  const core = await fs.readFile(path.join(root, "skills", "revenue-coach", "SKILL.md"), "utf8");
  const contract = await fs.readFile(
    path.join(root, "skills", "revenue-coach", "references", "collaboration-contract.md"),
    "utf8",
  );

  assert.match(core, /Never infer desired AI involvement from skill level alone/i);
  for (const phrase of ["Capability", "Evidence", "Ownership", "Capacity", "Objective"]) {
    assert.match(contract, new RegExp(phrase, "i"));
  }
  for (const mode of ["coach", "assist", "co-create", "execute", "operate"]) {
    assert.match(contract, new RegExp(`\\b${mode}\\b`, "i"));
  }
});

test("execution, tool routing, and local paths preserve approval boundaries", async () => {
  const files = [
    "revenue-execute",
    "revenue-tool-router",
    "revenue-opportunity-scan",
    "revenue-local-path",
  ];
  const content = (
    await Promise.all(
      files.map((name) => fs.readFile(path.join(root, "skills", name, "SKILL.md"), "utf8")),
    )
  ).join("\n");

  for (const phrase of [
    "representative POC",
    "explicit confirmation",
    "actually available",
    "exact address",
    "subagents",
  ]) {
    assert.match(content, new RegExp(phrase, "i"));
  }
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
