# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are owners and vibe coders who work with AI agents but do not want
to learn CLI conventions, open-source rituals, or project-management machinery.
They know how to talk to an agent and want the repository to carry more context
for them.

## Product Purpose

AI-first installs a small local memory and task layer into a repository so AI
agents can recover project context across fresh chats and help maintain active
work, backlog, ideas, decisions, and changelog history. Success means the owner
repeats less, the agent understands the product faster, task state stays visible
inside the project, and ongoing work keeps the practical benefits of a task
tracker without forcing the owner into separate project-management machinery.

## Positioning

AI-first is positioned around one-command installation and under-the-hood magic:
the owner runs one command, then keeps talking to their agent normally. The
mechanism is local file-based memory plus an `AGENTS.md` handoff that tells
agents where to read.

## Operating Context

AI-first lives inside AI-assisted software repositories. The owner interacts with
their AI agent in natural language. The agent reads `.ai-first/README.md` and
`.ai-first/context` to recover the project goal, active work, backlog, ideas,
decisions, architecture, and recent history.

## Capabilities and Constraints

- Installed repositories receive inspectable local files.
- Installed repositories do not receive persistent local maintenance scripts.
- Installation may eventually be available through `curl | sh`, `npx`, `uvx`,
  `pnpm dlx`, `bunx`, or similar runner-style entrypoints.
- After installation, target repositories should not depend on a persistent
  global CLI, repeated `npx`-style runner usage, a persistent binary, or
  `node_modules` inside `.ai-first`.
- After installation, management is expected to happen through the owner's AI
  agent.
- The current public install command is still a draft.

## Brand Commitments

The product name is AI-first. The brand should feel magical but trustworthy,
local-first, transparent, and agent-aware. It should avoid generic AI SaaS hype.

## Evidence on Hand

- Current site implementation: `site/app/page.tsx`.
- Current design tokens: `site/app/globals.css`.
- Current shadcn configuration: `site/components.json`.
- Current product memory: `.ai-first/context`.
- No customer logos, testimonials, metrics, or public launch proof are available.

## Product Principles

- One command first, agent control after.
- Files are the durable interface.
- Preserve owner control over product direction and task memory.
- Make agent continuity feel simple, not bureaucratic.
- Stay local, inspectable, and lightweight.
