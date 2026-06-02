import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { CorpusCitation } from "./types.js";
import { slugify } from "./utils.js";

export type CorpusSection = {
  heading: string;
  anchor: string;
  content: string;
};

export type CorpusEntry = {
  year: number;
  title: string;
  subtitle?: string;
  status?: string;
  primary_lens?: string[];
  body: string;
  sections: CorpusSection[];
};

function extractSections(markdown: string): CorpusSection[] {
  const headingRegex = /^##\s+(.+)$/gm;
  const matches: Array<{ title: string; index: number; end: number }> = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(markdown)) !== null) {
    matches.push({ title: match[1].trim(), index: match.index, end: headingRegex.lastIndex });
  }

  return matches.map((entry, idx) => {
    const sectionStart = entry.end;
    const sectionEnd = idx + 1 < matches.length ? matches[idx + 1].index : markdown.length;
    return {
      heading: entry.title,
      anchor: slugify(entry.title),
      content: markdown.slice(sectionStart, sectionEnd).trim()
    };
  });
}

export function loadCorpus(corpusDir = path.join(process.cwd(), "corpus")): CorpusEntry[] {
  const files = readdirSync(corpusDir)
    .filter((file) => file.endsWith(".md"))
    .sort();

  return files.map((file) => {
    const fullPath = path.join(corpusDir, file);
    const raw = readFileSync(fullPath, "utf8");
    const parsed = matter(raw);
    const data = parsed.data as Record<string, unknown>;

    return {
      year: Number(data.year),
      title: String(data.title ?? file.replace(/\.md$/, "")),
      subtitle: data.subtitle ? String(data.subtitle) : undefined,
      status: data.status ? String(data.status) : undefined,
      primary_lens: Array.isArray(data.primary_lens)
        ? data.primary_lens.map((item) => String(item))
        : undefined,
      body: parsed.content,
      sections: extractSections(parsed.content)
    };
  });
}

export function findCorpusEntry(entries: CorpusEntry[], year: number): CorpusEntry | undefined {
  return entries.find((entry) => entry.year === year);
}

export function searchCorpus(
  entries: CorpusEntry[],
  query: string,
  year?: number
): Array<{ year: number; title: string; heading: string; anchor: string; snippet: string }> {
  const q = query.trim().toLowerCase();
  const scope = year ? entries.filter((entry) => entry.year === year) : entries;
  const results: Array<{ year: number; title: string; heading: string; anchor: string; snippet: string }> = [];

  for (const entry of scope) {
    for (const section of entry.sections) {
      const haystack = `${entry.title}\n${section.heading}\n${section.content}`.toLowerCase();
      if (!haystack.includes(q)) {
        continue;
      }

      const idx = section.content.toLowerCase().indexOf(q);
      const start = Math.max(0, idx - 80);
      const end = Math.min(section.content.length, idx + q.length + 80);
      const snippet = section.content.slice(start, end).replace(/\s+/g, " ").trim();

      results.push({
        year: entry.year,
        title: entry.title,
        heading: section.heading,
        anchor: section.anchor,
        snippet
      });
    }
  }

  return results;
}

export function buildCorpusCitations(
  entries: CorpusEntry[],
  query: string,
  max = 4
): CorpusCitation[] {
  const found = searchCorpus(entries, query).slice(0, max);
  if (found.length > 0) {
    return found.map((item) => ({
      kind: "corpus",
      year: item.year,
      section: item.heading,
      anchor: item.anchor,
      quote: item.snippet
    }));
  }

  const candidates = entries
    .filter((entry) => entry.sections.length > 0)
    .sort((a, b) => a.year - b.year);

  if (candidates.length === 0) {
    return [];
  }

  const step = Math.max(1, Math.floor(candidates.length / Math.max(1, max)));
  const selected: CorpusEntry[] = [];

  for (let i = 0; i < candidates.length && selected.length < max; i += step) {
    selected.push(candidates[i]);
  }

  if (selected.length < max) {
    const latest = candidates[candidates.length - 1];
    if (latest && !selected.some((entry) => entry.year === latest.year)) {
      selected.push(latest);
    }
  }

  return selected.slice(0, max).map((entry) => {
    const first = entry.sections[0];
    return {
      kind: "corpus" as const,
      year: entry.year,
      section: first.heading,
      anchor: first.anchor,
      quote: first.content.slice(0, 120).replace(/\s+/g, " ").trim()
    };
  });
}
