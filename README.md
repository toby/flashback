# 🌆 Flashback

> A time machine for taste — historically literate agentic design.

Most design tools help you make the thing you already imagined. Flashback helps
you discover what it *should become*.

Name a year and point it at a product, brand, interface, or raw hunch. Flashback
moves fluently across design history — Bauhaus rigor, Swiss grids, Memphis
irreverence, cybernetic interfaces, and whatever the frontier is doing next — and
grounds the work in the real movements, objects, typefaces, and cultural weather
of the moment you chose, instead of generic AI polish. Because history is
**material, not decoration**: a year isn't a filter or a costume, it's a set of
structural decisions — why a grid broke, why a palette narrowed, why an interface
borrowed a metaphor — that make new work specific, intentional, and alive.

It ships today as a **Copilot skill**: `/flashback`.

## What's Flashback?

A Copilot skill, backed by a year-by-year corpus of design research published on
GitHub Pages.

- **The skill** (`.github/skills/flashback/SKILL.md`) is invoked as `/flashback`,
  or automatically whenever a request ties a design to a year or era.
- **The corpus** is deep research on each year — its thesis, design climate,
  typography, recipes, anti-cliches, and reference artifacts — published at
  **https://toby.github.io/flashback/**.

When you give it a design task and a year, the skill fetches that year's research
from the site and uses it to ground the work in real historical and cultural
detail. It doesn't design from a vague memory of "the eighties"; it reads the
actual record of, say, 1981 and builds from there.

The corpus currently covers **1980–1985** and is expanding toward full coverage
from 1900 to the present.

## Using the skill

In a Copilot session in this repository, describe the work and name a year:

```text
Use /flashback to design a landing page with a 1981 feeling.
```

```text
Give me three directions for a finance app, grounded in 1984, and critique them.
```

```text
Review this interface like a design critic — tell me what era it belongs to
and how to make it more memorable without hurting usability.
```

You can name one year or several. When a requested year isn't in the corpus yet,
Flashback grounds the work in the nearest available year and tells you it did.

## What it gives you

Choose the output mode that matches the ask:

| Mode | Use it when you need |
| --- | --- |
| `territories` | Two or three distinct creative directions with rationale and tradeoffs |
| `brief` | A design brief with audience, constraints, principles, and success criteria |
| `system` | Typography, color, layout, spacing, components, motion, imagery, and voice |
| `critique` | A direct review of what works, what fails, and what to change |
| `handoff` | Implementation-ready specs, tokens, components, and acceptance criteria |
| `research` | Historical lineage, a contemporary scan, references, and anti-references |

When the ask is open-ended, Flashback offers a few territories and recommends one.

## What's inside a year

Each year in the corpus is a structured body of research the skill reads before
it designs:

- **Year thesis** — the single idea that defines the year.
- **Design climate** — the dominant tensions and what's emerging.
- **Timeline signals** — the events that actually mattered for design.
- **Typography & graphic design** — the visual language in detail.
- **Design recipes** — named directions, each with `Use for`, `Palette`, `Type`,
  `Layout`, `Imagery`, `Motion`, and `Risk`.
- **Anti-cliches** — guardrails so the work stays specific instead of becoming a
  costume of the era.
- **Prompt seeds** — ready-to-run starting points.
- **Reference artifacts** — the objects, print, and spaces to anchor on.

## How Flashback thinks

Flashback reasons across four layers:

| Layer | What it knows | What it produces |
| --- | --- | --- |
| **History** | Movements, schools, materials, visual languages, cultural context | Reference maps, lineage, constraints, an avoid-list |
| **Theory** | Gestalt, semiotics, grids, color, type, hierarchy, attention, emotion | Design rationale and critique |
| **Now** | AI-native UX, generative UI, accessibility, current aesthetics | Trend-aware direction without trend-chasing |
| **Making** | Product flows, design systems, frontend constraints, handoff | Specs, components, tokens, tickets |

And it works the same way every time: **lead with the year's thesis and
feeling**, pick the recipe that fits the brief, carry it into concrete choices,
respect the anti-cliches, critique the result, then hand off.

## Taste principles

Flashback is opinionated.

- **Specific beats polished.** Generic beauty is failure.
- **Constraints create style.** It adds useful constraints, it doesn't remove them.
- **History is material, not decoration.** References explain structure, not just
  vibes.
- **The present matters.** A design that ignores the current moment feels
  accidentally dated.
- **Accessibility is not optional.** Contrast, motion, semantics, and readability
  shape the work from the start.
- **Critique before handoff.** Weaknesses get exposed before confident specs.

## Browse the research

The corpus is meant to be read by people, too:

- **Index of every year** — https://toby.github.io/flashback/
- **A single year's page** — https://toby.github.io/flashback/examples/1981/

Use the skill when you're designing; browse the site when you want to wander
through the years.
