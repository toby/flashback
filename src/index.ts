#!/usr/bin/env node

import { Command } from "commander";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { buildArtifact } from "./artifacts.js";
import { findCorpusEntry, loadCorpus, searchCorpus } from "./corpus.js";
import { formatArtifactMarkdown, parseMode } from "./format.js";
import { ArtifactModeSchema, ArtifactSchema, type StructuredError } from "./types.js";

type CommonArtifactOptions = {
  mode?: string;
  file?: string;
  json?: boolean;
  output?: string;
};

function emit(data: unknown, asJson: boolean): void {
  if (asJson) {
    process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
    return;
  }

  if (typeof data === "string") {
    process.stdout.write(`${data}\n`);
    return;
  }

  process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
}

function exitWithError(error: StructuredError, asJson = false): never {
  if (asJson) {
    process.stderr.write(`${JSON.stringify({ error }, null, 2)}\n`);
  } else {
    process.stderr.write(`Error [${error.code}]: ${error.message}\n`);
  }

  process.exit(1);
}

function readBriefInput(positional: string | undefined, options: CommonArtifactOptions): string {
  if (options.file) {
    return readFileSync(path.resolve(options.file), "utf8").trim();
  }

  if (positional && positional.trim().length > 0) {
    return positional.trim();
  }

  exitWithError({
    code: "MISSING_BRIEF",
    message: "Provide a brief as an argument or pass --file <path>."
  }, options.json);
}

function writeIfRequested(outputPath: string | undefined, value: string): void {
  if (!outputPath) {
    return;
  }

  writeFileSync(path.resolve(outputPath), value, "utf8");
}

function runArtifactCommand(modeRaw: string, briefArg: string | undefined, options: CommonArtifactOptions): void {
  const asJson = Boolean(options.json);
  const mode = parseMode(modeRaw);
  const briefText = readBriefInput(briefArg, options);

  const entries = loadCorpus();
  const artifact = buildArtifact(mode, briefText, entries);
  const validated = ArtifactSchema.parse(artifact);

  const payload = asJson ? JSON.stringify(validated, null, 2) : formatArtifactMarkdown(validated);
  writeIfRequested(options.output, payload);
  emit(asJson ? validated : payload, asJson);
}

const program = new Command();

program
  .name("flashback")
  .description("Flashback deterministic CLI")
  .version("0.1.0");

const corpus = program.command("corpus").description("Corpus tools");

corpus
  .command("list")
  .option("--json", "output JSON")
  .action((options: { json?: boolean }) => {
    const entries = loadCorpus();
    const data = entries.map((entry) => ({
      year: entry.year,
      title: entry.title,
      status: entry.status,
      sections: entry.sections.length
    }));

    emit(data, Boolean(options.json));
  });

corpus
  .command("show")
  .argument("<year>")
  .option("--section <section>", "filter to a specific section heading")
  .option("--json", "output JSON")
  .action((yearRaw: string, options: { section?: string; json?: boolean }) => {
    const year = Number(yearRaw);
    const entries = loadCorpus();
    const entry = findCorpusEntry(entries, year);

    if (!entry) {
      exitWithError({ code: "NOT_FOUND", message: `No corpus entry found for year ${year}.` }, Boolean(options.json));
    }

    if (options.section) {
      const target = entry.sections.find(
        (section) => section.heading.toLowerCase() === options.section?.toLowerCase() || section.anchor === options.section
      );

      if (!target) {
        exitWithError({
          code: "SECTION_NOT_FOUND",
          message: `Section '${options.section}' not found for year ${year}.`
        }, Boolean(options.json));
      }

      emit({ year: entry.year, title: entry.title, section: target }, Boolean(options.json));
      return;
    }

    emit(entry, Boolean(options.json));
  });

corpus
  .command("search")
  .argument("<query>")
  .option("--year <year>", "limit to one year")
  .option("--json", "output JSON")
  .action((query: string, options: { year?: string; json?: boolean }) => {
    const entries = loadCorpus();
    const year = options.year ? Number(options.year) : undefined;
    const results = searchCorpus(entries, query, year);
    emit(results, Boolean(options.json));
  });

program
  .command("context")
  .argument("[brief]")
  .requiredOption("--mode <mode>", "artifact mode")
  .option("--file <path>", "path to brief file")
  .option("--json", "output JSON")
  .option("--output <path>", "write output to file")
  .action((brief: string | undefined, options: CommonArtifactOptions) => {
    if (!options.mode) {
      exitWithError({ code: "MISSING_MODE", message: "context requires --mode." }, Boolean(options.json));
    }

    runArtifactCommand(options.mode, brief, options);
  });

for (const mode of ArtifactModeSchema.options) {
  program
    .command(mode)
    .argument("[brief]")
    .option("--file <path>", "path to brief file")
    .option("--json", "output JSON")
    .option("--output <path>", "write output to file")
    .action((brief: string | undefined, options: CommonArtifactOptions) => {
      runArtifactCommand(mode, brief, options);
    });
}

program
  .command("validate")
  .argument("<artifactPath>")
  .option("--mode <mode>", "optional expected mode")
  .option("--json", "output JSON")
  .action((artifactPath: string, options: { mode?: string; json?: boolean }) => {
    try {
      const raw = readFileSync(path.resolve(artifactPath), "utf8");
      const artifact = ArtifactSchema.parse(JSON.parse(raw));

      if (options.mode) {
        const expectedMode = parseMode(options.mode);
        if (artifact.mode !== expectedMode) {
          exitWithError({
            code: "MODE_MISMATCH",
            message: `Artifact mode '${artifact.mode}' does not match expected mode '${expectedMode}'.`
          }, Boolean(options.json));
        }
      }

      emit({ ok: true, schema_version: artifact.schema_version, mode: artifact.mode }, Boolean(options.json));
    } catch (error) {
      exitWithError({
        code: "VALIDATION_FAILED",
        message: "Artifact validation failed.",
        details: error instanceof Error ? error.message : String(error)
      }, Boolean(options.json));
    }
  });

program.parse();
