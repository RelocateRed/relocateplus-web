export const SITE_URL = "https://relocate-plus.com";

export const APP_STORE_URL = "https://apps.apple.com/app/relocate-plus/id6789252666";

/**
 * Optional: your App Store Connect provider token (App Analytics → Campaigns →
 * "Generate a campaign link" shows it as pt=XXXX). With it set in Vercel as
 * NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN, each guide's download button reports
 * installs per guide in App Store Connect.
 */
const PROVIDER_TOKEN = process.env.NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN;

/** Set NEXT_PUBLIC_PLAY_STORE_URL in Vercel once the Android app is live. */
export const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL || "";

export function appStoreLink(campaign: string): string {
  if (!PROVIDER_TOKEN) return APP_STORE_URL;
  const ct = campaign.replace(/[^a-z0-9-]/gi, "").slice(0, 40);
  return `${APP_STORE_URL}?pt=${PROVIDER_TOKEN}&ct=${ct}&mt=8`;
}

/**
 * Official store badges, loaded from Apple's and Google's own badge servers
 * (their recommended embed method, so the artwork always matches their rules).
 *
 * ONE SWITCH: as soon as NEXT_PUBLIC_PLAY_STORE_URL is set in Vercel, every
 * download area on the site (homepage hero, bottom download section, guide
 * pages) switches from the current text buttons to the two official badges
 * at the same time. Until then nothing changes visually.
 */
export const APPLE_BADGE_SRC =
  "https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?size=250x83";
export const GOOGLE_BADGE_SRC =
  "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";
export const STORE_BADGES_LIVE = Boolean(PLAY_STORE_URL);
