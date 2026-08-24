import { readdir } from "node:fs/promises";
import path from "node:path";

import { applyPlan, createPlan } from "../lib/install-plan.js";
import type {
  PlanAction,
  PlanEntry,
  PlannedFile,
} from "../lib/install-plan.js";
import { fileExists, repoPath, readVersion } from "../lib/project.js";

interface InstallOptions {
  dryRun: boolean;
  json: boolean;
  target: string;
}

interface InstallReport {
  actions: Record<PlanAction, number>;
  conflicts: {
    path: string;
    reason: string;
    action: string;
  }[];
  dryRun: boolean;
  status: "blocked" | "installed" | "planned";
  target: string;
  version: string;
}

const usage =
  "Usage: node dist/install.js [--dry-run] [--json] --target <directory>";

const parseOptions = (argv: string[]): InstallOptions => {
  const options: InstallOptions = {
    dryRun: false,
    json: false,
    target: "",
  };
  const positional: string[] = [];

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }

    if (arg === "--json") {
      options.json = true;
      continue;
    }

    if (arg === "--target") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("Missing value for --target");
      }
      options.target = value;
      index += 1;
      continue;
    }

    if (arg.startsWith("-")) {
      throw new Error(`Unknown option: ${arg}`);
    }

    positional.push(arg);
  }

  if (!options.target && positional.length === 1) {
    const [target] = positional;
    options.target = target;
  } else if (positional.length > 0) {
    throw new Error(usage);
  }

  if (!options.target) {
    throw new Error(usage);
  }

  return options;
};

const targetPath = (targetRoot: string, relativePath: string): string =>
  path.join(targetRoot, ...relativePath.split("/"));

const collectFiles = async (
  root: string,
  targetRoot: string,
  prefix = ""
): Promise<PlannedFile[]> => {
  const entries = await readdir(root, { withFileTypes: true });

  const nestedFiles = await Promise.all(
    entries.map((entry): Promise<PlannedFile[]> | PlannedFile[] => {
      const source = path.join(root, entry.name);
      const relativePath = prefix
        ? path.posix.join(prefix, entry.name)
        : entry.name;

      if (entry.isDirectory()) {
        return collectFiles(source, targetRoot, relativePath);
      }

      if (entry.isFile()) {
        return [
          {
            mode: relativePath === "AGENTS.md" ? "agentHandoff" : "normal",
            relativePath,
            source,
            target: targetPath(targetRoot, relativePath),
          },
        ];
      }

      return [];
    })
  );

  return nestedFiles.flat();
};

const buildInstallFiles = async (
  targetRoot: string,
  version: string
): Promise<PlannedFile[]> => {
  const envelopeRoot = repoPath("envelope", "files");

  const isExistingInstall = await fileExists(
    path.join(targetRoot, ".ai-first", "manifest.json")
  );
  const allEnvelopeFiles = await collectFiles(envelopeRoot, targetRoot);
  const envelopeFiles = allEnvelopeFiles.filter(
    (file) =>
      !(isExistingInstall && file.relativePath === ".ai-first/FIRST_RUN.md")
  );

  const managedFiles = [
    ...envelopeFiles.map((file) => file.relativePath),
    ".ai-first/VERSION",
    ".ai-first/manifest.json",
  ].toSorted();

  const manifest = {
    installedAt: new Date().toISOString(),
    managedFiles,
    memoryRoot: ".ai-first/context",
    project: path.basename(targetRoot),
    schemaVersion: 1,
    version,
  };

  return [
    ...envelopeFiles,
    {
      content: `${version}\n`,
      mode: "generated",
      relativePath: ".ai-first/VERSION",
      target: targetPath(targetRoot, ".ai-first/VERSION"),
    },
    {
      content: `${JSON.stringify(manifest, null, 2)}\n`,
      mode: "generated",
      relativePath: ".ai-first/manifest.json",
      target: targetPath(targetRoot, ".ai-first/manifest.json"),
    },
  ];
};

const countActions = (plan: PlanEntry[]): Record<PlanAction, number> => ({
  conflict: plan.filter((entry) => entry.action === "conflict").length,
  create: plan.filter((entry) => entry.action === "create").length,
  inject: plan.filter((entry) => entry.action === "inject").length,
  skip: plan.filter((entry) => entry.action === "skip").length,
  update: plan.filter((entry) => entry.action === "update").length,
});

const conflictAction = (entry: PlanEntry): string => {
  if (entry.conflictReason === "existing-non-file") {
    return "Move the existing directory or special path, then rerun the installer.";
  }

  return "Review and merge the existing file manually, then rerun the installer.";
};

const conflictReason = (entry: PlanEntry): string => {
  if (entry.conflictReason === "existing-non-file") {
    return "An existing path is not a regular file.";
  }

  return "An existing file differs from the AI-first managed file.";
};

const createReport = (
  plan: PlanEntry[],
  target: string,
  version: string,
  dryRun: boolean
): InstallReport => {
  const conflicts = plan
    .filter((entry) => entry.action === "conflict")
    .map((entry) => ({
      action: conflictAction(entry),
      path: entry.relativePath,
      reason: conflictReason(entry),
    }));

  let status: InstallReport["status"] = "installed";
  if (conflicts.length > 0) {
    status = "blocked";
  } else if (dryRun) {
    status = "planned";
  }

  return {
    actions: countActions(plan),
    conflicts,
    dryRun,
    status,
    target,
    version,
  };
};

const printReport = (report: InstallReport): void => {
  console.log("AI-first install");
  console.log(`Target: ${report.target}`);
  if (report.dryRun) {
    console.log("Mode: dry-run");
  }
  console.log("");
  console.log(`Create: ${report.actions.create}`);
  console.log(`Update: ${report.actions.update}`);
  console.log(`Inject: ${report.actions.inject}`);
  console.log(`Skip: ${report.actions.skip}`);
  console.log(`Conflicts: ${report.actions.conflict}`);

  if (report.conflicts.length > 0) {
    console.log("");
    console.log("Conflicting files:");
    for (const conflict of report.conflicts) {
      console.log(`- ${conflict.path}`);
      console.log(`  Reason: ${conflict.reason}`);
      console.log(`  Action: ${conflict.action}`);
    }
    console.log("");
    console.log(
      "No files were written. Ask the owner before replacing existing files."
    );
    return;
  }

  console.log("");
  if (report.dryRun) {
    console.log("Dry run complete. No files were written.");
    return;
  }

  console.log("Installed ai-first.");
  console.log(
    "Keep talking to your agent as usual. In a new chat, the agent starts from AGENTS.md."
  );
};

const main = async (): Promise<void> => {
  const options = parseOptions(process.argv.slice(2));
  const targetRoot = path.resolve(options.target);

  const version = await readVersion();
  const plan = await createPlan(await buildInstallFiles(targetRoot, version));
  const report = createReport(plan, targetRoot, version, options.dryRun);

  if (options.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    printReport(report);
  }

  if (report.status === "blocked") {
    process.exitCode = 1;
    return;
  }

  if (!options.dryRun) {
    await applyPlan(plan);
  }
};

try {
  await main();
} catch (error: unknown) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
