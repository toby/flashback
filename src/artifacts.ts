import type { Artifact, ArtifactMode, Brief, CorpusCitation, Territory } from "./types.js";
import { SCHEMA_VERSION } from "./types.js";
import type { CorpusEntry } from "./corpus.js";
import { buildCorpusCitations } from "./corpus.js";
import { toIsoDate } from "./utils.js";

function inferBrief(briefText: string): Brief {
  return {
    prompt: briefText,
    medium: "interface",
    audience: "general users",
    constraints: [
      "Avoid generic visual language",
      "Keep accessibility as a first-order constraint",
      "Tie choices to historical and contemporary rationale"
    ],
    success_criteria: [
      "Produces differentiated directions",
      "Citations are machine-readable and valid",
      "Output is implementation-ready"
    ],
    anti_goals: [
      "Polished but generic output",
      "Uncited historical or trend claims"
    ]
  };
}

function buildTerritories(citations: CorpusCitation[]): Territory[] {
  return [
    {
      name: "Civic Archive Modernism",
      rationale: "Use public-information clarity with restrained expressiveness for trust and durability.",
      principles: [
        "Grid-first hierarchy",
        "Editorial typography with disciplined contrast",
        "Institutional clarity with human cadence"
      ],
      anti_cliches: [
        "Cold dashboard sameness",
        "Default blue enterprise styling"
      ],
      accessibility_notes: "Use AA+ contrast targets, stable focus states, and semantic landmarks for dense content.",
      corpus_citations: citations.slice(0, 2)
    },
    {
      name: "Haunted Hypercard",
      rationale: "Blend early personal-computing memory aesthetics with contemporary legibility and narrative flow.",
      principles: [
        "Layered cards and indexed navigation",
        "Monochrome base with one vivid accent",
        "Temporal storytelling in interaction"
      ],
      anti_cliches: [
        "Retro skeuomorphism overload",
        "Unreadable distressed typography"
      ],
      accessibility_notes: "Ensure motion can be reduced and all card transitions preserve reading order and keyboard access.",
      corpus_citations: citations.slice(1, 3)
    },
    {
      name: "Liquid Catalog",
      rationale: "Compose adaptive browsing experiences that feel curatorial, exploratory, and future-facing.",
      principles: [
        "Progressive disclosure",
        "Fluid grids with strict rhythm",
        "Systematic motion tied to meaning"
      ],
      anti_cliches: [
        "Ambient gradient-only identity",
        "Animation without hierarchy impact"
      ],
      accessibility_notes: "Preserve text clarity over layered backgrounds and provide no-motion alternatives for transitions.",
      corpus_citations: citations.slice(0, 1).concat(citations.slice(3, 4))
    }
  ];
}

function modeRecommendation(mode: ArtifactMode): { recommendation: string; next: ArtifactMode } {
  switch (mode) {
    case "research":
      return { recommendation: "Proceed to territories to compare differentiated directions.", next: "territories" };
    case "territories":
      return { recommendation: "Haunted Hypercard is strongest when memory and identity are central.", next: "brief" };
    case "brief":
      return { recommendation: "Lock strategic brief decisions, then derive the system artifact.", next: "system" };
    case "system":
      return { recommendation: "Translate the system into a handoff artifact with acceptance criteria.", next: "handoff" };
    case "critique":
      return { recommendation: "Resolve high-risk critique items before final handoff packaging.", next: "handoff" };
    case "handoff":
      return { recommendation: "Handoff is ready for implementation planning and task slicing.", next: "handoff" };
    default:
      return { recommendation: "Continue with the next artifact in the loop.", next: "brief" };
  }
}

function buildModeContent(mode: ArtifactMode, brief: Brief, territories: Territory[]): Record<string, unknown> {
  switch (mode) {
    case "research":
      return {
        lineage: ["Swiss modernism", "Postmodern editorial systems", "Early GUI metaphors"],
        anti_references: ["Generic SaaS flatness", "Decoration without rationale"],
        notes: `Research synthesis for: ${brief.prompt}`
      };
    case "territories":
      return {
        count: territories.length,
        directions: territories.map((t) => t.name)
      };
    case "brief":
      return {
        audience: brief.audience,
        goals: ["Differentiated identity", "Operational clarity"],
        principles: ["Specific beats polished", "History is material, not decoration"]
      };
    case "system":
      return {
        typography: ["Expressive serif for display", "Highly legible sans for interface body"],
        color: ["Monochrome spine", "One assertive accent"],
        layout: ["12-column desktop", "4-column mobile"],
        motion: ["Purposeful, reduced-motion-safe transitions"]
      };
    case "critique":
      return {
        strengths: ["Clear lineage", "Distinctive territory options"],
        failures: ["Some constraints remain broad"],
        priority_changes: ["Specify medium-specific component constraints"]
      };
    case "handoff":
      return {
        tokens: ["font.family.display", "color.accent.primary", "space.scale.4"],
        acceptance_criteria: ["All top-level screens preserve hierarchy at 320px", "Contrast remains AA+ for body text"]
      };
    default:
      return {};
  }
}

export function buildArtifact(
  mode: ArtifactMode,
  briefText: string,
  entries: CorpusEntry[],
  now: Date = new Date()
): Artifact {
  const grounding = inferBrief(briefText);
  const historicalReferences = buildCorpusCitations(entries, briefText, 4);
  const territories = buildTerritories(historicalReferences);
  const critique = [
    "Territories are differentiated by structure, not only palette.",
    "Accessibility constraints are present but should be verified during implementation.",
    "Current-signal claims are intentionally omitted in deterministic offline mode."
  ];
  const recommendation = modeRecommendation(mode);

  return {
    schema_version: SCHEMA_VERSION,
    generated_at: toIsoDate(now),
    mode,
    grounding,
    historical_references: historicalReferences,
    current_signals: [],
    territories,
    critique,
    recommendation: recommendation.recommendation,
    next_artifact: recommendation.next,
    content: buildModeContent(mode, grounding, territories),
    citations: historicalReferences
  };
}
