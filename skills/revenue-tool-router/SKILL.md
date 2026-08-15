---
name: revenue-tool-router
description: Discover, verify, compare, and route the minimum tools, plugins, MCP servers, apps, or manual fallbacks needed for an approved revenue task. Use when the user wants the AI to implement work through services such as Canva or Figma, when a needed capability may be missing, or when deciding whether to connect, install, build, or avoid a tool.
compatibility: Works with Agent Skills-compatible coding agents. Discovery depends on host capabilities and may require current web research.
license: MIT
metadata:
  author: izestylusx
  version: "0.2.0"
  framework: revenue-coach
---

# Revenue Tool Router

Choose tools only after the deliverable and ownership map are clear. The goal is successful work, not a large tool stack.

## Step 1: Define the capability gap

State:

- the deliverable and final format;
- which workstream the agent owns;
- the missing operation—research, generation, editing, automation, QA, publishing, or account action;
- quality, editability, privacy, budget, and learning constraints.

If the user owns the operation and only wants guidance, do not provision an execution tool.

## Step 2: Inspect and verify

Inspect tools actually available or exposed by the host. Classify candidates as `available`, `connectable`, `manual/external`, or `unavailable`.

When current facts matter, verify against official documentation or the provider's current listing. Distinguish:

- what the integration claims to support;
- what can actually be invoked in the current session;
- what requires sign-in, installation, payment, permission, or human interaction;
- what output remains editable or portable.

Do not promise API, plugin, MCP, browser, or subagent access that has not been verified.

## Step 3: Compare minimally

Compare at most three plausible paths using:

- fitness for the exact operation;
- output quality and editability;
- time to first useful result;
- cost and lock-in;
- data sensitivity and permissions;
- reliability and recovery path;
- effect on the user's learning objective.

Recommend one primary path and one fallback. Prefer an existing or manual capability when the difference is small.

## Step 4: Gate connection and custom builds

Obtain explicit confirmation before installation, sign-in, subscription, sensitive upload, or external account action. Explain the requested permission and why it is needed.

Do not build a custom integration, MCP server, app, scraper, or automation unless the Revenue Coach build gate passes. One available off-the-shelf tool or a manual bridge is usually enough for an unvalidated offer.

## Step 5: Hand off an executable tool plan

Provide:

- required operation;
- selected tool and verified status;
- exact role in the workflow;
- required permission, cost, or user step;
- input and output format;
- fallback;
- checkpoint proving the tool is suitable before batch work.

If the tool is already available and approved, continue into `revenue-execute` rather than stopping at recommendations.
