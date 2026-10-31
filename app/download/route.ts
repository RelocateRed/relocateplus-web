import { NextResponse, type NextRequest } from "next/server";

import { PLAY_STORE_URL, SITE_URL, appStoreLink } from "@/lib/site";

/**
 * One link for every device: relocate-plus.com/download
 * - Android phone → Google Play (once NEXT_PUBLIC_PLAY_STORE_URL is set)
 * - iPhone / iPad → App Store
 * - Computer → App Store until Android is live, then the homepage download section with both badges
 * Used by the QR codes and the "Download" buttons, so they work for everyone after the Android launch.
 * Optional ?ct=campaign keeps App Store campaign tracking.
 */
export function GET(req: NextRequest) {
  const ua = req.headers.get("user-agent") ?? "";
  const ct = (req.nextUrl.searchParams.get("ct") ?? "download").replace(/[^a-z0-9-]/gi, "").slice(0, 40) || "download";

  const isAndroid = /android/i.test(ua);
  const isApple = /iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && /mobile/i.test(ua));

  let target: string;
  if (isAndroid && PLAY_STORE_URL) target = PLAY_STORE_URL;
  else if (isApple || !PLAY_STORE_URL) target = appStoreLink(ct);
  else target = `${SITE_URL}/#download`;

  const res = NextResponse.redirect(target, 302);
  res.headers.set("Cache-Control", "no-store");
  return res;
}
