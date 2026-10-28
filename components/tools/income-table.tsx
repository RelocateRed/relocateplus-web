"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { convert, type Rates } from "@/lib/tools/rates";
import type { VisaRoute } from "@/lib/tools/visa-routes";

type Cur = "EUR" | "USD" | "GBP";
const SYMBOL: Record<string, string> = { EUR: "€", USD: "$", GBP: "£" };

function money(n: number, cur: string) {
  const v = Math.round(n).toLocaleString("en-GB");
  if (cur === "THB") return `${v} THB`;
  if (cur === "MXN") return `MXN ${v}`;
  if (cur === "USD") return `US$${v}`;
  return `${SYMBOL[cur] ?? ""}${v}`;
}

/** The headline figure for a route and how to read it. */
function headline(r: VisaRoute): { amount: number; currency: string; per: string; monthly: number | null } | null {
  const m = r.money;
  switch (m.kind) {
    case "monthly-income":
      return { amount: m.amount, currency: m.currency, per: "a month", monthly: m.amount };
    case "income-or-savings":
      return { amount: m.income, currency: m.currency, per: "a month (or savings)", monthly: m.income };
    case "savings-or-annual-income":
      return { amount: m.amount, currency: m.currency, per: "a year (income or savings)", monthly: m.amount / 12 };
    case "savings":
      return { amount: m.amount, currency: m.currency, per: "in savings", monthly: null };
    default:
      return null;
  }
}

function family(r: VisaRoute): string | null {
  const m = r.money;
  if (m.kind === "monthly-income" && m.familyFirst)
    return `+${money(m.familyFirst, m.currency)}/month for the first family member, +${money(m.familyEach ?? 0, m.currency)} each extra`;
  if (m.kind === "savings-or-annual-income") {
    if (m.perDependant) return `+${money(m.perDependant, m.currency)} per family member`;
    if (m.perAdult) return `+${money(m.perAdult, m.currency)} per extra adult, +${money(m.perChild ?? 0, m.currency)} per child`;
  }
  return null;
}

export default function IncomeTable({ routes, rates }: { routes: VisaRoute[]; rates: Rates }) {
  const [cur, setCur] = useState<Cur>("EUR");

  const rows = useMemo(
    () =>
      routes
        .map((r) => {
          const h = headline(r)!;
          const inCur = convert(h.amount, h.currency, cur, rates);
          const monthlyEur = h.monthly === null ? null : convert(h.monthly, h.currency, "EUR", rates);
          return { r, h, inCur, monthlyEur };
        })
        .sort((a, b) => (a.monthlyEur ?? Infinity) - (b.monthlyEur ?? Infinity)),
    [routes, rates, cur],
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-slate-600">Show amounts in</span>
        <div role="group" aria-label="Currency" className="flex rounded-full border border-slate-200 bg-surface p-1">
          {(["EUR", "USD", "GBP"] as Cur[]).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cur === c}
              onClick={() => setCur(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${cur === c ? "bg-[#2563EB] !text-white" : "text-slate-600 hover:text-slate-900"}`}
            >
              {SYMBOL[c]} {c}
            </button>
          ))}
        </div>
      </div>

      <ol className="mt-6 space-y-4">
        {rows.map(({ r, h, inCur }) => {
          const fam = family(r);
          return (
            <li key={r.id} className="rounded-3xl border border-slate-200 bg-surface p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-500">
                    <span aria-hidden="true">{r.flag}</span> {r.country}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{r.name}</h3>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold tracking-tight text-slate-900">
                    {h.currency === cur ? money(h.amount, h.currency) : inCur !== null ? `≈ ${money(inCur, cur)}` : money(h.amount, h.currency)}
                  </p>
                  <p className="text-sm text-slate-500">
                    {h.per}
                    {h.currency !== cur && inCur !== null ? ` · officially ${money(h.amount, h.currency)}` : ""}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                <span className="font-semibold text-slate-800">Rule:</span> {r.money.label}
              </p>
              {fam ? (
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  <span className="font-semibold text-slate-800">Family:</span> {fam}
                </p>
              ) : null}
              <ul className="mt-3 space-y-1 text-sm leading-6 text-slate-600">
                {r.conditions.map((c) => (
                  <li key={c} className="flex gap-2"><span aria-hidden="true" className="text-slate-400">•</span>{c}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                <Link href={r.guide} className="font-semibold !text-brand hover:underline">Read the full guide →</Link>
                {r.sources.map((s) => (
                  <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="!text-slate-500 underline decoration-slate-300 hover:!text-slate-900">
                    {s.title}
                  </a>
                ))}
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-xs leading-5 text-slate-500">
        {rates
          ? `Converted at the European Central Bank reference rate of ${rates.date}. Consulates may use their own rate or a fixed local-currency figure.`
          : "We couldn't load today's exchange rates, so amounts are shown in their official currency."}
      </p>
    </div>
  );
}
