import Link from "next/link";
import type { Guide, Source } from "@/lib/guides/types";
import Container from "@/components/ui/container";
import { appStoreLink, PLAY_STORE_URL, STORE_BADGES_LIVE } from "@/lib/site";
import StoreBadges from "@/components/ui/store-badges";

/* ---------- helpers ---------- */

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Superscript citation links: [1][3] → jump to the source list */
function Cite({ ids, index }: { ids: string[]; index: Map<string, number> }) {
  return (
    <sup className="ml-0.5 whitespace-nowrap text-[11px] font-semibold">
      {ids.map((id) => (
        <a
          key={id}
          href={`#source-${id}`}
          className="ml-0.5 text-brand hover:underline"
          aria-label={`Source ${index.get(id)}`}
        >
          [{index.get(id)}]
        </a>
      ))}
    </sup>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-heading text-2xl font-bold tracking-[-0.02em] text-slate-900 md:text-3xl"
    >
      {children}
    </h2>
  );
}

function AppBox({ guide, variant }: { guide: Guide; variant: "inline" | "end" }) {
  const campaign = `guide-${guide.fromCode}-${guide.toCode}-${variant}`.toLowerCase();
  return (
    <aside
      aria-label="Plan this move with Relocate+"
      className="rounded-[28px] border border-blue-100 bg-gradient-to-br from-tint to-surface p-7 md:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
        Plan it in Relocate+
      </p>
      <p className="mt-3 text-lg leading-8 text-slate-700">{guide.appPitch}</p>
      <p className="mt-2 text-sm text-slate-500">
        Free to start. Pro includes a 7-day free trial.
      </p>
      {STORE_BADGES_LIVE ? (
        <StoreBadges campaign={campaign} className="mt-5" />
      ) : (
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={appStoreLink(campaign)}
            className="inline-flex items-center justify-center rounded-2xl bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
            rel="noopener"
          >
            Download on the App Store
          </a>
          {PLAY_STORE_URL ? (
            <a
              href={PLAY_STORE_URL}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-surface px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-[#2563EB]/40"
              rel="noopener"
            >
              Get it on Google Play
            </a>
          ) : null}
        </div>
      )}
    </aside>
  );
}

/* ---------- main ---------- */

export default function GuideArticle({
  guide,
  related,
}: {
  guide: Guide;
  related: Guide[];
}) {
  const index = new Map<string, number>(guide.sources.map((s, i) => [s.id, i + 1]));
  const officialCount = guide.sources.filter((s) => s.official).length;

  const toc = [
    { id: "key-facts", label: "Key facts" },
    { id: "visas", label: guide.labels?.visas ?? "Visa options" },
    ...(guide.recentChanges?.length ? [{ id: "changes", label: "What changed recently" }] : []),
    { id: "timeline", label: "Step-by-step timeline" },
    { id: "documents", label: "Document checklist" },
    { id: "costs", label: guide.labels?.costs ?? "Official fees" },
    ...(guide.tax?.length ? [{ id: "tax", label: "Tax basics" }] : []),
    ...(guide.family?.length ? [{ id: "family", label: "Moving with family" }] : []),
    { id: "pitfalls", label: "Common mistakes" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ];

  return (
    <article className="bg-surface pb-24 pt-32">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-brand">Home</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/guides" className="hover:text-brand">Moving guides</Link></li>
            <li aria-hidden>›</li>
            <li className="text-slate-700">{guide.toName}</li>
          </ol>
        </nav>

        {guide.status === "draft" ? (
          <p className="mt-6 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-800">
            DRAFT — only visible on preview deployments, not indexed
          </p>
        ) : null}

        {/* Header */}
        <header className="mt-6 max-w-4xl">
          <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-slate-900 md:text-5xl">
            {guide.h1}
          </h1>
          <p className="mt-5 text-sm text-slate-500">
            Facts last verified on{" "}
            <time dateTime={guide.lastVerified} className="font-semibold text-slate-700">
              {formatDate(guide.lastVerified)}
            </time>{" "}
            against {guide.sources.length} sources ({officialCount} official). By the Relocate+ team.
          </p>

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-page-alt p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Short answer
            </p>
            {guide.summary.map((p, i) => (
              <p key={i} className="mt-3 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                {p.text}
                <Cite ids={p.sourceIds} index={index} />
              </p>
            ))}
          </div>
        </header>

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1fr)_260px]">
          {/* Content */}
          <div className="min-w-0 max-w-3xl space-y-16">
            {/* Key facts */}
            <section aria-labelledby="key-facts">
              <H2 id="key-facts">Key facts at a glance</H2>
              <dl className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-[24px] border border-slate-200">
                {guide.keyFacts.map((f) => (
                  <div key={f.label} className="grid gap-1 px-6 py-4 sm:grid-cols-[220px_1fr] sm:gap-6">
                    <dt className="text-sm font-semibold text-slate-500">{f.label}</dt>
                    <dd className="text-slate-900">
                      {f.value}
                      <Cite ids={f.sourceIds} index={index} />
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Visas */}
            <section aria-labelledby="visas">
              <H2 id="visas">{guide.labels?.visas ?? "Visa options"}</H2>
              <div className="mt-6 space-y-5">
                {guide.visaOptions.map((v) => (
                  <div key={v.name} className="rounded-[24px] border border-slate-200 p-6 md:p-7">
                    <h3 className="text-xl font-semibold text-slate-900">{v.name}</h3>
                    <p className="mt-2 text-slate-600">
                      <span className="font-semibold text-slate-800">Best for:</span> {v.bestFor}
                    </p>
                    <p className="mt-3 leading-7 text-slate-700">
                      <span className="font-semibold text-slate-800">Requirement:</span> {v.requirement}
                      <Cite ids={v.sourceIds} index={index} />
                    </p>
                    {v.notes?.length ? (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                        {v.notes.map((n) => <li key={n}>{n}</li>)}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>

            {/* Recent changes */}
            {guide.recentChanges?.length ? (
              <section aria-labelledby="changes">
                <H2 id="changes">What changed recently</H2>
                <div className="mt-6 space-y-4 rounded-[24px] border border-amber-200 bg-amber-50/60 p-6 md:p-7">
                  {guide.recentChanges.map((c, i) => (
                    <p key={i} className="leading-7 text-slate-800">
                      {c.text}
                      <Cite ids={c.sourceIds} index={index} />
                    </p>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Timeline */}
            <section aria-labelledby="timeline">
              <H2 id="timeline">Step-by-step timeline</H2>
              <ol className="mt-6 space-y-6 border-l-2 border-blue-100 pl-6">
                {guide.steps.map((s, i) => (
                  <li key={s.title} className="relative">
                    <span className="absolute -left-[37px] flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB] text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{s.when}</p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-1 leading-7 text-slate-700">
                      {s.detail}
                      <Cite ids={s.sourceIds} index={index} />
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <AppBox guide={guide} variant="inline" />

            {/* Documents */}
            <section aria-labelledby="documents">
              <H2 id="documents">Document checklist</H2>
              <ul className="mt-6 space-y-3">
                {guide.documents.map((d) => (
                  <li key={d.item} className="flex gap-3 rounded-2xl border border-slate-200 px-5 py-4">
                    <span aria-hidden className="mt-0.5 h-5 w-5 flex-none rounded-md border-2 border-[#2563EB]/50" />
                    <span className="text-slate-800">
                      {d.item}
                      <Cite ids={d.sourceIds} index={index} />
                      {d.note ? <span className="mt-1 block text-sm text-slate-500">{d.note}</span> : null}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Costs */}
            <section aria-labelledby="costs">
              <H2 id="costs">{guide.labels?.costs ?? "Official fees"}</H2>
              <div className="mt-6 overflow-x-auto rounded-[24px] border border-slate-200">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-sm text-slate-500">
                    <tr>
                      <th className="px-6 py-3 font-semibold">Item</th>
                      <th className="px-6 py-3 font-semibold">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {guide.costs.map((c) => (
                      <tr key={c.item}>
                        <td className="px-6 py-4 align-top text-slate-800">
                          {c.item}
                          {c.note ? <span className="mt-1 block text-sm text-slate-500">{c.note}</span> : null}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 align-top font-semibold text-slate-900">
                          {c.amount}
                          <Cite ids={c.sourceIds} index={index} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {guide.costNote ? <p className="mt-3 text-sm text-slate-500">{guide.costNote}</p> : null}
            </section>

            {/* Tax */}
            {guide.tax?.length ? (
            <section aria-labelledby="tax">
              <H2 id="tax">Tax basics</H2>
              <div className="mt-6 space-y-4">
                {guide.tax.map((t, i) => (
                  <p key={i} className="leading-8 text-slate-700">
                    {t.text}
                    <Cite ids={t.sourceIds} index={index} />
                  </p>
                ))}
                <p className="text-sm text-slate-500">
                  This is general information, not tax or legal advice. Rules depend on your situation — speak to a qualified adviser.
                </p>
              </div>
            </section>
            ) : null}

            {/* Family */}
            {guide.family?.length ? (
              <section aria-labelledby="family">
                <H2 id="family">Moving with family</H2>
                <div className="mt-6 space-y-4">
                  {guide.family.map((t, i) => (
                    <p key={i} className="leading-8 text-slate-700">
                      {t.text}
                      <Cite ids={t.sourceIds} index={index} />
                    </p>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Pitfalls */}
            <section aria-labelledby="pitfalls">
              <H2 id="pitfalls">Common mistakes to avoid</H2>
              <ul className="mt-6 space-y-3">
                {guide.pitfalls.map((p, i) => (
                  <li key={i} className="rounded-2xl bg-slate-50 px-5 py-4 leading-7 text-slate-800">
                    {p.text}
                    <Cite ids={p.sourceIds} index={index} />
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ: plain HTML so answers are always in the page source */}
            <section aria-labelledby="faq">
              <H2 id="faq">Frequently asked questions</H2>
              <div className="mt-6 space-y-3">
                {guide.faqs.map((f) => (
                  <details key={f.q} className="group rounded-2xl border border-slate-200 px-6 py-5" open>
                    <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                      <h3 className="inline">{f.q}</h3>
                    </summary>
                    <p className="mt-3 leading-7 text-slate-700">
                      {f.a}
                      <Cite ids={f.sourceIds} index={index} />
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <AppBox guide={guide} variant="end" />

            {/* Sources */}
            <section aria-labelledby="sources">
              <H2 id="sources">Sources</H2>
              <p className="mt-3 text-sm text-slate-500">
                Every fact on this page links to one of these. Official = government, consulate or official gazette.
              </p>
              <ol className="mt-5 space-y-2 text-sm">
                {guide.sources.map((s: Source, i) => (
                  <li key={s.id} id={`source-${s.id}`} className="scroll-mt-28 text-slate-700">
                    <span className="font-semibold">[{i + 1}]</span>{" "}
                    <a href={s.url} className="text-brand hover:underline" rel="noopener nofollow" target="_blank">
                      {s.title}
                    </a>{" "}
                    — {s.publisher}
                    {s.official ? <span className="ml-1 rounded bg-green-50 px-1.5 py-0.5 text-xs font-semibold text-green-700">Official</span> : null}
                    <span className="text-slate-400"> · checked {formatDate(s.accessed)}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-slate-500">
                Immigration rules change often. Always confirm requirements with the consulate or authority that handles your application before you book or pay for anything. Spotted something out of date?{" "}
                <Link href="/contact" className="text-brand hover:underline">Tell us</Link>.
              </p>
            </section>

            {related.length ? (
              <section aria-label="Related guides">
                <h2 className="font-heading text-xl font-bold text-slate-900">Related guides</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/guides/${r.slug}`} className="block rounded-2xl border border-slate-200 px-5 py-4 font-medium text-slate-800 transition hover:border-[#2563EB]/40 hover:text-brand">
                        {r.h1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          {/* TOC */}
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-28 rounded-[24px] border border-slate-200 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">On this page</p>
              <ul className="mt-4 space-y-2 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-slate-600 hover:text-brand">{t.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </Container>
    </article>
  );
}
