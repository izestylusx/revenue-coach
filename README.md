<p align="center">
  <img src="assets/revenue-coach-hero.svg" alt="Revenue Coach — move the bottleneck, create real evidence" width="100%">
</p>

<p align="center">
  <a href="https://github.com/izestylusx/revenue-coach/actions/workflows/test.yml"><img alt="Tests" src="https://github.com/izestylusx/revenue-coach/actions/workflows/test.yml/badge.svg"></a>
  <a href="https://agentskills.io/"><img alt="Agent Skills" src="https://img.shields.io/badge/Agent%20Skills-open%20standard-6C63FF"></a>
  <img alt="Skills" src="https://img.shields.io/badge/skills-7-00B894">
  <img alt="Runtime dependencies" src="https://img.shields.io/badge/runtime%20dependencies-0-00B894">
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/license-MIT-F4B942"></a>
</p>

<p align="center">
  A portable, revenue-first coaching system for AI coding agents.<br>
  It turns plans into market evidence—without drifting into unnecessary apps, dashboards, or automation.
</p>

<p align="center">
  <a href="#30-second-install"><strong>Install</strong></a> ·
  <a href="docs/quickstart-id.md"><strong>Panduan Indonesia</strong></a> ·
  <a href="docs/framework.md"><strong>Framework</strong></a> ·
  <a href="docs/architecture.md"><strong>Architecture</strong></a> ·
  <a href="evals/README.md"><strong>Behavior Evals</strong></a>
</p>

---

## The problem it solves

AI agents can generate far more plans, code, research, and systems than a person can validate in the real world. When the goal is income, that abundance often becomes sophisticated avoidance.

Revenue Coach changes the unit of progress:

> **Not “what did we build?”—but “what evidence moved closer to voluntary exchange?”**

| Default agent drift | Revenue Coach behavior |
| --- | --- |
| Builds a CRM before there are leads | Starts a small, relevant lead list |
| Designs an app for a manual research project | Produces the actual research deliverable |
| Expands five business ideas at once | Selects one revenue experiment |
| Optimizes branding before conversations | Creates market contact first |
| Counts documents, code, and followers | Tracks replies, proposals, cash, and results |
| Acts externally when tools are available | Requires explicit human confirmation |

## The revenue evidence path

```mermaid
flowchart LR
    A[Lead] --> B[Conversation]
    B --> C[Diagnosis]
    C --> D[Proposal]
    D --> E[Paid commitment]
    E --> F[Delivery]
    F --> G[Result]
    G --> H[Repeat or referral]
    H -. stronger proof .-> A

    classDef early fill:#EEEAFE,stroke:#6C63FF,color:#241F54
    classDef money fill:#DDF8EF,stroke:#00A878,color:#063F32
    classDef outcome fill:#FFF3D6,stroke:#F4B942,color:#5A3A00
    class A,B,C,D early
    class E,F money
    class G,H outcome
```

The earliest blocked stage is the current bottleneck. The coach moves that stage before optimizing later ones.

## Three modes, one focus

<table>
  <tr>
    <td width="33%" valign="top">
      <h3>⚡ Cash now</h3>
      <p><strong>When:</strong> income is urgent or no reliable paid path exists.</p>
      <p><strong>Move:</strong> sell a narrow, manually deliverable service or paid pilot using existing capability.</p>
    </td>
    <td width="33%" valign="top">
      <h3>🔁 Stabilize</h3>
      <p><strong>When:</strong> paid evidence exists, but acquisition, conversion, pricing, or delivery is inconsistent.</p>
      <p><strong>Move:</strong> repeat and improve the path that already shows signal.</p>
    </td>
    <td width="33%" valign="top">
      <h3>📈 Build</h3>
      <p><strong>When:</strong> revenue is stable enough to productize, delegate, or compound.</p>
      <p><strong>Move:</strong> add leverage without starving the working revenue engine.</p>
    </td>
  </tr>
</table>

The WIP limit is deliberately strict: **one primary revenue experiment and at most one long-term asset.**

## The anti-app-drift gate

```mermaid
flowchart TD
    A{Want to build software<br>or automation?} --> B{Real customer need or<br>repeated manual bottleneck?}
    B -- No --> C[Use the smallest manual path]
    B -- Yes --> D{Occurred 3× or required<br>by a paid customer?}
    D -- No --> C
    D -- Yes --> E{Will it directly advance<br>a sale or delivery result?}
    E -- No --> C
    E -- Yes --> F{User explicitly approves<br>the tradeoff?}
    F -- No --> C
    F -- Yes --> G[Build the smallest useful intervention]

    classDef stop fill:#FFF0F0,stroke:#E15B64,color:#5B171C
    classDef go fill:#DDF8EF,stroke:#00A878,color:#063F32
    classDef decision fill:#EEEAFE,stroke:#6C63FF,color:#241F54
    class A,B,D,E,F decision
    class C stop
    class G go
```

Coding ability is not treated as evidence that code is the right business intervention.

## Seven focused skills

| Skill | Use it when you need to… |
| --- | --- |
| **`revenue-coach`** | run the core coaching loop, route work, protect focus, and apply safety rules |
| **`revenue-diagnose`** | establish the baseline, urgency, mode, bottleneck, and earning lane |
| **`revenue-sprint`** | turn one hypothesis into a focused 7- or 14-day market experiment |
| **`revenue-daily`** | run a brief check-in and choose one 15–45 minute action |
| **`revenue-offer`** | shape the smallest credible paid offer from existing capability and proof |
| **`revenue-outreach`** | draft ethical prospecting, networking, referral, and follow-up messages |
| **`revenue-review`** | review evidence and decide what to continue, change, or stop |

Each skill is small, independently discoverable, and loaded only when relevant.

## 30-second install

Requires Node.js 18 or newer. No API key, database, SaaS account, or runtime dependency.

### Codex, Cursor, Gemini CLI, GitHub Copilot, or OpenCode

```bash
npx --yes github:izestylusx/revenue-coach install
```

Installs to the interoperable user path `~/.agents/skills`.

### Claude Code

```bash
npx --yes github:izestylusx/revenue-coach install --agent claude
```

Installs to `~/.claude/skills`.

### Project-only install

```bash
npx --yes github:izestylusx/revenue-coach install --scope project
```

Use `--dry-run` to preview all changes. The installer refuses to overwrite modified or unmanaged skills unless `--force` is given—and forced replacements are backed up first.

See the complete [installation matrix and recovery behavior](docs/installation.md).

## Start a coaching workspace

Optional local continuity uses four human-readable files—no database:

```bash
npx --yes github:izestylusx/revenue-coach init
```

```text
.revenue-coach/
├── PROFILE.md       stable goals, capacity, proof, and boundaries
├── STATE.md         current mode, offer, bottleneck, and next action
├── PIPELINE.csv     minimal manual prospect pipeline
└── LOG.md           append-only evidence and decision history
```

Business state is git-ignored by default. Persistence is optional, and the coach must ask before initializing it.

Then ask naturally:

```text
Use revenue-diagnose. Help me choose the fastest ethical income path
from what I already know, own, and can credibly deliver.
```

Or in Indonesian:

```text
Gunakan revenue-daily. Saya punya 30 menit hari ini.
Pilih satu aksi yang paling dekat ke paid conversation.
```

## How a session works

```mermaid
flowchart LR
    A[Ground in reality] --> B[Separate facts,<br>assumptions, fears]
    B --> C[Locate the earliest<br>revenue bottleneck]
    C --> D[Recommend<br>one move]
    D --> E[Act for<br>15–45 minutes]
    E --> F[Record evidence<br>and review]
    F -. next session .-> A
```

Every session ends with:

- one observable action;
- an exact target or artifact;
- a 15–45 minute timebox;
- a visible “done when” signal;
- a review time.

## Safety by design

Revenue Coach may draft and analyze. It does **not** autonomously:

- send outreach or publish content;
- purchase, subscribe, or accept commercial terms;
- quote a final price or commit the user externally;
- scrape restricted data or automate spam;
- fabricate proof, credentials, demand, urgency, or scarcity;
- guarantee revenue or replace professional legal, tax, financial, employment, or mental-health advice.

The user retains control over every external action and business decision.

## Portable architecture

```text
revenue-coach/
├── skills/          7 portable Agent Skills
├── templates/       private, optional coaching state
├── src/             dependency-free installer and validator
├── evals/           8 high-risk behavior regression cases
├── tests/           installer, portability, and guardrail tests
└── docs/            framework, architecture, and bilingual guidance
```

The skills use the open [`SKILL.md` specification](https://agentskills.io/specification). Product-specific behavior is isolated to install-path selection, so the coaching instructions remain portable.

## Quality checks

```bash
npm install --ignore-scripts
npm run validate
npm test
npm pack --dry-run
```

- 7 portable skills structurally validated
- 12 automated tests
- 8 model-level behavior scenarios
- 0 runtime dependencies
- recoverable install, update, and uninstall behavior

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing a feature. New complexity should identify the revenue bottleneck it improves, the user evidence behind it, and why a smaller instruction change is insufficient.

## License

[MIT](LICENSE) © 2026 Ikram Ikhsan Rafif.

Revenue Coach is educational and operational support. Outcomes remain uncertain; market conditions, execution, timing, and chance all matter.
