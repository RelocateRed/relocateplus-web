import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-19";

export const usToGermany: Guide = {
  slug: "moving-from-us-to-germany",
  status: "published",
  datePublished: "2026-10-19",
  fromCode: "US",
  toCode: "DE",
  fromName: "the US",
  toName: "Germany",
  kind: "route",

  title: "Moving from the US to Germany: 2026 Checklist & Visa Guide",
  description:
    "Why Americans can apply for German residence after arriving, 2026 Blue Card salaries, the Opportunity Card, Anmeldung, health insurance and tax basics.",
  h1: "Moving from the US to Germany: the complete 2026 checklist",

  summary: [
    {
      text: "Americans have a shortcut most nationalities don't: you can enter Germany without a visa and apply for your residence permit locally, as long as you apply within 90 days of arrival. You can't start working until the permit (or the work approval) is in place.",
      sourceIds: ["aufenthv-41", "muc-entry"],
    },
    {
      text: "For skilled jobs, the EU Blue Card requires a gross salary of at least €50,700 in 2026, or €45,934.20 for shortage occupations, IT professionals and recent graduates. Germany's naturalisation period is now five years after the three-year fast track was abolished in October 2025.",
      sourceIds: ["mig-blue-card", "ba-blue-card-2026", "bundestag-3-years"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Visa needed to enter?", value: "No — US citizens can get the residence permit in Germany", sourceIds: ["aufenthv-41"] },
    { label: "Deadline to apply after arrival", value: "90 days", sourceIds: ["aufenthv-41", "muc-entry"] },
    { label: "Blue Card salary (2026)", value: "€50,700 · €45,934.20 for shortage jobs, IT and new graduates", sourceIds: ["mig-blue-card", "ba-blue-card-2026"] },
    { label: "Residence permit / Blue Card fee", value: "€100", sourceIds: ["aufenthv-45"] },
    { label: "Register your address (Anmeldung)", value: "Within 2 weeks of moving in", sourceIds: ["bmg-17"] },
    { label: "Citizenship", value: "Generally 5 years of residence", sourceIds: ["bundestag-3-years"] },
  ],

  visaOptions: [
    {
      name: "EU Blue Card",
      bestFor: "Graduates with a German job offer at or above the salary threshold.",
      requirement:
        "A German or comparable foreign degree (or at least three years of tertiary vocational training at EQF level 6), and a job offer of at least six months matching your qualification, paying at least €50,700 gross a year in 2026 — or €45,934.20 for shortage occupations, IT professionals and graduates whose degree is under three years old (these need Federal Employment Agency approval).",
      notes: [
        "Settlement permit after 27 months with A1 German, or 21 months with B1.",
        "Bonuses only count toward the salary if they come with no conditions.",
      ],
      sourceIds: ["mig-blue-card", "ba-blue-card-2026"],
    },
    {
      name: "Opportunity Card (Chancenkarte) for job seekers",
      bestFor: "Qualified people who want to come first and look for work in Germany.",
      requirement:
        "Either a fully recognised qualification, or at least six points in the points system (with German A1 or English B2, plus a qualification recognised in the country where you got it). You must show living costs via a blocked account or declaration of commitment; Make it in Germany lists €1,091 net per month as the 2026 figure.",
      notes: [
        "Issued for up to one year; part-time work up to 20 hours a week and trial work of up to two weeks per employer are allowed.",
        "Apply at a German mission abroad after the official self-check.",
      ],
      sourceIds: ["mig-opportunity-card"],
    },
    {
      name: "Residence permit for skilled employment and other purposes",
      bestFor: "Job offers below the Blue Card threshold, self-employment, study or family.",
      requirement:
        "Germany issues residence permits for other purposes too. As a US citizen you can apply for any of them at the local foreigners' office (Ausländerbehörde) within 90 days of entering. The office usually can't issue a work permit until the Federal Employment Agency has approved the job.",
      sourceIds: ["aufenthv-41", "muc-entry"],
    },
  ],

  recentChanges: [
    {
      text: "The three-year 'fast-track' naturalisation introduced in 2024 was abolished by the Bundestag on 8 October 2025. The general requirement is now at least five years of prior residence.",
      sourceIds: ["bundestag-3-years"],
    },
    {
      text: "Blue Card salary thresholds were updated for 2026: €50,700 for the standard card and €45,934.20 for the reduced threshold.",
      sourceIds: ["ba-blue-card-2026"],
    },
  ],

  steps: [
    {
      when: "3–6 months before",
      title: "Get your degree recognised or checked",
      detail:
        "The Blue Card needs a German degree or a comparable foreign one. For the Opportunity Card's points route, you need a positive evaluation from the Central Office for Foreign Education (ZAB) for your qualification.",
      sourceIds: ["mig-blue-card", "mig-opportunity-card"],
    },
    {
      when: "2–4 months before",
      title: "Secure the job offer (or choose the Opportunity Card)",
      detail:
        "For the Blue Card, the contract must run at least six months and meet the 2026 salary threshold. If you don't have an offer yet, the Opportunity Card lets you search for up to a year, but you apply for it at a German mission before travelling.",
      sourceIds: ["mig-blue-card", "mig-opportunity-card"],
    },
    {
      when: "Arrival day",
      title: "Enter Germany — the 90-day clock starts",
      detail:
        "US citizens can enter visa-free and must apply for the residence permit within 90 days of entry. Book your foreigners' office appointment as early as you can.",
      sourceIds: ["aufenthv-41", "muc-entry"],
    },
    {
      when: "Within 2 weeks of moving in",
      title: "Register your address (Anmeldung)",
      detail:
        "German law requires you to register with the local registration office within two weeks of moving into a home. You'll need your landlord's written confirmation of move-in.",
      sourceIds: ["bmg-17"],
    },
    {
      when: "Before your appointment",
      title: "Get German health insurance",
      detail:
        "Health insurance is compulsory in Germany. Most employees are in the statutory system; above a certain salary you can choose private insurance, but switching back later is difficult.",
      sourceIds: ["mig-health"],
    },
    {
      when: "Within 90 days",
      title: "Apply for your residence permit",
      detail:
        "At the foreigners' office, the residence permit or Blue Card costs €100. If the job needs Federal Employment Agency approval, the permit usually can't be issued until that's granted — so don't start work early.",
      sourceIds: ["aufenthv-45", "muc-entry"],
    },
    {
      when: "First year",
      title: "Understand your tax position",
      detail:
        "A continuous stay of more than six months makes Germany your habitual abode for tax purposes. As a US citizen you also keep filing US returns, and file an FBAR if your foreign accounts exceed $10,000.",
      sourceIds: ["ao-9", "irs-abroad", "fincen-fbar"],
    },
  ],

  documents: [
    { item: "Valid US passport", sourceIds: ["aufenthv-41"] },
    { item: "Signed employment contract (6+ months) with salary stated (Blue Card)", sourceIds: ["mig-blue-card"] },
    { item: "Degree certificate and proof it's comparable to a German degree", sourceIds: ["mig-blue-card"] },
    { item: "ZAB evaluation of your qualification (Opportunity Card points route)", sourceIds: ["mig-opportunity-card"] },
    { item: "Proof of funds: blocked account or declaration of commitment (Opportunity Card)", sourceIds: ["mig-opportunity-card"] },
    { item: "Landlord's written confirmation of move-in (for Anmeldung)", sourceIds: ["bmg-17"] },
    { item: "Proof of German health insurance", sourceIds: ["mig-health"] },
    { item: "Proof of German or English level (Opportunity Card: A1 German or B2 English)", sourceIds: ["mig-opportunity-card"] },
  ],

  costs: [
    { item: "Residence permit or EU Blue Card (issued in Germany)", amount: "€100", sourceIds: ["aufenthv-45"] },
    { item: "Opportunity Card living-cost proof", amount: "€1,091 net/month (2026 figure)", note: "Money you must show, not a fee. Check the current figure with the German mission.", sourceIds: ["mig-opportunity-card"] },
  ],
  costNote:
    "Translation, degree evaluation and health insurance premiums depend on your situation, so we don't estimate them.",

  tax: [
    {
      text: "Under German tax law, a continuous stay of more than six months counts as habitual abode from the start, which generally makes you taxable in Germany.",
      sourceIds: ["ao-9"],
    },
    {
      text: "US citizens remain subject to US tax on worldwide income and keep filing US returns. The 2026 Foreign Earned Income Exclusion is up to $132,900, and an FBAR is required if your foreign accounts exceed $10,000 combined at any point in the year.",
      sourceIds: ["irs-abroad", "irs-notice-2026-25", "fincen-fbar"],
    },
  ],

  family: [
    {
      text: "Blue Card holders can generally bring their family. With statutory health insurance, a non-working spouse and children can usually be covered at no extra cost; with private insurance, each child has their own premium.",
      sourceIds: ["ba-blue-card-2026", "mig-health"],
    },
  ],

  pitfalls: [
    {
      text: "Letting the 90 days run out. US citizens must apply for the residence permit within 90 days of entering Germany.",
      sourceIds: ["aufenthv-41"],
    },
    {
      text: "Starting work before the permit. The foreigners' office usually can't issue the permit until the Federal Employment Agency has approved the job.",
      sourceIds: ["muc-entry"],
    },
    {
      text: "Forgetting the Anmeldung. Registration is due within two weeks of moving in, and many other steps depend on it.",
      sourceIds: ["bmg-17"],
    },
    {
      text: "Counting on a three-year passport. The fast track was abolished in October 2025; plan on at least five years.",
      sourceIds: ["bundestag-3-years"],
    },
  ],

  faqs: [
    {
      q: "Do Americans need a visa to move to Germany?",
      a: "No. US citizens can enter visa-free and apply for their residence permit in Germany, but they must apply within 90 days of entry. Work can only start once the permit or work approval is in place.",
      sourceIds: ["aufenthv-41", "muc-entry"],
    },
    {
      q: "What salary do I need for a German Blue Card in 2026?",
      a: "At least €50,700 gross a year. For shortage occupations, IT professionals and graduates whose degree is under three years old, the threshold is €45,934.20, with Federal Employment Agency approval.",
      sourceIds: ["mig-blue-card", "ba-blue-card-2026"],
    },
    {
      q: "Can I move to Germany without a job offer?",
      a: "Yes, through the Opportunity Card (Chancenkarte), if you have a recognised qualification or score at least six points. You must show you can cover living costs, and you may work part-time up to 20 hours a week while you search.",
      sourceIds: ["mig-opportunity-card"],
    },
    {
      q: "How long until I can get German citizenship?",
      a: "Generally after at least five years of residence. The three-year fast track was abolished by the Bundestag on 8 October 2025.",
      sourceIds: ["bundestag-3-years"],
    },
    {
      q: "How soon do I have to register my address in Germany?",
      a: "Within two weeks of moving into your home, at the local registration office (§ 17 Federal Registration Act).",
      sourceIds: ["bmg-17"],
    },
  ],

  sources: [
    { id: "aufenthv-41", title: "§ 41 Aufenthaltsverordnung (stays by US and other nationals)", publisher: "Federal Ministry of Justice (gesetze-im-internet.de)", url: "https://www.gesetze-im-internet.de/aufenthv/__41.html", official: true, accessed: ACCESSED },
    { id: "aufenthv-45", title: "§ 45 Aufenthaltsverordnung (fees for residence titles)", publisher: "Federal Ministry of Justice (gesetze-im-internet.de)", url: "https://www.gesetze-im-internet.de/aufenthv/__45.html", official: true, accessed: ACCESSED },
    { id: "muc-entry", title: "Entry and residence — selected countries", publisher: "City of Munich, Foreigners' Office", url: "https://stadt.muenchen.de/service/en-GB/info/auslanderbehorde/10422633", official: true, accessed: ACCESSED },
    { id: "mig-blue-card", title: "EU Blue Card", publisher: "Make it in Germany (Federal Government portal)", url: "https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card", official: true, accessed: ACCESSED },
    { id: "ba-blue-card-2026", title: "EU Blue Card (Issue 03/2026)", publisher: "Federal Employment Agency (ZAV)", url: "https://www.arbeitsagentur.de/vor-ort/zav/working-and-living-in-germany/iss-en/issue-03-2026/blue-card", official: true, accessed: ACCESSED },
    { id: "mig-opportunity-card", title: "Job search opportunity card", publisher: "Make it in Germany (Federal Government portal)", url: "https://www.make-it-in-germany.com/en/visa-residence/types/job-search-opportunity-card", official: true, accessed: ACCESSED },
    { id: "mig-health", title: "Health insurance in Germany", publisher: "Make it in Germany (Federal Government portal)", url: "https://www.make-it-in-germany.com/en/living-in-germany/money-insurance/health-insurance", official: true, accessed: ACCESSED },
    { id: "bmg-17", title: "§ 17 Bundesmeldegesetz (registration duty)", publisher: "Federal Ministry of Justice (gesetze-im-internet.de)", url: "https://www.gesetze-im-internet.de/bmg/__17.html", official: true, accessed: ACCESSED },
    { id: "ao-9", title: "§ 9 Abgabenordnung (habitual abode)", publisher: "Federal Ministry of Justice (gesetze-im-internet.de)", url: "https://www.gesetze-im-internet.de/ao_1977/__9.html", official: true, accessed: ACCESSED },
    { id: "bundestag-3-years", title: "Bundestag abolishes naturalisation after three years (8 Oct 2025)", publisher: "Deutscher Bundestag", url: "https://bundestag.de/dokumente/textarchiv/2025/kw41-de-staatsangehoerigkeit-1111756", official: true, accessed: ACCESSED },
    { id: "irs-abroad", title: "U.S. citizens and resident aliens abroad", publisher: "IRS", url: "https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad", official: true, accessed: ACCESSED },
    { id: "irs-notice-2026-25", title: "Notice 2026-25 (2026 foreign earned income exclusion: $132,900)", publisher: "IRS", url: "https://www.irs.gov/pub/irs-drop/n-26-25.pdf", official: true, accessed: ACCESSED },
    { id: "fincen-fbar", title: "Report of Foreign Bank and Financial Accounts (FBAR)", publisher: "FinCEN", url: "https://www.fincen.gov/report-foreign-bank-and-financial-accounts", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ gives you a US → Germany roadmap: add your 90-day permit deadline and the two-week Anmeldung to the deadline agenda and your calendar, keep your degree, contract and insurance papers together, and track your moving budget.",
  related: ["germany-opportunity-card", "moving-from-us-to-portugal", "moving-from-us-to-spain"],
};
