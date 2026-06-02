import { describe, expect, it } from "vitest";
import { buildCorpusCitations, findCorpusEntry, loadCorpus, searchCorpus } from "../src/corpus.js";

describe("corpus", () => {
  it("loads all corpus entries from markdown files", () => {
    const entries = loadCorpus();
    const years = entries.map((entry) => entry.year);

    expect(entries.length).toBeGreaterThanOrEqual(5);
    expect(new Set(years).size).toBe(entries.length);
    expect([...years].sort((a, b) => a - b)).toEqual(years);
  });

  it("finds a corpus entry by year", () => {
    const entries = loadCorpus();
    const targetYear = entries[Math.floor(entries.length / 2)]?.year ?? entries[0].year;
    const entry = findCorpusEntry(entries, targetYear);

    expect(entry).toBeDefined();
    expect(entry?.year).toBe(targetYear);
    expect(entry?.sections.length).toBeGreaterThan(0);
  });

  it("searches corpus sections and returns snippets", () => {
    const entries = loadCorpus();
    const targetYear = entries[0].year;
    const results = searchCorpus(entries, "typography", targetYear);

    expect(results.length).toBeGreaterThan(0);
    expect(results[0].year).toBe(targetYear);
    expect(results[0].anchor.length).toBeGreaterThan(0);
    expect(results[0].snippet.length).toBeGreaterThan(0);
  });

  it("builds machine-readable corpus citations", () => {
    const entries = loadCorpus();
    const citations = buildCorpusCitations(entries, "Walkman", 3);

    expect(citations.length).toBeGreaterThan(0);
    expect(citations[0].kind).toBe("corpus");
    expect(citations[0].year).toBeTypeOf("number");
    expect(citations[0].anchor.length).toBeGreaterThan(0);
  });
});
