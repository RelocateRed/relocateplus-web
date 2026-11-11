"use client";

import { useState } from "react";

/** Shows a copyable HTML snippet so other sites can embed one of our tools. */
export default function EmbedCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard blocked: the visitor can still select the text */
    }
  }

  return (
    <div className="mt-5">
      <textarea
        readOnly
        value={code}
        rows={5}
        aria-label="Embed code"
        onFocus={(e) => e.currentTarget.select()}
        className="w-full min-w-0 resize-none rounded-2xl border border-slate-200 bg-surface p-4 font-mono text-xs leading-5 text-slate-700 outline-none focus:border-[#2563EB]"
      />
      <button
        type="button"
        onClick={copy}
        className="mt-3 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold !text-white transition-colors hover:bg-navy-hover"
      >
        {copied ? "Copied" : "Copy the code"}
      </button>
      <span role="status" className="sr-only">{copied ? "Embed code copied" : ""}</span>
    </div>
  );
}
