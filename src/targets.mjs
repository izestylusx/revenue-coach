import os from "node:os";
import path from "node:path";

export const AGENTS_PATH_TARGETS = new Set([
  "agents",
  "codex",
  "cursor",
  "gemini",
  "copilot",
  "opencode",
]);

export const SUPPORTED_AGENTS = [...AGENTS_PATH_TARGETS, "claude", "auto"];

export function normalizeAgent(agent = "auto", env = process.env) {
  const normalized = String(agent).toLowerCase();
  if (!SUPPORTED_AGENTS.includes(normalized)) {
    throw new Error(
      `Unsupported agent "${agent}". Choose: ${SUPPORTED_AGENTS.join(", ")}.`,
    );
  }

  if (normalized !== "auto") return normalized;

  const isClaude = Boolean(
    env.CLAUDECODE || env.CLAUDE_CODE || env.CLAUDE_CODE_ENTRYPOINT,
  );
  return isClaude ? "claude" : "agents";
}

export function resolveSkillsRoot({
  agent = "auto",
  scope = "user",
  cwd = process.cwd(),
  home = os.homedir(),
  target,
  env = process.env,
} = {}) {
  if (target) return path.resolve(cwd, target);
  if (!["user", "project"].includes(scope)) {
    throw new Error('Scope must be either "user" or "project".');
  }

  const resolvedAgent = normalizeAgent(agent, env);
  const base = scope === "user" ? home : cwd;
  const directory = resolvedAgent === "claude" ? ".claude" : ".agents";
  return path.join(base, directory, "skills");
}

export function targetDescription(agent) {
  const resolved = normalizeAgent(agent);
  if (resolved === "claude") return "Claude Code (.claude/skills)";
  return "Agent Skills open path (.agents/skills)";
}
