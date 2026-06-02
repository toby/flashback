import { describe, expect, it } from "vitest";
import { formatArtifactMarkdown, parseMode } from "../src/format.js";
import { buildArtifact } from "../src/artifacts.js";
import { loadCorpus } from "../src/corpus.js";

describe("format", () => {
  it("accepts supported modes", () => {
    expect(parseMode("research")).toBe("research");
    expect(parseMode("handoff")).toBe("handoff");
  });

  it("throws on unsupported modes", () => {
    expect(() => parseMode("tokens")).toThrowError(/Unsupported mode/);
  });

  it("renders artifact markdown with key sections", () => {
    const entries = loadCorpus();
    const artifact = buildArtifact("brief", "Build a strong design brief", entries, new Date("2026-06-02T00:00:00.000Z"));

    const output = formatArtifactMarkdown(artifact);

    expect(output).toContain("# Flashback brief");
    expect(output).toContain("## Grounding");
    expect(output).toContain("## Historical References");
    expect(output).toContain("## Territories");
    expect(output).toContain("## Recommendation");
  });
});
