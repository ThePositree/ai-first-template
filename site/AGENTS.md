<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## shadcn/ui Workflow

For every `site` UI task, use shadcn/ui as the first source for reusable UI primitives instead of recreating those primitives directly with Tailwind. Tailwind is for layout, composition, and deliberate customization around installed primitives.

Before every layout or component change:

- inspect `site/components.json`, `site/components/ui`, and existing imports to see which shadcn components are already installed;
- use the shadcn skill and available shadcn MCP tools for project context, registry search, item inspection, examples, add commands, and docs;
- scan the current shadcn registries for the UI pattern being built, even when the change looks simple or a local Tailwind version would be faster;
- search by functionality, not only by component name, for example `date range picker`, `command palette`, `pricing`, `authentication form`, `dashboard navigation`, or `file upload`;
- if a promising component or block is found, inspect it with shadcn MCP `view`/examples or the shadcn CLI, inspect relevant examples, understand dependencies and composition, and reuse it instead of recreating it;
- prefer components in this order: existing project components, official shadcn components, approved third-party registries, composition of shadcn primitives, then custom components;
- never guess a shadcn component API; check current documentation and examples first;
- before installing a third-party registry component, inspect its source and dependencies;
- run the local CLI when useful, for example `pnpm -C site exec shadcn search @shadcn -q "<functionality>"`, `pnpm -C site exec shadcn docs <component>`, and `pnpm -C site exec shadcn add <component> --dry-run`;
- use shadcn MCP tools when available, including `search_items_in_registries`, `view_items_in_registries`, `get_item_examples_from_registries`, and `get_add_command_for_items`;
- if a needed primitive is missing, install it through the shadcn CLI before hand-building a replacement;
- only customize installed shadcn files or compose around them after confirming the registry component is the right base.

If the registries have no suitable primitive for the UI pattern, mention the functional search in the handoff and then build the smallest custom structure needed around installed primitives.

If the local `shadcn` CLI is unavailable, install project dependencies or fetch the CLI through the project package manager with owner approval when the environment requires network access.

## Linting

Follow Ultracite/Oxlint rules by changing code to satisfy the rules. Do not disable rules, add ignore comments, or weaken lint configuration to make checks pass. Clear tool boundaries are allowed in config when they exclude external/generated state or a separately linted workspace; they are not allowed as a way to hide violations in owned `site` source. If a rule appears to require a harmful workaround or an owned-source exception, stop and ask the owner with a concrete explanation before adding any exception.

For browser screenshots and visual QA, use the project-local Playwright setup:

- `pnpm --filter @ai-first/site playwright:check-deps` checks whether WSL has the required Linux browser packages.
- `pnpm --filter @ai-first/site playwright:install` installs the pinned Chromium browser revision for this project.
- `pnpm --filter @ai-first/site qa:screenshots` captures light and dark desktop and mobile screenshots into `tmp/playwright/site`.

If `playwright:check-deps` reports missing packages, the owner must run `sudo pnpm --filter @ai-first/site exec playwright install-deps chromium` once from an interactive terminal. Agents should not assume they can provide sudo credentials.
