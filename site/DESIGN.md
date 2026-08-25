# Design System: AI-first Dark Technical Page

The `site` homepage presents AI-first as Markdown-first project memory for coding agents. The page should feel direct, technical, local-first, and open-source oriented.

Current direction:

- Use a dark technical layout inspired by command-line tools and developer product pages.
- Keep the implementation on project-native technology: Next.js App Router, Tailwind v4 tokens, shadcn/base primitives, Phosphor icons, and existing Next-managed fonts.
- Do not import external CSS font URLs or hand-roll inline SVG icons for UI controls.
- Use sharp rectangular surfaces, thin borders, mono labels, subtle grid texture, lime primary accent, and low-noise dark cards.
- Lead with one-command installation, passive local Markdown, progressive-disclosure context loading, playbook-guided workflows, tracker migration, and the `AGENTS.md` handoff.
- Larger screens use a fixed nav, hero callouts, section strips, tabbed use cases, and a dense memory file list. Mobile keeps the same story as a single readable column.
- Avoid fake metrics, testimonials, customer logos, or unsupported launch proof.
- Use shadcn/ui as the first source for reusable primitives. Before every site layout or component change, scan the current shadcn registry for a suitable primitive, inspect docs/dry-runs, and install matching primitives through the CLI before custom Tailwind markup.
- Tailwind is for layout, spacing, and deliberate customization around installed primitives, not for recreating registry components.

Current homepage primitives:

- `Button` / `buttonVariants` for command actions and link-styled CTAs.
- `Badge` for small status labels.
- `Card` for callouts, philosophy cards, prompt panels, and case visuals.
- `Tabs` for the prompt use-case selector.
- `CopyPromptButton` for install commands and prompt copying.

Current visual language:

- Background: near-black with subtle lime grid texture.
- Accent: lime primary for command text, active states, icons, and structural highlights.
- Surfaces: dark cards with thin borders and square corners.
- Icons: Phosphor icons only.
