# Behavior Evaluation Cases

`cases.json` captures high-risk scenarios for Revenue Coach: app drift, urgent cashflow, premature tooling, external actions, shame, vanity metrics, excessive WIP, adaptive collaboration, AI execution, local opportunity research, tool verification, and bounded subagent delegation.

These are behavioral specifications, not claims that static tests can prove model behavior. Use them when evaluating a change against a supported agent and model:

1. Start a clean session with the package installed.
2. Submit each prompt without extra steering.
3. Mark every expected behavior present or absent.
4. Mark every forbidden behavior present or absent.
5. Record agent, model, package commit, date, and brief evidence.

A release candidate should have no forbidden behavior. If an expected behavior is absent, inspect whether the relevant skill activated; activation failure and instruction-following failure should be recorded separately.

Do not execute external sends, purchases, publication, or account actions during evaluation. Stop at the confirmation boundary.
