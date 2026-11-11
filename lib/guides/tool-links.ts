import type { Guide } from "./types";

export interface ToolLink {
  href: string;
  title: string;
  text: string;
}

const SCHENGEN: ToolLink = {
  href: "/tools/schengen-calculator",
  title: "Schengen 90/180 calculator",
  text: "Count the visa-free days you have left before your visa or residence starts.",
};
const DEADLINES: ToolLink = {
  href: "/tools/moving-deadline-planner",
  title: "Moving deadline planner",
  text: "Enter your arrival date and get every official deadline for your move, ready for your calendar.",
};
const INCOME: ToolLink = {
  href: "/digital-nomad-visa-income-requirements",
  title: "Visa income requirements compared",
  text: "See this visa's money rule next to the alternatives, in your own currency.",
};
const FINDER: ToolLink = {
  href: "/tools/visa-finder",
  title: "Visa finder",
  text: "Answer a few questions and see which visas fit your move.",
};

/** Countries in the Schengen area that our guides cover. */
const SCHENGEN_CODES = new Set(["ES", "PT", "DE", "NL"]);
/** Countries the deadline planner supports. */
const PLANNER_CODES = new Set(["ES", "PT"]);
/** Guides about a visa that has an income or savings rule in the comparison. */
const INCOME_SLUGS = new Set([
  "spain-digital-nomad-visa",
  "portugal-d8-digital-nomad-visa",
  "spain-non-lucrative-visa",
  "thailand-dtv-visa-guide",
  "dubai-remote-work-visa",
  "moving-from-us-to-mexico",
]);

/** The free tools that are useful next to a guide (at most three). */
export function toolsForGuide(g: Guide): ToolLink[] {
  const out: ToolLink[] = [];
  if (PLANNER_CODES.has(g.toCode)) out.push(DEADLINES);
  if (SCHENGEN_CODES.has(g.toCode)) out.push(SCHENGEN);
  if (INCOME_SLUGS.has(g.slug)) out.push(INCOME);
  if (g.kind !== "topic") out.push(FINDER);
  return out.slice(0, 3);
}
