import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";
import Container from "@/components/ui/container";
import SchengenCalculator from "@/components/tools/schengen-calculator";
import { toScript } from "@/lib/guides/jsonld";
import { SITE_URL, appStoreLink } from "@/lib/site";
import AppQr from "@/components/ui/app-qr";

const TITLE = "Schengen 90/180 Calculator: How Many Days Do I Have Left?";
const DESCRIPTION =
  "Free Schengen calculator: add your trips and see how many of your 90 days you've used in the last 180, and how long you can stay on your next trip.";
const URL = `${SITE_URL}/tools/schengen-calculator`;
const CHECKED = "2026-10-28";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Relocate+` },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, title: TITLE, description: DESCRIPTION, siteName: "Relocate+", images: ["/opengraph-image.png"] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image.png"] },
};

const SOURCES = {
  calc: { title: "Short-stay calculator", publisher: "European Commission (Migration and Home Affairs)", url: "https://home-affairs.ec.europa.eu/policies/schengen/border-crossing/short-stay-calculator_en" },
  manual: { title: "Short-stay Schengen calculator: user manual", publisher: "European Commission", url: "https://home-affairs.ec.europa.eu/system/files/2020-09/short_stay_schengen_calculator_user_manual_en.pdf" },
  ees: { title: "The new Entry/Exit System went live on 12 October 2025", publisher: "European Commission", url: "https://home-affairs.ec.europa.eu/news/new-entryexit-system-went-live-12-october-2025-10-13_en" },
  eesFull: { title: "Entry/Exit System: full implementation from 10 April 2026", publisher: "Government of Poland (Embassy in Washington)", url: "https://www.gov.pl/web/usa-en/entryexit-system---full-implementation-from-april-10th-2026" },
};

const EU_SCHENGEN = [
  "Austria", "Belgium", "Bulgaria", "Croatia", "Czechia", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Italy",
  "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden",
];
const NON_EU_SCHENGEN = ["Iceland", "Liechtenstein", "Norway", "Switzerland"];

const FAQS = [
  {
    q: "How does the Schengen 90/180 rule work?",
    a: "You can stay up to 90 days in any 180-day period. For each day you're in the Schengen area, count back 180 days (including that day): the days you spent there in that window can't add up to more than 90.",
  },
  {
    q: "Do the entry and exit days count?",
    a: "Yes. The day you enter counts as the first day of your stay and the day you leave counts as the last.",
  },
  {
    q: "Do days on a residence permit or D visa count?",
    a: "No. Time spent in the Schengen area on a residence permit or a long-stay (national D) visa isn't counted towards the 90 days.",
  },
  {
    q: "Which countries are in the Schengen area?",
    a: "29 countries: 25 EU member states plus Iceland, Liechtenstein, Norway and Switzerland. Cyprus and Ireland are in the EU but not in Schengen.",
  },
  {
    q: "Does the Entry/Exit System (EES) change the rule?",
    a: "No, the 90/180 rule is the same. But since EES became fully operational on 10 April 2026, your entries and exits are recorded electronically, so overstays are easier for border guards to spot.",
  },
];

export default function SchengenCalculatorPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Relocate+ Schengen 90/180 calculator",
      url: URL,
      applicationCategory: "TravelApplication",
      operatingSystem: "Any (web browser)",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      description: DESCRIPTION,
      dateModified: CHECKED,
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
              Schengen 90/180 calculator
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Add your trips to the Schengen area and see how many of your 90 days you've used in the last 180, and how
              long you can stay next time. It counts days the same way as the European Commission's own calculator.
            </p>
          </div>

          <div className="mt-12">
            <SchengenCalculator />
          </div>

          <section className="mt-24 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">How the 90/180 rule works</h2>
            <div className="mt-6 space-y-4 leading-8 text-slate-600">
              <p>
                Non-EU visitors can usually stay in the Schengen area for up to 90 days in any 180-day period. The window
                moves: for every day you're there, count back 180 days, and the days of stay in that window can't add up
                to more than 90. The day you enter and the day you leave both count.
              </p>
              <p>
                Time on a residence permit or a long-stay (D) visa doesn't count. So once your Spanish or Portuguese
                residence visa starts, those days stop eating into your 90 — but days you spend there as a visitor
                before it starts still count.
              </p>
              <p>
                If you have a short-stay visa with a shorter permitted stay printed on it, that shorter limit applies
                instead.
              </p>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Sources: <SourceLink s={SOURCES.calc} /> · <SourceLink s={SOURCES.manual} />. Checked {new Date(CHECKED).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}.
            </p>
          </section>

          <section className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">The 29 Schengen countries</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Days in any of these countries count towards the same 90. Cyprus and Ireland are in the EU but not in Schengen.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-[2fr_1fr]">
              <div className="rounded-3xl border border-slate-200 bg-surface p-6">
                <h3 className="font-semibold text-slate-900">25 EU countries</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{EU_SCHENGEN.join(" · ")}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-surface p-6">
                <h3 className="font-semibold text-slate-900">4 non-EU countries</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{NON_EU_SCHENGEN.join(" · ")}</p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">Source: <SourceLink s={SOURCES.calc} />.</p>
          </section>

          <section className="mt-16 max-w-3xl rounded-[28px] border border-amber-200 bg-amber-50/50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">Your days are now counted electronically</h2>
            <p className="mt-3 leading-7 text-slate-700">
              The EU's Entry/Exit System (EES) went live on 12 October 2025 and has been fully operational since 10 April
              2026. Your passport is registered with fingerprints and a photo at the Schengen border, and every entry and
              exit is recorded, so it's worth keeping your own count accurate.
            </p>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              Sources: <SourceLink s={SOURCES.ees} /> · <SourceLink s={SOURCES.eesFull} /> (non-EU government page).
            </p>
          </section>

          <section className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Staying longer than 90 days?</h2>
            <p className="mt-4 leading-8 text-slate-600">
              To live in a Schengen country you need a residence visa or permit. Our guides cover the main routes:
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["/guides/spain-digital-nomad-visa", "Spain's digital nomad visa"],
                ["/guides/portugal-d8-digital-nomad-visa", "Portugal's D8 digital nomad visa"],
                ["/guides/germany-opportunity-card", "Germany's Opportunity Card"],
                ["/tools/visa-finder", "Visa finder: which visa fits you?"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="block rounded-2xl border border-slate-200 bg-surface px-5 py-4 font-semibold !text-slate-900 hover:border-blue-200 hover:!text-brand">
                    {label} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Questions about the 90/180 rule</h2>
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
            <h2 className="text-2xl font-bold sm:text-3xl">Moving, not just visiting?</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Relocate+ turns your visa into a step-by-step roadmap with every deadline in your calendar, from your
              appointment to your residence card.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-8">
              <a href={appStoreLink("schengen-calculator")} className="inline-flex rounded-full bg-[#2563EB] px-6 py-3 font-semibold !text-white transition-colors hover:bg-[#1D4ED8]">
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

function SourceLink({ s }: { s: { title: string; publisher: string; url: string } }) {
  return (
    <a href={s.url} target="_blank" rel="noopener noreferrer" className="!text-slate-600 underline decoration-slate-300 hover:!text-slate-900">
      {s.publisher}: {s.title}
    </a>
  );
}
