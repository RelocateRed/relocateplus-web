import type { Guide } from "./types";

/**
 * Quality gate for route guides. Runs whenever the guides are loaded
 * (so `next build` fails on Vercel if a guide breaks the rules).
 *
 * Rules:
 *  1. Every claim has at least one source, and every source id exists.
 *  2. Every source has an https URL and an accessed date.
 *  3. Minimum substance: enough steps, documents, FAQs and official sources.
 *  4. No near-duplicate guides: a guide may not share more than
 *     MAX_SHARED_SENTENCE_RATIO of its sentences with any other guide.
 *  5. Staleness: published guides older than STALE_AFTER_DAYS print a warning
 *     (they don't fail the build, so a stale page never takes the site down).
 */

const MAX_SHARED_SENTENCE_RATIO = 0.15;
const STALE_AFTER_DAYS = 120;
const MIN_STEPS = 5;
const MIN_DOCUMENTS = 6;
const MIN_FAQS = 4;
const MIN_OFFICIAL_SOURCES = 4;

function claimsOf(g: Guide) {
  return [
    ...g.summary.map((x) => ({ where: "summary", text: x.text, ids: x.sourceIds })),
    ...g.keyFacts.map((x) => ({ where: `keyFact "${x.label}"`, text: x.value, ids: x.sourceIds })),
    ...g.visaOptions.map((x) => ({ where: `visa "${x.name}"`, text: x.requirement, ids: x.sourceIds })),
    ...(g.recentChanges ?? []).map((x) => ({ where: "recentChanges", text: x.text, ids: x.sourceIds })),
    ...g.steps.map((x) => ({ where: `step "${x.title}"`, text: x.detail, ids: x.sourceIds })),
    ...g.documents.map((x) => ({ where: `document "${x.item}"`, text: x.item, ids: x.sourceIds })),
    ...g.costs.map((x) => ({ where: `cost "${x.item}"`, text: x.amount, ids: x.sourceIds })),
    ...g.tax.map((x) => ({ where: "tax", text: x.text, ids: x.sourceIds })),
    ...(g.family ?? []).map((x) => ({ where: "family", text: x.text, ids: x.sourceIds })),
    ...g.pitfalls.map((x) => ({ where: "pitfalls", text: x.text, ids: x.sourceIds })),
    ...g.faqs.map((x) => ({ where: `faq "${x.q}"`, text: x.a, ids: x.sourceIds })),
  ];
}

function sentences(g: Guide): string[] {
  return claimsOf(g)
    .flatMap((c) => c.text.split(/(?<=[.!?])\s+/))
    .map((s) =>
      s
        .toLowerCase()
        // ignore country names so "Portugal" vs "Spain" doesn't hide copy-paste
        .replaceAll(g.toName.toLowerCase(), "<to>")
        .replaceAll(g.fromName.toLowerCase(), "<from>")
        .replace(/[^a-z0-9<> ]/g, "")
        .replace(/\s+/g, " ")
        .trim()
    )
    .filter((s) => s.split(" ").length >= 8);
}

export function validateGuides(guides: Guide[]): void {
  const errors: string[] = [];
  const slugs = new Set<string>();

  for (const g of guides) {
    if (slugs.has(g.slug)) errors.push(`Duplicate slug: ${g.slug}`);
    slugs.add(g.slug);

    const ids = new Set(g.sources.map((s) => s.id));
    for (const s of g.sources) {
      if (!s.url.startsWith("https://")) errors.push(`[${g.slug}] source "${s.id}" must use https`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(s.accessed)) errors.push(`[${g.slug}] source "${s.id}" needs accessed date YYYY-MM-DD`);
    }

    for (const c of claimsOf(g)) {
      if (!c.ids.length) errors.push(`[${g.slug}] ${c.where} has no source`);
      for (const id of c.ids) {
        if (!ids.has(id)) errors.push(`[${g.slug}] ${c.where} cites unknown source "${id}"`);
      }
    }

    if (g.steps.length < MIN_STEPS) errors.push(`[${g.slug}] needs at least ${MIN_STEPS} steps`);
    if (g.documents.length < MIN_DOCUMENTS) errors.push(`[${g.slug}] needs at least ${MIN_DOCUMENTS} documents`);
    if (g.faqs.length < MIN_FAQS) errors.push(`[${g.slug}] needs at least ${MIN_FAQS} FAQs`);
    const official = g.sources.filter((s) => s.official).length;
    if (official < MIN_OFFICIAL_SOURCES) errors.push(`[${g.slug}] needs at least ${MIN_OFFICIAL_SOURCES} official sources (has ${official})`);
    if (g.title.length > 70) errors.push(`[${g.slug}] title is ${g.title.length} chars (max 70)`);
    if (g.description.length > 165) errors.push(`[${g.slug}] description is ${g.description.length} chars (max 165)`);
    for (const f of g.faqs) {
      const words = f.a.split(/\s+/).length;
      if (words > 110) errors.push(`[${g.slug}] FAQ "${f.q}" answer is ${words} words (max 110)`);
    }
    for (const r of g.related) {
      if (!guides.some((o) => o.slug === r)) errors.push(`[${g.slug}] related guide "${r}" doesn't exist`);
    }

    if (g.status === "published") {
      if (!g.datePublished) errors.push(`[${g.slug}] published guides need datePublished`);
      const age = (Date.now() - new Date(g.lastVerified).getTime()) / 86_400_000;
      if (age > STALE_AFTER_DAYS) {
        console.warn(`⚠️  [guides] ${g.slug} was last verified ${Math.round(age)} days ago — re-check its facts.`);
      }
    }
  }

  // Near-duplicate check
  const sets = guides.map((g) => ({ slug: g.slug, s: new Set(sentences(g)) }));
  for (let i = 0; i < sets.length; i++) {
    for (let j = i + 1; j < sets.length; j++) {
      const a = sets[i];
      const b = sets[j];
      let shared = 0;
      a.s.forEach((x) => {
        if (b.s.has(x)) shared++;
      });
      const ratio = shared / Math.max(1, Math.min(a.s.size, b.s.size));
      if (ratio > MAX_SHARED_SENTENCE_RATIO) {
        errors.push(
          `[${a.slug}] and [${b.slug}] share ${Math.round(ratio * 100)}% of their sentences (max ${MAX_SHARED_SENTENCE_RATIO * 100}%). Rewrite for the specific route.`
        );
      }
    }
  }

  if (errors.length) {
    throw new Error(`Guide quality check failed:\n- ${errors.join("\n- ")}`);
  }
}
