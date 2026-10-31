/* eslint-disable @next/next/no-img-element -- tiny static SVG, no optimisation needed */
import { STORE_BADGES_LIVE } from "@/lib/site";

/**
 * QR code to the App Store page, for people reading on a laptop.
 * Shown on tablets and computers; hidden on phones, where the download button already works.
 * The SVG in /public encodes https://relocate-plus.com/download?ct=qr, which sends
 * iPhones to the App Store and (after the Android launch) Android phones to Google Play.
 */
export default function AppQr({ dark = false, className = "", align = "start" }: { dark?: boolean; className?: string; align?: "start" | "center" }) {
  return (
    <div className={`desktop-only items-center gap-4 ${align === "center" ? "justify-center" : ""} ${className}`}>
      <img
        src="/app-store-qr.svg"
        alt="QR code to download the Relocate+ app"
        width={88}
        height={88}
        className={`h-[88px] w-[88px] rounded-xl bg-white p-1.5 ${dark ? "" : "border border-slate-200"}`}
      />
      <p className={`max-w-[11rem] text-left text-sm leading-6 ${dark ? "text-slate-300" : "text-slate-500"}`}>
        {STORE_BADGES_LIVE ? "On a computer? Scan with your phone camera to get the app." : "On a computer? Scan with your iPhone camera to get the app."}
      </p>
    </div>
  );
}
