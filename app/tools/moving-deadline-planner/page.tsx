import type { Metadata } from "next";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";
import Container from "@/components/ui/container";
import DeadlinePlanner from "@/components/tools/deadline-planner";
import { toScript } from "@/lib/guides/jsonld";
import { SITE_URL, appStoreLink } from "@/lib/site";

const TITLE = "Moving to Spain or Portugal? Free 2026 Deadline Planner";
const DESCRIPTION =
  "Enter your arrival date and visa to get every official deadline for your move to Spain or Portugal — TIE, padrón, AIMA, Beckham Law, IFICI — and add them to your calendar.";
const URL = `${SITE_URL}/tools/moving-deadline-planner`;
const CHECKED = "2026-10-28";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Relocate+` },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, title: TITLE, description: DESCRIPTION, siteName: "Relocate+", images: ["/opengraph-image.png"] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image.png"] },
};

const COVERED = {
  Spain: [
    "Entry declaration within 3 working days if you arrive via another Schengen country",
    "TIE card application within 1 month of entry",
    "Padrón registration, and its 2-year renewal for non-EU residents",
    "Digital nomad visa: residence authorisation when 60 days remain",
    "Beckham Law: Form 149 within 6 months of your Social Security start",
    "UK licence exchange within 6 months of becoming resident",
  ],
  Portugal: [
    "NIF (tax number), as early as possible",
    "Tax representative or e-notifications within 15 days of a tax relationship",
    "AIMA residence permit inside the 4-month residence visa",
    "IFICI registration by 15 January of the year after you become resident",
  ],
};

const FAQS = [
  {
    q: "How long do I have to apply for a TIE in Spain?",
    a: "One month from entering Spain, if you have a visa or authorisation to stay more than six months. You apply in person.",
  },
  {
    q: "How long is a Portuguese residence visa valid?",
    a: "Four months, with two entries. You have to attend your AIMA appointment and apply for your residence permit inside that window.",
  },
  {
    q: "When is the deadline for Spain's Beckham Law?",
    a: "Six months from the date your work starts in Spain's Social Security system. You opt in with Form 149.",
  },
  {
    q: "What does the calendar file do?",
    a: "It's a standard .ics file that Apple Calendar, Google Calendar and Outlook can open. Each dated deadline becomes an all-day event with a reminder a week before.",
  },
];

export default function DeadlinePlannerPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Relocate+ moving deadline planner",
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
              Your moving deadlines for Spain and Portugal
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Enter your arrival date and visa, and see every official deadline for your first months — with the rule
              and its source for each one. Then add them all to your calendar in one tap.
            </p>
          </div>

          <div className="mt-12">
            <DeadlinePlanner />
          </div>

          <section className="mt-24 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Which deadlines the planner covers</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {Object.entries(COVERED).map(([c, items]) => (
                <div key={c} className="rounded-3xl border border-slate-200 bg-surface p-6">
                  <h3 className="font-semibold text-slate-900">{c === "Spain" ? "🇪🇸" : "🇵🇹"} {c}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    {items.map((i) => (
                      <li key={i} className="flex gap-2"><span aria-hidden="true" className="text-brand">•</span>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Every rule comes from the official sources in our moving guides, checked{" "}
              {new Date(CHECKED).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}.
            </p>
          </section>

          <section className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Questions about moving deadlines</h2>
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
            <h2 className="text-2xl font-bold sm:text-3xl">Every deadline, kept up to date for you</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Relocate+ builds your full roadmap from your visa and route, syncs every deadline to your calendar, and keeps
              your documents for each step in an encrypted vault.
            </p>
            <a href={appStoreLink("deadline-planner")} className="mt-6 inline-flex rounded-full bg-[#2563EB] px-6 py-3 font-semibold !text-white transition-colors hover:bg-[#1D4ED8]">
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
