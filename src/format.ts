import type { Artifact, ArtifactMode } from "./types.js";

export function parseMode(raw: string): ArtifactMode {
  const supported = new Set(["research", "territories", "brief", "system", "critique", "handoff"]);
  if (!supported.has(raw)) {
    throw new Error(`Unsupported mode '${raw}'. Supported modes: ${Array.from(supported).join(", ")}`);
  }

  return raw as ArtifactMode;
}

export function formatArtifactMarkdown(artifact: Artifact): string {
  const lines: string[] = [];

  lines.push(`# Flashback ${artifact.mode}`);
  lines.push("");
  lines.push(`Generated: ${artifact.generated_at}`);
  lines.push("");
  lines.push("## Grounding");
  lines.push(`- Prompt: ${artifact.grounding.prompt}`);
  lines.push(`- Medium: ${artifact.grounding.medium}`);
  lines.push(`- Audience: ${artifact.grounding.audience}`);
  lines.push("");

  lines.push("## Historical References");
  for (const ref of artifact.historical_references) {
    lines.push(`- ${ref.year} / ${ref.section} (${ref.anchor})`);
  }
  lines.push("");

  lines.push("## Territories");
  for (const territory of artifact.territories) {
    lines.push(`- ${territory.name}: ${territory.rationale}`);
  }
  lines.push("");

  lines.push("## Critique");
  for (const item of artifact.critique) {
    lines.push(`- ${item}`);
  }
  lines.push("");

  lines.push("## Recommendation");
  lines.push(artifact.recommendation);
  lines.push("");
  lines.push(`Next artifact: ${artifact.next_artifact}`);

  return lines.join("\n");
}
