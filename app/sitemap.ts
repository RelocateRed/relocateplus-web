import type { MetadataRoute } from "next";
import { getPublishedGuides } from "@/content/guides";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const guides = getPublishedGuides();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/support`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  if (!guides.length) return staticPages;

  const newest = guides.map((g) => g.lastVerified).sort().at(-1)!;

  return [
    ...staticPages,
    { url: `${SITE_URL}/tools/visa-finder`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/visa-rule-changes-2026`, lastModified: new Date(newest), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/guides`, lastModified: new Date(newest), changeFrequency: "weekly", priority: 0.8 },
    // lastModified = the date the facts were last verified, so Google sees real updates only
    ...guides.map((g) => ({
      url: `${SITE_URL}/guides/${g.slug}`,
      lastModified: new Date(g.lastVerified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
