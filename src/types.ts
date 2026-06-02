import { z } from "zod";

export const SCHEMA_VERSION = "0.1.0";

export const ArtifactModeSchema = z.enum([
  "research",
  "territories",
  "brief",
  "system",
  "critique",
  "handoff"
]);

export type ArtifactMode = z.infer<typeof ArtifactModeSchema>;

export const CorpusCitationSchema = z.object({
  kind: z.literal("corpus"),
  year: z.number().int(),
  section: z.string().min(1),
  anchor: z.string().min(1),
  quote: z.string().min(1).optional()
});

export const WebCitationSchema = z.object({
  kind: z.literal("web"),
  url: z.url(),
  title: z.string().min(1),
  retrieved_at: z.string().min(1),
  claim: z.string().min(1)
});

export const CitationSchema = z.union([CorpusCitationSchema, WebCitationSchema]);

export const BriefSchema = z.object({
  prompt: z.string().min(1),
  medium: z.string().min(1),
  audience: z.string().min(1),
  constraints: z.array(z.string()),
  context: z.string().optional(),
  success_criteria: z.array(z.string()).optional(),
  anti_goals: z.array(z.string()).optional()
});

export const TerritorySchema = z.object({
  name: z.string().min(1),
  rationale: z.string().min(1),
  principles: z.array(z.string().min(1)).min(1),
  anti_cliches: z.array(z.string().min(1)).min(1),
  accessibility_notes: z.string().min(1),
  corpus_citations: z.array(CorpusCitationSchema).min(1)
});

export const ArtifactSchema = z.object({
  schema_version: z.literal(SCHEMA_VERSION),
  generated_at: z.string().min(1),
  mode: ArtifactModeSchema,
  grounding: BriefSchema,
  historical_references: z.array(CorpusCitationSchema).min(1),
  current_signals: z.array(WebCitationSchema),
  territories: z.array(TerritorySchema),
  critique: z.array(z.string()),
  recommendation: z.string().min(1),
  next_artifact: ArtifactModeSchema,
  content: z.record(z.string(), z.unknown()),
  citations: z.array(CitationSchema).min(1)
});

export type CorpusCitation = z.infer<typeof CorpusCitationSchema>;
export type WebCitation = z.infer<typeof WebCitationSchema>;
export type Brief = z.infer<typeof BriefSchema>;
export type Territory = z.infer<typeof TerritorySchema>;
export type Artifact = z.infer<typeof ArtifactSchema>;

export type StructuredError = {
  code: string;
  message: string;
  details?: unknown;
};
