import { describe, expect, it } from "vitest";
import { buildArtifact } from "../src/artifacts.js";
import { loadCorpus } from "../src/corpus.js";
import { ArtifactSchema, SCHEMA_VERSION } from "../src/types.js";

describe("artifacts", () => {
  it("builds a deterministic artifact that matches schema", () => {
    const entries = loadCorpus();
    const artifact = buildArtifact(
      "territories",
      "Design a memory archive interface with Swiss clarity",
      entries,
      new Date("2026-06-02T00:00:00.000Z")
    );

    const parsed = ArtifactSchema.parse(artifact);

    expect(parsed.schema_version).toBe(SCHEMA_VERSION);
    expect(parsed.generated_at).toBe("2026-06-02");
    expect(parsed.mode).toBe("territories");
    expect(parsed.territories.length).toBe(3);
    expect(parsed.citations.length).toBeGreaterThan(0);
    expect(parsed.current_signals.length).toBe(0);
  });

  it("sets expected next artifact by mode", () => {
    const entries = loadCorpus();

    const brief = buildArtifact("brief", "Create a design brief", entries);
    const research = buildArtifact("research", "Do research", entries);
    const critique = buildArtifact("critique", "Critique this concept", entries);

    expect(brief.next_artifact).toBe("system");
    expect(research.next_artifact).toBe("territories");
    expect(critique.next_artifact).toBe("handoff");
  });
});
