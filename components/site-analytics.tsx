"use client";

import { Analytics } from "@vercel/analytics/next";

/**
 * Vercel Web Analytics: anonymous page views, no cookies.
 * Shared-move links and password-reset links carry private tokens in the URL,
 * so those are reported without the token.
 */
export default function SiteAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => {
        const url = new URL(event.url);
        if (url.pathname.startsWith("/shared/")) return { ...event, url: `${url.origin}/shared/[link]` };
        if (url.pathname.startsWith("/reset-password") || url.pathname.startsWith("/confirm")) {
          return { ...event, url: `${url.origin}${url.pathname}` };
        }
        return event;
      }}
    />
  );
}
