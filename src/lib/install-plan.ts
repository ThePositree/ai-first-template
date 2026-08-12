import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileExists } from "./project.js";

export type PlannedFile = {
  source?: string;
  target: string;
  relativePath: string;
  content?: string;
  mode?: "normal" | "agentHandoff" | "generated";
};

export type PlanAction = "create" | "skip" | "update" | "inject" | "conflict";

export type PlanEntry = PlannedFile & {
  action: PlanAction;
  nextContent?: string;
};

export async function readPlannedContent(file: PlannedFile): Promise<string> {
  if (file.content !== undefined) {
    return file.content;
  }

  if (!file.source) {
    throw new Error(`Missing source for ${file.relativePath}`);
  }

  return readFile(file.source, "utf8");
}

function hasAiFirstHandoff(content: string): boolean {
  return content.includes(".ai-first/README.md");
}

function injectAiFirstHandoff(current: string, incoming: string): string {
  const trimmedCurrent = current.trimEnd();
  const trimmedIncoming = incoming.trim();

  if (trimmedCurrent.length === 0) {
    return `${trimmedIncoming}\n`;
  }

  return `${trimmedCurrent}\n\n---\n\n${trimmedIncoming}\n`;
}

export async function createPlan(files: PlannedFile[]): Promise<PlanEntry[]> {
  const plan: PlanEntry[] = [];

  for (const file of files) {
    if (!(await fileExists(file.target))) {
      plan.push({ ...file, action: "create" });
      continue;
    }

    const currentStats = await stat(file.target);
    if (!currentStats.isFile()) {
      plan.push({ ...file, action: "conflict" });
      continue;
    }

    const [current, incoming] = await Promise.all([
      readFile(file.target, "utf8"),
      readPlannedContent(file),
    ]);

    if (current === incoming) {
      plan.push({ ...file, action: "skip" });
      continue;
    }

    if (file.mode === "agentHandoff") {
      if (hasAiFirstHandoff(current)) {
        plan.push({ ...file, action: "skip" });
        continue;
      }

      plan.push({
        ...file,
        action: "inject",
        nextContent: injectAiFirstHandoff(current, incoming),
      });
      continue;
    }

    if (file.mode === "generated") {
      plan.push({ ...file, action: "update", nextContent: incoming });
      continue;
    }

    plan.push({ ...file, action: "conflict" });
  }

  return plan;
}

export async function applyPlan(plan: PlanEntry[]): Promise<void> {
  for (const entry of plan) {
    if (!["create", "update", "inject"].includes(entry.action)) {
      continue;
    }

    await mkdir(path.dirname(entry.target), { recursive: true });
    await writeFile(entry.target, entry.nextContent ?? (await readPlannedContent(entry)));
  }
}
