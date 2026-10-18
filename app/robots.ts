import type { MetadataRoute } from "next";

/**
 * Served at /robots.txt. (The old file was named robot.ts, so Next.js never
 * served it.) Search engines and AI search crawlers are explicitly allowed;
 * they need access to cite our pages. Private/utility routes are excluded.
 */
const PRIVATE = ["/shared/", "/reset-password", "/confirm", "/confirmed", "/confirm-error"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },
      // AI search / answer engines (used when ChatGPT, Claude, Perplexity search the web)
      { userAgent: ["OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User"], allow: "/", disallow: PRIVATE },
    ],
    sitemap: "https://relocate-plus.com/sitemap.xml",
    host: "https://relocate-plus.com",
  };
}
