<div align="center">

# 🌆 Flashback

**A time machine for taste — historically literate agentic design.**

[Live archive ↗](https://toby.github.io/flashback/) · [Install](#install) · [Using the skill](#using-the-skill) · [Design since 1900](#design-since-1900)

</div>

Flashback is a design skill for your coding agent with a time machine bolted on.
Name a year — 1984, 1972, whenever — and it pulls that moment's real design
history into the work: the typefaces, the palettes, the arguments designers were
having at the time. Not "make it retro." Actual 1984.

Under the hood it's one `SKILL.md` and a research archive published on GitHub
Pages. The skill teaches your agent to fetch the right year and design from it,
so the references come out specific and true instead of the usual generic AI
polish.

## Install

Flashback is a single `SKILL.md`, and your agent pulls the research from the live
site at runtime — so installing it is just dropping that one file where your
agent keeps its skills.

| Agent | Skills directory |
| --- | --- |
| **Copilot CLI** | `~/.copilot/skills/` |
| **Claude Code** | `~/.claude/skills/` |
| **Codex** | `~/.agents/skills/` |
| **OpenCode** | `~/.config/opencode/skills/` |

Pick your line and run it:

```bash
DIR=~/.copilot/skills/flashback        # ← swap in the path for your agent
mkdir -p "$DIR"
curl -fsSL https://toby.github.io/flashback/skill/SKILL.md -o "$DIR/SKILL.md"
```

Restart the agent (or reload its skills). After that it pulls Flashback in on its
own whenever you name a year — or you can call it out by name. (Claude Code also
exposes it as a direct `/flashback` command.)

It's the same file everywhere — all four read the [Agent Skills](https://agentskills.io)
`SKILL.md` format. Codex and OpenCode both look in `~/.agents/skills/`, so one
copy there can serve them both. Cloned this repo and running Copilot CLI? It's
already wired up as a project skill.

## Using the skill

Talk to your agent like you'd brief a creative director. Name a year, point at
the work:

```text
Design a landing page with a 1981 feeling.
```

```text
Three directions for a finance app, grounded in 1984 — then critique them.
```

```text
What era does this interface accidentally belong to, and how do I make it
more memorable without hurting usability?
```

Ask for whatever you want out the other end: a few distinct directions, a design
brief, a full system (type, color, layout, motion, voice), a sharp critique, or
an implementation-ready handoff. Name one year or several and Flashback will
blend them or play them against each other. Ask for a year it hasn't researched
yet and it grounds you in the nearest one it has — and tells you it did.

## What's inside a year

Every year in the archive is a real research dossier, not a mood board. The skill
reads the whole thing before it designs:

- **Thesis** — the one idea that defines the year.
- **Design climate** — the tensions in the air and what's about to break.
- **Timeline signals** — the events that actually moved design.
- **Typography & graphic design** — the visual language, up close.
- **Recipes** — named directions, each with palette, type, layout, imagery,
  motion, and the risk that comes with it.
- **Anti-clichés** — the costume-y moves to skip, so the work reads as reference,
  not fancy dress.
- **Prompt seeds** — starting points you can run with.
- **Reference artifacts** — the objects, prints, and spaces to anchor on.

Want to read one cover to cover? Every year is browsable at
**[toby.github.io/flashback](https://toby.github.io/flashback/)**.

## Design since 1900

Flashback starts its clock at 1900 — roughly when design began arguing with
itself and never stopped. The whole century, decade by decade — open any one to
drop into the archive:

- **[1900s](https://toby.github.io/flashback/#1900s) — ornament meets the machine.** Art Nouveau peaks as Cubism cracks it open.
- **[1910s](https://toby.github.io/flashback/#1910s) — the avant-garde detonates.** Futurism, Suprematism, Dada, and war posters.
- **[1920s](https://toby.github.io/flashback/#1920s) — the grid is invented.** Bauhaus, De Stijl, Constructivism, the new sans-serif.
- **[1930s](https://toby.github.io/flashback/#1930s) — streamline and deco.** Aerodynamic glamour; the London Underground map (1933).
- **[1940s](https://toby.github.io/flashback/#1940s) — design goes to war, then rebuilds.** Propaganda, then a clean postwar reset.
- **[1950s](https://toby.github.io/flashback/#1950s) — Switzerland wins.** Helvetica (1957), the grid, and corporate identity.
- **[1960s](https://toby.github.io/flashback/#1960s) — order gets a rebellion.** Psychedelia melts the grid; Pop floods in.
- **[1970s](https://toby.github.io/flashback/#1970s) — two futures at once.** Punk's photocopier vs. NASA-clean optimism.
- **[1980s](https://toby.github.io/flashback/#1980s) — style becomes infrastructure.** Memphis, MTV, the desktop metaphor.
- **[1990s](https://toby.github.io/flashback/#1990s) — type breaks on purpose.** David Carson, grunge, rave flyers, the early web.
- **[2000s](https://toby.github.io/flashback/#2000s) — everything turns glossy.** Web 2.0 gradients and skeuomorphic leather.
- **[2010s](https://toby.github.io/flashback/#2010s) — the great flattening.** Flat design and Material smooth every edge.
- **[2020s](https://toby.github.io/flashback/#2020s) — all of it, at once.** Brutalist revivals, variable fonts, crafted maximalism.

None of it is costume. It's material. Flashback's whole job is pulling the right
decade into the work — and knowing the difference between *referencing* 1984 and
*cosplaying* it.
