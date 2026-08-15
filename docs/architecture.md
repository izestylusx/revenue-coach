# Architecture

Revenue Coach is intentionally small and file-based.

## Package layers

1. **Portable skills**: seven independent Agent Skills with standard `name` and `description` frontmatter.
2. **Progressive references**: the core skill loads detailed mode, state, coaching-language, or constitutional guidance only when needed.
3. **Installer CLI**: a dependency-free Node.js command that maps skills to agent discovery paths.
4. **Optional state**: four human-readable files in `.revenue-coach/`.
5. **Validation and tests**: structural checks plus safe installer behavior tests.

There is no runtime server, database, model wrapper, telemetry process, embedded credential, or network call.

## Why multiple small skills

One universal system prompt tends to crowd context and activate irrelevant behavior. Specialized skills allow the host agent to load only the workflow needed for diagnosis, sprint planning, daily execution, offer design, outreach, or review. The core skill carries the shared decision rules and routes when necessary.

## Portability strategy

The package uses only fields from the open Agent Skills specification. Product-specific invocation fields are avoided. Most supported products now discover `.agents/skills`; Claude Code uses `.claude/skills`. The installer isolates this path difference without changing skill content.

## Persistence strategy

State is separate from installed skills so package updates cannot overwrite business context. The generated files are git-ignored by default. Agents must ask before initializing state and should store ranges or aliases where possible.

## Safe installation

The installer hashes every installed skill. It will not overwrite an unmanaged or modified directory unless `--force` is explicitly supplied. Forced replacements are moved to a timestamped backup outside the skill-discovery tree. Uninstall is recoverable for the same reason.

## Non-goals

- a CRM or sales automation platform;
- autonomous outreach;
- accounting, legal, investment, or tax advice;
- income prediction or guarantees;
- a general-purpose startup methodology encyclopedia;
- a replacement for human judgment, relationships, or domain expertise.
