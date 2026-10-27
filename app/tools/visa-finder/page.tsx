import type { Metadata } from "next";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";
import Container from "@/components/ui/container";
import VisaFinder, { type Rates } from "@/components/tools/visa-finder";
import { toScript } from "@/lib/guides/jsonld";
import { SITE_URL, appStoreLink } from "@/lib/site";

const TITLE = "Which Visa Could I Get? Free 2026 Visa Finder for Moving Abroad";
const DESCRIPTION =
  "Answer a few questions and see which visas fit your move — Spain, Portugal, Germany, the Netherlands, Dubai, Thailand, Mexico and Australia — checked against 2026 income rules.";
const URL = `${SITE_URL}/tools/visa-finder`;

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Relocate+` },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, title: TITLE, description: DESCRIPTION, siteName: "Relocate+", images: ["/opengraph-image.png"] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image.png"] },
};

// Refresh exchange rates once a day
export const revalidate = 86400;

async function getRates(): Promise<Rates> {
  try {
    const res = await fetch("https://api.frankfurter.dev/v1/latest?base=EUR&symbols=USD,GBP,THB,MXN,AUD", {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { date?: string; rates?: Record<string, number> };
    if (!data.date || !data.rates) return null;
    return { date: data.date, perEur: data.rates };
  } catch {
    return null;
  }
}

const FAQS = [
  {
    q: "Which country has the easiest digital nomad visa income requirement?",
    a: "Among the euro-based routes in this tool, Spain's telework visa has the lowest monthly figure: €2,442 (200% of the minimum wage). Portugal's D8 asks €3,680 and Dubai US$3,500. Each also has other conditions.",
  },
  {
    q: "Can I move abroad on savings without working?",
    a: "Yes, on routes like Spain's non-lucrative visa (€28,800 for the first year, no work allowed) or Portugal's D7 (12 times the minimum wage, €11,040 for one adult). Mexico's temporary residence also accepts a savings balance.",
  },
  {
    q: "Is this tool legal advice?",
    a: "No. It compares your numbers with the published money rules from our sourced guides. Consulates set their own paperwork and can change figures, so always confirm with the official source before applying.",
  },
  {
    q: "How are other currencies converted?",
    a: "Using the European Central Bank's daily reference rates. Your consulate may use a different rate or publish its own local-currency figure.",
  },
];

export default async function VisaFinderPage() {
  const rates = await getRates();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Relocate+ Visa Finder",
      url: URL,
      applicationCategory: "TravelApplication",
      operatingSystem: "Any (web browser)",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      description: DESCRIPTION,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-page pb-24 pt-32 lg:pt-40">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand">Free tool</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Which visa could you get?
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Tell us how you'll support yourself and where your passport is from. We'll show the visas that fit and
              check your numbers against each route's 2026 money rule — every figure comes from an official source.
            </p>
          </div>

          <div className="mt-12">
            <VisaFinder rates={rates} />
          </div>

          <section className="mt-24 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Questions about the visa finder</h2>
            <div className="mt-6 space-y-3">
              {FAQS.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-slate-200 bg-surface p-5" open>
                  <summary className="cursor-pointer list-none font-semibold text-slate-900">{f.q}</summary>
                  <p className="mt-3 leading-7 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-16 max-w-3xl on-dark rounded-[32px] bg-[#0B1530] p-8 text-white sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Found your route? Plan the whole move.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Relocate+ turns your visa into a step-by-step roadmap with deadlines, a document vault for the whole family and a moving budget.
            </p>
            <a
              href={appStoreLink("visa-finder")}
              className="mt-6 inline-flex rounded-full bg-[#2563EB] px-6 py-3 font-semibold !text-white transition-colors hover:bg-[#1D4ED8]"
            >
              Download on the App Store
            </a>
          </section>
        </Container>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toScript(jsonLd) }} />
    </>
  );
}
