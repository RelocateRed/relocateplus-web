import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";
import Container from "@/components/ui/container";
import IncomeTable from "@/components/tools/income-table";
import { toScript } from "@/lib/guides/jsonld";
import { getRates } from "@/lib/tools/rates";
import { ROUTES } from "@/lib/tools/visa-routes";
import { SITE_URL, appStoreLink } from "@/lib/site";
import AppQr from "@/components/ui/app-qr";

const TITLE = "Digital Nomad Visa Income Requirements 2026: Compared";
const DESCRIPTION =
  "Minimum income for digital nomad and retirement visas in 2026 — Spain, Portugal, Dubai, Mexico and Thailand — side by side in your currency, each with its official source.";
const URL = `${SITE_URL}/digital-nomad-visa-income-requirements`;
const CHECKED = "2026-10-28";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Relocate+` },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { type: "article", url: URL, title: TITLE, description: DESCRIPTION, siteName: "Relocate+", images: ["/opengraph-image.png"] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image.png"] },
};

export const revalidate = 86400;

const REMOTE = ["es-dnv", "pt-d8", "ae-remote", "mx-temp", "th-dtv"];
const PASSIVE = ["es-nlv", "pt-d7", "mx-temp"];

const FAQS = [
  {
    q: "Which digital nomad visa has the lowest income requirement?",
    a: "Of the routes we track, Spain's international telework visa: €2,442 a month in 2026 (200% of Spain's minimum wage), although some consulates calculate it from the annual minimum wage, about €2,849 a month.",
  },
  {
    q: "How much income do I need for Portugal's digital nomad visa?",
    a: "€3,680 a month in 2026 — four times Portugal's minimum wage of €920 — averaged over the last three months.",
  },
  {
    q: "Is there a digital nomad visa based on savings instead of income?",
    a: "Thailand's DTV asks for 500,000 THB in your bank account for each of the last three months, rather than a monthly income. Mexico's temporary residence accepts either monthly income or an average bank balance over 12 months.",
  },
  {
    q: "Why do the figures change every year?",
    a: "Spain and Portugal tie their thresholds to the national minimum wage, so they rise when it does. Mexico's are set in multiples of a daily wage unit that's updated yearly.",
  },
];

export default async function IncomeRequirementsPage() {
  const rates = await getRates();
  const pick = (ids: string[]) => ids.map((id) => ROUTES.find((r) => r.id === id)!).filter(Boolean);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      url: URL,
      dateModified: CHECKED,
      author: { "@type": "Organization", name: "Relocate+", url: SITE_URL },
      publisher: { "@type": "Organization", name: "Relocate+", url: SITE_URL },
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
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand">
              Checked {new Date(CHECKED).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Digital nomad visa income requirements in 2026, compared
            </h1>
            <div className="mt-6 rounded-[28px] border border-blue-100 bg-gradient-to-br from-tint to-surface p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Short answer</p>
              <p className="mt-3 text-lg leading-8 text-slate-700">
                Spain's telework visa has the lowest monthly figure of the routes we track: €2,442. Portugal's D8 asks
                €3,680, Dubai US$3,500 and Mexico about MXN 79,771 a month. Thailand's DTV wants 500,000 THB in savings
                instead. Each figure links to its official source.
              </p>
            </div>
          </div>

          <section className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Remote work and digital nomad visas</h2>
            <p className="mt-3 leading-7 text-slate-600">Sorted from the lowest monthly requirement. Savings-only routes are at the end.</p>
            <div className="mt-6">
              <IncomeTable routes={pick(REMOTE)} rates={rates} />
            </div>
          </section>

          <section className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Living on savings or a pension</h2>
            <p className="mt-3 leading-7 text-slate-600">
              These routes are for people who won't work in the country. Spain's non-lucrative visa doesn't allow any
              work, not even remote work for a foreign employer.
            </p>
            <div className="mt-6">
              <IncomeTable routes={pick(PASSIVE)} rates={rates} />
            </div>
          </section>

          <section className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Check your own numbers</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Our visa finder compares your income, savings and family with each rule, and shows how far above or below
              you are.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/tools/visa-finder" className="rounded-full bg-[#2563EB] px-6 py-3 font-semibold !text-white hover:bg-[#1D4ED8]">
                Open the visa finder →
              </Link>
              <Link href="/tools/schengen-calculator" className="rounded-full border border-slate-200 bg-surface px-6 py-3 font-semibold !text-slate-900 hover:border-blue-200">
                Schengen 90/180 calculator
              </Link>
            </div>
          </section>

          <section className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Questions about visa income requirements</h2>
            <div className="mt-6 space-y-3">
              {FAQS.map((f) => (
                <details key={f.q} className="rounded-2xl border border-slate-200 bg-surface p-5" open>
                  <summary className="cursor-pointer list-none font-semibold text-slate-900">{f.q}</summary>
                  <p className="mt-3 leading-7 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="on-dark mt-16 max-w-3xl rounded-[32px] bg-[#0B1530] p-8 text-white sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Picked your visa? Plan the move.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Relocate+ turns your visa into a roadmap with deadlines, a moving budget and an encrypted vault for every document.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-8">
              <a href={appStoreLink("income-requirements")} className="inline-flex rounded-full bg-[#2563EB] px-6 py-3 font-semibold !text-white transition-colors hover:bg-[#1D4ED8]">
                Download on the App Store
              </a>
              <AppQr dark />
            </div>
          </section>
        </Container>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toScript(jsonLd) }} />
    </>
  );
}
