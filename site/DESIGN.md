---
name: AI-first
description: A pastel 3D clay-paper repository terrarium where real HTML controls sit inside Blender-authored memory scenes.
colors:
  terrarium-bg: "#eef1df"
  terrarium-band: "#f7ead7"
  terrarium-paper: "#fff9ea"
  terrarium-cream: "#fff3d7"
  terrarium-sage: "#78947f"
  terrarium-mint: "#b7e6ce"
  terrarium-sky: "#a7dce3"
  terrarium-peach: "#f5c6ad"
  terrarium-coral: "#ec8f7c"
  terrarium-amber: "#ffc857"
  terrarium-ink: "#263238"
  terrarium-muted: "#52665e"
  terrarium-line: "#263238"
typography:
  display:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "6rem"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "0"
  display-mobile:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "2.85rem"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "0"
  display-small:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "3.2rem"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "0"
  headline:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "5.2rem"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "0"
  headline-large:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "5rem"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "0"
  headline-compact:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "2.7rem"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "0"
  headline-small:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "2.6rem"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "0"
  title:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "1rem"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "0"
  title-compact:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "0.95rem"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "0"
  body:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "1.1rem"
    fontWeight: 800
    lineHeight: 1.7
    letterSpacing: "0"
  body-compact:
    fontFamily: "var(--font-sans), sans-serif"
    fontSize: "0.9rem"
    fontWeight: 800
    lineHeight: 1.45
    letterSpacing: "0"
  command:
    fontFamily: "var(--font-mono), monospace"
    fontSize: "0.85rem"
    fontWeight: 900
    lineHeight: 1.4
    letterSpacing: "0"
  label:
    fontFamily: "var(--font-mono), monospace"
    fontSize: "0.75rem"
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: "0"
  micro:
    fontFamily: "var(--font-mono), monospace"
    fontSize: "0.68rem"
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: "0"
rounded:
  dot: "0.28rem"
  light: "0.35rem"
  label: "0.75rem"
  icon: "0.8rem"
  stamp-icon: "0.85rem"
  chip: "0.9rem"
  control: "0.95rem"
  stamp: "1rem"
  tile: "1.05rem"
  card: "1.35rem"
  organic: "1.55rem"
  stage: "2.2rem"
spacing:
  page-x: "1rem"
  page-x-lg: "2rem"
  section-y: "5rem"
  grid-gap: "0.75rem"
components:
  stage-plate:
    backgroundColor: "{colors.terrarium-paper}"
    textColor: "{colors.terrarium-ink}"
    rounded: "{rounded.stage}"
    border: "1px solid rgba(38, 50, 56, 0.2)"
  physical-card:
    backgroundColor: "{colors.terrarium-paper}"
    textColor: "{colors.terrarium-ink}"
    rounded: "{rounded.card}"
    border: "1px solid rgba(38, 50, 56, 0.2)"
  command:
    backgroundColor: "{colors.terrarium-ink}"
    textColor: "{colors.terrarium-cream}"
    typography: "{typography.command}"
    rounded: "{rounded.control}"
  file-chip:
    backgroundColor: "{colors.terrarium-mint}"
    textColor: "{colors.terrarium-ink}"
    rounded: "{rounded.tile}"
    border: "1px solid rgba(38, 50, 56, 0.18)"
---

# Design System: AI-first

## Overview

**Creative North Star: "Repository Memory Terrarium"**

AI-first should feel like a polished pastel 3D clay-paper workspace. The site is
not a conventional landing page with a 3D object inserted into one panel. It is
a sequence of connected dioramas where real HTML controls, commands, labels,
and file chips sit inside or on top of Blender-authored repository memory
scenes.

The first viewport proves the mechanism immediately: the copyable install
command sits in a physical command dock, amber pulses stock a local memory
shelf, and the memory files appear as HTML labels attached to the 3D scene.

## Key Characteristics

- No header shell. The first viewport starts directly with the product stamp,
  thesis, command dock, and hero terrarium.
- Pastel clay-paper material language: sage canvas, peach slabs, mint and sky
  panels, amber signals, soft shadows, and rounded-square physical controls.
- 3D owns the page structure: hero memory shelf, existing-repo handoff trays,
  and archive file garden.
- HTML remains real and copyable. Commands, prompts, file labels, and task
  explanations are not baked into Blender textures.
- Foliage and organic shapes frame depth like the references, but they explain
  "memory grows around the repo" rather than becoming decoration.
- Motion has one authored behavior family: reveal blur resolves into place,
  amber beads pulse, and 3D objects gently breathe with pointer parallax.

## Color Rules

Large page surfaces use muted sage and warm cream. Main 3D slabs use peach and
paper. Mint and sky are the primary UI materials. Coral is a rare file/accent
color. Amber is reserved for copy actions, command pulses, and continuity
signals.

Do not reintroduce purple/lilac, realistic wood, abstract AI gradients, or a
dark SaaS palette. The page should read as expensive toy/clay/paper craft, not
as a beige card layout.

## Layout

The homepage path:

1. **Command Dock and Memory Shelf.** Left side has product stamp, direct
   headline, copyable install command, and pulses. Right side is the large 3D
   hero terrarium with HTML labels pinned onto it.
2. **Handoff Trays.** Existing-repository bootstrap prompt stays copyable and
   appears as a physical note beside a second 3D tray scene.
3. **Archive File Garden.** A third 3D scene shows file storage while the HTML
   file chips and three-step explanation sit beside it.
4. **Continuity Close.** A quiet physical card closes the story without adding
   unrelated process claims.

Avoid generic SaaS grids and repeated equal cards as the page skeleton. Cards
are allowed for actual command docks, prompt notes, file chips, and step nodes.

## Imagery And 3D

The homepage uses a canonical Blender source and three exported web scenes:

- Blender source: `site/assets/blender/memory-terrarium.blend`
- Hero model: `site/public/models/hero-memory-terrarium.glb`
- Handoff model: `site/public/models/handoff-trays.glb`
- Archive model: `site/public/models/archive-file-garden.glb`
- Runtime staging: `site/components/terrarium-scene-3d.tsx`

The older `agent-lantern` mascot and one-off `memory-shelf` model are not the
homepage direction. Future 3D work should extend the terrarium scene system,
not create a character mascot or a standalone decorative object.

## Typography

Raleway remains the display and body face. It should be bold, friendly, and
chunky enough to match the clay UI. Geist Mono is reserved for commands, file
names, labels, and the bootstrap prompt. Letter spacing stays `0`.

## Components

### Stage Plate

Large rounded 3D viewport surface with soft depth, organic mint/peach edge
shapes, a transparent WebGL canvas, and HTML labels layered above the scene.

### Physical Card

Command docks, prompt trays, and the closing panel use one light paper surface,
soft shadow, and rounded-square corners. They should feel like objects on the
desk, not generic cards.

### Command Dock

The install command is a dark inset code block on a physical card with a mint or
sky rail and amber status light. Copy controls use amber.

### File Chip

Real memory files appear as mint, sky, or peach chips with a small icon block,
label, and exact file name. They may lift slightly on hover.

### Terrarium Scene

`TerrariumScene3D` loads one of the exported GLB scenes, centers it, lights it,
and applies gentle pointer-responsive motion. It must respect reduced motion and
dispose Three.js resources on unmount.

## Do's And Don'ts

### Do

- **Do** make the site feel built around 3D from the first viewport.
- **Do** keep commands and prompts copyable as real HTML.
- **Do** keep the palette restrained: sage, cream, peach, mint, sky, amber, rare
  coral, dark ink.
- **Do** use 3D scenes to explain install, handoff, and local file continuity.
- **Do** preserve mobile: first viewport must show at least a hint of the 3D
  terrarium after the command.

### Don't

- **Don't** add a header/nav shell back to the homepage.
- **Don't** use realistic wooden-shop imagery as the homepage anchor.
- **Don't** make a mascot the explanation.
- **Don't** treat 3D as a single object inserted into a flat page.
- **Don't** bake functional copy into model textures.
