export function slugify(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function safeJsonParse<T>(raw: string): T {
  return JSON.parse(raw) as T;
}

export function toIsoDate(value: Date = new Date()): string {
  return value.toISOString().slice(0, 10);
}
