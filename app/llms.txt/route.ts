import { getPublishedGuides } from "@/content/guides";
import { SITE_URL, APP_STORE_URL } from "@/lib/site";

/**
 * /llms.txt — a plain-text map of the site for AI tools (llmstxt.org format).
 * Low effort, low expected impact: Google says it doesn't use it and most AI
 * crawlers rarely request it. It's generated from the guide data so it never
 * needs manual upkeep.
 */
export const dynamic = "force-static";

export function GET() {
  const guides = getPublishedGuides();
  const lines = [
    "# Relocate+",
    "",
    "> Relocate+ is an iPhone app for planning an international move: a personal roadmap per origin and destination country (83 countries), visa and document tracking for the whole family, deadlines, a moving budget, a tax overview and an AI assistant. The website publishes route guides where every fact links to an official source.",
    "",
    `- [Relocate+ on the App Store](${APP_STORE_URL})`,
    `- [About Relocate+](${SITE_URL}/about)`,
    "",
    "## Tools",
    "",
    `- [Visa finder](${SITE_URL}/tools/visa-finder): answer a few questions to see which visas fit your move and check your income against 2026 rules`,
    `- [Visa and moving rule changes in 2026](${SITE_URL}/visa-rule-changes-2026): every rule change the guides track, by country, with sources`,
    "",
    "## Moving guides",
    "",
    ...guides.map((g) => `- [${g.h1}](${SITE_URL}/guides/${g.slug}): ${g.description} (facts verified ${g.lastVerified})`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
