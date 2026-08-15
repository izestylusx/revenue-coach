# Security and Privacy

## Supported versions

Until a stable release, only the latest tagged version is supported.

## Reporting a vulnerability

Open a private GitHub security advisory in this repository when available. Do not include real credentials, confidential client data, or sensitive business state in a public issue.

## Threat model

Revenue Coach installs text instructions and local templates. It does not require network access, model API keys, telemetry, a database, or a background process. Its main risks are:

- installing unreviewed instruction changes;
- overwriting locally customized skills;
- leaking sensitive commercial state through version control;
- an agent taking an external action without adequate confirmation;
- persuasive or deceptive business tactics generated from ambiguous requests.

## Controls

- Inspect the repository and `SKILL.md` files before installation.
- Use `--dry-run` to inspect destinations and collisions.
- Modified or unmanaged skill directories are not overwritten by default.
- Forced replacements and uninstalls create recoverable copies outside skill discovery.
- Generated state files are git-ignored by default.
- Core instructions prohibit credentials in state and require explicit confirmation for external actions.

## User responsibilities

Review drafts before sending or publishing. Follow applicable laws, contracts, platform rules, and professional obligations. Do not store secrets or unnecessary third-party personal data in `.revenue-coach/`.
