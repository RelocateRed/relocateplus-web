import type { Guide } from "./types";
import { SITE_URL } from "@/lib/site";

/** Structured data that mirrors the visible page content exactly. */
export function guideJsonLd(g: Guide) {
  const url = `${SITE_URL}/guides/${g.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: g.h1,
        description: g.description,
        url,
        mainEntityOfPage: url,
        inLanguage: "en",
        datePublished: g.datePublished ?? g.lastVerified,
        dateModified: g.lastVerified,
        author: { "@type": "Organization", name: "Relocate+", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Relocate+",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
        },
        image: `${SITE_URL}/opengraph-image.png`,
        about: [{ "@type": "Country", name: g.toName }],
        citation: g.sources.map((s) => s.url),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: g.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Moving guides", item: `${SITE_URL}/guides` },
          { "@type": "ListItem", position: 3, name: g.h1, item: url },
        ],
      },
    ],
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#org`,
        name: "Relocate+",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
      },
      {
        "@type": "MobileApplication",
        name: "Relocate+",
        operatingSystem: "iOS",
        applicationCategory: "LifestyleApplication",
        description:
          "Relocation planner for international moves: personal roadmaps per country, visa and document tracking for the whole family, deadlines, a moving budget and an AI assistant.",
        url: "https://apps.apple.com/app/relocate-plus/id6789252666",
        publisher: { "@id": `${SITE_URL}#org` },
      },
    ],
  };
}

/** Escape so JSON can be safely embedded in a <script> tag. */
export function toScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
