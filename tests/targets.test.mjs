import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { normalizeAgent, resolveSkillsRoot } from "../src/targets.mjs";

test("portable agents use the shared .agents path", () => {
  const home = path.join(os.tmpdir(), "rc-home");
  for (const agent of ["agents", "codex", "cursor", "gemini", "copilot", "opencode"]) {
    assert.equal(
      resolveSkillsRoot({ agent, scope: "user", home }),
      path.join(home, ".agents", "skills"),
    );
  }
});

test("Claude uses its native skills path", () => {
  const cwd = path.join(os.tmpdir(), "rc-project");
  assert.equal(
    resolveSkillsRoot({ agent: "claude", scope: "project", cwd }),
    path.join(cwd, ".claude", "skills"),
  );
});

test("auto detects Claude only from an explicit Claude environment", () => {
  assert.equal(normalizeAgent("auto", {}), "agents");
  assert.equal(normalizeAgent("auto", { CLAUDECODE: "1" }), "claude");
});

test("custom target overrides scope and agent", () => {
  const cwd = path.join(os.tmpdir(), "rc-cwd");
  assert.equal(
    resolveSkillsRoot({ target: "custom/skills", cwd, agent: "claude", scope: "user" }),
    path.join(cwd, "custom", "skills"),
  );
});
