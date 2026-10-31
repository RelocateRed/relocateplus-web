"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import AppQr from "@/components/ui/app-qr";
import AppDownload from "@/components/ui/app-download";
import { planDeadlines, toIcs, type Country, type PlannerInput, type PortugalVisa, type SpainVisa } from "@/lib/tools/deadlines";

const field =
  "w-full min-w-0 appearance-none rounded-xl border border-slate-200 bg-surface px-3 py-2.5 text-slate-900 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100";

function nice(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

function daysFromToday(iso: string, today: string) {
  return Math.round((Date.parse(iso + "T00:00:00Z") - Date.parse(today + "T00:00:00Z")) / 86_400_000);
}

const ES_VISAS: { id: SpainVisa; label: string }[] = [
  { id: "dnv", label: "Digital nomad (telework) visa" },
  { id: "nlv", label: "Non-lucrative visa" },
  { id: "other", label: "Other residence visa" },
];
const PT_VISAS: { id: PortugalVisa; label: string }[] = [
  { id: "d8", label: "D8 remote-work visa" },
  { id: "d7", label: "D7 passive-income visa" },
  { id: "other", label: "Other / not sure" },
];

function Pill({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${
        on ? "border-[#2563EB] bg-blue-50/60 text-slate-900 ring-2 ring-blue-100" : "border-slate-200 bg-surface text-slate-700 hover:border-slate-300"
      }`}
    >
      {children}
    </button>
  );
}

function Check({ checked, onChange, children }: { checked: boolean; onChange: (v: boolean) => void; children: React.ReactNode }) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-surface p-4 text-sm text-slate-700">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-0.5 h-4 w-4 accent-[#2563EB]" />
      <span>{children}</span>
    </label>
  );
}

export default function DeadlinePlanner() {
  const [today, setToday] = useState("");
  const [saved, setSaved] = useState(false);
  const [input, setInput] = useState<PlannerInput>({
    country: "ES",
    arrival: "",
    visaStart: "",
    esVisa: "dnv",
    ptVisa: "d8",
    viaSchengen: false,
    beckham: false,
    workStart: "",
    ukLicence: false,
    ifici: false,
  });

  useEffect(() => {
    const now = new Date();
    setToday(new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())).toISOString().slice(0, 10));
  }, []);

  const set = <K extends keyof PlannerInput>(k: K, v: PlannerInput[K]) => setInput((s) => ({ ...s, [k]: v }));
  const deadlines = useMemo(() => planDeadlines(input), [input]);
  const country: Country = input.country;

  const download = () => {
    const blob = new Blob([toIcs(deadlines)], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `relocate-plus-${country === "ES" ? "spain" : "portugal"}-deadlines.ics`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setSaved(true);
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
      <div className="space-y-7">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">1 · Where are you moving?</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Pill on={country === "ES"} onClick={() => set("country", "ES")}>🇪🇸 Spain</Pill>
            <Pill on={country === "PT"} onClick={() => set("country", "PT")}>🇵🇹 Portugal</Pill>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">For non-EU citizens. EU citizens follow different registration rules.</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">2 · Your dates</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Arrival date
              <input type="date" value={input.arrival} onChange={(e) => set("arrival", e.target.value)} className={`${field} mt-1`} />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Visa valid from <span className="font-normal text-slate-400">(optional)</span>
              <input type="date" value={input.visaStart} onChange={(e) => set("visaStart", e.target.value)} className={`${field} mt-1`} />
            </label>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">3 · Your visa</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {country === "ES"
              ? ES_VISAS.map((v) => <Pill key={v.id} on={input.esVisa === v.id} onClick={() => set("esVisa", v.id)}>{v.label}</Pill>)
              : PT_VISAS.map((v) => <Pill key={v.id} on={input.ptVisa === v.id} onClick={() => set("ptVisa", v.id)}>{v.label}</Pill>)}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">4 · What applies to you?</p>
          <div className="mt-4 space-y-3">
            {country === "ES" ? (
              <>
                <Check checked={input.viaSchengen} onChange={(v) => set("viaSchengen", v)}>
                  I'll enter Spain from another Schengen country (e.g. fly via Paris or Amsterdam)
                </Check>
                <Check checked={input.beckham} onChange={(v) => set("beckham", v)}>
                  I want the Beckham Law tax regime
                </Check>
                {input.beckham ? (
                  <label className="block pl-1 text-sm font-medium text-slate-700">
                    Social Security start date <span className="font-normal text-slate-400">(when your work starts)</span>
                    <input type="date" value={input.workStart} onChange={(e) => set("workStart", e.target.value)} className={`${field} mt-1`} />
                  </label>
                ) : null}
                <Check checked={input.ukLicence} onChange={(v) => set("ukLicence", v)}>
                  I have a UK driving licence
                </Check>
              </>
            ) : (
              <Check checked={input.ifici} onChange={(v) => set("ifici", v)}>
                My job may qualify for the IFICI tax regime (research, highly qualified roles, startups)
              </Check>
            )}
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-28 lg:self-start">
        {!input.arrival ? (
          <div className="flex min-h-[260px] items-center justify-center rounded-[32px] border border-dashed border-slate-300 bg-surface/60 p-10 text-center">
            <p className="max-w-xs leading-7 text-slate-500">Enter your arrival date to see your deadlines.</p>
          </div>
        ) : (
          <div className="rounded-[32px] border border-slate-200 bg-surface p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-slate-900">Your {country === "ES" ? "Spain" : "Portugal"} deadlines</h2>
              <button
                type="button"
                onClick={download}
                className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-semibold !text-white transition-colors hover:bg-[#1D4ED8]"
              >
                Add to my calendar (.ics)
              </button>
            </div>
            <ol className="mt-6 space-y-4">
              {deadlines.map((d) => {
                const away = d.date && today ? daysFromToday(d.date, today) : null;
                return (
                  <li key={d.id} className="relative rounded-3xl border border-slate-200 p-5">
                    <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${d.date ? "text-brand" : "text-amber-800"}`}>
                      {d.date ? `${d.kind === "from" ? "From" : "By"} ${nice(d.date)}` : "As soon as you can"}
                      {away !== null ? (
                        <span className="ml-2 normal-case tracking-normal text-slate-500">
                          · {away < 0 ? `${-away} days ago` : away === 0 ? "today" : `in ${away} days`}
                        </span>
                      ) : null}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">{d.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{d.rule}</p>
                    {d.note ? <p className="mt-2 text-sm leading-6 text-slate-500">{d.note}</p> : null}
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                      <Link href={d.guide.href} className="font-semibold !text-brand hover:underline">{d.guide.label} →</Link>
                      {d.sources.map((s) => (
                        <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="!text-slate-500 underline decoration-slate-300 hover:!text-slate-900">
                          {s.title}
                        </a>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ol>
            {saved ? (
              <div role="status" className="on-dark mt-6 rounded-3xl bg-[#0B1530] p-6 text-white sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">Saved to your calendar</p>
                <h3 className="mt-2 text-xl font-bold">Now keep them on your phone, with the documents for each step</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  Relocate+ puts every deadline in one agenda synced to your calendar, turns your visa into a step-by-step
                  roadmap, and keeps the documents each step needs in an encrypted vault.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-8">
                  <AppDownload campaign="deadline-planner-saved" label="Get Relocate+ on the App Store" />
                  <AppQr dark />
                </div>
              </div>
            ) : null}
            <p className="mt-5 text-xs leading-5 text-slate-500">
              A planning aid, not legal advice. Deadlines come from official sources linked above; your own visa and
              appointment letters always take priority.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
