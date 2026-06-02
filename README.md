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

## Project status

Flashback is at the concept seed stage. This README defines the product direction, agent behavior, and first implementation target.

The next step is to turn this into a working CLI agent.
