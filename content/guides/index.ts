import type { Guide } from "@/lib/guides/types";
import { validateGuides } from "@/lib/guides/validate";

import { usToPortugal } from "./us-to-portugal";
import { usToSpain } from "./us-to-spain";
import { usToMexico } from "./us-to-mexico";
import { ukToSpain } from "./uk-to-spain";
import { thailandDtv } from "./thailand-dtv";
import { ukToAustralia } from "./uk-to-australia";
import { usToGermany } from "./us-to-germany";
import { ukToDubai } from "./uk-to-dubai";

/**
 * To add a guide: copy an existing file in this folder, rewrite it for the
 * new route (every fact needs a source), set status: "draft", and add it here.
 * Drafts are visible on Vercel preview deployments only.
 */
const ALL_GUIDES: Guide[] = [
  usToPortugal,
  usToSpain,
  usToMexico,
  ukToSpain,
  thailandDtv,
  // Batch 2
  ukToAustralia,
  usToGermany,
  ukToDubai,
];

validateGuides(ALL_GUIDES);

/** Drafts are shown everywhere except the production deployment. */
export const SHOW_DRAFTS = process.env.VERCEL_ENV !== "production";

export function getGuides(): Guide[] {
  return ALL_GUIDES.filter((g) => g.status === "published" || SHOW_DRAFTS);
}

export function getPublishedGuides(): Guide[] {
  return ALL_GUIDES.filter((g) => g.status === "published");
}

export function getGuide(slug: string): Guide | undefined {
  return getGuides().find((g) => g.slug === slug);
}
