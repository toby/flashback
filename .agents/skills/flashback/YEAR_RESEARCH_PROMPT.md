# Flashback Year Corpus Research Prompt

Use this prompt to research and write a Flashback corpus entry for a specific year.

```text
You are updating the Flashback design-history corpus for YEAR: {YEAR}.

Goal:
Create or revise `corpus/{YEAR}.md` so it matches the depth, structure, specificity,
and citation quality of the researched Flashback corpus entries.

Repository context:
- Flashback is an agentic design partner that grounds briefs in design history,
  current signals, critique, accessibility, and implementation-ready direction.
- Corpus entries are not generic trend summaries. They are reusable design lenses.
- The entry should help future Flashback outputs produce historically literate
  territories, briefs, systems, critiques, and handoffs.

Process:
1. Read nearby corpus entries to understand local tone and structure.
2. Identify what changed from `{YEAR - 1}` to `{YEAR}`.
3. Research the year one domain at a time:
   - typography and graphic design
   - product, interaction, software, and hardware
   - architecture, interiors, retail, and public space
   - fashion and self-design
   - music and media distribution
   - film, television, motion, and screen culture
   - color, material, and surface
   - social, economic, technical, and cultural constraints
4. Prefer primary or institutionally reliable sources:
   - official company or product announcements
   - museum, archive, university, standards, or government sources
   - reputable journalism for contemporary reception
   - books/exhibition pages when available
5. Separate exact historical claims from interpretation.
6. Avoid era cliches unless you explain their real structure and limits.
7. Include accessibility implications where interface, type, color, motion,
   public information, or environmental design affects comprehension or use.

Required output shape:
- YAML front matter:
  - year
  - status: researched
  - title
  - subtitle
  - decade_position
  - primary_lens
- `# {YEAR}`
- `## Year thesis`
- `## How {YEAR} differs from {YEAR - 1}`
- `## Design climate`
- `## Timeline signals`
- `## Typography`
- `## Graphic design`
- `## Product and interaction design`
- `## Architecture and interiors`
- `## Fashion and self-design`
- `## Music`
- `## Film and moving image`
- `## Color, material, and surface`
- `## Design sections by discipline`
- `## Flashback design recipes`
- `## Anti-cliches`
- `## Design prompt seeds`
- `## Reference artifacts`
- `## Source notes`
- `## Sources`

Quality bar:
- Name concrete references, not just movements or vibes.
- Explain why each reference matters structurally for design.
- Include a clear dominant tension for the year.
- Include a timeline table with sourced claims.
- Include 4-6 reusable design recipes with use cases, palette, type, layout,
  imagery, motion, risk, and accuracy notes.
- Include anti-cliches that prevent lazy retro output.
- Use footnote citations for source-backed claims.
- Do not fabricate sources. If a source cannot be verified, either remove the
  claim or mark it as interpretive without a footnote.
- Keep the year specific. Do not import later-decade patterns unless the section
  explicitly says they are "not yet" or a future pressure.

Citation format:
Use Markdown footnotes:

[^source-id]: Source owner/title, short description if useful. URL

Validation:
After editing, run the existing corpus/CLI checks or at minimum confirm:
- front matter parses,
- the file has only one YAML front matter block,
- all major sections are present,
- no duplicate year entry was appended accidentally,
- every footnote reference has a matching source definition,
- `status` is `researched`.
```
