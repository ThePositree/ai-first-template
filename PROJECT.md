# Project

## What This Project Is

AI-first is a Markdown-first project memory layer for AI-assisted repositories.

It helps AI agents recover project context, task state, decisions, and workflow rules across fresh chats without requiring the owner to repeat the same background every time.

Installed repositories receive a small `AGENTS.md` hook and a `.ai-first` Markdown workspace. There is no required local daemon, hosted service, package install, hidden database, or background sync process inside the target repository.

## Two Kinds Of Markdown In This Repository

This source repository contains two different kinds of Markdown files. Agents must keep them separate.

### Source Project Markdown

Source project Markdown describes the `ai-first` OSS project itself.

Examples:

- root `README.md`;
- root `AGENTS.md`;
- GitHub Wiki / product docs;
- documentation site content;
- issues, discussions, release notes, and other maintainer-facing docs.

When this project says "document AI-first", "explain the OSS project", "update public docs", or "describe the product", it usually means source project Markdown.

### Installable Envelope Markdown

Installable envelope Markdown is the Markdown that AI-first installs into user repositories.

It lives under:

- `envelope/files`

Examples:

- `envelope/files/AGENTS.md`;
- `envelope/files/.ai-first/README.md`;
- `envelope/files/.ai-first/context/*`;
- `envelope/files/.ai-first/playbooks/*`.

When this project says "installed files", "installed behavior", "the user repository", "the target repository", "the envelope", or "what agents read after installation", it means installable envelope Markdown.

If a task is ambiguous, agents must identify which Markdown layer is affected before making changes.

## Audience

AI-first is for repository owners and maintainers who work with AI coding agents and want durable, inspectable project context.

The source project documentation should be understandable to:

- owners who want less repeated explanation;
- agents that need clear startup instructions;
- maintainers evaluating or contributing to the OSS project;
- users who may later move task state into GitHub Issues, Linear, Jira, Yandex Tracker, or another tracker.

The installable envelope documentation should be understandable to:

- agents working inside an installed user repository;
- owners inspecting what AI-first added to their repository;
- maintainers reviewing installed behavior.

## Core Principles

- **Markdown first:** project memory and playbooks are plain Markdown files.
- **Inspectable by default:** users can see and edit what agents read.
- **No hidden runtime:** installed repositories should not require a daemon, CLI, `node_modules`, SaaS account, hidden database, or background sync.
- **Progressive disclosure:** agents read minimal startup context first and load detailed playbooks only when the current request requires them.
- **Playbooks as features:** a playbook is a detailed workflow guide for a specific feature or operation.
- **One task source of truth:** task state lives either in local AI-first Markdown files or in an external tracker, not both at the same time.
- **Task migration, not mirroring:** task tracker work should move task state from local to tracker or tracker to local. AI-first should not maintain two live task sources by default.
- **No task-tracker lock-in:** external trackers must remain clean and useful without AI-first. Do not add AI-first-branded fields, labels, tags, or visible boilerplate.
- **Owner-directed work:** agents should not turn ideas into approved tasks, migrate task sources, or write to external systems unless the owner asks or approves.
- **Clear OSS documentation:** source project docs must explain AI-first to people who do not know the project history. Installable envelope docs must explain installed behavior to people inspecting a target repository.

## Current Product Model

AI-first installs a small repository envelope into target repositories:

- root `AGENTS.md` tells agents where to start;
- `.ai-first/README.md` routes the agent to the minimal startup context;
- `.ai-first/context` stores durable project memory;
- `.ai-first/playbooks` stores detailed workflow instructions that agents read only when triggered.

Playbooks should not be read at startup unless the owner request triggers them.

## Task Model

AI-first supports one active task source at a time.

### Local Task Source

Task state lives in `.ai-first` Markdown files. Agents read local task files and do not inspect external trackers for task state.

### External Task Source

Task state lives in a tracker such as GitHub Issues, Linear, Jira, Yandex Tracker, or another tracker. Local AI-first task files become pointers, not task state. Agents read the tracker and do not use local task files as backlog or active work.

### Migration

AI-first does not mirror tasks between local files and trackers.

Instead, agents can migrate task state when the owner asks:

- local Markdown to external tracker;
- external tracker to local Markdown.

After migration, instructions must point to exactly one active task source.

## Non-goals

AI-first is not:

- a task tracker;
- a hosted memory service;
- a background sync service;
- an agent framework;
- a replacement for GitHub, Linear, Jira, Yandex Tracker, or another tracker;
- a hidden database for project state.

AI-first should not require users to adopt a specific task tracker.

## Documentation Requirements

Because AI-first is an OSS project, documentation must be plain and explicit.

Source project Markdown, installable envelope Markdown, documentation site content, and release notes must stay consistent with product behavior.

After every meaningful code, envelope, documentation, or behavior change, agents must check whether documentation needs updates. They should update docs when existing text becomes incomplete, misleading, or stale, and explicitly report the documentation impact check in their final response.

## Current Source Repository Shape

- `envelope/files` contains the installable Markdown envelope.
- `scripts/install.sh` is the public installer entrypoint.
- `src/installer` and `src/lib` contain the TypeScript installer implementation used by source tests and local development.
- `tests` contains installer acceptance tests.
- `site` contains the public documentation website.
- GitHub Issues, Discussions, Wiki, and Project `ai-first` are the planning and product-memory surfaces for this source repository.

## Success Criteria

AI-first is succeeding when:

- a fresh agent can recover project context with minimal owner repetition;
- startup context stays small;
- detailed workflows are loaded only through playbooks;
- installed repositories remain inspectable and dependency-free;
- task tracker integrations avoid lock-in;
- source project docs explain the OSS project clearly;
- installable envelope docs explain installed behavior clearly.
