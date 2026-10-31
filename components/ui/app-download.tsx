import StoreBadges from "@/components/ui/store-badges";
import { STORE_BADGES_LIVE, appStoreLink } from "@/lib/site";

/**
 * The download button used in tool and prompt boxes.
 * Before the Android launch: one "Download on the App Store" button.
 * After NEXT_PUBLIC_PLAY_STORE_URL is set: the official App Store + Google Play badges.
 */
export default function AppDownload({ campaign, label = "Download on the App Store" }: { campaign: string; label?: string }) {
  if (STORE_BADGES_LIVE) return <StoreBadges campaign={campaign} />;
  return (
    <a
      href={appStoreLink(campaign)}
      className="inline-flex rounded-full bg-[#2563EB] px-6 py-3 font-semibold !text-white transition-colors hover:bg-[#1D4ED8]"
    >
      {label}
    </a>
  );
}
