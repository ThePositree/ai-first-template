---
name: AI-first
description: A cozy wooden repository shop where one command opens a warm local memory counter for AI agents.
colors:
  shop-bg: "#f0d8ad"
  shop-band: "#e3c18b"
  shop-nav: "#25150a"
  shop-paper: "#f4dfba"
  shop-paper-strong: "#f9e9cb"
  shop-chip: "#e7c894"
  shop-wood: "#5a3218"
  shop-ink: "#261709"
  shop-muted: "#715232"
  shop-amber: "#d9942e"
  shop-amber-edge: "#9a5d1b"
  shop-dark-bg: "#130b06"
  shop-dark-panel: "#2a1a0f"
typography:
  display:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "clamp(3.75rem, 9vw, 7rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "clamp(3rem, 7vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "-0.03em"
  title:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "1.5rem"
    fontWeight: 900
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  body:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 650
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-mono), monospace"
    fontSize: "0.75rem"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "0"
rounded:
  md: "0.75rem"
  lg: "1rem"
  panel: "1.35rem"
  image: "1.75rem"
  pill: "9999px"
spacing:
  page-x: "1rem"
  page-x-lg: "2rem"
  section-y: "5rem"
  hero-bottom: "3rem"
  grid-gap: "0.75rem"
  panel-padding: "1.25rem"
components:
  button-primary:
    backgroundColor: "{colors.shop-amber}"
    textColor: "{colors.shop-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    height: "2.5rem"
  shop-panel:
    backgroundColor: "{colors.shop-paper}"
    textColor: "{colors.shop-ink}"
    rounded: "{rounded.panel}"
  command:
    backgroundColor: "#182116"
    textColor: "#fff4d6"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
---

# Design System: AI-first

## Overview

**Creative North Star: "Cozy Wooden Repository Shop"**

AI-first should feel like entering a small wooden shop where a repository can be
prepared for the next agent visit. The product promise is deliberately simple:
one command is enough. For existing repositories, the owner can ask their agent
to stock the `.ai-first` shelves with a ready prompt.

The page should be visual first and text second. Generated imagery carries the
world: walnut shelves, brass labels, cream paper bundles, drawers, warm lamps,
and a small agent lantern. Text appears as short shop signs, prompt cards, and
drawer labels rather than long SaaS paragraphs.

## Key Characteristics

- Full-bleed first viewport with a cozy wooden shop hero image and very little
  copy.
- A single unframed 3D agent-lantern character can live in the hero as a
  working mascot: warm, tactile, and useful, never a separate toy panel.
- Warm tactile materials: walnut wood, cream paper, brass, forest green cloth,
  amber lamp light.
- A strong prompt section for existing repositories, with an HTML prompt card
  and copy action.
- Later explanation remains visual: drawers, shelves, paper bundles, and short
  signs.
- Light and dark themes both preserve the shop mood; dark mode is a late-evening
  shop, not a console.

## Color Rules

Use wood and amber as atmosphere, not clutter. The page may be visually rich
through images, while UI surfaces stay controlled and readable.

- **Shop Background** (`#f0d8ad`): warm paper base after the hero.
- **Shop Band** (`#e3c18b`): alternating section shelf light.
- **Shop Nav** (`#25150a`): dark wooden header.
- **Shop Paper** (`#f4dfba`): cards, prompt surfaces, and readable panels.
- **Shop Wood** (`#5a3218`): section headers and shop-counter blocks.
- **Shop Ink** (`#261709`): primary text on light surfaces.
- **Shop Muted** (`#715232`): secondary copy.
- **Shop Amber** (`#d9942e`): primary actions and small warmth.

## Layout

The homepage path:

1. **Empty beautiful hero.** Full-bleed wooden shop image, one headline, one
   command block. No product paragraph is required in the first viewport.
2. **Existing repo prompt.** A generated prompt-counter image and a real prompt
   card the visitor can copy.
3. **Inside the shop.** Short file drawers show what `.ai-first` contains, with
   a shelf image as the main visual anchor.
4. **Full tour.** Three short steps and a final inventory panel for people who
   want the mechanism.

Avoid standard hero/card grids as the main idea. Repeated panels are allowed
only as drawer labels or shop inventory, not as generic feature cards.

## Imagery

Shipping raster assets:

- `/illustrations/wooden-shop-hero.png`
- `/illustrations/wooden-shop-prompt.png`
- `/illustrations/wooden-shop-shelves.png`

Images must avoid readable text, external logos, copied characters, desktop
metaphors, browser chrome, and terminal screenshots. New assets should continue
the cozy wooden shop material language.

The homepage also ships one code-authored Three.js character in
`components/agent-lantern-3d.tsx`: a floating lantern-keeper made from brass,
wood, cream paper, and warm glass geometry. It belongs directly over the hero
scene, not inside a frame or card, and should remain secondary to the command.

## Typography

Raleway remains the friendly display and body face. It should be oversized and
confident in the hero, then sparse and sign-like in later sections. Geist Mono is
reserved for commands, file names, and the bootstrap prompt.

## Components

### Shop Panel

Warm paper panel with a subtle border and soft shadow. It behaves like a card or
shop sign, but panels should be few and purposeful.

### Command / Prompt Card

High-contrast command surfaces use mono text and allow horizontal or vertical
scrolling where needed. The prompt card is a real utility, not decoration.

### Drawer

Small file surfaces for `PROJECT.md`, `IN_PROGRESS.md`, `BACKLOG.md`,
`IDEAS.md`, `ARCHITECTURE.md`, and `CHANGELOG.md`. They use icons as brass-like
labels and keep copy short.

### 3D Agent Lantern

The character is the shop's keeper: a small glowing lantern with a paper cloak
and repository file bundle. It may float, breathe, and follow pointer movement
slightly. It should not block copy actions, hide the headline, or introduce a
new color family outside wood, brass, cream paper, forest green, and amber.

## Do's and Don'ts

### Do

- **Do** lead with atmosphere and one clear action.
- **Do** make the existing-repo prompt easy to find and copy.
- **Do** use generated raster images as major layout elements.
- **Do** keep explanatory text short.
- **Do** preserve light and dark theme support.

### Don't

- **Don't** return to a website-as-desktop layout.
- **Don't** make the page a normal SaaS card grid.
- **Don't** over-explain before the visitor sees the shop.
- **Don't** use bright meadow colors, abstract AI gradients, or console chrome.
- **Don't** add duplicate commands or aliases to hide copy mistakes.
