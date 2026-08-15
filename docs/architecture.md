# Architecture

Revenue Coach is intentionally small and file-based.

## Package layers

1. **Portable skills**: eleven independent Agent Skills with standard `name` and `description` frontmatter.
2. **Control plane**: the core skill protects focus, evidence, safety, and the active collaboration contract.
3. **Progressive references**: the core skill loads mode, state, collaboration, tool, delegation, language, or constitutional guidance only when needed.
4. **Execution plane**: diagnosis, opportunity, local-path, sprint, offer, outreach, tool-routing, deliverable execution, daily, and review skills perform bounded work.
5. **Installer CLI**: a dependency-free Node.js command that maps skills to agent discovery paths.
6. **Optional state**: four human-readable files in `.revenue-coach/`.
7. **Validation and tests**: structural checks plus safe installer behavior tests.

The package runtime adds no server, database, model wrapper, telemetry process, embedded credential, or background network client. A host agent may use its own web or connected tools when current opportunity or execution work requires them and the collaboration gates allow it.

## Why multiple small skills

One universal system prompt tends to crowd context and activate irrelevant behavior. Specialized skills allow the host agent to load only the workflow needed for diagnosis, opportunity research, local enrollment, sprint planning, execution, tool selection, offer design, outreach, or review. The core skill carries the shared decision rules and routes when necessary.

## Collaboration state

`PROFILE.md` stores relatively stable capability evidence, ownership preferences, learning-versus-speed priority, and tool boundaries. `STATE.md` stores only the workstreams active in the current experiment, their modes, owners, POC, and next checkpoints. This avoids both a global “beginner/expert” label and a second database.

## Tool and subagent adapters

The package contains protocols rather than hard dependencies. A host may expose Canva, Figma, a browser, documents, MCP servers, plugins, or subagents; another host may expose none. The tool router verifies the current environment and chooses an available, connectable, manual, or unavailable path.

Subagents are temporary workers for bounded AI-owned work. They do not hold authority over the user contract or external actions. A single main agent must still be able to perform the complete workflow.

## Portability strategy

The package uses only fields from the open Agent Skills specification. Product-specific invocation fields are avoided. Most supported products now discover `.agents/skills`; Claude Code uses `.claude/skills`. The installer isolates this path difference without changing skill content.

## Persistence strategy

State is separate from installed skills so package updates cannot overwrite business context. The generated files are git-ignored by default. Agents must ask before initializing state and should store ranges or aliases where possible.

## Safe installation

The installer hashes every installed skill. It will not overwrite an unmanaged or modified directory unless `--force` is explicitly supplied. Forced replacements are moved to a timestamped backup outside the skill-discovery tree. Uninstall is recoverable for the same reason.

## Non-goals

- a CRM or sales automation platform;
- autonomous outreach;
- autonomous application submission, publication, purchasing, or account operation;
- accounting, legal, investment, or tax advice;
- income prediction or guarantees;
- a general-purpose startup methodology encyclopedia;
- a replacement for human judgment, relationships, or domain expertise.
