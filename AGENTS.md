# AGENTS.md - ai-first source repository

This repository builds `ai-first`.

GitHub is the source of truth for project planning, product memory, ideas, decisions, and open questions in this repository. Use the repository Wiki, Discussions, Issues, and Project `ai-first` before making product or planning assumptions.

The working tree may contain unrelated owner changes. Do not revert them unless the owner explicitly asks.

## Project Context

Before making product, architecture, documentation, or planning changes, read the current project model in the GitHub Wiki / product docs.

Keep the distinction between source project Markdown and installable envelope Markdown clear:

- source project Markdown documents the `ai-first` OSS project itself;
- installable envelope Markdown lives under `envelope/files` and is installed into user repositories.

If a task is ambiguous, identify which Markdown layer is affected before editing.

## Issue And Planning Rules

Issues are for approved, actionable work with a clear problem, desired outcome, and acceptance criteria.

Prefer fewer, larger issues sized for AI-agent execution. An AI agent can complete work at a much higher throughput than a human, so what would be a human epic can be a normal agent task when the work is coherent and verifiable. Avoid splitting tightly related implementation, documentation, and test updates into many small issues unless separate ownership, sequencing, or risk genuinely requires it.

Discussions are for ideas, open questions, and product decisions that are not yet approved implementation work.

Milestones represent releases or larger goals. Do not create release-tracking issues unless the release itself requires coordination beyond normal PR and release notes.

Project `ai-first` is a workflow view, not the source of truth by itself. Keep issue bodies clear enough to stand on their own.

Before adding, editing, closing, deleting, or otherwise changing any task, issue, project item, milestone, Discussion, Wiki page, or tracker item, show the owner exactly what change you intend to make and wait for explicit approval. Do not make task tracker or planning-source changes first and explain them afterward.

If a requested repository change depends on external GitHub planning or product-memory updates that require approval, do not merely report that those updates were skipped. Before the final response, propose the exact external changes for owner approval, including the target surface, target item or page, and draft text or replacement summary. If the owner has not approved them yet, leave the external surfaces unchanged and clearly report that the local repository work is complete but the external planning/product-memory update is pending approval.

## Documentation Impact Check

After every meaningful code, envelope, documentation, or behavior change, check whether project documentation must be updated.

Review the relevant surfaces:

- `README.md`
- this `AGENTS.md`
- GitHub Wiki / product docs
- Issues or Discussions affected by the change
- `CHANGELOG.md`
- `envelope/files`
- `site`
- release notes, when preparing a release

Do not update docs mechanically. Update them only when the change makes existing docs incomplete, misleading, or stale.

In the final response, state either:

- which docs were updated; or
- that documentation impact was checked and no doc changes were needed.

## Editing Boundaries

Use the repository's existing TypeScript, pnpm, Rolldown, Vitest, Oxlint, and Oxfmt setup.

Run focused verification for code changes. For installer or envelope changes, include an install smoke test when practical.

Never silently overwrite owner-authored files in tests or installer behavior. Preserve owner instructions and ask before destructive changes.
