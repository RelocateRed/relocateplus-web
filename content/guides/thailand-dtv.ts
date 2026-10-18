import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-18";

export const thailandDtv: Guide = {
  slug: "thailand-dtv-visa-guide",
  status: "published",
  datePublished: "2026-10-18",
  fromCode: "INT",
  toCode: "TH",
  fromName: "any country",
  toName: "Thailand",
  kind: "visa",

  title: "Thailand DTV Visa 2026: Requirements & New Rules",
  description:
    "Destination Thailand Visa for digital nomads: 500,000 THB funds, the new 31 Aug 2026 police-check and residence rules, 180-day stays, fees and taxes.",
  h1: "Thailand's Destination Thailand Visa (DTV): 2026 requirements for digital nomads",

  summary: [
    {
      text: "The Destination Thailand Visa (DTV) is Thailand's 5-year, multiple-entry visa for remote workers, freelancers and people doing \"soft power\" activities such as Muay Thai or Thai cooking courses. You need at least 500,000 THB in the bank (about US$16,000 according to the Thai Embassy in Washington) for each of the last three months.",
      sourceIds: ["th-dc-dtv", "th-la-dtv"],
    },
    {
      text: "Each entry allows a stay of up to 180 days, extendable once by another 180 days. For applications from 31 August 2026, embassies also ask for a criminal record certificate and proof of permanent residence in the country where you apply.",
      sourceIds: ["th-ch-dtv", "lexbangkok-dtv", "th-dc-dtv"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Validity", value: "5 years, multiple entry", sourceIds: ["th-dc-dtv", "th-ch-dtv"] },
    { label: "Stay per entry", value: "Up to 180 days, + one 180-day extension", sourceIds: ["th-ch-dtv"] },
    { label: "Funds", value: "≥ 500,000 THB ending balance in each of the last 3 months", sourceIds: ["th-dc-dtv", "th-la-dtv"] },
    { label: "Fee (Washington DC embassy)", value: "US$400", sourceIds: ["th-dc-dtv"] },
    { label: "New since 31 Aug 2026", value: "Police certificate + proof of permanent residence", sourceIds: ["lexbangkok-dtv", "th-dc-dtv"] },
    { label: "Dependants", value: "Spouse and children under 20", sourceIds: ["th-dc-dtv"] },
  ],

  visaOptions: [
    {
      name: "DTV – Workcation",
      bestFor: "Digital nomads, remote employees, freelancers and \"foreign talent\" working for clients or employers outside Thailand.",
      requirement:
        "Proof of remote work (employment contract, employment certificate or a professional portfolio) plus 500,000 THB in funds. Non-US citizens applying in the US need a hand-signed letter from HR or a manager; pay stubs and job offers are not accepted.",
      sourceIds: ["th-dc-dtv"],
    },
    {
      name: "DTV – Thai soft power activities",
      bestFor: "People coming for Muay Thai training, Thai cooking courses, medical treatment and similar activities.",
      requirement:
        "An acceptance letter from the course provider, or an appointment letter from a hospital, plus the same 500,000 THB funds requirement.",
      sourceIds: ["th-dc-dtv", "th-la-dtv"],
    },
    {
      name: "DTV – Spouse and children",
      bestFor: "The spouse and children under 20 of a DTV holder.",
      requirement:
        "The main holder's passport, ID and DTV approval, plus birth or marriage certificates. Family bank accounts need proof of the relationship.",
      sourceIds: ["th-dc-dtv"],
    },
  ],

  recentChanges: [
    {
      text: "For applications submitted from 31 August 2026, Thai missions require a criminal record clearance certificate and proof of permanent residence (for example, the Washington embassy asks for an FBI certificate issued within three months, and a green card or valid US visa for non-citizens).",
      sourceIds: ["lexbangkok-dtv", "th-dc-dtv", "th-la-dtv"],
    },
    {
      text: "What counts as proof of residence differs between embassies, so read the checklist of the mission you apply to, not a generic one.",
      sourceIds: ["lexbangkok-dtv"],
    },
  ],

  steps: [
    {
      when: "2–3 months before",
      title: "Check your bank statements",
      detail:
        "You need the last three months of statements, each month ending with at least 500,000 THB, in your name and dated. A sponsorship letter can replace your own statements.",
      sourceIds: ["th-dc-dtv", "th-la-dtv"],
    },
    {
      when: "6–10 weeks before",
      title: "Order your police certificate",
      detail:
        "US applicants need an FBI certificate issued within three months of applying. Order it early enough to arrive in time but not so early that it's over three months old.",
      sourceIds: ["th-dc-dtv", "th-la-dtv"],
    },
    {
      when: "1–2 months before",
      title: "Gather proof of work or activity",
      detail:
        "Workcation: employment contract, employment certificate or portfolio. Soft power: acceptance letter or hospital appointment letter. Documents from outside Thailand and the US need certified English translations.",
      sourceIds: ["th-dc-dtv"],
    },
    {
      when: "4–8 weeks before",
      title: "Apply through the Thai e-Visa system",
      detail:
        "Upload your passport bio page (valid 6+ months), a recent photo, proof of current location and permanent residence, bank statements, police certificate and category documents. Incomplete or blurry uploads lead to requests for more documents and delays.",
      sourceIds: ["th-evisa", "th-dc-dtv", "lexbangkok-dtv"],
    },
    {
      when: "Before your flight",
      title: "Submit the Thailand Digital Arrival Card (TDAC)",
      detail:
        "Since 1 May 2025, foreign nationals entering Thailand must complete the online Thailand Digital Arrival Card before arrival.",
      sourceIds: ["uw-tdac"],
    },
    {
      when: "Near day 180",
      title: "Extend once, or leave and re-enter",
      detail:
        "You can extend once for another 180 days at Thai immigration. After the combined 360 days you have to leave Thailand and re-enter while the visa is still valid.",
      sourceIds: ["th-ch-dtv", "th-dc-dtv"],
    },
  ],

  documents: [
    { item: "Passport valid at least 6 months beyond your travel date", sourceIds: ["th-dc-dtv", "th-la-dtv"] },
    { item: "Photo taken within the last 6 months", sourceIds: ["th-dc-dtv"] },
    { item: "3 months of bank statements, each ending ≥ 500,000 THB (or a sponsor letter)", sourceIds: ["th-dc-dtv", "th-la-dtv"] },
    { item: "Proof of current location (driving licence, bank statement or proof of stay)", sourceIds: ["th-dc-dtv", "th-la-dtv"] },
    { item: "Proof of permanent residence where you apply (e.g. green card or valid US visa)", sourceIds: ["th-dc-dtv", "th-la-dtv"] },
    { item: "Criminal record certificate (FBI, issued within 3 months, for US applicants)", sourceIds: ["th-dc-dtv", "th-la-dtv"] },
    { item: "Workcation: employment contract, certificate or portfolio", sourceIds: ["th-dc-dtv"] },
    { item: "Soft power: acceptance letter or hospital appointment letter", sourceIds: ["th-dc-dtv"] },
    { item: "Dependants: birth/marriage certificates and the main holder's DTV approval", sourceIds: ["th-dc-dtv"] },
  ],

  costs: [
    { item: "DTV visa fee — Royal Thai Embassy, Washington DC", amount: "US$400", sourceIds: ["th-dc-dtv"] },
    { item: "DTV visa fee — Royal Thai Embassy, Bern", amount: "CHF 350", note: "Each embassy sets the fee in local currency.", sourceIds: ["th-ch-dtv"] },
    { item: "Funds you must hold (not a fee)", amount: "≥ 500,000 THB", sourceIds: ["th-dc-dtv"] },
  ],
  costNote:
    "Fees are set per embassy in local currency. The 500,000 THB is money you must show, not money you pay.",

  tax: [
    {
      text: "Thailand treats you as tax resident if you stay 180 days or more in a calendar year. Since 1 January 2024 (Revenue Department Order Por. 161/2566), foreign income that a tax resident brings into Thailand is taxable in the year it is brought in, regardless of when it was earned.",
      sourceIds: ["tilleke-thai-tax", "legal500-thai-tax"],
    },
    {
      text: "Thai lawmakers have discussed taxing residents' foreign income even when it isn't brought into Thailand, but this was still a proposal at the time of writing. Get advice from a Thai tax adviser before you stay 180+ days.",
      sourceIds: ["legal500-thai-tax"],
    },
  ],

  family: [
    {
      text: "Your spouse and children under 20 can apply for their own DTVs as dependants. Minors need birth certificates and the parents' marriage certificate (or a notarized custody order), and a notarized parental consent letter if travelling alone.",
      sourceIds: ["th-dc-dtv"],
    },
  ],

  pitfalls: [
    {
      text: "Using an old checklist. Since 31 August 2026 you also need a criminal record certificate and proof of permanent residence; many guides haven't caught up.",
      sourceIds: ["lexbangkok-dtv", "th-dc-dtv"],
    },
    {
      text: "Applying from a country you're only visiting. Embassies now want proof that you're a permanent resident of the country where you apply.",
      sourceIds: ["lexbangkok-dtv", "th-dc-dtv"],
    },
    {
      text: "Dipping below 500,000 THB at a month-end. Each of the three monthly statements must end at or above the threshold.",
      sourceIds: ["th-dc-dtv"],
    },
    {
      text: "Assuming the DTV makes you tax-free. If you stay 180+ days in a year and bring foreign income into Thailand, it can be taxable.",
      sourceIds: ["tilleke-thai-tax"],
    },
  ],

  faqs: [
    {
      q: "How much money do I need for the Thailand DTV?",
      a: "At least 500,000 THB, shown as the ending balance on each of your last three monthly bank statements. The Thai Embassy in Washington puts this at about US$16,000. A sponsorship letter can be used instead of your own statements.",
      sourceIds: ["th-dc-dtv"],
    },
    {
      q: "How long can I stay in Thailand on a DTV?",
      a: "Up to 180 days per entry, and you can extend once for another 180 days at Thai immigration. After 360 days you have to leave and re-enter. The visa itself is valid for five years with multiple entries.",
      sourceIds: ["th-ch-dtv", "th-dc-dtv"],
    },
    {
      q: "What changed for the DTV on 31 August 2026?",
      a: "Applications from that date need a criminal record clearance certificate and proof of permanent residence in the country where you apply. In the US, that means an FBI certificate issued within three months, and a green card or valid US visa if you aren't a US citizen.",
      sourceIds: ["lexbangkok-dtv", "th-dc-dtv"],
    },
    {
      q: "Can my family come with me on the DTV?",
      a: "Yes. A spouse and children under 20 can apply as dependants of the main DTV holder, using the holder's passport, ID and DTV approval plus birth or marriage certificates.",
      sourceIds: ["th-dc-dtv"],
    },
    {
      q: "Do I pay Thai tax on a DTV?",
      a: "Possibly. If you're in Thailand 180+ days in a calendar year you're tax resident, and since 2024 foreign income you bring into Thailand is taxable in the year you bring it in. Speak to a Thai tax adviser about your situation.",
      sourceIds: ["tilleke-thai-tax", "legal500-thai-tax"],
    },
  ],

  sources: [
    { id: "th-dc-dtv", title: "Destination Thailand Visa (DTV) (updated 10 Sep 2026)", publisher: "Royal Thai Embassy, Washington D.C.", url: "https://washingtondc.thaiembassy.org/en/page/dtv-visa", official: true, accessed: ACCESSED },
    { id: "th-la-dtv", title: "Destination Thailand Visa (DTV) (updated 1 Oct 2026)", publisher: "Royal Thai Consulate-General, Los Angeles", url: "https://thaiconsulatela.thaiembassy.org/en/publicservice/dtv-visa", official: true, accessed: ACCESSED },
    { id: "th-ch-dtv", title: "Destination Thailand Visa (DTV)", publisher: "Royal Thai Embassy, Bern", url: "https://www.thaiembassy.ch/Content/Embassy/217.html", official: true, accessed: ACCESSED },
    { id: "lexbangkok-dtv", title: "Destination Thailand Visa: new rules from 31 August 2026", publisher: "Lex Bangkok", url: "https://lexbangkok.com/destination-thailand-visa-dtv/", official: false, accessed: ACCESSED },
    { id: "uw-tdac", title: "Thailand introduces mandatory digital arrival card (from 1 May 2025)", publisher: "Universal Weather & Aviation", url: "https://www.universalweather.com/blog/thailand-introduces-mandatory-digital-arrival-card-for-all-foreign-nationals-effective-may-1-2025/", official: false, accessed: ACCESSED },
    { id: "tilleke-thai-tax", title: "Thailand: new order closes tax loophole for offshore-sourced income", publisher: "Tilleke & Gibbins", url: "https://www.tilleke.com/insights/thailand-new-order-closes-tax-loophole-for-offshore-sourced-income/7/", official: false, accessed: ACCESSED },
    { id: "legal500-thai-tax", title: "New regulations and potential laws on foreign income tax in Thailand", publisher: "ILAWASIA via Legal 500", url: "https://www.legal500.com/firms/236004-ilawasia-coltd/c-thailand/news-and-developments/new-regulations-and-potential-laws-on-foreign-income-tax-in-thailand", official: false, accessed: ACCESSED },
    { id: "th-evisa", title: "Thailand e-Visa official website", publisher: "Ministry of Foreign Affairs of Thailand", url: "https://www.thaievisa.go.th/", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ helps you plan a DTV move: add your entry date, day-180 extension and FBI-check date to the deadline agenda and calendar, keep bank statements, contracts and family documents organised, and track your budget.",
  related: ["moving-from-us-to-mexico", "moving-from-us-to-portugal"],
};
