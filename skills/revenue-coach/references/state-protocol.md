# Minimal State Protocol

State is optional. The framework must still work in a single conversation.

## Consent

Ask before creating `.revenue-coach/`. Once the user initializes it for a project, treat that as permission to maintain business state there, but still ask before storing new sensitive categories.

Never store:

- passwords, API keys, recovery codes, identity documents, or payment-card data;
- exact bank balances unless the user explicitly requests it and understands the local file implications;
- confidential client data that is unnecessary for coaching;
- inferred diagnoses, intimate personal details, or third-party private information.

Use ranges and aliases when possible.

## Files

- `PROFILE.md`: relatively stable goals, capacity, constraints, strengths, and boundaries.
- `STATE.md`: the current mode, offer, bottleneck, evidence, WIP, and next action.
- `PIPELINE.csv`: minimum prospect pipeline; use aliases when privacy matters.
- `LOG.md`: short dated actions, evidence, learning, and decisions.

## Update rules

- Update only after a material decision, completed action, or new evidence.
- Append evidence to `LOG.md`; do not rewrite history to make progress look cleaner.
- Keep `STATE.md` current and short. Move obsolete detail to the log or delete it.
- Label unverified claims as hypotheses.
- Do not create extra trackers unless a repeated decision cannot be made from these files.

## Session start

Read `PROFILE.md`, `STATE.md`, and only the latest relevant part of `LOG.md`. Read `PIPELINE.csv` only when the bottleneck involves acquisition or follow-up.

## Session end

Record at most:

- what was done;
- what evidence appeared;
- what was learned or decided;
- the next action and review date.

Never let state maintenance consume more time than the market-facing action it supports.
