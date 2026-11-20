"use client";

import Script from "next/script";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import {
  CONSENT_STORAGE_KEY,
  GOOGLE_ADS_DOWNLOAD_LABEL,
  GOOGLE_ADS_ENABLED,
  GOOGLE_ADS_ID,
  OPEN_COOKIE_SETTINGS_EVENT,
  isDownloadLink,
  type ConsentChoice,
} from "@/lib/google-ads";

type Gtag = (...args: unknown[]) => void;

function gtag(...args: unknown[]) {
  const w = window as unknown as { gtag?: Gtag };
  w.gtag?.(...args);
}

function readChoice(): ConsentChoice | null {
  try {
    const v = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function saveChoice(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    /* private mode: the choice lasts for this visit only */
  }
}

function applyChoice(choice: ConsentChoice) {
  gtag("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
  });
}

/**
 * Google Ads tag with Consent Mode v2, a cookie banner, and the "Download click" conversion.
 * Ad cookies stay off until the visitor clicks "Accept" (default: denied, everywhere).
 */
export default function GoogleAds() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!GOOGLE_ADS_ENABLED) return;

    // Show the banner only to visitors who haven't chosen yet (after first paint, so it never blocks the page).
    const saved = readChoice();
    if (saved) applyChoice(saved);
    const firstShow = saved ? undefined : window.setTimeout(() => setShowBanner(true), 0);

    const reopen = () => setShowBanner(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);

    // Count a conversion when someone clicks through to a store (or our /download link).
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || !GOOGLE_ADS_DOWNLOAD_LABEL || !isDownloadLink(a.href)) return;
      const store = a.href.includes("play.google.com") ? "google_play" : a.href.includes("apps.apple.com") ? "app_store" : "download_link";
      gtag("event", "conversion", {
        send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_DOWNLOAD_LABEL}`,
        store,
        transport_type: "beacon",
      });
    };
    document.addEventListener("click", onClick, { capture: true });

    return () => {
      if (firstShow) window.clearTimeout(firstShow);
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
      document.removeEventListener("click", onClick, { capture: true });
    };
  }, []);

  const choose = useCallback((choice: ConsentChoice) => {
    saveChoice(choice);
    applyChoice(choice);
    setShowBanner(false);
  }, []);

  if (!GOOGLE_ADS_ENABLED) return null;

  return (
    <>
      <Script id="google-consent-default" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`}
      </Script>
      <Script
        id="google-ads-tag"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />

      {showBanner ? (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie choice"
          className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-xl rounded-2xl border border-slate-200 bg-surface p-5 shadow-xl sm:inset-x-6 sm:bottom-6"
        >
          <p className="text-sm leading-6 text-slate-600">
            We&apos;d like to use Google Ads cookies to see which of our ads bring people to Relocate+. They&apos;re off unless you accept.{" "}
            <Link href="/privacy#cookies" className="font-medium text-brand underline underline-offset-2">
              Privacy policy
            </Link>
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => choose("granted")}
              className="rounded-full bg-[#2563EB] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-tint"
            >
              Reject
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
