"use client";

import { useEffect, useMemo, useState } from "react";

import { MAX_DAYS, WINDOW, fromDay, maxStay, overstayDays, stayDays, toDay, usedOn, type Trip } from "@/lib/tools/schengen";

const STORE_KEY = "rp-schengen-trips";

function nice(iso: string) {
  const d = toDay(iso);
  if (d === null) return iso;
  return new Date(d * 86_400_000).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

function todayIso() {
  const now = new Date();
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())).toISOString().slice(0, 10);
}

const input =
  "w-full min-w-0 appearance-none rounded-xl border border-slate-200 bg-surface px-3 py-2.5 text-slate-900 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100";

export default function SchengenCalculator() {
  const [trips, setTrips] = useState<Trip[]>([{ entry: "", exit: "" }]);
  const [checkDate, setCheckDate] = useState("");
  const [planDate, setPlanDate] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Dates depend on the visitor's clock, so set them after the page loads
  useEffect(() => {
    const t = todayIso();
    setCheckDate(t);
    setPlanDate(t);
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY) ?? "null");
      if (Array.isArray(saved) && saved.length) setTrips(saved.filter((x) => typeof x?.entry === "string" && typeof x?.exit === "string"));
    } catch {
      /* storage unavailable: start empty */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(trips));
    } catch {
      /* ignore */
    }
  }, [trips, loaded]);

  const update = (i: number, key: keyof Trip, value: string) =>
    setTrips((ts) => ts.map((t, j) => (j === i ? { ...t, [key]: value, ...(key === "entry" && !t.exit ? { exit: value } : {}) } : t)));

  const result = useMemo(() => {
    const valid = trips.filter((t) => {
      const a = toDay(t.entry);
      const b = toDay(t.exit);
      return a !== null && b !== null && b >= a;
    });
    const days = stayDays(valid);
    const check = toDay(checkDate);
    const plan = toDay(planDate);
    const used = check === null ? null : usedOn(days, check);
    const stay = plan === null ? null : maxStay(days, plan);
    const over = overstayDays(days);
    return {
      validCount: valid.length,
      invalid: trips.some((t) => t.entry && t.exit && (toDay(t.exit) ?? 0) < (toDay(t.entry) ?? 0)),
      used,
      windowStart: check === null ? null : fromDay(check - WINDOW + 1),
      stay,
      leaveBy: plan === null || !stay ? null : fromDay(plan + stay - 1),
      over,
    };
  }, [trips, checkDate, planDate]);

  const left = result.used === null ? null : Math.max(0, MAX_DAYS - result.used);
  const pct = result.used === null ? 0 : Math.min(100, (result.used / MAX_DAYS) * 100);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
      {/* Trips */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">1 · Your trips to Schengen</p>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Add every stay in the last 180 days and any trip you've booked. Entry and exit days both count.
        </p>
        <ul className="mt-5 space-y-3">
          {trips.map((t, i) => (
            <li key={i} className="rounded-2xl border border-slate-200 bg-surface p-4">
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-end gap-2 sm:gap-3">
                <label className="block min-w-0 text-xs font-medium text-slate-500">
                  Entry
                  <input type="date" value={t.entry} onChange={(e) => update(i, "entry", e.target.value)} className={`${input} mt-1`} />
                </label>
                <label className="block min-w-0 text-xs font-medium text-slate-500">
                  Exit
                  <input type="date" value={t.exit} min={t.entry || undefined} onChange={(e) => update(i, "exit", e.target.value)} className={`${input} mt-1`} />
                </label>
                <button
                  type="button"
                  aria-label={`Remove trip ${i + 1}`}
                  onClick={() => setTrips((ts) => (ts.length > 1 ? ts.filter((_, j) => j !== i) : [{ entry: "", exit: "" }]))}
                  className="mb-1 flex h-10 w-8 sm:w-10 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  ✕
                </button>
              </div>
              {t.entry && t.exit && toDay(t.exit)! >= toDay(t.entry)! ? (
                <p className="mt-2 text-xs text-slate-500">{toDay(t.exit)! - toDay(t.entry)! + 1} days</p>
              ) : null}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setTrips((ts) => [...ts, { entry: "", exit: "" }])}
          className="mt-3 w-full rounded-2xl border border-dashed border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-[#2563EB] hover:text-brand"
        >
          + Add another trip
        </button>
        {result.invalid ? <p className="mt-3 text-sm text-rose-700">One trip has an exit date before its entry date, so it's left out.</p> : null}
        <p className="mt-4 text-xs leading-5 text-slate-500">Your trips are saved in this browser only, so you can come back later.</p>
      </div>

      {/* Results */}
      <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-[28px] border border-slate-200 bg-surface p-6 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">2 · Days used</p>
          <label className="mt-4 block text-sm font-medium text-slate-700">
            On this date
            <input type="date" value={checkDate} onChange={(e) => setCheckDate(e.target.value)} className={`${input} mt-1`} />
          </label>
          {result.used !== null ? (
            <>
              <p className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
                {result.used}
                <span className="text-2xl font-semibold text-slate-400"> / {MAX_DAYS} days used</span>
              </p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
                <div
                  className={`h-full rounded-full transition-all ${result.used > MAX_DAYS ? "bg-rose-500" : result.used > 75 ? "bg-amber-500" : "bg-[#2563EB]"}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="mt-4 leading-7 text-slate-600">
                {result.used > MAX_DAYS ? (
                  <span className="font-semibold text-rose-700">Over the limit by {result.used - MAX_DAYS} days on {nice(checkDate)}.</span>
                ) : (
                  <>
                    <span className="font-semibold text-slate-900">{left} days left</span> in the 180 days from {nice(result.windowStart!)} to {nice(checkDate)}.
                  </>
                )}
              </p>
            </>
          ) : null}
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-surface p-6 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">3 · Plan your next trip</p>
          <label className="mt-4 block text-sm font-medium text-slate-700">
            If I enter on
            <input type="date" value={planDate} onChange={(e) => setPlanDate(e.target.value)} className={`${input} mt-1`} />
          </label>
          {result.stay !== null ? (
            result.stay > 0 ? (
              <p className="mt-5 leading-7 text-slate-600">
                You can stay up to <span className="font-semibold text-slate-900">{result.stay} days</span> — leave by{" "}
                <span className="font-semibold text-slate-900">{nice(result.leaveBy!)}</span>.
              </p>
            ) : (
              <p className="mt-5 font-semibold leading-7 text-rose-700">You'd already be at 90 days that day. Try a later date.</p>
            )
          ) : null}
          <p className="mt-3 text-xs leading-5 text-slate-500">This assumes the trips you listed are all your Schengen stays.</p>
        </div>

        {result.over.length ? (
          <div className="rounded-[28px] border border-rose-200 bg-rose-50 p-6 text-sm leading-6 text-rose-700">
            Your listed trips go over 90 days in a 180-day window on {result.over.length} day{result.over.length > 1 ? "s" : ""}, first on{" "}
            {nice(fromDay(result.over[0]))}. Check your dates.
          </div>
        ) : null}

        <p className="text-xs leading-5 text-slate-500">
          A first check, not legal advice. Border guards decide on entry, and days spent on a residence permit or long-stay (D) visa don't count.
        </p>
      </div>
    </div>
  );
}
