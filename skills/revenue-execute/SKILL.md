---
name: revenue-execute
description: Co-create or execute revenue-enabling deliverables according to the user's skill, ownership, learning goal, desired AI involvement, and approval boundaries. Use when the user wants more than coaching—for example research, copywriting, design production, a portfolio sample, proof of concept, listing, proposal asset, campaign pack, or an end-to-end but bounded business deliverable.
compatibility: Works with Agent Skills-compatible coding agents. Tool use and subagents are optional; external actions require explicit confirmation.
license: MIT
metadata:
  author: izestylusx
  version: "0.2.0"
  framework: revenue-coach
---

# Revenue Execution

Produce the smallest useful artifact that moves the current revenue bottleneck. Do not replace a deliverable with an app for producing the deliverable.

## Preconditions

Confirm or infer, then reflect:

- the buyer, revenue hypothesis, and current bottleneck;
- the exact deliverable and acceptance criteria;
- relevant capability and evidence;
- whether the priority is learning, shipping, authorship, or a hybrid;
- the assistance mode and owner for each workstream;
- style, privacy, budget, tool, and external-action boundaries.

If these are unclear, use the capability and collaboration protocol from `revenue-coach`. Ask one compact batch, not a long questionnaire.

## Choose the execution shape

- `coach`: guide and critique while the user produces.
- `assist`: create raw ingredients the user will assemble.
- `co-create`: build drafts with frequent direction.
- `execute`: produce the agreed internal deliverable and pause at checkpoints.
- `operate`: repeat a proven, approved procedure; never infer this mode for a new workflow.

Different workstreams may use different modes. Do not silently take over user-owned work.

## Build a representative POC

Before batching or creating a large system:

1. Define the smallest sample that tests the risky assumptions.
2. Produce one representative slice in the final intended format when possible.
3. Review it against buyer relevance, quality, editability, user voice, and commercial honesty.
4. Ask for approval or correction at the agreed gate.
5. Only then produce variants, batches, listings, or recurring procedures.

For a social-template business, read `references/social-template-business.md`.

## Route tools and support

Use `revenue-tool-router` when current capabilities do not clearly satisfy the deliverable. Apply the tool and delegation protocol from `revenue-coach` before connecting tools or delegating work.

Using an available tool for production is allowed. Building a custom app, MCP server, scraper, or automation requires the core build gate to pass.

## Stage gates

Use only gates that reduce material rework or risk:

1. Brief and ownership approval.
2. First POC or representative sample approval.
3. Batch or final deliverable approval.
4. Separate explicit confirmation before publication, sending, purchasing, account changes, or commercial commitment.

Do not ask for repeated approval on low-risk internal edits already delegated to the agent.

## Output

Return or create:

- the ownership map used;
- the POC or final artifact—not merely a plan for making it;
- assumptions and honest proof labels;
- tool and delegation notes only when relevant;
- the next approval or market-test action;
- the observable evidence that will trigger continuation, revision, or stopping.

If the user's objective includes learning, briefly explain reusable decisions and transfer more of the next cycle to the user. If speed is primary, minimize explanation and deliver the artifact.
