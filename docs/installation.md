# Installation

Revenue Coach uses the open Agent Skills format. The installer copies the same seven skill directories to the discovery path expected by the selected agent.

## Requirements

- Node.js 18 or newer for the installer.
- A local or cloud coding agent that can discover `SKILL.md` directories.
- No package registry account or API key.

## Target matrix

| `--agent` value | User scope | Project scope | Products |
| --- | --- | --- | --- |
| `agents` (default fallback) | `~/.agents/skills` | `.agents/skills` | Open standard path |
| `codex` | `~/.agents/skills` | `.agents/skills` | OpenAI Codex |
| `cursor` | `~/.agents/skills` | `.agents/skills` | Cursor |
| `gemini` | `~/.agents/skills` | `.agents/skills` | Gemini CLI |
| `copilot` | `~/.agents/skills` | `.agents/skills` | GitHub Copilot |
| `opencode` | `~/.agents/skills` | `.agents/skills` | OpenCode |
| `claude` | `~/.claude/skills` | `.claude/skills` | Claude Code |

`--agent auto` uses Claude's path only when it detects an explicit Claude Code environment variable. Otherwise it chooses `.agents/skills`, which has the broadest current interoperability. Pass the agent explicitly when installing outside an active agent session.

## GitHub installation

```bash
npx github:izestylusx/revenue-coach install --agent codex
npx github:izestylusx/revenue-coach install --agent claude
npx github:izestylusx/revenue-coach install --agent cursor
```

Use `--scope project` to keep the skills inside the current repository. Use `--dry-run` first to inspect the exact path and collision behavior.

## Manual installation

Copy every directory under `skills/` into the product's skill root. The resulting layout must place each `SKILL.md` one directory under the root:

```text
<skills-root>/
  revenue-coach/SKILL.md
  revenue-diagnose/SKILL.md
  revenue-sprint/SKILL.md
  revenue-daily/SKILL.md
  revenue-offer/SKILL.md
  revenue-outreach/SKILL.md
  revenue-review/SKILL.md
```

Preserve the `references/` directory inside `revenue-coach`.

## Updates and collisions

The installer writes `revenue-coach-install.json` beside the selected skills directory. It records content hashes for managed skills.

- A clean managed installation can be updated in place.
- A modified or unmanaged collision aborts installation.
- `--force` moves collisions to `.revenue-coach-backups/<timestamp>/` before installing.
- Uninstall refuses modified managed skills unless `--force` is supplied.
- Uninstall moves skills to `.revenue-coach-removed/<timestamp>/` rather than permanently deleting them.

## Diagnostics

```bash
npx github:izestylusx/revenue-coach doctor --agent claude
```

Doctor validates the source package, checks the install manifest, and reports missing, unmanaged, or locally modified skills.

## Local state

Skill installation and coaching state are separate. Run `revenue-coach init` in a business workspace only when continuity is useful. The generated `.revenue-coach/` files are private by default and are not required for activation.
