import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";

import { applyPlan, createPlan } from "../lib/install-plan.js";
import type { PlannedFile } from "../lib/install-plan.js";
import { fileExists, repoPath, readVersion } from "../lib/project.js";

const parseTarget = (argv: string[]): string => {
  const targetFlagIndex = argv.indexOf("--target");
  if (targetFlagIndex !== -1) {
    const value = argv[targetFlagIndex + 1];
    if (!value) {
      throw new Error("Missing value for --target");
    }
    return value;
  }

  const positional = argv.find((arg) => !arg.startsWith("-"));
  if (positional) {
    return positional;
  }

  throw new Error("Usage: node dist/install.js --target <directory>");
};

const collectFiles = async (
  root: string,
  targetRoot: string,
  prefix = ""
): Promise<PlannedFile[]> => {
  const entries = await readdir(root, { withFileTypes: true });

  const nestedFiles = await Promise.all(
    entries.map((entry): Promise<PlannedFile[]> | PlannedFile[] => {
      const source = path.join(root, entry.name);
      const relativePath = path.join(prefix, entry.name);

      if (entry.isDirectory()) {
        return collectFiles(source, targetRoot, relativePath);
      }

      if (entry.isFile()) {
        return [
          {
            mode: relativePath === "AGENTS.md" ? "agentHandoff" : "normal",
            relativePath,
            source,
            target: path.join(targetRoot, relativePath),
          },
        ];
      }

      return [];
    })
  );

  return nestedFiles.flat();
};

const buildInstallFiles = async (
  targetRoot: string
): Promise<PlannedFile[]> => {
  const envelopeRoot = repoPath("envelope", "files");
  const version = await readVersion();

  const isExistingInstall = await fileExists(
    path.join(targetRoot, ".ai-first", "manifest.json")
  );
  const allEnvelopeFiles = await collectFiles(envelopeRoot, targetRoot);
  const envelopeFiles = allEnvelopeFiles.filter(
    (file) =>
      !(
        isExistingInstall &&
        file.relativePath === path.join(".ai-first", "FIRST_RUN.md")
      )
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
      target: path.join(targetRoot, ".ai-first", "VERSION"),
    },
    {
      content: `${JSON.stringify(manifest, null, 2)}\n`,
      mode: "generated",
      relativePath: ".ai-first/manifest.json",
      target: path.join(targetRoot, ".ai-first", "manifest.json"),
    },
  ];
};

const main = async (): Promise<void> => {
  const targetRoot = path.resolve(parseTarget(process.argv.slice(2)));
  await mkdir(targetRoot, { recursive: true });

  const plan = await createPlan(await buildInstallFiles(targetRoot));
  const conflicts = plan.filter((entry) => entry.action === "conflict");

  console.log("AI-first install");
  console.log(`Target: ${targetRoot}`);
  console.log("");
  console.log(
    `Create: ${plan.filter((entry) => entry.action === "create").length}`
  );
  console.log(
    `Update: ${plan.filter((entry) => entry.action === "update").length}`
  );
  console.log(
    `Inject: ${plan.filter((entry) => entry.action === "inject").length}`
  );
  console.log(
    `Skip: ${plan.filter((entry) => entry.action === "skip").length}`
  );
  console.log(`Conflicts: ${conflicts.length}`);

  if (conflicts.length > 0) {
    console.log("");
    console.log("Conflicting files:");
    for (const conflict of conflicts) {
      console.log(`- ${conflict.relativePath}`);
    }
    console.log("");
    console.log(
      "No files were written. Ask the owner before replacing existing files."
    );
    process.exitCode = 1;
    return;
  }

  await applyPlan(plan);

  console.log("");
  console.log("Installed ai-first.");
  console.log(
    "Keep talking to your agent as usual. In a new chat, the agent starts from AGENTS.md."
  );
};

try {
  await main();
} catch (error: unknown) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
