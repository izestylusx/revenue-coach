import path from "node:path";
import { inspectInstallation, initWorkspace, installSkills, uninstallSkills } from "./installer.mjs";
import { SUPPORTED_AGENTS, targetDescription } from "./targets.mjs";
import { validateSkills } from "./validate.mjs";

const HELP = `Revenue Coach — adaptive revenue coaching and execution skills for coding agents

Usage:
  revenue-coach install [options]
  revenue-coach init [options]
  revenue-coach doctor [options]
  revenue-coach uninstall [options]

Options:
  --agent <name>     auto, agents, codex, claude, cursor, gemini, copilot, opencode
  --scope <scope>    user (default) or project
  --target <path>    custom skills root; overrides agent and scope
  --dir <path>       state directory for init (default: .revenue-coach)
  --force            replace collisions after creating recoverable backups
  --dry-run          show intended changes without writing
  -h, --help         show help

Examples:
  revenue-coach install
  revenue-coach install --agent claude --scope user
  revenue-coach install --scope project
  revenue-coach init
`;

function parseArgs(argv) {
  const command = argv[0] && !argv[0].startsWith("-") ? argv[0] : "help";
  const rest = command === "help" ? argv : argv.slice(1);
  const options = { agent: "auto", scope: "user", force: false, dryRun: false };

  for (let index = 0; index < rest.length; index += 1) {
    const token = rest[index];
    if (token === "--force") options.force = true;
    else if (token === "--dry-run") options.dryRun = true;
    else if (token === "-h" || token === "--help") options.help = true;
    else if (["--agent", "--scope", "--target", "--dir"].includes(token)) {
      const value = rest[index + 1];
      if (!value || value.startsWith("-")) throw new Error(`${token} requires a value.`);
      index += 1;
      if (token === "--agent") options.agent = value;
      if (token === "--scope") options.scope = value;
      if (token === "--target") options.target = value;
      if (token === "--dir") options.directory = value;
    } else if (token && token !== command) {
      throw new Error(`Unknown option "${token}".`);
    }
  }
  return { command, options };
}

function printResult(result) {
  const prefix = result.dryRun ? "Dry run" : "Done";
  if (result.action === "install") {
    console.log(`${prefix}: ${result.skills.length} skills -> ${result.skillsRoot}`);
    if (result.collisions?.length) console.log(`Would back up: ${result.collisions.join(", ")}`);
    if (result.backupRoot) console.log(`Backup: ${result.backupRoot}`);
  } else if (result.action === "uninstall") {
    console.log(`${prefix}: ${result.skills.length} skills removed from ${result.skillsRoot}`);
    if (result.removedRoot) console.log(`Recoverable copy: ${result.removedRoot}`);
  } else if (result.action === "init") {
    console.log(`${prefix}: coaching state scaffold -> ${result.destinationRoot}`);
    if (result.backupRoot) console.log(`Backup: ${result.backupRoot}`);
  }
}

export async function run(argv) {
  const { command, options } = parseArgs(argv);
  if (options.help || command === "help") {
    console.log(HELP);
    return;
  }

  if (command === "install") {
    printResult(await installSkills(options));
    console.log(`Target family: ${targetDescription(options.agent)}`);
    console.log("Next: run `revenue-coach init` in the business project, then ask your agent for a revenue diagnosis and collaboration map.");
    return;
  }
  if (command === "uninstall") {
    printResult(await uninstallSkills(options));
    return;
  }
  if (command === "init") {
    printResult(await initWorkspace({ ...options, directory: options.directory }));
    return;
  }
  if (command === "doctor") {
    const source = await validateSkills();
    const installed = await inspectInstallation(options);
    console.log(`Package skills: ${source.ok ? "valid" : "invalid"} (${source.skillCount})`);
    console.log(`Target: ${installed.skillsRoot}`);
    console.log(`Manifest: ${installed.manifest ? `v${installed.manifest.version}` : "not installed"}`);
    for (const check of installed.checks) {
      const status = !check.present ? "missing" : check.modified ? "modified" : check.managed ? "ok" : "unmanaged";
      console.log(`- ${check.name}: ${status}`);
    }
    if (!source.ok || installed.checks.some((check) => check.modified || !check.present)) {
      process.exitCode = 1;
    }
    return;
  }

  throw new Error(`Unknown command "${command}". Supported: install, init, doctor, uninstall.`);
}

export { HELP, parseArgs, SUPPORTED_AGENTS };
