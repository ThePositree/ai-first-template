# Product

## Platform

web

## Users

Primary users are repository owners and maintainers who work with AI agents and want durable, inspectable project context without adopting new project-management machinery. They know how to talk to an agent and want the repository to remember the important parts between chats.

## Product Purpose

AI-first installs a Markdown-first project memory layer for coding agents. It gives agents durable local context, current task state, ideas, decisions, history, and workflow guidance that survive fresh chats. Success means the owner can steer in natural language while the agent recovers context with less repeated explanation.

## Positioning

AI-first is positioned around one-command installation and passive local memory: the owner runs one command, then keeps talking to their agent normally. The mechanism is an inspectable Markdown workspace plus an `AGENTS.md` handoff that tells agents where to start and when to load more detailed guidance.

## Operating Context

AI-first lives inside AI-assisted software repositories. The owner interacts with their AI agent in natural language. The agent reads `.ai-first/README.md` and the minimal relevant files under `.ai-first/context` to recover project context, then follows detailed playbooks only when the request triggers them.

## Capabilities and Constraints

- Installed repositories receive inspectable local Markdown files.
- Installed repositories do not receive persistent local maintenance scripts.
- After installation, target repositories should not depend on a daemon, hosted service, hidden database, persistent global CLI, repeated runner usage, persistent binary, or `node_modules` inside `.ai-first`.
- After installation, management is expected to happen through the owner's AI agent.
- Task tracker support should migrate task state between local Markdown and the selected tracker. It should not maintain two live task sources by default.
- Source project Markdown and installable envelope Markdown must stay distinct.

## Brand Commitments

The product name is AI-first. The brand should feel trustworthy, local-first, transparent, and agent-aware. It should avoid generic AI SaaS hype and emphasize that project memory, owner direction, and task-source clarity become more valuable as agents make code cheaper to produce.

## Evidence on Hand

- Current site implementation: `site/app/page.tsx`.
- Current design tokens: `site/app/globals.css`.
- Current shadcn configuration: `site/components.json`.
- Current product model: root `PRODUCT.md`.
- No customer logos, testimonials, metrics, or public launch proof are available.

## Product Principles

- One command first, passive memory after.
- Markdown files are the durable interface.
- Preserve owner control over product direction and task memory.
- Make agent continuity feel simple, not bureaucratic.
- Load detailed guidance progressively.
- Migrate tracker state deliberately; do not mirror it by default.
- Stay local, inspectable, and lightweight.
- You steer. The agent remembers. The repo stays inspectable.
