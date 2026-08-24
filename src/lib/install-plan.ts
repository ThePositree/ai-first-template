import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

import { fileExists } from "./project.js";

export interface PlannedFile {
  source?: string;
  target: string;
  relativePath: string;
  content?: string;
  mode?: "normal" | "agentHandoff" | "generated";
}

export type PlanAction = "create" | "skip" | "update" | "inject" | "conflict";
export type ConflictReason = "existing-non-file" | "existing-file-differs";

export interface PlanEntry extends PlannedFile {
  action: PlanAction;
  conflictReason?: ConflictReason;
  nextContent?: string;
}

export const readPlannedContent = (file: PlannedFile): Promise<string> => {
  if (file.content !== undefined) {
    return Promise.resolve(file.content);
  }

  if (!file.source) {
    throw new Error(`Missing source for ${file.relativePath}`);
  }

  return readFile(file.source, "utf-8");
};

const hasAiFirstHandoff = (content: string): boolean =>
  content.includes(".ai-first/README.md");

const injectAiFirstHandoff = (current: string, incoming: string): string => {
  const trimmedCurrent = current.trimEnd();
  const trimmedIncoming = incoming.trim();

  if (trimmedCurrent.length === 0) {
    return `${trimmedIncoming}\n`;
  }

  return `${trimmedCurrent}\n\n---\n\n${trimmedIncoming}\n`;
};

const createPlanEntry = async (file: PlannedFile): Promise<PlanEntry> => {
  if (!(await fileExists(file.target))) {
    return { ...file, action: "create" };
  }

  const currentStats = await stat(file.target);
  if (!currentStats.isFile()) {
    return {
      ...file,
      action: "conflict",
      conflictReason: "existing-non-file",
    };
  }

  const [current, incoming] = await Promise.all([
    readFile(file.target, "utf-8"),
    readPlannedContent(file),
  ]);

  if (current === incoming) {
    return { ...file, action: "skip" };
  }

  if (file.mode === "agentHandoff") {
    if (hasAiFirstHandoff(current)) {
      return { ...file, action: "skip" };
    }

    return {
      ...file,
      action: "inject",
      nextContent: injectAiFirstHandoff(current, incoming),
    };
  }

  if (file.mode === "generated") {
    return { ...file, action: "update", nextContent: incoming };
  }

  return {
    ...file,
    action: "conflict",
    conflictReason: "existing-file-differs",
  };
};

export const createPlan = (files: PlannedFile[]): Promise<PlanEntry[]> =>
  Promise.all(files.map(createPlanEntry));

const applyPlanEntry = async (entry: PlanEntry): Promise<void> => {
  if (!["create", "update", "inject"].includes(entry.action)) {
    return;
  }

  await mkdir(path.dirname(entry.target), { recursive: true });
  const content = entry.nextContent ?? (await readPlannedContent(entry));
  await writeFile(entry.target, content);
};

export const applyPlan = async (plan: PlanEntry[]): Promise<void> => {
  await Promise.all(plan.map(applyPlanEntry));
};
