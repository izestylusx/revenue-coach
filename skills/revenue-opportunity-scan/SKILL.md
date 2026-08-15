---
name: revenue-opportunity-scan
description: Identify and compare realistic online, freelance, business, employment, gig, and local income opportunities using the user's current capability, evidence, capacity, location, mobility, equipment, urgency, and desired AI support. Use when the user does not yet know which revenue path fits or wants opportunities grounded in the current market around their domicile.
compatibility: Works with Agent Skills-compatible coding agents. Current opportunity claims should be verified with web or local sources when available.
license: MIT
metadata:
  author: izestylusx
  version: "0.2.0"
  framework: revenue-coach
---

# Revenue Opportunity Scan

Find opportunities the user can realistically enter—not a generic list of ways to make money.

## Calibrate only decision-relevant context

Use what is already known. Ask one compact batch for missing factors that materially affect eligibility or execution:

- city or regency and practical travel radius; never require an exact address;
- urgency and realistic weekly availability;
- current skills, evidence, relationships, and work history;
- device, connectivity, vehicle, license, workspace, or equipment;
- mobility, schedule, language, care, health, or other operational constraints the user chooses to share;
- starting budget and downside tolerance;
- preference for online, offline, employment, freelance, business, or a mix;
- which parts the user wants to learn, own, or delegate to AI.

Do not use demographic stereotypes as market evidence. Use age or another personal attribute only when it is volunteered, materially relevant to a verified eligibility rule, or explicitly requested for analysis.

## Research current reality

When tools permit, verify time-sensitive claims using official platform or employer sources, current local listings, credible market data, and recent user reports where experience data is useful. Record date and location coverage. Separate availability, eligibility, demand, and expected earnings; one does not prove the others.

If live research is unavailable, disclose the freshness limit and provide exact items the user should verify.

## Build the shortlist

Compare no more than five plausible opportunities, then recommend at most two using:

- time to eligibility and first credible income event;
- strength of current capability and proof;
- reachable local or online demand;
- AI's practical ability to support execution;
- upfront and recurring cost;
- likely cash timing and unit economics;
- schedule, mobility, safety, and downside fit;
- portability and potential for repeat or referral.

Label earnings, demand, acceptance, and conversion estimates as hypotheses unless verified. Do not recommend an opportunity solely because it is popular nationally.

## Design two horizons when urgency requires it

When runway is short, distinguish:

- a bridge-income path that can plausibly begin sooner;
- a compounding path that uses stronger skills or creates better economics.

Keep only one primary experiment active. The bridge and long-term path must not become two full simultaneous businesses.

## Output

Provide:

1. Context and constraints used.
2. Current local or online evidence with dates and sources when researched.
3. A compact comparison table.
4. One recommended primary path and one conditional fallback.
5. What the user, main agent, tools, and optional subagents would each own.
6. Eligibility or setup checks.
7. One reversible 15–45 minute action that creates evidence.

Use `revenue-local-path` after selecting a location-dependent gig, job, service, or small business. Use `revenue-diagnose` when the scan must be integrated with the full revenue baseline.
