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
import { ukToPortugal } from "./uk-to-portugal";
import { usToNetherlands } from "./us-to-netherlands";
import { fbiBackgroundCheck } from "./fbi-background-check";
import { spainDigitalNomadVisa } from "./spain-digital-nomad-visa";
import { portugalD8Visa } from "./portugal-d8-digital-nomad-visa";
import { germanyOpportunityCard } from "./germany-opportunity-card";
import { dubaiRemoteWorkVisa } from "./dubai-remote-work-visa";
import { movingAbroadWithPets } from "./moving-abroad-with-pets";
import { movingAbroadWithKids } from "./moving-abroad-with-kids";
import { spainNieNumber } from "./spain-nie-number";
import { spainTieCard } from "./spain-tie-card";
import { portugalNifNumber } from "./portugal-nif-number";

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
  // Batch 3
  ukToPortugal,
  usToNetherlands,
  fbiBackgroundCheck,
  // Batch 4
  spainDigitalNomadVisa,
  portugalD8Visa,
  germanyOpportunityCard,
  // Batch 5
  dubaiRemoteWorkVisa,
  movingAbroadWithPets,
  movingAbroadWithKids,
  // Batch 6
  spainNieNumber,
  spainTieCard,
  portugalNifNumber,
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
