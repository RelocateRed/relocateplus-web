"use client";

import { GOOGLE_ADS_ENABLED, OPEN_COOKIE_SETTINGS_EVENT } from "@/lib/google-ads";

/** Footer link that reopens the cookie banner so visitors can change their choice. */
export default function CookieSettingsLink({ className }: { className?: string }) {
  if (!GOOGLE_ADS_ENABLED) return null;
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}>
      Cookie settings
    </button>
  );
}
