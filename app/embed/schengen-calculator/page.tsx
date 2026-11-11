import type { Metadata } from "next";

import SchengenCalculator from "@/components/tools/schengen-calculator";
import { SITE_URL } from "@/lib/site";

const TOOL_URL = `${SITE_URL}/tools/schengen-calculator`;

/** Bare version of the calculator for other websites to show in an iframe. */
export const metadata: Metadata = {
  title: { absolute: "Schengen 90/180 calculator | Relocate+" },
  description: "Embeddable Schengen 90/180 day calculator by Relocate+.",
  alternates: { canonical: TOOL_URL },
  robots: { index: false, follow: true },
};

export default function SchengenCalculatorEmbed() {
  return (
    <main className="bg-page p-4 sm:p-6">
      <h1 className="text-xl font-bold text-slate-900">Schengen 90/180 calculator</h1>
      <p className="mt-1 text-sm leading-6 text-slate-600">
        Add your trips to see how many of your 90 days you've used and how long you can stay next time.
      </p>
      <div className="mt-5">
        <SchengenCalculator />
      </div>
      <p className="mt-5 text-sm text-slate-500">
        Free calculator by{" "}
        <a href={`${TOOL_URL}?ct=embed`} target="_blank" rel="noopener" className="font-semibold !text-brand hover:underline">
          Relocate+
        </a>
        , the app that plans your move abroad. It counts days the same way as the European Commission's calculator.
      </p>
    </main>
  );
}
