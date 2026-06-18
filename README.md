# Flashback

> An agentic design tool with a time machine for taste.

Flashback is a design partner that can move fluently between Bauhaus rigor, Swiss grid systems, Arts and Crafts humanity, Memphis irreverence, postmodern critique, cybernetic interfaces, spatial computing, generative UI, and whatever the frontier is doing next.

It is not a moodboard generator. It is an agent that researches, reasons, critiques, and produces design direction with historical literacy and contemporary judgment.

## The idea

Most design tools help you make the thing you already imagined.

Flashback helps you discover what the thing *should become*.

Give it a product, brand, interface, campaign, space, artifact, or raw hunch. Flashback excavates relevant design history, reads the current cultural moment, proposes distinct creative directions, and turns the best one into a usable design brief, system, prototype plan, critique, or implementation-ready handoff.

## Why now

AI design is moving from passive assistance to agentic collaboration. Interfaces are becoming generative, adaptive, multimodal, personalized, and measurable by user intent rather than surface engagement. At the same time, the best contemporary work is reacting against generic AI polish with stronger materiality, sharper constraints, richer references, and more deliberate human texture.

Flashback exists for that world: a designer-agent that knows the canon, tracks the zeitgeist, and refuses generic output.

## What Flashback does

Flashback acts like a senior designer, design historian, strategist, and critic in one loop.

1. **Grounds the brief** — clarifies audience, medium, constraints, context, risk, and success criteria.
2. **Travels through references** — pulls from movements, makers, objects, interfaces, typography, color theory, architecture, industrial design, fashion, games, film, and cultural moments.
3. **Reads the present** — accounts for current interface patterns, AI-native workflows, accessibility expectations, brand fatigue, and emerging aesthetic signals.
4. **Creates options** — proposes multiple distinct design directions instead of converging on the safest average.
5. **Critiques itself** — evaluates concept strength, coherence, novelty, usability, accessibility, feasibility, and taste.
6. **Hands off clearly** — produces briefs, art direction, design systems, prompts, wireframes, component specs, copy tone, motion notes, or implementation tickets.

## Design intelligence

Flashback should reason across four layers:

| Layer | What it knows | What it produces |
| --- | --- | --- |
| **History** | Movements, schools, manifestos, materials, visual languages, cultural context | Reference maps, lineage, constraints, avoid-list |
| **Theory** | Gestalt, semiotics, affordance, grids, color, typography, hierarchy, attention, emotion | Design rationale, critique, principles |
| **Now** | AI-native UX, generative UI, multimodal interaction, spatial influence, trust design, accessibility, current aesthetics | Trend-aware direction without trend-chasing |
| **Making** | Product flows, design systems, frontend constraints, brand systems, prototyping, handoff | Specs, screens, components, prompts, tickets |

## Agent loop

Flashback follows a repeatable design process:

```text
brief -> context -> reference excavation -> creative territories
      -> critique -> selection -> system definition -> handoff
      -> test -> revise
```

Every run should answer:

- What are we making?
- Who is it for?
- What should it feel like?
- What historical or cultural lineage does it belong to?
- What contemporary signals should it acknowledge or reject?
- What constraints make it stronger?
- What would make it generic, dishonest, inaccessible, or boring?
- What should the next artifact be?

## Example prompts

```text
Design a landing page for a local archive tool.
Make it feel like Swiss modernism discovered interactive fiction.
Give me three directions, critique them, then pick one.
```

```text
Create a visual system for a developer tool that feels calm, precise,
and slightly magical. Ground it in historical references and current
AI-product design patterns. Include typography, color, motion, layout,
and interaction principles.
```

```text
Review this interface like a design critic.
Tell me what era it unconsciously belongs to, what it is trying to be,
where the hierarchy fails, and how to make it more memorable without
hurting usability.
```

## Output modes

Flashback should support several design artifacts:

| Mode | Use it when you need |
| --- | --- |
| `territories` | 2-3 distinct creative directions with rationale and tradeoffs |
| `brief` | A complete design brief with audience, constraints, principles, and success criteria |
| `system` | Typography, color, layout, spacing, components, motion, imagery, and voice |
| `critique` | A direct review of what works, what fails, and what to change |
| `handoff` | Implementation-ready specs, tasks, tokens, components, and acceptance criteria |
| `research` | Historical lineage, contemporary trend scan, references, and anti-references |

## First milestone

The first useful version of Flashback should be a CLI agent that accepts a design brief and returns a structured design direction.

Minimum viable loop:

1. Accept a prompt, target medium, audience, and constraints.
2. Generate a historical reference map.
3. Generate a current-context trend scan.
4. Propose three creative territories.
5. Critique the territories against the brief.
6. Select or combine a direction.
7. Produce a concrete handoff artifact.

Planned command shape:

```bash
flashback brief "Design a portfolio site for an experimental type foundry"
flashback critique ./screenshots/homepage.png
flashback system ./product-brief.md --mode tokens
flashback territories "A finance app that should feel trustworthy but not corporate"
```

## Taste principles

Flashback should be opinionated.

- **Specific beats polished.** Generic beauty is failure.
- **Constraints create style.** The agent should add useful constraints, not remove them.
- **History is material, not decoration.** References must explain structure, not just vibes.
- **The present matters.** A design that ignores the current moment feels accidentally dated.
- **Accessibility is not optional.** Contrast, motion, semantics, readability, and cognitive load shape the design from the beginning.
- **Critique before handoff.** The agent should expose weaknesses before producing confident specs.
- **Taste is accountable.** Every recommendation should connect to user goals, cultural context, or making constraints.

## What makes a good Flashback response

A strong response should feel like this:

```text
Here are three directions:

1. Civic Archive Modernism
   Rooted in Swiss public-information systems and contemporary civic tech.
   Best for trust, clarity, and institutional durability.

2. Haunted Hypercard
   Rooted in early personal computing, interactive fiction, and memory systems.
   Best for intimacy, exploration, and emotional distinctiveness.

3. Liquid Catalog
   Rooted in spatial interfaces, generative UI, and museum collection systems.
   Best for adaptive browsing and a more future-facing product identity.

Recommendation: Haunted Hypercard, because the product is about memory,
not just storage. It gives the interface a reason to feel alive.
```

## Roadmap

- [ ] Define the agent prompt contract and response schemas.
- [ ] Build the CLI interface.
- [ ] Add research and citation support.
- [ ] Add image/screenshot critique.
- [ ] Add design-system output for tokens and components.
- [ ] Add trend scans with date grounding.
- [ ] Add reference packs for major design movements.
- [ ] Add accessibility and usability critique passes.
- [ ] Add export formats for Markdown, JSON, Figma-ready specs, and implementation tickets.

## Keeping corpus examples current

The corpus is the source of truth for example pages. When research changes in
`corpus/YYYY.md`, update the examples from the corpus instead of hand-copying
recipe cards, corpus maps, prompt seeds, or reference artifacts.

Each example-ready corpus file should include frontmatter for `year`, `status`,
`title`, `subtitle`, `decade_position`, and `primary_lens`, plus these sections:

- `Year thesis`
- `Design climate`
- `Timeline signals`
- `Flashback design recipes`
- `Anti-cliches`
- `Design prompt seeds`
- `Reference artifacts`

Research workflow:

1. Edit `corpus/YYYY.md`.
2. Run `npm run sync:examples`.
3. Review the generated changes under `examples/`.
4. Run `npm run check:examples`.
5. Commit the corpus and example updates together.

Use `status: draft` for research that is not ready to publish. Use
`status: researched` when a corpus entry is ready to become an example; the sync
command promotes it to `status: example` after generating the page. Entries with
`status: example` are always kept in sync.

### Example sync commands

```bash
npm run sync:examples
```

Regenerates the root `index.html`, `examples/manifest.json`, and each
`examples/YYYY/index.html` from the current corpus. It also updates
`status: researched` to `status: example` for corpus entries that have just been
synced.

```bash
npm run check:examples
```

Fails if generated examples are stale, if an example-ready corpus year is
missing an example page, if generated links point at missing corpus anchors, or
if an example page exists for a corpus entry that is not marked `status: example`.

Generated example pages include a comment near the top of the HTML. Do not
hand-edit corpus-derived sections there; change the corpus and rerun the sync.
If a year needs a distinct visual treatment, add or adjust its theme in
`scripts/flashback-examples.mjs` so the generated output stays reproducible.

The generated manifest is useful for tooling and review because it exposes each
year's source path, example path, recipes, prompt seeds, reference artifacts,
anti-cliches, and corpus section map in one JSON file.

### Corpus shape expected by examples

Recipe headings should use this form:

```text
### Recipe 1: Direction name
```

Each recipe should include `Use for:` plus bullets for `Palette`, `Type`,
`Layout`, `Imagery`, `Motion`, `Risk`, and optionally `Add accuracy with`.
Section links use GitHub-style heading anchors, so renaming headings is safe as
long as `npm run sync:examples` is rerun afterward.

## Hosting and the Flashback skill

Flashback is published with GitHub Pages at
**https://toby.github.io/flashback/**. The site is assembled from the corpus by
`npm run build:site` and deployed by `.github/workflows/pages.yml` on every push
to `main`.

The published surface is:

| Path | What it is |
| --- | --- |
| `/` | Generated index of every year, built from the corpus |
| `/examples/YYYY/` | Per-year example pages |
| `/examples/manifest.json` | Machine-readable index of years, recipes, prompts, and references |
| `/corpus/YYYY.md` | Raw research markdown, served as-is |
| `/skill/` | The Flashback skill page and a copy of `SKILL.md` |

A `.nojekyll` marker is written into the site so GitHub Pages serves the corpus
`.md` files raw (which is what the agent fetches) and leaves the
example-to-corpus links intact.

```bash
npm run build:site
```

Assembles `_site/` (index, examples, corpus, skill, and `.nojekyll`) for local
preview and for the deploy workflow. `_site/` is generated output and is
git-ignored.

#### One-time GitHub Pages setup

The `pages.yml` workflow enables Pages with the GitHub Actions source on its
first run (`actions/configure-pages` with `enablement: true`). If your
organization restricts that, enable it manually in the repository under
**Settings -> Pages -> Build and deployment -> Source**, set to **GitHub
Actions**.

### The /flashback skill

`.github/skills/flashback/SKILL.md` is a Copilot CLI project skill. Given a design
task and one or more years, it fetches `examples/manifest.json` and the relevant
`corpus/YYYY.md` from the site and uses that year's thesis, design climate,
recipes, anti-cliches, prompt seeds, and references to ground the work.

It is available automatically when you run Copilot CLI in this repository. In a
session, reload and inspect it with:

```bash
/skills reload
/skills info flashback
```

Then invoke it explicitly, for example:

```text
Use the /flashback skill to design a landing page with a 1981 feeling.
```

The skill reads the manifest to learn which years exist, so it stays correct as
the corpus grows. When a requested year is not yet in the corpus, it grounds the
work in the nearest available year and says so.

## Project status

Flashback is at the concept seed stage. This README defines the product direction, agent behavior, and first implementation target.

The agentic interface/tooling implementation plan is published as a gist: https://gist.github.com/toby/c12172e7c6dc2f2b1cf12f1b4ff63912

The next step is to turn this into a working CLI agent.
