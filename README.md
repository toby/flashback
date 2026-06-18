# 🌆 Flashback

> A time machine for taste — historically literate agentic design.

Flashback is a design partner that moves fluently between Bauhaus rigor, Swiss
grid systems, Memphis irreverence, postmodern critique, cybernetic interfaces,
and whatever the frontier is doing next. It grounds design work in a specific
year of history — the real movements, objects, typefaces, tensions, and cultural
weather of that moment — instead of generic AI polish.

It ships today as a **Copilot skill**: `/flashback`.

## The idea

Most design tools help you make the thing you already imagined. Flashback helps
you discover what the thing *should become*.

Point it at a product, brand, interface, campaign, or raw hunch, and name a year
or era. Flashback excavates that year's design research, reads what made it feel
the way it felt, and turns it into usable direction — distinct creative
territories, a brief, a design system, a critique, or an implementation-ready
handoff.

The core belief: **history is material, not decoration.** A year is not a filter
or a costume. It's a set of structural decisions — why a grid broke, why a
palette narrowed, why an interface borrowed a metaphor — that can make new work
specific, intentional, and alive.

## What Flashback is

Flashback is a Copilot skill backed by a year-by-year corpus of design research
published on GitHub Pages.

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

## How it can help you

- **Ground a design in a specific era.** "Make this landing page feel like 1983"
  becomes concrete type, color, layout, and motion choices rooted in what 1983
  actually was.
- **Get distinct directions, not one safe average.** Ask for territories and
  Flashback proposes two or three genuinely different routes with tradeoffs, then
  recommends one.
- **Diagnose an interface.** Hand it a screen and ask what era it unconsciously
  belongs to, what it's trying to be, and where the hierarchy fails.
- **Build a system rooted in a movement.** Turn a year's visual language into
  tokens, components, copy tone, and motion notes.
- **Blend or contrast years.** Name more than one year to fuse them into a
  coherent direction — or set them against each other as competing territories.

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

## A good Flashback response

A strong response feels like this:

```text
Here are three directions:

1. Civic Archive Modernism
   Rooted in Swiss public-information systems and contemporary civic tech.
   Best for trust, clarity, and institutional durability.

2. Haunted Hypercard
   Rooted in early personal computing, interactive fiction, and memory systems.
   Best for intimacy, exploration, and emotional distinctiveness.

3. Liquid Catalog
   Rooted in spatial interfaces, generative UI, and collection systems.
   Best for adaptive browsing and a more future-facing identity.

Recommendation: Haunted Hypercard, because the product is about memory,
not just storage. It gives the interface a reason to feel alive.
```

## Browse the research

The corpus is meant to be read by people, too:

- **Index of every year** — https://toby.github.io/flashback/
- **A single year's page** — https://toby.github.io/flashback/examples/1981/

Use the skill when you're designing; browse the site when you want to wander
through the years.
