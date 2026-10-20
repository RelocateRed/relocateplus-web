/**
 * Content model for route guides ("Moving from X to Y").
 *
 * Every factual claim (visa rules, amounts, fees, deadlines, tax rules) must
 * point to at least one entry in `sources` via `sourceIds`. The build fails if
 * a claim has no source, a source id doesn't exist, or a guide is too similar
 * to another guide (see lib/guides/validate.ts).
 */

export type GuideStatus = "draft" | "published";

export interface Source {
  /** Short id used in sourceIds, e.g. "aima-subsistence" */
  id: string;
  title: string;
  /** Who published it, e.g. "AIMA (Portuguese immigration agency)" */
  publisher: string;
  url: string;
  /** true for government / consulate / official gazette sources */
  official: boolean;
  /** Date we last checked the source (YYYY-MM-DD) */
  accessed: string;
}

export interface Sourced {
  sourceIds: string[];
}

export interface KeyFact extends Sourced {
  label: string;
  value: string;
}

export interface VisaOption extends Sourced {
  name: string;
  /** Who this route is for, in one sentence */
  bestFor: string;
  /** The money / eligibility requirement in plain words */
  requirement: string;
  notes?: string[];
}

export interface Step extends Sourced {
  /** e.g. "3–6 months before" */
  when: string;
  title: string;
  detail: string;
}

export interface ChecklistItem extends Sourced {
  item: string;
  note?: string;
}

export interface CostItem extends Sourced {
  item: string;
  amount: string;
  note?: string;
}

export interface Paragraph extends Sourced {
  text: string;
}

export interface Faq extends Sourced {
  q: string;
  /** Keep answers short (under ~90 words): first sentence answers the question */
  a: string;
}

export interface Guide {
  slug: string;
  status: GuideStatus;
  /** Country codes, used for hub grouping and the app deep link */
  fromCode: string;
  toCode: string;
  fromName: string;
  toName: string;
  /** Category used for the hub page */
  /** route = country to country, visa = one visa for all nationalities, topic = practical how-to */
  kind: "route" | "visa" | "topic";

  /** Optional heading overrides (mainly for topic pages) */
  labels?: { visas?: string; costs?: string };

  /** <title>, ~55–65 characters */
  title: string;
  /** Meta description, ~140–160 characters */
  description: string;
  h1: string;
  /** Answer-first summary shown at the top (2–4 sentences) */
  summary: Paragraph[];

  /** Date every fact on the page was last checked against its source */
  lastVerified: string;
  /** First publish date (YYYY-MM-DD); set when status flips to published */
  datePublished?: string;

  keyFacts: KeyFact[];
  visaOptions: VisaOption[];
  /** Things that changed recently and that readers often get wrong */
  recentChanges?: Paragraph[];
  steps: Step[];
  documents: ChecklistItem[];
  costs: CostItem[];
  costNote?: string;
  /** Optional for topic pages */
  tax?: Paragraph[];
  family?: Paragraph[];
  pitfalls: Paragraph[];
  faqs: Faq[];
  sources: Source[];

  /** One route-specific sentence used in the Relocate+ box */
  appPitch: string;
  related: string[];
}
