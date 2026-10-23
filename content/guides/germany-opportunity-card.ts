import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-23";

export const germanyOpportunityCard: Guide = {
  slug: "germany-opportunity-card",
  status: "published",
  datePublished: "2026-10-23",
  fromCode: "INT",
  toCode: "DE",
  fromName: "any country",
  toName: "Germany",
  kind: "visa",

  title: "Germany Opportunity Card 2026: Points, €1,091 Funds & How to Apply",
  description:
    "Germany's Chancenkarte for non-EU job seekers: the points table, €1,091/month funds for 2026, €75 visa fee, work rules while searching, and how to apply online.",
  h1: "Germany's Opportunity Card (Chancenkarte) in 2026",

  summary: [
    {
      text: "The Opportunity Card lets skilled people from outside the EU come to Germany for up to a year to look for a job. You qualify either with a qualification that is fully recognised in Germany, or through a points system that needs at least 6 points plus German at A1 or English at B2.",
      sourceIds: ["mig-opportunity-card"],
    },
    {
      text: "For 2026 you must show €1,091 net per month to live on, via a blocked account or a declaration of commitment. While searching you may work part-time up to 20 hours a week and do trial work of up to two weeks per employer. You apply online through the Federal Foreign Office portal.",
      sourceIds: ["mig-opportunity-card"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Duration", value: "Up to 1 year", sourceIds: ["mig-opportunity-card"] },
    { label: "Funds to show (2026)", value: "€1,091 net per month", sourceIds: ["mig-opportunity-card"] },
    { label: "Points route minimum", value: "6 points + German A1 or English B2", sourceIds: ["mig-opportunity-card"] },
    { label: "Work while searching", value: "Up to 20 hours/week; 2-week trial per employer", sourceIds: ["mig-opportunity-card"] },
    { label: "National visa fee", value: "€75 (minors €37.50)", sourceIds: ["aa-fees"] },
    { label: "Where to apply", value: "Online at digital.diplo.de/chancenkarte", sourceIds: ["mig-opportunity-card"] },
  ],

  labels: { visas: "Two ways to qualify" },

  visaOptions: [
    {
      name: "Route 1: fully recognised qualification",
      bestFor: "People whose degree or vocational qualification is already fully recognised in Germany.",
      requirement:
        "If your foreign qualification is fully recognised in Germany (or you earned a qualification in Germany), you count as a skilled worker. You don't need points or a language certificate, though German is recommended.",
      sourceIds: ["mig-opportunity-card"],
    },
    {
      name: "Route 2: points system",
      bestFor: "Qualified people whose qualification isn't (yet) fully recognised in Germany.",
      requirement:
        "A completed vocational or academic qualification recognised in the country where you got it (vocational training of at least two years), German at A1 or English at B2, and at least 6 points.",
      notes: [
        "Every point you claim must be backed by evidence in your application.",
      ],
      sourceIds: ["mig-opportunity-card"],
    },
  ],

  recentChanges: [
    {
      text: "Make it in Germany now lists €1,091 net per month as the minimum for the blocked account in 2026.",
      sourceIds: ["mig-opportunity-card"],
    },
  ],

  steps: [
    {
      when: "First",
      title: "Work out your route and points",
      detail:
        "Points: 4 for a partially recognised qualification, 1 for a shortage occupation, 2 or 3 for experience (2 of the last 5 years, or 5 of the last 7), 1–3 for German (A2 to B2+), 1 for English C1, 2 if you're under 35 or 1 if 35–40, 1 for six months' earlier legal stay, and 1 if your partner also qualifies.",
      sourceIds: ["mig-opportunity-card"],
    },
    {
      when: "2–3 months before",
      title: "Get your qualification assessed",
      detail:
        "For the points route your qualification must be recognised in the country where you earned it; a partial recognition in Germany is worth 4 points.",
      sourceIds: ["mig-opportunity-card"],
    },
    {
      when: "1–2 months before",
      title: "Arrange your funds",
      detail:
        "Open a blocked account with at least €1,091 a month for your stay, or get a declaration of commitment (Verpflichtungserklärung) from someone in Germany.",
      sourceIds: ["mig-opportunity-card", "kopenhagen-pdf"],
    },
    {
      when: "1 month before",
      title: "Buy health insurance",
      detail:
        "The German embassy in Copenhagen, for example, asks for health insurance valid in the Schengen area from the day you enter, with at least €30,000 of cover. Check your own mission's list.",
      sourceIds: ["kopenhagen-pdf"],
    },
    {
      when: "Application",
      title: "Apply online",
      detail:
        "Submit through the Federal Foreign Office's Consular Services Portal (digital.diplo.de/chancenkarte) and pay the €75 national visa fee. If you already live in Germany on a valid residence title, go to your local foreigners authority instead.",
      sourceIds: ["mig-opportunity-card", "aa-fees"],
    },
    {
      when: "After you find a job",
      title: "Switch to a work residence permit",
      detail:
        "Apply at your local foreigners authority for the matching permit. If the job is qualified employment but no other title fits, the Opportunity Card can be extended for up to two years.",
      sourceIds: ["mig-opportunity-card"],
    },
  ],

  documents: [
    { item: "Valid passport and online application", sourceIds: ["mig-opportunity-card", "kopenhagen-pdf"] },
    { item: "Proof of qualification (and recognition, if claiming points for it)", sourceIds: ["mig-opportunity-card"] },
    { item: "Language certificate: German A1 or English B2 (Copenhagen: no older than 1 year)", sourceIds: ["mig-opportunity-card", "kopenhagen-pdf"] },
    { item: "Evidence for each point claimed (work references, age, prior stay)", sourceIds: ["mig-opportunity-card"] },
    { item: "Blocked account confirmation or declaration of commitment", sourceIds: ["mig-opportunity-card", "kopenhagen-pdf"] },
    { item: "Health insurance from the day of entry", sourceIds: ["kopenhagen-pdf"] },
    { item: "CV in table form", sourceIds: ["kopenhagen-pdf"] },
  ],

  costs: [
    { item: "National visa fee", amount: "€75", sourceIds: ["aa-fees"] },
    { item: "National visa fee, minors", amount: "€37.50", sourceIds: ["aa-fees"] },
    { item: "Funds you must show", amount: "€1,091 net per month (2026)", note: "Your own money for living costs, not a fee.", sourceIds: ["mig-opportunity-card"] },
  ],
  costNote:
    "Blocked-account providers, recognition procedures, language tests and insurance have their own prices, which vary.",

  family: [
    {
      text: "If your spouse or partner also meets the Opportunity Card requirements, you get 1 extra point. Make it in Germany's page doesn't describe separate rights for family members on this card, so ask your German mission before you plan a family move.",
      sourceIds: ["mig-opportunity-card"],
    },
  ],

  pitfalls: [
    {
      text: "Using an old funds figure. For 2026 it's €1,091 net per month.",
      sourceIds: ["mig-opportunity-card"],
    },
    {
      text: "Claiming points you can't prove. Every point needs evidence in the application.",
      sourceIds: ["mig-opportunity-card"],
    },
    {
      text: "Counting tourist trips as a prior stay. Only legal stays for study, language courses or work count towards the extra point.",
      sourceIds: ["mig-opportunity-card"],
    },
    {
      text: "Working full-time. While searching you're limited to 20 hours a week plus short trial jobs.",
      sourceIds: ["mig-opportunity-card"],
    },
  ],

  faqs: [
    {
      q: "How many points do I need for Germany's Opportunity Card?",
      a: "At least 6, plus German at A1 or English at B2 and a qualification recognised where you earned it. You don't need points at all if your qualification is fully recognised in Germany.",
      sourceIds: ["mig-opportunity-card"],
    },
    {
      q: "How much money do I need for the Opportunity Card in 2026?",
      a: "€1,091 net per month, shown through a blocked account or a declaration of commitment.",
      sourceIds: ["mig-opportunity-card"],
    },
    {
      q: "Can I work on the Opportunity Card?",
      a: "Yes, part-time up to 20 hours a week, plus trial work of up to two weeks with each employer.",
      sourceIds: ["mig-opportunity-card"],
    },
    {
      q: "What happens when I find a job?",
      a: "You apply to your local foreigners authority for a work residence permit. If the job is qualified employment and no other title fits, the card can be extended for up to two years.",
      sourceIds: ["mig-opportunity-card"],
    },
    {
      q: "Should I get the Opportunity Card or an EU Blue Card?",
      a: "If you already have a qualified job offer for at least six months paying €50,700 gross or more in 2026 (€45,934.20 for shortage occupations, IT and recent graduates), the Blue Card is the direct route. The Opportunity Card is for searching without an offer.",
      sourceIds: ["mig-blue-card", "ba-blue-card-2026", "mig-opportunity-card"],
    },
    {
      q: "How much does the Opportunity Card cost?",
      a: "The national visa fee is €75, or €37.50 for minors. On top of that you need your own funds of €1,091 a month.",
      sourceIds: ["aa-fees", "mig-opportunity-card"],
    },
  ],

  sources: [
    { id: "mig-opportunity-card", title: "Job search opportunity card", publisher: "Make it in Germany (Federal Government portal)", url: "https://www.make-it-in-germany.com/en/visa-residence/types/job-search-opportunity-card", official: true, accessed: ACCESSED },
    { id: "aa-fees", title: "Visa fees", publisher: "Federal Foreign Office (Auswärtiges Amt)", url: "https://www.auswaertiges-amt.de/en/visa-service/215870-215870", official: true, accessed: ACCESSED },
    { id: "kopenhagen-pdf", title: "Opportunity Card: required documents (June 2024)", publisher: "German Embassy Copenhagen", url: "https://kopenhagen.diplo.de/blob/2664066/ff0e34d1fc8e20545c48b3015d2bbfbb/opportunity-card-data.pdf", official: true, accessed: ACCESSED },
    { id: "ba-blue-card-2026", title: "EU Blue Card (Issue 03/2026)", publisher: "Federal Employment Agency (ZAV)", url: "https://www.arbeitsagentur.de/vor-ort/zav/working-and-living-in-germany/iss-en/issue-03-2026/blue-card", official: true, accessed: ACCESSED },
    { id: "mig-blue-card", title: "EU Blue Card", publisher: "Make it in Germany (Federal Government portal)", url: "https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ helps you use your search year well: put the card's expiry, your blocked-account dates and foreigners-office appointment in the deadline agenda and calendar, and keep certificates, translations and your budget in one place.",
  related: ["moving-from-us-to-germany"],
};
