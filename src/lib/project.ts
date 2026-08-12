import { access, readFile } from "node:fs/promises";
import path from "node:path";

export type AiFirstManifest = {
  schemaVersion: number;
  version: string;
  project?: string;
  managedFiles?: string[];
};

export async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

export function repoPath(...segments: string[]): string {
  return path.resolve(process.cwd(), ...segments);
}

export async function readManifest(): Promise<AiFirstManifest> {
  const manifestPath = repoPath(".ai-first", "manifest.json");
  const raw = await readFile(manifestPath, "utf8");
  return JSON.parse(raw) as AiFirstManifest;
}

export async function readVersion(): Promise<string> {
  const versionPath = repoPath(".ai-first", "VERSION");
  return (await readFile(versionPath, "utf8")).trim();
}
