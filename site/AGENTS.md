<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## UI Work

All UI-related work in this site goes through Impeccable first. Scan the
available Impeccable workflow and apply the relevant pieces before changing
visual structure, components, copy, layout, interaction states, or responsive
behavior.

For browser screenshots and visual QA, use the project-local Playwright setup:

- `pnpm --filter @ai-first/site playwright:check-deps` checks whether WSL has
  the required Linux browser packages.
- `pnpm --filter @ai-first/site playwright:install` installs the pinned
  Chromium browser revision for this project.
- `pnpm --filter @ai-first/site qa:screenshots` captures light and dark desktop
  and mobile screenshots into `tmp/playwright/site`.

If `playwright:check-deps` reports missing packages, the owner must run
`sudo pnpm --filter @ai-first/site exec playwright install-deps chromium` once
from an interactive terminal. Agents should not assume they can provide sudo
credentials.
