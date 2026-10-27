import Link from "next/link";

import { getPublishedGuides } from "@/content/guides";

function flag(code: string) {
  if (!/^[A-Z]{2}$/.test(code)) return "";
  return String.fromCodePoint(...[...code].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
}

/** Endless band of real routes and visas we have guides for. */
export default function RouteMarquee() {
  const items = getPublishedGuides()
    .filter((g) => g.kind !== "topic")
    .map((g) => ({
      href: `/guides/${g.slug}`,
      label:
        g.kind === "route"
          ? `${flag(g.fromCode)} ${g.fromName.replace(/^the /, "")} → ${flag(g.toCode)} ${g.toName}`
          : `${flag(g.toCode)} ${g.title.split(":")[0].replace(/ 20\d\d/, "").trim()}`,
    }));

  if (items.length === 0) return null;

  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <li key={it.href}>
          <Link
            href={it.href}
            tabIndex={hidden ? -1 : undefined}
            className="block whitespace-nowrap rounded-full border border-slate-200 bg-surface px-5 py-2.5 text-sm font-medium text-slate-700 shadow-[0_6px_20px_rgba(15,23,42,.05)] transition-colors hover:border-blue-200 hover:text-brand"
          >
            {it.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Moving guides by route" className="marquee-wrap relative overflow-hidden border-y border-slate-100 bg-page py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-page to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-page to-transparent sm:w-32" />
      <div className="marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
