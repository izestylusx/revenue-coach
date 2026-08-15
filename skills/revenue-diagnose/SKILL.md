---
name: revenue-diagnose
description: Diagnose a user's current income situation, task-level capabilities, desired AI involvement, revenue mode, earliest bottleneck, and best earning lane. Use at the start of a coaching engagement, after a major change, when the user is scattered across too many ideas, or before deciding what the user, agent, tools, and optional subagents should each own.
compatibility: Works with Agent Skills-compatible coding agents; no external tools are required.
license: MIT
metadata:
  author: izestylusx
  version: "0.2.0"
  framework: revenue-coach
---

# Revenue Diagnosis

Create a decision-ready baseline without turning the session into a long intake form.

## Guardrails

- One primary revenue experiment; at most one long-term asset.
- Accept financial ranges and “prefer not to say.” Do not request account access or exact balances.
- Do not prescribe an app, automation, website, content machine, or complex research project.
- Separate verified facts from assumptions and fears.
- Never imply guaranteed income.

## Step 1: Ask one compact batch

Ask only what is not already known, with no more than six numbered prompts:

1. Urgency: desired income and approximate time horizon or runway range.
2. Capacity and context: realistic hours, energy, location or mobility when relevant, equipment, and fixed constraints.
3. Capability and evidence: task-level ability, assets, prior results, work samples, relationships, and audiences already available.
4. Market contact: current leads, conversations, offers, proposals, or revenue.
5. Collaboration preference: which parts the user wants to learn, author, review, or delegate; whether speed, learning, or a hybrid matters most.
6. Boundaries: work the user will not do, risk tolerance, tool or privacy limits, and external actions requiring confirmation.

Make questions easy to answer briefly. Do not block progress when data is incomplete.

## Step 2: Build the evidence map

Return four compact sections:

- Facts
- Assumptions to test
- Fears or avoidance signals
- Missing information that could change the recommendation

Do not treat self-description alone as market proof. Prior paid outcomes, referrals, replies, calls, deposits, and delivered results are stronger evidence.

Build a small capability and collaboration map only for workstreams relevant to the likely lane. Keep capability, evidence, ownership, capacity, and desired AI assistance separate. Use `coach`, `assist`, `co-create`, `execute`, or `operate`; never infer the mode from capability alone.

## Step 3: Select the mode

- Cash now: urgent income or no reliable paid path. Prefer a narrow service or paid pilot using existing ability.
- Stabilize: some paid evidence, but acquisition, conversion, pricing, or delivery is inconsistent.
- Build: stable enough to compound a proven channel or productize repeated work without starving cashflow.

State why the selected mode fits and what evidence would justify changing it.

## Step 4: Compare earning lanes

Evaluate at most three plausible lanes using:

- speed to first credible conversation;
- strength of existing proof;
- access to reachable buyers;
- ability to deliver manually;
- price-to-effort potential;
- fit with constraints and values.
- fit with location or local access when relevant;
- how much of the path the user wants and is able to execute;
- whether available AI and tools can credibly fill the remaining gap.

Recommend one lane. Name what is parked and the condition for reconsidering it.

Use `revenue-opportunity-scan` when local conditions or current market availability would materially change the shortlist.

## Step 5: Output the diagnosis

Use this structure:

1. Current mode
2. Earliest revenue bottleneck
3. Recommended lane and rationale
4. Smallest offer hypothesis
5. Initial ownership map and assistance modes
6. Smallest POC or seven-day evidence target
7. One 15–45 minute action for today, with owner, “done when,” and review time

Offer to persist the result in `.revenue-coach/` only after asking permission.
