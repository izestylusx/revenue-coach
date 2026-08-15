# Tool and Delegation Protocol

Use this reference when the agreed work requires software, a plugin, an MCP server, an external service, or subagents.

## Route from the job, not from the tool catalog

1. Define the exact deliverable and the workstream owner.
2. Inspect capabilities actually available in the host agent. Do not claim an integration exists because it is popular or mentioned in this reference.
3. Decide whether the task can be completed well with current tools or a manual path.
4. If a missing capability materially blocks the deliverable, discover at most three credible options.
5. Compare fit, editable output, quality, speed, cost, privacy, permissions, reversibility, and learning impact.
6. Recommend one primary option and one fallback.
7. Obtain confirmation before installing, connecting, subscribing, uploading sensitive material, or acting through an external account.

Classify each option as:

- `available`: callable and authorized now;
- `connectable`: supported but requires installation, sign-in, or permission;
- `manual/external`: usable by the user outside the agent;
- `unavailable`: cannot be used in the current environment.

Never pretend that a recommendation is an active capability. If current verification is impossible, say so and provide a verification checklist.

## Prefer existing capability

Using an existing design, research, document, or image tool to produce an agreed deliverable is not the same as building custom software. A custom integration, MCP server, app, scraper, or automation must pass the core build gate.

Examples:

- If the user owns visual production, provide a brief and copy; do not connect Canva merely because it exists.
- If the agent owns editable design production, verify whether Canva, Figma, SVG, or another available path can produce the required format.
- If the agent owns only copywriting, use a document or table rather than introducing a design stack.
- If end-to-end production is approved, combine only the minimum research, generation, editing, and QA capabilities needed for the proof of concept.

## Delegate only bounded AI-owned work

Use subagents only when the host supports them and delegation improves speed, independence of review, or specialist quality. Do not simulate support or claim delegation occurred when it did not.

The main agent remains accountable for:

- the user context and collaboration contract;
- task boundaries and evidence standards;
- integration, conflict resolution, and final quality;
- approvals and external-action gates.

Delegate a workstream only when it is assigned to the agent or shared in the collaboration contract. Give each subagent a bounded brief containing:

- objective and deliverable;
- allowed inputs and tools;
- constraints and excluded actions;
- evidence or citation requirements;
- output format and acceptance criteria;
- explicit prohibition on external side effects unless separately authorized.

Parallelize only independent work. Do not split a tiny task into many roles or create a permanent “agent organization” before the workflow proves useful.

Possible temporary roles include market scout, local-opportunity researcher, creative director, copywriter, production designer, QA reviewer, and listing optimizer. These are functions, not mandatory agents.

## Failure and fallback

- If a tool fails, preserve work and use the documented fallback rather than expanding scope.
- If tool output is not editable enough, change the production path before batching.
- If an integration creates disproportionate cost or privacy risk, return to a manual or portable artifact.
- If subagent outputs conflict, the main agent resolves them against the agreed brief and evidence—not by majority vote.
