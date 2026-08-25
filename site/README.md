# AI-first Site

This site presents AI-first as Markdown-first project memory for AI coding agents. The current homepage uses a dark technical visual style, shadcn/ui primitives, copyable prompt cards, subtle CSS motion, and Tailwind composition.

The current homepage does not use Blender models, GLB assets, Three.js, WebGL, or live 3D runtime.

## Adding components

Before every layout or component change, use the shadcn skill and available shadcn MCP/CLI tooling. Inspect the local component set first:

```tsx
// Local primitives live under:
// components/ui
```

Search registries by functionality, not only by component name:

```bash
pnpm -C site exec shadcn search @shadcn -q "dashboard navigation"
pnpm -C site exec shadcn search @shadcn -q "file upload"
pnpm -C site exec shadcn search @shadcn -q "command palette"
```

If a promising item is found, inspect docs, examples, source, and dependencies before using or installing it. Prefer existing project components, official shadcn components, approved third-party registries, composition of shadcn primitives, then custom markup.

Use MCP tools when available (`search_items_in_registries`, `view_items_in_registries`, `get_item_examples_from_registries`, `get_add_command_for_items`) and the local CLI when useful:

```bash
pnpm -C site exec shadcn docs button
pnpm -C site exec shadcn add button --dry-run
pnpm -C site exec shadcn add button
```

Then import installed primitives from `components/ui`:

```tsx
import { Button } from "@/components/ui/button";
```
