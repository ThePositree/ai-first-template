---
name: AI-first
description: A repository flight recorder for AI agents, built from a dark recorder console with cyan instrument light and amber owner signal.
colors:
  console-bg: "#070b10"
  console-void: "#020508"
  recorder-panel: "#0c141d"
  recorder-text: "#eef8ff"
  instrument-cyan: "#67e8f9"
  cyan-wash: "#cffafe"
  owner-amber: "#fcd34d"
  amber-wash: "#fef3c7"
  paper-ice: "#eef8ff"
  paper-snow: "#f7fbff"
  ink: "#08111a"
  steel-copy: "#40515f"
  file-blue: "#006da3"
  file-badge: "#dff3ff"
  file-rule: "#b9d1df"
typography:
  display:
    fontFamily: "var(--font-mono), monospace"
    fontSize: "clamp(3rem, 7vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 0.88
    letterSpacing: "-0.08em"
  headline:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "3rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.045em"
  title:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-mono), monospace"
    fontSize: "0.65rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.22em"
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.625rem"
  xl: "0.875rem"
  2xl: "1.125rem"
  recorder-panel: "2rem"
  recorder-halo: "3rem"
spacing:
  page-x: "1.5rem"
  page-x-lg: "2rem"
  section-y: "6rem"
  hero-gap: "2.5rem"
  card-gap: "0.75rem"
  card-padding: "1rem"
  panel-padding: "1.25rem"
components:
  button-copy:
    backgroundColor: "{colors.cyan-wash}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "0 1.25rem"
    height: "2.5rem"
  command-field:
    backgroundColor: "{colors.console-void}"
    textColor: "{colors.cyan-wash}"
    typography: "{typography.label}"
    rounded: "{rounded.xl}"
    padding: "0.75rem 1rem"
  recorder-panel:
    backgroundColor: "{colors.recorder-panel}"
    textColor: "{colors.recorder-text}"
    rounded: "{rounded.recorder-panel}"
    padding: "1.25rem"
  memory-card:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.2xl}"
    padding: "1rem"
  telemetry-chip:
    backgroundColor: "transparent"
    textColor: "rgba(207,250,254,0.6)"
    typography: "{typography.label}"
    rounded: "9999px"
    padding: "0.25rem 0.75rem"
---

# Design System: AI-first

## Overview

**Creative North Star: "Repository Flight Recorder"**

AI-first should look like an instrument that has been running quietly inside the repository: dark, legible, local, and technically specific. The primary world is a recorder console, not a generic AI landing page. It uses a black-blue operating surface, cyan telemetry light, amber owner signal, and visible file strips to make continuity feel inspectable instead of magical in a vague way.

The interface can leave the console for explanatory sections, but those lighter sections still feel like printed telemetry: cool paper, dark ink, thin blue-gray rules, and compact file labels. The system should make agent memory feel recoverable, durable, and owner-readable.

**Key Characteristics:**

- Dark first viewport with instrument glow, grid texture, and panel depth.
- Cyan is the machine signal; amber is reserved for owner signal and lock state.
- File paths, commands, states, and timestamps use mono typography as evidence.
- Light sections behave like readable recovered records, not marketing proof.

## Colors

The palette is a dark recorder console with cool cyan instrumentation, sparse amber signal, and ice-paper recovery surfaces.

### Primary

- **Console Black-Blue**: The main first-viewport background and the return surface for sequence sections.
- **Instrument Cyan**: The active machine signal for glow dots, file strips, marks, links, and command affordances.

### Secondary

- **Owner Amber**: A rare signal for owner intent, locked states, and the one recovery message that belongs to the human.

### Neutral

- **Recorder Void**: The deepest inset surface for command code and telemetry tracks.
- **Recorder Panel**: The raised console unit background used for the recovery panel.
- **Recorder Text**: The high-contrast light text on dark console surfaces.
- **Paper Ice**: The main light explanatory surface.
- **Paper Snow**: The secondary light surface inside later content blocks.
- **Ink**: The primary text color on light surfaces.
- **Steel Copy**: The long-copy color on light surfaces.
- **File Rule**: The structural line color for light cards and record strips.

### Named Rules

**The Signal Rarity Rule.** Amber should stay rare and specific. Use it for owner signal, locked status, and human-control moments, not for general decoration.

**The Cyan Evidence Rule.** Cyan should mark machine-readable evidence: command lines, telemetry strips, recorder LEDs, and navigational traces.

## Typography

**Display Font:** Geist Mono through `var(--font-mono)` with monospace fallback  
**Body Font:** Raleway through `var(--font-sans)` with sans-serif fallback  
**Label/Mono Font:** Geist Mono through `var(--font-mono)` with monospace fallback

**Character:** The pairing is technical without becoming cold. Mono type carries proof, commands, file names, states, and the oversized recorder headline; Raleway carries explanation with a softer, owner-readable tone.

### Hierarchy

- **Display** (500, responsive 3rem to 4.5rem, 0.88 line-height): Hero headlines only, uppercase, tightly tracked, stacked as recorder readout lines.
- **Headline** (500, 3rem, tight line-height): Section claims on light and dark surfaces.
- **Title** (500, 1.25rem to 1.5rem): Panel titles and card titles that need to read as operational labels.
- **Body** (400, 1rem to 1.125rem, 1.75 line-height): Product explanation and card copy, usually with restrained contrast.
- **Label** (400, 0.65rem to 0.75rem, wide tracking): Uppercase metadata, nav links, statuses, and chips.

### Named Rules

**The Proof In Mono Rule.** Anything that is a command, file path, state, timestamp, or recorder readout should use mono type.

## Layout

The page is built on full-width sections with a centered `max-w-7xl` container. The first viewport fills the screen and splits into a left story column and right recovery unit at medium sizes, using a `0.9fr / 1.1fr` balance so the artifact panel feels like the proof, not an aside.

Horizontal page padding is compact on mobile and opens slightly on large screens. Section rhythm is generous at 6rem vertical padding, while internal console rhythm is dense: 0.75rem gaps, 1rem card padding, and layered 1.25rem panel padding. Responsive behavior collapses the console into a single-column stack and moves the owner signal into an inline mobile card.

## Elevation & Depth

Depth is a hybrid of tonal layering, translucent borders, glow, and a few large shadows. The console feels lit from inside: cyan and amber glows identify active signals, while panels sit on dark surfaces through blur halos, transparent fills, and soft black shadows. Light sections use quieter blue-gray shadows to keep cards readable without breaking the recorder metaphor.

### Shadow Vocabulary

- **Cyan Instrument Glow** (`0 0 32px rgba(76,201,255,0.2)`): Small marks and identity elements that need to look powered.
- **Recorder Panel Lift** (`0 25px 50px -12px rgba(0,0,0,0.5)`): Main dark recovery panel.
- **Telemetry Line Glow** (`0 0 10px rgba(103,232,249,0.5)`): Active file-strip segments inside the recorder.
- **Amber Signal Glow** (`0 0 24px rgba(252,211,77,0.28)`): Locked owner-signal badge only.
- **Paper Card Lift** (`0 18px 60px rgba(41,80,105,0.08)`): File cards on light sections.
- **Paper Module Lift** (`0 24px 90px rgba(33,74,101,0.12)`): Large light explanatory module.

### Named Rules

**The Lit Instrument Rule.** Glows must explain state or instrumentation. Do not apply glow to generic decorative shapes unless it reinforces a powered recorder element.

## Shapes

The system uses soft technical rectangles rather than sharp terminals. Small controls use rounded-xl corners, file cards and signal blocks use rounded-2xl corners, and the signature recovery unit uses a large 2rem panel radius with a 3rem halo behind it. Pills are reserved for constraints and file-state chips.

Borders are usually low-opacity and cool: white at 10 to 15 percent on dark surfaces, blue-gray lines on light surfaces. The recurring silhouette is a nested recorder module: large rounded shell, internal rule, stacked cards, then narrow strips.

## Components

### Buttons

- **Shape:** Soft rectangular control with rounded-xl corners.
- **Primary:** Copy-command button uses cyan wash background with dark ink text, fixed 2.5rem height, and compact horizontal padding.
- **Hover / Focus:** Hover brightens to white; base button focus uses a 2px ring from the shared ring token.

### Chips

- **Style:** Constraint chips use transparent dark-surface pills with a low-opacity white border and muted cyan text.
- **State:** Chips are informational, not filters. They should not look selectable unless interaction is added.

### Cards / Containers

- **Corner Style:** Cards use rounded-2xl on most surfaces; signature modules can use 1.75rem to 2rem.
- **Background:** Dark cards use translucent white overlays over console black. Light cards use white or paper snow over ice.
- **Shadow Strategy:** Use glow for powered console elements and soft blue-gray lift for paper sections.
- **Border:** Use translucent white rules on dark surfaces and blue-gray rules on light surfaces.
- **Internal Padding:** Dense telemetry cards use 0.75rem to 1rem; large modules use 1.5rem to 2.5rem.

### Navigation

- **Style:** Navigation is sparse and technical. Brand mark is a glowing cyan monogram tile; text nav uses mono, small size, muted cyan, and wide spacing.

### Recorder Unit

The recorder unit is the signature component. It should combine a dark rounded shell, a thin header rule, three status LEDs, an amber owner-signal block, and stacked file telemetry rows. It is the visual proof that fresh chats recover context from local files.

### File Telemetry Rows

File rows pair mono file names with a muted state label, timestamp, dark track, and cyan line segments. They should look inspectable and mechanical, like record strips rather than generic feature cards.

## Do's and Don'ts

### Do:

- **Do** keep the first impression anchored in the dark recorder console.
- **Do** use amber only when the owner or owner signal is part of the story.
- **Do** make file paths, commands, timestamps, and states visibly inspectable.
- **Do** keep light sections cool and record-like with blue-gray borders and restrained shadows.

### Don't:

- **Don't** turn this into a generic gradient AI SaaS hero with abstract blobs and broad claims.
- **Don't** use amber as a general accent or CTA color.
- **Don't** replace file-strip telemetry with unrelated icons or mascot-style illustration.
- **Don't** canonize one-off marketing proof patterns such as logos, testimonials, or metrics until the product actually has them.
