import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";
import Container from "@/components/ui/container";
import { SITE_URL } from "@/lib/site";

const TITLE = "Free Tools for Moving Abroad: Visa Finder, Schengen Calculator & More";
const DESCRIPTION =
  "Free tools for planning a move abroad: find the visa that fits you, count your Schengen days, compare visa income requirements and get your moving deadlines.";
const URL = `${SITE_URL}/tools`;

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Relocate+` },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, title: TITLE, description: DESCRIPTION, siteName: "Relocate+", images: ["/opengraph-image.png"] },
};

const TOOLS = [
  { href: "/tools/visa-finder", icon: "🧭", title: "Visa finder", text: "Answer a few questions and see which visas fit your move, checked against each 2026 money rule." },
  { href: "/tools/schengen-calculator", icon: "📆", title: "Schengen 90/180 calculator", text: "Add your trips and see how many of your 90 days you've used and how long you can stay next time." },
  { href: "/tools/moving-deadline-planner", icon: "⏰", title: "Moving deadline planner", text: "Every official deadline for your move to Spain or Portugal, ready to add to your calendar." },
  { href: "/digital-nomad-visa-income-requirements", icon: "💶", title: "Visa income requirements compared", text: "Digital nomad and retirement visa income rules side by side, in your currency." },
  { href: "/visa-rule-changes-2026", icon: "📰", title: "2026 rule changes", text: "Every visa and moving rule change our guides track, grouped by country." },
];

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page pb-24 pt-32 lg:pt-40">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand">Free tools</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">Tools for planning your move abroad</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Free, no sign-up. Every figure and deadline comes from the official sources in our moving guides.
            </p>
          </div>
          <ul className="mt-12 grid max-w-5xl gap-4 sm:grid-cols-2">
            {TOOLS.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="group flex h-full gap-4 rounded-3xl border border-slate-200 bg-surface p-6 transition-colors hover:border-blue-200">
                  <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-2xl">{t.icon}</span>
                  <span>
                    <span className="block text-lg font-semibold !text-slate-900 group-hover:!text-brand">{t.title} →</span>
                    <span className="mt-1 block leading-7 text-slate-600">{t.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </main>
      <Footer />
    </>
  );
}
