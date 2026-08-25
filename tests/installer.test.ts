import { execFile } from "node:child_process";
import {
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  writeFile,
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

import { afterEach, describe, expect, test } from "vitest";

const execFileAsync = promisify(execFile);
const repoRoot = path.resolve(import.meta.dirname, "..");
const installScript = path.join(repoRoot, "dist", "install.js");
const targets: string[] = [];

const makeTarget = async (name: string): Promise<string> => {
  const target = await mkdtemp(path.join(os.tmpdir(), `ai-first-${name}-`));
  targets.push(target);
  return target;
};

const runInstaller = async (
  target: string,
  args: string[] = []
): Promise<{ code: number; stdout: string; stderr: string }> => {
  try {
    const { stdout, stderr } = await execFileAsync(
      process.execPath,
      [installScript, "--target", target, ...args],
      {
        cwd: repoRoot,
      }
    );

    return { code: 0, stderr, stdout };
  } catch (error: unknown) {
    if (
      error &&
      typeof error === "object" &&
      "stdout" in error &&
      "stderr" in error
    ) {
      const failedRun = error as {
        code?: unknown;
        stdout: unknown;
        stderr: unknown;
      };

      return {
        code: typeof failedRun.code === "number" ? failedRun.code : 1,
        stderr: String(failedRun.stderr),
        stdout: String(failedRun.stdout),
      };
    }

    throw error;
  }
};

afterEach(async () => {
  await Promise.all(
    targets
      .splice(0)
      .map((target) => rm(target, { force: true, recursive: true }))
  );
});

describe("installer", () => {
  test("installs the memory envelope into an empty target", async () => {
    const target = await makeTarget("clean");

    const result = await runInstaller(target);

    expect(result.code).toBe(0);
    expect(await readdir(target)).toEqual([".ai-first", "AGENTS.md"]);
    await expect(
      readFile(path.join(target, ".ai-first", "scripts"), "utf-8")
    ).rejects.toThrow();

    const manifest = JSON.parse(
      await readFile(path.join(target, ".ai-first", "manifest.json"), "utf-8")
    );
    expect(manifest.agentCommands).toBeUndefined();
    expect(manifest.managedFiles).toContain(".ai-first/manifest.json");
    expect(manifest.managedFiles).toContain(".ai-first/VERSION");
    expect(manifest.managedFiles).toContain(
      ".ai-first/context/CHANGELOG_ARCHIVE.md"
    );
    expect(manifest.managedFiles).toContain(".ai-first/context/task-source.md");
    expect(manifest.managedFiles).toContain(".ai-first/playbooks/README.md");
    expect(manifest.managedFiles).toContain(
      ".ai-first/playbooks/local-to-tracker-migration.md"
    );
    expect(manifest.managedFiles).toContain(
      ".ai-first/playbooks/tracker-to-local-migration.md"
    );
    expect(manifest.managedFiles).toContain(
      ".ai-first/context/post_mortems/_template.md"
    );

    await expect(
      readFile(
        path.join(target, ".ai-first", "context", "CHANGELOG_ARCHIVE.md"),
        "utf-8"
      )
    ).resolves.toContain("Changelog Archive");
    await expect(
      readFile(
        path.join(target, ".ai-first", "context", "task-source.md"),
        "utf-8"
      )
    ).resolves.toContain("Task Source");
    await expect(
      readFile(
        path.join(
          target,
          ".ai-first",
          "playbooks",
          "local-to-tracker-migration.md"
        ),
        "utf-8"
      )
    ).resolves.toContain("Local To Tracker Migration");
    await expect(
      readFile(
        path.join(
          target,
          ".ai-first",
          "playbooks",
          "tracker-to-local-migration.md"
        ),
        "utf-8"
      )
    ).resolves.toContain("Tracker To Local Migration");
    await expect(
      readFile(
        path.join(
          target,
          ".ai-first",
          "context",
          "post_mortems",
          "_template.md"
        ),
        "utf-8"
      )
    ).resolves.toContain("Post-Mortem");

    const agents = await readFile(path.join(target, "AGENTS.md"), "utf-8");
    expect(agents).toContain(".ai-first/README.md");
  });

  test("injects AI-first handoff into an existing owner-authored AGENTS.md", async () => {
    const target = await makeTarget("existing-agents");
    const ownerInstructions =
      "# Existing Agent Rules\n\nKeep the owner's rules.";
    await writeFile(path.join(target, "AGENTS.md"), `${ownerInstructions}\n`);

    const result = await runInstaller(target);

    expect(result.code).toBe(0);
    expect(result.stdout).toContain("Inject: 1");

    const agents = await readFile(path.join(target, "AGENTS.md"), "utf-8");
    expect(agents).toContain(ownerInstructions);
    expect(agents).toContain(".ai-first/README.md");
  });

  test("skips an existing AGENTS.md that already has the AI-first handoff", async () => {
    const target = await makeTarget("existing-handoff");
    const agentsPath = path.join(target, "AGENTS.md");
    const ownerInstructions =
      "# Existing Agent Rules\n\nRead .ai-first/README.md first.";
    await writeFile(agentsPath, `${ownerInstructions}\n`);

    const result = await runInstaller(target);

    expect(result.code).toBe(0);
    expect(result.stdout).toContain("Inject: 0");

    const agents = await readFile(agentsPath, "utf-8");
    expect(agents).toBe(`${ownerInstructions}\n`);
  });

  test("plans an install without writing files in dry-run mode", async () => {
    const parent = await makeTarget("dry-run");
    const target = path.join(parent, "nested");

    const result = await runInstaller(target, ["--dry-run"]);

    expect(result.code).toBe(0);
    expect(result.stdout).toContain("Mode: dry-run");
    expect(result.stdout).toContain("Dry run complete");
    expect(await readdir(parent)).toEqual([]);
    await expect(
      readFile(path.join(target, "AGENTS.md"), "utf-8")
    ).rejects.toThrow();
  });

  test("prints a machine-readable JSON install report", async () => {
    const target = await makeTarget("json");

    const result = await runInstaller(target, ["--dry-run", "--json"]);

    expect(result.code).toBe(0);
    const report = JSON.parse(result.stdout);
    expect(report).toMatchObject({
      dryRun: true,
      status: "planned",
      target,
    });
    expect(report.actions.create).toBeGreaterThan(0);
    expect(report.conflicts).toEqual([]);
  });

  test("reports conflicts without writing files for unsafe existing paths", async () => {
    const target = await makeTarget("conflict");
    await mkdir(path.join(target, ".ai-first", "context", "PROJECT.md"), {
      recursive: true,
    });

    const result = await runInstaller(target);

    expect(result.code).toBe(1);
    expect(result.stdout).toContain("Conflicts: 1");
    expect(result.stdout).toContain(".ai-first/context/PROJECT.md");
    expect(result.stdout).toContain(
      "Reason: An existing path is not a regular file."
    );
    expect(result.stdout).toContain(
      "Action: Move the existing directory or special path, then rerun the installer."
    );
    await expect(
      readFile(path.join(target, "AGENTS.md"), "utf-8")
    ).rejects.toThrow();
  });
});
