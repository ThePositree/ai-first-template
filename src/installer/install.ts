import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { applyPlan, createPlan, type PlannedFile } from "../lib/install-plan.js";
import { fileExists, repoPath, readVersion } from "../lib/project.js";

function parseTarget(argv: string[]): string {
  const targetFlagIndex = argv.indexOf("--target");
  if (targetFlagIndex >= 0) {
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
}

async function collectFiles(root: string, targetRoot: string, prefix = ""): Promise<PlannedFile[]> {
  const files: PlannedFile[] = [];
  const entries = await readdir(root, { withFileTypes: true });

  for (const entry of entries) {
    const source = path.join(root, entry.name);
    const relativePath = path.join(prefix, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(source, targetRoot, relativePath)));
      continue;
    }

    if (entry.isFile()) {
      files.push({
        source,
        relativePath,
        target: path.join(targetRoot, relativePath),
        mode: relativePath === "AGENTS.md" ? "agentHandoff" : "normal",
      });
    }
  }

  return files;
}

async function buildInstallFiles(targetRoot: string): Promise<PlannedFile[]> {
  const envelopeRoot = repoPath("envelope", "files");
  const version = await readVersion();

  const isExistingInstall = await fileExists(path.join(targetRoot, ".ai-first", "manifest.json"));
  const envelopeFiles = (await collectFiles(envelopeRoot, targetRoot)).filter(
    (file) => !(isExistingInstall && file.relativePath === path.join(".ai-first", "FIRST_RUN.md")),
  );

  const managedFiles = [
    ...envelopeFiles.map((file) => file.relativePath),
    ".ai-first/VERSION",
    ".ai-first/manifest.json",
  ].sort();

  const manifest = {
    schemaVersion: 1,
    version,
    project: path.basename(targetRoot),
    installedAt: new Date().toISOString(),
    memoryRoot: ".ai-first/context",
    managedFiles,
  };

  return [
    ...envelopeFiles,
    {
      relativePath: ".ai-first/VERSION",
      target: path.join(targetRoot, ".ai-first", "VERSION"),
      content: `${version}\n`,
      mode: "generated",
    },
    {
      relativePath: ".ai-first/manifest.json",
      target: path.join(targetRoot, ".ai-first", "manifest.json"),
      content: `${JSON.stringify(manifest, null, 2)}\n`,
      mode: "generated",
    },
  ];
}

async function main(): Promise<void> {
  const targetRoot = path.resolve(parseTarget(process.argv.slice(2)));
  await mkdir(targetRoot, { recursive: true });

  const plan = await createPlan(await buildInstallFiles(targetRoot));
  const conflicts = plan.filter((entry) => entry.action === "conflict");

  console.log("AI-first install");
  console.log(`Target: ${targetRoot}`);
  console.log("");
  console.log(`Create: ${plan.filter((entry) => entry.action === "create").length}`);
  console.log(`Update: ${plan.filter((entry) => entry.action === "update").length}`);
  console.log(`Inject: ${plan.filter((entry) => entry.action === "inject").length}`);
  console.log(`Skip: ${plan.filter((entry) => entry.action === "skip").length}`);
  console.log(`Conflicts: ${conflicts.length}`);

  if (conflicts.length > 0) {
    console.log("");
    console.log("Conflicting files:");
    for (const conflict of conflicts) {
      console.log(`- ${conflict.relativePath}`);
    }
    console.log("");
    console.log("No files were written. Ask the owner before replacing existing files.");
    process.exitCode = 1;
    return;
  }

  await applyPlan(plan);

  console.log("");
  console.log("Installed ai-first.");
  console.log(
    "Keep talking to your agent as usual. In a new chat, the agent starts from AGENTS.md.",
  );
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
