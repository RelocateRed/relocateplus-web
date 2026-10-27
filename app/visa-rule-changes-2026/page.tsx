import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";
import Container from "@/components/ui/container";
import { getPublishedGuides } from "@/content/guides";
import { toScript } from "@/lib/guides/jsonld";
import { SITE_URL } from "@/lib/site";

const TITLE = "Visa & Moving Rule Changes in 2026: What's New by Country";
const DESCRIPTION =
  "Every 2026 rule change our moving guides track — new income thresholds, citizenship rules and closed visas — grouped by country, each with its official source.";
const URL = `${SITE_URL}/visa-rule-changes-2026`;

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Relocate+` },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { type: "article", url: URL, title: TITLE, description: DESCRIPTION, siteName: "Relocate+", images: ["/opengraph-image.png"] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image.png"] },
};

const COUNTRY: Record<string, { name: string; flag: string }> = {
  ES: { name: "Spain", flag: "🇪🇸" },
  PT: { name: "Portugal", flag: "🇵🇹" },
  DE: { name: "Germany", flag: "🇩🇪" },
  NL: { name: "Netherlands", flag: "🇳🇱" },
  AE: { name: "United Arab Emirates", flag: "🇦🇪" },
  TH: { name: "Thailand", flag: "🇹🇭" },
  MX: { name: "Mexico", flag: "🇲🇽" },
  AU: { name: "Australia", flag: "🇦🇺" },
  US: { name: "United States", flag: "🇺🇸" },
  INT: { name: "Any destination", flag: "🌍" },
};

type Item = {
  text: string;
  sources: { title: string; url: string; official: boolean }[];
  guides: { href: string; title: string }[];
};

function figures(text: string) {
  return new Set(text.match(/\d[\d.,/]*\d|€\d+/g) ?? []);
}

function sharesFigure(a: string, b: string) {
  const fa = figures(a);
  return [...figures(b)].some((f) => fa.has(f));
}

function collect() {
  const byCountry = new Map<string, Map<string, Item>>();
  for (const g of getPublishedGuides()) {
    for (const c of g.recentChanges ?? []) {
      const key = COUNTRY[g.toCode] ? g.toCode : "INT";
      if (!byCountry.has(key)) byCountry.set(key, new Map());
      const items = byCountry.get(key)!;
      const guide = { href: `/guides/${g.slug}`, title: g.h1 };
      const sources = c.sourceIds
        .map((id) => g.sources.find((s) => s.id === id))
        .filter((s): s is NonNullable<typeof s> => Boolean(s))
        .map((s) => ({ title: s.title, url: s.url, official: s.official }));

      // Two guides often report the same change in different words. Treat items as the same
      // change when they cite the same main source AND mention the same figure or date.
      const same = [...items.values()].find(
        (it) => it.sources[0]?.url === sources[0]?.url && sharesFigure(it.text, c.text),
      );
      if (same) {
        if (!same.guides.some((x) => x.href === guide.href)) same.guides.push(guide);
        for (const s of sources) if (!same.sources.some((x) => x.url === s.url)) same.sources.push(s);
        // Prefer the wording from a general (visa or topic) guide over a route-specific one
        if (g.kind !== "route") same.text = c.text;
        continue;
      }
      items.set(`${g.slug}:${c.text}`, { text: c.text, sources, guides: [guide] });
    }
  }
  return [...byCountry.entries()]
    .map(([code, items]) => ({ code, ...COUNTRY[code], items: [...items.values()] }))
    .sort((a, b) => b.items.length - a.items.length);
}

export default function RuleChangesPage() {
  const groups = collect();
  if (!groups.length) notFound();
  const guides = getPublishedGuides();
  const updated = guides.map((g) => g.lastVerified).sort().at(-1)!;
  const total = groups.reduce((n, g) => n + g.items.length, 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    url: URL,
    dateModified: updated,
    author: { "@type": "Organization", name: "Relocate+", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Relocate+", url: SITE_URL },
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#FAFBFF] pb-24 pt-32 lg:pt-40">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">Updated {new Date(updated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Visa and moving rule changes in 2026
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Income thresholds move with minimum wages, citizenship rules get stricter and some visas close. Here are
              the {total} recent changes that affect moves in 2026, grouped by country. Each one links to its source and to the
              guide where we explain what it means for your move.
            </p>
            <nav aria-label="Countries" className="mt-8 flex flex-wrap gap-2">
              {groups.map((g) => (
                <a key={g.code} href={`#${g.code.toLowerCase()}`} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium !text-slate-700 hover:border-blue-200 hover:!text-[#2563EB]">
                  {g.flag} {g.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-14 max-w-3xl space-y-14">
            {groups.map((g) => (
              <section key={g.code} id={g.code.toLowerCase()} aria-labelledby={`h-${g.code}`} className="scroll-mt-28">
                <h2 id={`h-${g.code}`} className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  <span aria-hidden="true">{g.flag}</span> {g.name}
                </h2>
                <ul className="mt-6 space-y-4">
                  {g.items.map((it) => (
                    <li key={it.text} className="rounded-3xl border border-amber-200 bg-amber-50/50 p-5 sm:p-6">
                      <p className="leading-7 text-slate-800">{it.text}</p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                        {it.guides.map((gd) => (
                          <Link key={gd.href} href={gd.href} className="font-semibold !text-[#2563EB] hover:underline">
                            {gd.title} →
                          </Link>
                        ))}
                      </div>
                      {it.sources.length ? (
                        <p className="mt-3 text-xs leading-5 text-slate-500">
                          Source{it.sources.length > 1 ? "s" : ""}:{" "}
                          {it.sources.map((s, i) => (
                            <span key={s.url}>
                              {i ? " · " : ""}
                              <a href={s.url} target="_blank" rel="noopener noreferrer" className="!text-slate-600 underline decoration-slate-300 hover:!text-slate-900">
                                {s.title}
                              </a>
                              {s.official ? "" : " (non-official)"}
                            </span>
                          ))}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-16 max-w-3xl rounded-[32px] border border-slate-200 bg-white p-8">
            <h2 className="text-xl font-bold text-slate-900">Not sure which visa fits you?</h2>
            <p className="mt-3 leading-7 text-slate-600">Check your income against each route's 2026 rule in our free visa finder.</p>
            <Link href="/tools/visa-finder" className="mt-5 inline-flex rounded-full bg-[#2563EB] px-6 py-3 font-semibold !text-white hover:bg-[#1D4ED8]">
              Open the visa finder →
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toScript(jsonLd) }} />
    </>
  );
}
