---
name: revenue-diagnose
description: Diagnose a user's current income situation, choose the appropriate revenue mode, identify the earliest bottleneck, and recommend one earning lane. Use at the start of a coaching engagement, after a major change, or when the user is scattered across too many business ideas.
compatibility: Works with Agent Skills-compatible coding agents; no external tools are required.
license: MIT
metadata:
  author: izestylusx
  version: "0.1.0"
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

Ask only what is not already known, with no more than five numbered prompts:

1. Urgency: desired income and approximate time horizon or runway range.
2. Capacity: realistic hours per week, energy limits, and fixed constraints.
3. Evidence: skills, assets, prior results, proof, relationships, and audiences already available.
4. Market contact: current leads, conversations, offers, proposals, or revenue.
5. Boundaries: work the user will not do, risk tolerance, and preferred client or work style.

Make questions easy to answer briefly. Do not block progress when data is incomplete.

## Step 2: Build the evidence map

Return four compact sections:

- Facts
- Assumptions to test
- Fears or avoidance signals
- Missing information that could change the recommendation

Do not treat self-description alone as market proof. Prior paid outcomes, referrals, replies, calls, deposits, and delivered results are stronger evidence.

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

Recommend one lane. Name what is parked and the condition for reconsidering it.

## Step 5: Output the diagnosis

Use this structure:

1. Current mode
2. Earliest revenue bottleneck
3. Recommended lane and rationale
4. Smallest offer hypothesis
5. Seven-day evidence target
6. One 15–45 minute action for today, with “done when” and review time

Offer to persist the result in `.revenue-coach/` only after asking permission.
