/**
 * Schengen 90/180-day rule, as the European Commission's short-stay calculator
 * applies it: for every day of a stay, count back over the 180-day window that
 * ends on that day (the day itself included); the total may not exceed 90.
 * Entry and exit days both count as days of stay.
 * Source: https://home-affairs.ec.europa.eu/policies/schengen/border-crossing/short-stay-calculator_en
 */

export const MAX_DAYS = 90;
export const WINDOW = 180;

export type Trip = { entry: string; exit: string };

const DAY = 86_400_000;

/** "YYYY-MM-DD" → whole days since 1970-01-01 (UTC), or null if invalid. */
export function toDay(iso: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  const t = Date.parse(iso + "T00:00:00Z");
  return Number.isNaN(t) ? null : Math.round(t / DAY);
}

export function fromDay(day: number): string {
  return new Date(day * DAY).toISOString().slice(0, 10);
}

/** The set of days spent in Schengen across all valid trips (overlaps counted once). */
export function stayDays(trips: Trip[]): Set<number> {
  const days = new Set<number>();
  for (const t of trips) {
    const a = toDay(t.entry);
    const b = toDay(t.exit);
    if (a === null || b === null || b < a) continue;
    for (let d = a; d <= b; d++) days.add(d);
  }
  return days;
}

/** Days of stay inside the 180-day window ending on `day`. */
export function usedOn(days: Set<number>, day: number): number {
  let n = 0;
  for (let d = day - WINDOW + 1; d <= day; d++) if (days.has(d)) n++;
  return n;
}

/**
 * If you enter on `start`, how many consecutive days can you stay?
 * Returns 0 if you couldn't even enter that day.
 */
export function maxStay(days: Set<number>, start: number): number {
  const all = new Set(days);
  let n = 0;
  for (let d = start; n < MAX_DAYS; d++) {
    const had = all.has(d);
    all.add(d);
    if (usedOn(all, d) > MAX_DAYS) {
      if (!had) all.delete(d);
      break;
    }
    n++;
  }
  return n;
}

/** Days on which a recorded stay broke the rule. */
export function overstayDays(days: Set<number>): number[] {
  return [...days].sort((a, b) => a - b).filter((d) => usedOn(days, d) > MAX_DAYS);
}
