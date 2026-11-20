/**
 * Google Ads tracking settings.
 *
 * Relocate+ Google Ads account (created 20 Nov 2026). These IDs are public by design:
 * they appear in the page source of every site that runs a Google tag.
 * Vercel environment variables with the same names override them; set
 * NEXT_PUBLIC_GOOGLE_ADS_ID to "off" to switch all Google Ads tracking off.
 *
 * GOOGLE_ADS_ID              the Google tag of the account
 * GOOGLE_ADS_DOWNLOAD_LABEL  the "Download click" conversion (Goals → Conversions)
 */
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18563819571";
export const GOOGLE_ADS_DOWNLOAD_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_DOWNLOAD_LABEL || "V_DwCPbRprwdELPQ9ZNF";
export const GOOGLE_ADS_ENABLED = /^AW-\d+$/.test(GOOGLE_ADS_ID);

/** Where the visitor's cookie choice is kept in their own browser. */
export const CONSENT_STORAGE_KEY = "rp-cookie-consent";
export type ConsentChoice = "granted" | "denied";

/** Fired by the "Cookie settings" link in the footer to reopen the banner. */
export const OPEN_COOKIE_SETTINGS_EVENT = "rp:open-cookie-settings";

/** Links that count as a "Download click": either store, or our own /download redirect. */
export function isDownloadLink(href: string): boolean {
  try {
    const url = new URL(href, "https://relocate-plus.com");
    if (url.hostname === "apps.apple.com") return true;
    if (url.hostname === "play.google.com" && url.pathname.startsWith("/store/apps")) return true;
    if (url.hostname.endsWith("relocate-plus.com") && url.pathname === "/download") return true;
    return false;
  } catch {
    return false;
  }
}
