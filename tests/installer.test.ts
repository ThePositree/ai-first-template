import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { afterEach, describe, expect, test } from "vitest";

const execFileAsync = promisify(execFile);
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const installScript = path.join(repoRoot, "dist", "install.js");
const targets: string[] = [];

async function makeTarget(name: string): Promise<string> {
  const target = await mkdtemp(path.join(os.tmpdir(), `ai-first-${name}-`));
  targets.push(target);
  return target;
}

async function runInstaller(
  target: string,
): Promise<{ code: number; stdout: string; stderr: string }> {
  try {
    const { stdout, stderr } = await execFileAsync(
      process.execPath,
      [installScript, "--target", target],
      {
        cwd: repoRoot,
      },
    );

    return { code: 0, stdout, stderr };
  } catch (error: unknown) {
    if (error && typeof error === "object" && "stdout" in error && "stderr" in error) {
      const failedRun = error as { code?: unknown; stdout: unknown; stderr: unknown };

      return {
        code: typeof failedRun.code === "number" ? failedRun.code : 1,
        stdout: String(failedRun.stdout),
        stderr: String(failedRun.stderr),
      };
    }

    throw error;
  }
}

afterEach(async () => {
  await Promise.all(
    targets.splice(0).map((target) => rm(target, { recursive: true, force: true })),
  );
});

describe("installer", () => {
  test("installs the memory envelope into an empty target", async () => {
    const target = await makeTarget("clean");

    const result = await runInstaller(target);

    expect(result.code).toBe(0);
    expect(await readdir(target)).toEqual([".ai-first", "AGENTS.md"]);
    await expect(readFile(path.join(target, ".ai-first", "scripts"), "utf8")).rejects.toThrow();

    const manifest = JSON.parse(
      await readFile(path.join(target, ".ai-first", "manifest.json"), "utf8"),
    );
    expect(manifest.agentCommands).toBeUndefined();
    expect(manifest.managedFiles).toContain(".ai-first/manifest.json");
    expect(manifest.managedFiles).toContain(".ai-first/VERSION");

    const agents = await readFile(path.join(target, "AGENTS.md"), "utf8");
    expect(agents).toContain(".ai-first/README.md");
  });

  test("injects AI-first handoff into an existing owner-authored AGENTS.md", async () => {
    const target = await makeTarget("existing-agents");
    const ownerInstructions = "# Existing Agent Rules\n\nKeep the owner's rules.";
    await writeFile(path.join(target, "AGENTS.md"), `${ownerInstructions}\n`);

    const result = await runInstaller(target);

    expect(result.code).toBe(0);
    expect(result.stdout).toContain("Inject: 1");

    const agents = await readFile(path.join(target, "AGENTS.md"), "utf8");
    expect(agents).toContain(ownerInstructions);
    expect(agents).toContain(".ai-first/README.md");
  });

  test("reports conflicts without writing files for unsafe existing paths", async () => {
    const target = await makeTarget("conflict");
    await mkdir(path.join(target, ".ai-first", "context", "PROJECT.md"), { recursive: true });

    const result = await runInstaller(target);

    expect(result.code).toBe(1);
    expect(result.stdout).toContain("Conflicts: 1");
    expect(result.stdout).toContain(".ai-first/context/PROJECT.md");
    await expect(readFile(path.join(target, "AGENTS.md"), "utf8")).rejects.toThrow();
  });
});
