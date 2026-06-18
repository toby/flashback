---
name: flashback
description: "Ground a design task in the look, feel, and ideas of a specific year of design history. Use this when a request ties a design, brand, interface, layout, type, color, or critique to a year or era (for example: 'design this with a 1981 feeling', 'make it look like 1983', 'in the style of the early 80s', 'give it a <year> mood'), or when the user invokes /flashback. Fetches that year's research from the Flashback corpus on GitHub Pages and turns it into design direction."
---

# Flashback

Flashback is a design partner with a time machine for taste. Given a design task
and one or more **years**, you fetch that year's design research from the
Flashback site and use it to ground the work in real historical and cultural
detail instead of generic AI polish.

The research is published on GitHub Pages at:

```
https://toby.github.io/flashback
```

Everything you need is fetchable from there. Do not invent year details from
memory when the corpus exists — fetch and use it.

## Step 1 — discover what years exist

Fetch the manifest first. It is the source of truth for which years are
available and what each one contains:

```
https://toby.github.io/flashback/examples/manifest.json
```

For every year it lists the title, subtitle, "feeling", primary lens, decade
position, design **recipes** (each with `useFor`, `palette`, `type`, `layout`,
`imagery`, `motion`, `risk`), prompt seeds, reference artifacts, and anti-cliches.

Use it to confirm the requested year(s) exist and to get a fast overview before
pulling the full corpus.

## Step 2 — fetch the full corpus for the year(s)

For each year the task names, fetch the full research markdown:

```
https://toby.github.io/flashback/corpus/<YEAR>.md
```

For example `https://toby.github.io/flashback/corpus/1981.md`. These are served
raw, so read them directly. Each corpus file contains:

- **Year thesis** — the single idea that defines the year.
- **Design climate** — the dominant tensions and what is emerging.
- **Timeline signals** — events that matter for design that year.
- **Typography** and **Graphic design** — the visual language in detail.
- **Flashback design recipes** — named directions, each with `Use for`,
  `Palette`, `Type`, `Layout`, `Imagery`, `Motion`, and `Risk`.
- **Anti-cliches** — guardrails so the work stays specific, not costume.
- **Design prompt seeds** — ready-to-run prompts.
- **Reference artifacts** — objects, print/graphics, and spaces to anchor on.

## Step 3 — turn the year into the design task

Use the year as material, not decoration:

1. **Lead with the thesis and feeling.** Let the year's core idea shape the
   concept, not just the surface.
2. **Pick the recipe(s) that fit the brief.** Match `Use for` to the product,
   then carry `palette`, `type`, `layout`, `imagery`, and `motion` into concrete
   choices (tokens, components, copy tone, motion notes).
3. **Respect the anti-cliches.** Avoid every cliche the corpus calls out — they
   are how the work avoids looking like a costume of the era.
4. **Honor the Flashback taste principles:** specific beats polished; constraints
   create style; history explains structure, not just vibes; the present still
   matters; accessibility (contrast, motion, semantics, readability) is not
   optional; critique before handoff.
5. **Choose an output mode** that matches the ask: `territories` (2-3 distinct
   directions with tradeoffs), `brief`, `system` (type/color/layout/spacing/
   components/motion/voice), `critique`, `handoff` (specs/tokens/tickets), or
   `research`. When unsure, offer 2-3 territories and recommend one.

### When the task names more than one year

Blend or contrast the years deliberately. Either fuse them into one coherent
direction (and say which traits come from which year) or present them as
competing territories so the user can choose.

### When the requested year is not in the corpus

The corpus is still growing toward full coverage (every year from 1900 to the
present). If a requested year is not in the manifest:

1. Use the **nearest available year** and clearly state the substitution
   (for example: "1979 isn't in the corpus yet; grounding this in 1980, the
   closest available year.").
2. Then proceed with the design task using that year's research.

## For the user, not for grounding

- Human-browsable index of every year: `https://toby.github.io/flashback/`
- A single year's example page: `https://toby.github.io/flashback/examples/<YEAR>/index.html`

Point people to these when they want to browse; use the manifest and corpus
markdown when you are doing the design work.
