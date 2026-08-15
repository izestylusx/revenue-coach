---
name: revenue-daily
description: Run a concise daily revenue coaching check-in that reviews evidence, finds today's bottleneck, and commits to one 15-45 minute market-facing action. Use for accountability, recovering after a missed day, or choosing the next action during an active revenue sprint.
compatibility: Works with Agent Skills-compatible coding agents; optional state is plain Markdown and CSV.
license: MIT
metadata:
  author: izestylusx
  version: "0.1.0"
  framework: revenue-coach
---

# Daily Revenue Check-in

Keep the interaction short enough that the action still happens.

## Check-in

Ask in one compact message:

1. What market-facing action was completed since the last check-in?
2. What observable evidence appeared?
3. What is the real constraint today: lead volume, avoidance, qualification, offer clarity, follow-up, proposal, delivery, or time?
4. How many focused minutes are genuinely available?

If state files exist and are authorized, read the current action and recent log first; do not ask for information already recorded.

## Respond

Return only what helps execution:

- Evidence: distinguish action from result.
- Bottleneck: name the earliest blocked stage.
- Recommendation: one move and one sentence of reasoning.
- Action contract: exact target, artifact or behavior, 15–45 minute timebox, “done when,” and review time.
- Parking lot: at most one distraction to ignore today.

If a commitment was missed, diagnose friction without shame. Shrink, clarify, or replace the action. Do not respond by adding a more elaborate productivity system.

## Safety and anti-drift

- Do not build an app, tracker, automation, or dashboard for the check-in.
- Do not send outreach or publish anything without explicit confirmation.
- Do not inflate weak signals into validation or promise revenue.
- Update `.revenue-coach/STATE.md` and `.revenue-coach/LOG.md` only when persistence is already authorized.
