# Contributing

Revenue Coach should remain small, evidence-based, and agent-portable.

## Before proposing a feature

Explain:

1. which revenue-path bottleneck it improves;
2. what observed failure or user evidence motivates it;
3. why a documentation or skill edit is insufficient;
4. how it preserves user agency and explicit confirmation;
5. how it avoids adding a runtime service, unnecessary state, or product-specific lock-in.
6. how it respects capability evidence, user ownership, desired AI involvement, and approval boundaries.

## Development checks

```bash
npm install --ignore-scripts
npm run validate
npm test
npm pack --dry-run
```

Keep `SKILL.md` files concise and move conditional detail into a directly referenced file. Use only portable Agent Skills frontmatter unless a separate product adapter clearly isolates the extension.

Do not add dependencies without a concrete need and threat analysis. Never add telemetry, credentials, autonomous external actions, income guarantees, or deceptive sales tactics.

New tool adapters must distinguish a capability that is available now from one that is merely recommended or connectable. New delegation behavior must remain optional and keep the main agent responsible for context, integration, and external-action gates.
