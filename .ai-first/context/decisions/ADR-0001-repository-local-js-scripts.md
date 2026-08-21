# ADR-0001: Use Repository-Local JavaScript Maintenance Scripts

Status: accepted

Date: 2026-08-07

## Context

The owner wants one human-facing install step, then normal AI-assisted work. Installed repositories should avoid persistent binaries, `npx`, global CLIs, and target-repository `node_modules`.

## Decision

Use repository-local JavaScript maintenance scripts under `.ai-first/scripts`. Build them from TypeScript and keep them runnable with `node`.

The installer is not installed as a maintenance script. Local builds emit it to `dist/install.js`; the future public installer will be exposed through a shell entry point such as `curl -fsSL https://ai-first.dev/install | sh`.

## Consequences

Installed projects stay lightweight and inspectable. The project must keep scripts dependency-light and bundle-safe.

## Alternatives Considered

- Persistent binary in `.ai-first/bin`.
- `npx ai-first@latest`.
- `.ai-first/package.json` with `node_modules`.
