import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";
import Container from "@/components/ui/container";
import { getGuides, getPublishedGuides } from "@/content/guides";
import { toScript } from "@/lib/guides/jsonld";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Moving Abroad Guides: Visas, Documents & Checklists by Route",
  description:
    "Step-by-step moving guides for specific routes — visas, document checklists, timelines and official fees, each fact linked to its official source.",
  alternates: { canonical: `${SITE_URL}/guides` },
  // Keep the hub out of Google until at least one guide is published
  robots: getPublishedGuides().length ? { index: true, follow: true } : { index: false, follow: true },
};

export default function GuidesHub() {
  const guides = getGuides();
  if (!guides.length) notFound();
  const routes = guides.filter((g) => g.kind === "route");
  const visas = guides.filter((g) => g.kind === "visa");

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: guides.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/guides/${g.slug}`,
      name: g.h1,
    })),
  };

  const Card = ({ g }: { g: (typeof guides)[number] }) => (
    <li>
      <Link
        href={`/guides/${g.slug}`}
        className="block h-full rounded-[24px] border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-[#2563EB]/40 hover:shadow-[0_15px_40px_rgba(15,23,42,.06)]"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2563EB]">
          {g.kind === "route" ? `${g.fromName.replace(/^the /, "")} → ${g.toName}` : `${g.toName} visa`}
          {g.status === "draft" ? " · draft" : ""}
        </p>
        <h3 className="mt-3 text-lg font-semibold leading-7 text-slate-900">{g.h1}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{g.description}</p>
      </Link>
    </li>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toScript(itemList) }} />
      <Navbar />
      <main className="bg-white pb-24 pt-36">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">Moving guides</p>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[#0F172A] md:text-5xl">
              Moving abroad, route by route
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Practical checklists for specific moves: which visa fits, what it costs, which documents to gather and in what order. Every fact links to the official source we checked it against, with the date we checked it.
            </p>
          </div>

          {routes.length ? (
            <section className="mt-16">
              <h2 className="font-heading text-2xl font-bold text-slate-900">Country-to-country guides</h2>
              <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {routes.map((g) => <Card key={g.slug} g={g} />)}
              </ul>
            </section>
          ) : null}

          {visas.length ? (
            <section className="mt-16">
              <h2 className="font-heading text-2xl font-bold text-slate-900">Visa guides</h2>
              <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {visas.map((g) => <Card key={g.slug} g={g} />)}
              </ul>
            </section>
          ) : null}
        </Container>
      </main>
      <Footer />
    </>
  );
}
