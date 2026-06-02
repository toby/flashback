# Flashback Agent Quickstart

This repository is designed for host-agent-first workflows.

If your client supports skills, use:

- `.agents/skills/flashback/SKILL.md`

## What Flashback Is

Flashback is an agentic design partner that grounds briefs, excavates design history, reads the present, proposes territories, critiques options, and hands off implementation-ready artifacts.

## Preferred Workflow

1. Ground the brief and constraints.
2. Pull historical references from `corpus/`.
3. Use host web tools for current signals when available.
4. Produce 2-3 territories.
5. Critique before selecting.
6. Output a mode artifact: `research`, `territories`, `brief`, `system`, `critique`, or `handoff`.
7. Include citations with retrieval dates for web claims.

## Current Local Sources

- `README.md`
- `corpus/1980.md`
- `corpus/1981.md`
- `corpus/1982.md`
- `corpus/1983.md`
- `corpus/1984.md`
- `corpus/1990.md`
- `corpus/2000.md`
- `corpus/2010.md`
- `corpus/2020.md`
- `examples/1980/index.html`
- `examples/1981/index.html`
- `examples/1982/index.html`
- `examples/1983/index.html`
- `.agents/skills/flashback/YEAR_RESEARCH_PROMPT.md`

## Fallback Behavior

If schema tooling is not yet implemented, still enforce structured output:

- clear mode selection,
- explicit assumptions,
- references and anti-references,
- critique section,
- recommendation section,
- machine-readable citation blocks.

## Near-Term Roadmap Order

1. Skill-first workflow and conventions.
2. Shared schema/core implementation.
3. CLI surface with stable `--json` output.
4. MCP stdio server over the same core.
