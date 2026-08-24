import { access, readFile } from "node:fs/promises";
import path from "node:path";

export interface AiFirstManifest {
  schemaVersion: number;
  version: string;
  project?: string;
  managedFiles?: string[];
}

export const fileExists = async (filePath: string): Promise<boolean> => {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
};

export const repoPath = (...segments: string[]): string =>
  path.resolve(process.cwd(), ...segments);

export const readManifest = async (): Promise<AiFirstManifest> => {
  const manifestPath = repoPath(".ai-first", "manifest.json");
  const raw = await readFile(manifestPath, "utf-8");
  return JSON.parse(raw) as AiFirstManifest;
};

export const readVersion = async (): Promise<string> => {
  const packagePath = repoPath("package.json");
  const raw = await readFile(packagePath, "utf-8");
  const packageJson = JSON.parse(raw) as { version?: unknown };
  if (typeof packageJson.version !== "string") {
    throw new TypeError("package.json version must be a string");
  }
  return packageJson.version;
};
