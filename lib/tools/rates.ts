/** Daily ECB reference rates (via frankfurter.dev), shared by the tools. */
export type Rates = { date: string; perEur: Record<string, number> } | null;

export async function getRates(): Promise<Rates> {
  try {
    const res = await fetch("https://api.frankfurter.dev/v1/latest?base=EUR&symbols=USD,GBP,THB,MXN,AUD", {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { date?: string; rates?: Record<string, number> };
    if (!data.date || !data.rates) return null;
    return { date: data.date, perEur: data.rates };
  } catch {
    return null;
  }
}

/** Convert between currencies using EUR as the base. Returns null if a rate is missing. */
export function convert(amount: number, from: string, to: string, rates: Rates): number | null {
  if (from === to) return amount;
  if (!rates) return null;
  const fromRate = from === "EUR" ? 1 : rates.perEur[from];
  const toRate = to === "EUR" ? 1 : rates.perEur[to];
  if (!fromRate || !toRate) return null;
  return (amount / fromRate) * toRate;
}
