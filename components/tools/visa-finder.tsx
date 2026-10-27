"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  EU_COUNTRIES,
  EU_FREE_MOVEMENT_SOURCE,
  ROUTES,
  type Currency,
  type Passport,
  type Situation,
  type VisaRoute,
} from "@/lib/tools/visa-routes";

export type Rates = { date: string; perEur: Record<string, number> } | null;

type UserCurrency = "EUR" | "USD" | "GBP";

const SITUATIONS: { id: Situation; label: string; text: string; icon: string }[] = [
  { id: "remote", label: "I work remotely", text: "For an employer or clients abroad", icon: "💻" },
  { id: "passive", label: "I live on savings or a pension", text: "Retirement or passive income", icon: "🌴" },
  { id: "job-offer", label: "I have a job offer", text: "From an employer in the new country", icon: "🤝" },
  { id: "job-seeker", label: "I want to find a job there", text: "Move first, then search", icon: "🔎" },
  { id: "self-employed", label: "I'm starting a business", text: "Self-employed or freelancer", icon: "🚀" },
];

const PASSPORTS: { id: Passport; label: string }[] = [
  { id: "us", label: "🇺🇸 United States" },
  { id: "uk", label: "🇬🇧 United Kingdom" },
  { id: "eu", label: "🇪🇺 EU country" },
  { id: "other", label: "🌍 Another country" },
];

const SYMBOL: Record<string, string> = { EUR: "€", USD: "$", GBP: "£", THB: "฿", MXN: "MX$", AUD: "A$" };

type Status = "meets" | "maybe" | "check" | "below" | "no";

type Result = {
  route: VisaRoute;
  status: Status;
  detail: string;
};

function fmt(n: number, cur: string) {
  const v = Math.round(n).toLocaleString("en-GB");
  return cur === "THB" ? `${v} THB` : cur === "MXN" ? `MXN ${v}` : cur === "AUD" ? `AUD ${v}` : `${SYMBOL[cur] ?? ""}${v}`;
}

function convert(amount: number, from: string, to: Currency, rates: Rates): number | null {
  if (from === to) return amount;
  if (!rates) return null;
  const fromRate = from === "EUR" ? 1 : rates.perEur[from];
  const toRate = to === "EUR" ? 1 : rates.perEur[to];
  if (!fromRate || !toRate) return null;
  return (amount / fromRate) * toRate;
}

function evaluate(
  route: VisaRoute,
  input: { income: number | null; savings: number | null; cur: UserCurrency; age: number | null; partner: boolean; children: number },
  rates: Rates,
): Result {
  const { age, partner, children } = input;
  if (age !== null && ((route.minAge && age < route.minAge) || (route.maxAge && age > route.maxAge))) {
    return { route, status: "no", detail: `Only for ages ${route.minAge}–${route.maxAge}.` };
  }

  const m = route.money;
  const income = input.income === null ? null : convert(input.income, input.cur, (m as { currency?: Currency }).currency ?? "EUR", rates);
  const savings = input.savings === null ? null : convert(input.savings, input.cur, (m as { currency?: Currency }).currency ?? "EUR", rates);
  const needsFx = "currency" in m && m.currency !== input.cur && !rates;
  if (needsFx) return { route, status: "check", detail: "We couldn't load today's exchange rates, so compare the threshold with your income yourself." };

  const dependants = (partner ? 1 : 0) + children;

  switch (m.kind) {
    case "none":
      return { route, status: "check", detail: "No income test in our guide — check the other conditions." };

    case "monthly-income": {
      const need = m.amount + (dependants > 0 && m.familyFirst ? m.familyFirst + (dependants - 1) * (m.familyEach ?? 0) : 0);
      if (income === null) return { route, status: "check", detail: `You'd need about ${fmt(need, m.currency)} a month${dependants ? " including your family" : ""}.` };
      return income >= need
        ? { route, status: "meets", detail: `Your income clears ${fmt(need, m.currency)} a month${dependants ? " (with family)" : ""}.` }
        : { route, status: "below", detail: `About ${fmt(need - income, m.currency)} a month short of ${fmt(need, m.currency)}.` };
    }

    case "savings-or-annual-income": {
      const need =
        m.amount +
        (m.perDependant ?? 0) * dependants +
        (m.perAdult ?? 0) * (partner ? 1 : 0) +
        (m.perChild ?? 0) * children;
      const viaSavings = savings !== null && savings >= need;
      const viaIncome = income !== null && income * 12 >= need;
      if (savings === null && income === null) return { route, status: "check", detail: `You'd need about ${fmt(need, m.currency)} for the year.` };
      return viaSavings || viaIncome
        ? { route, status: "meets", detail: `Your ${viaSavings ? "savings" : "yearly income"} cover ${fmt(need, m.currency)}.` }
        : { route, status: "below", detail: `You'd need ${fmt(need, m.currency)} in savings or yearly passive income.` };
    }

    case "income-or-savings": {
      if (savings === null && income === null) return { route, status: "check", detail: "Enter your income or savings to compare." };
      const ok = (income !== null && income >= m.income) || (savings !== null && savings >= m.savings);
      return ok
        ? { route, status: "meets", detail: "You clear the income or balance rule — but check your consulate's own dollar figure." }
        : { route, status: "below", detail: `Below both ${fmt(m.income, m.currency)}/month and ${fmt(m.savings, m.currency)} in savings.` };
    }

    case "savings": {
      if (savings === null) return { route, status: "check", detail: `You'd need ${fmt(m.amount, m.currency)}.` };
      return savings >= m.amount
        ? { route, status: "meets", detail: `Your savings cover ${fmt(m.amount, m.currency)}.` }
        : { route, status: "below", detail: `About ${fmt(m.amount - savings, m.currency)} short of ${fmt(m.amount, m.currency)}.` };
    }

    case "annual-salary": {
      const under30 = route.id === "nl-hsm" && age !== null && age < 30;
      const main = under30 && m.altAmount ? m.altAmount : m.amount;
      if (income === null) return { route, status: "check", detail: `The job would need to pay about ${fmt(main, m.currency)} a year.` };
      const yearly = income * 12;
      if (yearly >= main) return { route, status: "meets", detail: `An offer at this salary clears ${fmt(main, m.currency)} a year.` };
      if (m.altAmount && !under30 && yearly >= m.altAmount && route.id !== "nl-hsm")
        return { route, status: "maybe", detail: `Below ${fmt(main, m.currency)}, but above the reduced ${fmt(m.altAmount, m.currency)} (${m.altLabel}).` };
      return { route, status: "below", detail: `About ${fmt(main - yearly, m.currency)} a year short of ${fmt(main, m.currency)}.` };
    }
  }
}

const BADGE: Record<Status, { text: string; cls: string }> = {
  meets: { text: "Meets the money rule", cls: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  maybe: { text: "Could qualify (reduced threshold)", cls: "bg-blue-50 text-blue-700 ring-blue-200" },
  check: { text: "Check the requirements", cls: "bg-slate-100 text-slate-700 ring-slate-200" },
  below: { text: "Below the money rule", cls: "bg-amber-50 text-amber-800 ring-amber-200" },
  no: { text: "Not eligible", cls: "bg-rose-50 text-rose-700 ring-rose-200" },
};

const ORDER: Status[] = ["meets", "maybe", "check", "below", "no"];

export default function VisaFinder({ rates }: { rates: Rates }) {
  const [situation, setSituation] = useState<Situation | null>(null);
  const [passport, setPassport] = useState<Passport>("us");
  const [cur, setCur] = useState<UserCurrency>("EUR");
  const [income, setIncome] = useState("");
  const [savings, setSavings] = useState("");
  const [age, setAge] = useState("");
  const [partner, setPartner] = useState(false);
  const [children, setChildren] = useState(0);

  const num = (s: string) => {
    const n = Number(s.replace(/[^0-9.]/g, ""));
    return s.trim() === "" || Number.isNaN(n) ? null : n;
  };

  const { results, freeMovement } = useMemo(() => {
    if (!situation) return { results: [] as Result[], freeMovement: false };
    const input = { income: num(income), savings: num(savings), cur, age: num(age), partner, children };
    let fm = false;
    const list = ROUTES.filter((r) => r.situations.includes(situation))
      .filter((r) => {
        if (passport === "eu" && EU_COUNTRIES.includes(r.country)) {
          fm = true;
          return false;
        }
        return r.passports.includes(passport);
      })
      .map((r) => evaluate(r, input, rates))
      .sort((a, b) => ORDER.indexOf(a.status) - ORDER.indexOf(b.status));
    return { results: list, freeMovement: fm };
  }, [situation, passport, cur, income, savings, age, partner, children, rates]);

  const inputCls =
    "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100";

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-14">
      {/* FORM */}
      <form className="space-y-8" onSubmit={(e) => e.preventDefault()} aria-label="Your situation">
        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">1 · Your situation</legend>
          <div className="mt-4 grid gap-2">
            {SITUATIONS.map((s) => (
              <label
                key={s.id}
                className={`flex cursor-pointer items-center gap-4 rounded-2xl border px-4 py-3 transition ${
                  situation === s.id ? "border-[#2563EB] bg-blue-50/60 ring-2 ring-blue-100" : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <input
                  type="radio"
                  name="situation"
                  value={s.id}
                  checked={situation === s.id}
                  onChange={() => setSituation(s.id)}
                  className="sr-only"
                />
                <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                <span>
                  <span className="block font-semibold text-slate-900">{s.label}</span>
                  <span className="block text-sm text-slate-500">{s.text}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">2 · Your passport</legend>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {PASSPORTS.map((p) => (
              <label
                key={p.id}
                className={`cursor-pointer rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                  passport === p.id ? "border-[#2563EB] bg-blue-50/60 text-slate-900 ring-2 ring-blue-100" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                }`}
              >
                <input type="radio" name="passport" value={p.id} checked={passport === p.id} onChange={() => setPassport(p.id)} className="sr-only" />
                {p.label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">3 · Money and family</legend>
          <div className="mt-4 grid grid-cols-[1fr_auto] gap-3">
            <label className="block text-sm font-medium text-slate-700">
              Monthly income before tax
              <input inputMode="decimal" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="e.g. 3,500" className={inputCls} />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Currency
              <select value={cur} onChange={(e) => setCur(e.target.value as UserCurrency)} className={inputCls}>
                <option value="EUR">€ EUR</option>
                <option value="USD">$ USD</option>
                <option value="GBP">£ GBP</option>
              </select>
            </label>
          </div>
          <label className="mt-3 block text-sm font-medium text-slate-700">
            Savings available
            <input inputMode="decimal" value={savings} onChange={(e) => setSavings(e.target.value)} placeholder="e.g. 30,000" className={inputCls} />
          </label>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <label className="block text-sm font-medium text-slate-700">
              Your age
              <input inputMode="numeric" value={age} onChange={(e) => setAge(e.target.value)} placeholder="optional" className={inputCls} />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Children moving with you
              <select value={children} onChange={(e) => setChildren(Number(e.target.value))} className={inputCls}>
                {[0, 1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="mt-4 flex cursor-pointer items-center gap-3 text-sm font-medium text-slate-700">
            <input type="checkbox" checked={partner} onChange={(e) => setPartner(e.target.checked)} className="h-5 w-5 rounded border-slate-300 accent-[#2563EB]" />
            My partner is moving with me
          </label>
        </fieldset>

        <p className="text-xs leading-5 text-slate-500">
          This is a first check against the published money rules, not legal advice. Consulates set their own
          paperwork and can change figures.
          {rates ? ` Currencies converted at the ECB reference rate of ${rates.date}.` : ""}
        </p>
      </form>

      {/* RESULTS */}
      <section aria-live="polite" aria-label="Results">
        {!situation ? (
          <div className="flex h-full min-h-[260px] items-center justify-center rounded-[32px] border border-dashed border-slate-300 bg-white/60 p-10 text-center">
            <p className="max-w-sm text-slate-500">Pick your situation to see which visas fit — then add your income to check the money rules.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-slate-500">
              {results.length} {results.length === 1 ? "route" : "routes"} for your situation
            </p>

            {freeMovement ? (
              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-slate-700">
                <strong className="text-slate-900">EU citizen?</strong> You have the right to live, work, study, look for a job or retire in
                Spain, Portugal, Germany or the Netherlands without these visas. You may need to register your residence after 3 months.{" "}
                <a href={EU_FREE_MOVEMENT_SOURCE.url} target="_blank" rel="noopener noreferrer" className="font-semibold !text-[#2563EB] underline">
                  Source
                </a>
              </div>
            ) : null}

            {results.length === 0 && !freeMovement ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-600">
                We don't have a guide for this combination yet. Try another situation, or browse all{" "}
                <Link href="/guides" className="font-semibold !text-[#2563EB] underline">moving guides</Link>.
              </div>
            ) : null}

            {results.map(({ route, status, detail }) => (
              <article key={route.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,.05)] sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      <span aria-hidden="true">{route.flag}</span> {route.country}
                    </p>
                    <h3 className="mt-1 text-lg font-bold leading-snug text-slate-900">{route.name}</h3>
                  </div>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${BADGE[status].cls}`}>{BADGE[status].text}</span>
                </div>
                <p className="mt-3 text-sm font-medium text-slate-800">{detail}</p>
                <p className="mt-2 text-sm text-slate-500">Rule: {route.money.label}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  {route.conditions.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span aria-hidden="true" className="text-slate-400">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <Link href={route.guide} className="font-semibold !text-[#2563EB] hover:underline">
                    Read the full guide →
                  </Link>
                  {route.sources.map((s) => (
                    <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="!text-slate-500 underline decoration-slate-300 hover:!text-slate-800">
                      {s.title}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
