/* eslint-disable @next/next/no-img-element -- official badges are embedded from Apple/Google as they recommend */
import { cn } from "@/lib/utils";
import { APPLE_BADGE_SRC, GOOGLE_BADGE_SRC, PLAY_STORE_URL, appStoreLink } from "@/lib/site";

/**
 * Official "Download on the App Store" + "Get it on Google Play" badges.
 * Apple's badge has no padding; Google's PNG has built-in padding, so it is
 * drawn larger with negative margins to look the same size (Google's guidance).
 */
export default function StoreBadges({
  campaign = "website",
  className,
  align = "start",
}: {
  campaign?: string;
  className?: string;
  align?: "start" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-4",
        align === "center" ? "justify-center" : "justify-start",
        className
      )}
    >
      <a href={appStoreLink(campaign)} rel="noopener" aria-label="Download Relocate+ on the App Store" className="inline-block">
        <img src={APPLE_BADGE_SRC} alt="Download on the App Store" width={162} height={54} className="h-[54px] w-auto" />
      </a>
      {PLAY_STORE_URL ? (
        <a href={PLAY_STORE_URL} rel="noopener" aria-label="Get Relocate+ on Google Play" className="-my-[11px] -mx-[11px] inline-block">
          <img src={GOOGLE_BADGE_SRC} alt="Get it on Google Play" width={198} height={77} className="h-[77px] w-auto" />
        </a>
      ) : null}
    </div>
  );
}
