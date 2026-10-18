import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-18";

export const usToMexico: Guide = {
  slug: "moving-from-us-to-mexico",
  status: "published",
  datePublished: "2026-10-18",
  fromCode: "US",
  toCode: "MX",
  fromName: "the US",
  toName: "Mexico",
  kind: "route",

  title: "Moving from the US to Mexico: 2026 Residency Checklist",
  description:
    "Temporary vs permanent residency, the 2026 UMA-based income and savings requirements, consulate fees, the 30-day INM step and taxes for Americans.",
  h1: "Moving from the US to Mexico: the complete 2026 residency checklist",

  summary: [
    {
      text: "To live in Mexico for more than 180 days, you apply for a resident visa at a Mexican consulate in the US, then exchange it for a residence card at Mexico's immigration institute (INM) within 30 days of arriving.",
      sourceIds: ["consulmex-presidio"],
    },
    {
      text: "Since the July 2025 guidelines, financial requirements are set in UMA days. For temporary residency in 2026 that means monthly income of about MXN 79,771 or an average balance of about MXN 1.34 million; the Las Vegas consulate converts this to US$4,630 a month or US$78,025.",
      sourceIds: ["dof-lineamientos-2025", "inegi-uma-2026", "consulmex-lv"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "UMA (from 1 Feb 2026)", value: "MXN 117.31 per day", sourceIds: ["inegi-uma-2026"] },
    { label: "Temporary residency — income", value: "680 UMA days ≈ MXN 79,771/month (last 6 months)", sourceIds: ["dof-lineamientos-2025", "inegi-uma-2026"] },
    { label: "Temporary residency — savings", value: "11,460 UMA days ≈ MXN 1,344,373 average balance (last 12 months)", sourceIds: ["dof-lineamientos-2025", "inegi-uma-2026"] },
    { label: "Permanent residency (retirees) — pension", value: "1,140 UMA days ≈ MXN 133,733/month", sourceIds: ["dof-lineamientos-2025", "inegi-uma-2026"] },
    { label: "Las Vegas consulate (USD)", value: "$4,630/month income or $78,025 balance", sourceIds: ["consulmex-lv"] },
    { label: "After you arrive", value: "30 days to start your residence card at INM", sourceIds: ["consulmex-presidio"] },
  ],

  visaOptions: [
    {
      name: "Temporary resident visa (economic solvency)",
      bestFor: "Most Americans: remote workers, early retirees, people trying Mexico for 1–4 years.",
      requirement:
        "Either tax-free monthly income above 680 UMA days for the last 6 months (≈ MXN 79,771) or an average monthly balance of 11,460 UMA days over the last 12 months (≈ MXN 1,344,373). Consulates publish their own US-dollar figure, e.g. $4,630 or $78,025 in Las Vegas.",
      notes: [
        "Temporary residency covers stays longer than 180 days and up to 4 years.",
        "Dollar amounts move with the exchange rate and differ between consulates.",
      ],
      sourceIds: ["dof-lineamientos-2025", "inegi-uma-2026", "consulmex-lv", "consulmex-presidio"],
    },
    {
      name: "Permanent resident visa (retirees / pensioners)",
      bestFor: "Retirees with a large pension or substantial savings who want to skip temporary residency.",
      requirement:
        "Tax-free monthly pension income above 1,140 UMA days for the last 6 months (≈ MXN 133,733) or an average balance of 45,850 UMA days over 12 months (≈ MXN 5,378,664).",
      sourceIds: ["dof-lineamientos-2025", "inegi-uma-2026"],
    },
    {
      name: "Family unit",
      bestFor: "Spouses, partners and children of a temporary or permanent resident.",
      requirement:
        "Proof of the relationship (marriage or birth certificate) plus 220 UMA days (≈ MXN 25,808) of savings or income per relative. At a consulate, this only works when the sponsor is abroad and applies together with the relative.",
      sourceIds: ["dof-lineamientos-2025", "inegi-uma-2026", "consulmex-sd-family"],
    },
  ],

  recentChanges: [
    {
      text: "New migration guidelines published in Mexico's official gazette on 25 July 2025 switched the financial requirements from minimum-wage days to UMA days and set new multipliers (680 and 11,460 days for temporary residency).",
      sourceIds: ["dof-lineamientos-2025"],
    },
    {
      text: "The 2026 UMA of MXN 117.31 per day took effect on 1 February 2026, so peso thresholds rose again this year.",
      sourceIds: ["inegi-uma-2026"],
    },
  ],

  steps: [
    {
      when: "3–6 months before",
      title: "Check which threshold you meet",
      detail:
        "Pull your last 6 months of income statements and 12 months of bank statements and compare them with your consulate's current dollar figures. If you're close to the line, remember the USD amounts move with the peso.",
      sourceIds: ["dof-lineamientos-2025", "consulmex-lv"],
    },
    {
      when: "2–3 months before",
      title: "Book a consulate appointment",
      detail:
        "Appointments are booked through the Foreign Ministry's system (citas.sre.gob.mx). Bring your valid passport, the completed application form, original or certified documents for your category and proof of your legal status in the US if you aren't a citizen.",
      sourceIds: ["consulmex-lv", "consulmex-sd-family"],
    },
    {
      when: "Appointment day",
      title: "Interview and pay the fee",
      detail:
        "Consulates charge a non-refundable processing fee, for example $56 in Las Vegas and San Diego (cash only in San Diego). Approval is decided by the consulate after reviewing your documents.",
      sourceIds: ["consulmex-lv", "consulmex-sd-family"],
    },
    {
      when: "Visa issued",
      title: "Fly to Mexico on the visa",
      detail:
        "A visa doesn't guarantee entry: you present it at the border, where officers may interview you and check your requirements again.",
      sourceIds: ["consulmex-presidio"],
    },
    {
      when: "Within 30 days of arrival",
      title: "Start the canje at INM",
      detail:
        "Apply for your residence card at an INM office within 30 calendar days of entering Mexico.",
      sourceIds: ["consulmex-presidio"],
    },
    {
      when: "First months",
      title: "Set up tax and banking",
      detail:
        "Work out with an adviser whether you become a Mexican tax resident, and keep filing US returns and FBARs as required.",
      sourceIds: ["irs-abroad", "fincen-fbar"],
    },
  ],

  documents: [
    { item: "Valid passport + copies of required pages", sourceIds: ["consulmex-lv", "consulmex-sd-family"] },
    { item: "Completed visa application form", sourceIds: ["consulmex-lv"] },
    { item: "Recent passport-style photo", sourceIds: ["consulmex-sd-family"] },
    { item: "6 months of income statements OR 12 months of bank statements", sourceIds: ["dof-lineamientos-2025", "consulmex-lv"] },
    { item: "Proof of legal status in the US (non-US citizens)", sourceIds: ["consulmex-sd-family"] },
    { item: "Marriage or birth certificates for family members (family unit)", sourceIds: ["dof-lineamientos-2025", "consulmex-sd-family"] },
    { item: "Appointment confirmation from citas.sre.gob.mx", sourceIds: ["consulmex-lv"] },
  ],

  costs: [
    { item: "Consular visa processing fee (Las Vegas / San Diego, 2026)", amount: "$56", note: "Other consulates publish their own amount (Presidio lists $54).", sourceIds: ["consulmex-lv", "consulmex-sd-family", "consulmex-presidio"] },
  ],
  costNote:
    "We list only official consulate fees. INM also charges for the residence card itself during the canje in Mexico — check the current amount with INM. Living costs depend on your city and housing, so we don't estimate them.",

  tax: [
    {
      text: "As a US citizen you keep filing US returns while living in Mexico. The Foreign Earned Income Exclusion for 2026 is up to $132,900 of earned income.",
      sourceIds: ["irs-abroad", "irs-notice-2026-25"],
    },
    {
      text: "Mexican bank accounts count toward the FBAR: if all your foreign accounts together exceed $10,000 at any point in the year, you file FinCEN Form 114.",
      sourceIds: ["fincen-fbar"],
    },
    {
      text: "Residency status and tax residency are separate questions in Mexico. Get advice from a Mexican accountant before you start earning or selling assets there.",
      sourceIds: ["irs-abroad"],
    },
  ],

  family: [
    {
      text: "Each relative applying through family unit needs proof of the relationship and 220 UMA days (about MXN 25,808) of savings or income. At a consulate, the family-unit route only applies when the resident sponsor is abroad and applies together with the relative.",
      sourceIds: ["dof-lineamientos-2025", "inegi-uma-2026", "consulmex-sd-family"],
    },
  ],

  pitfalls: [
    {
      text: "Using 2024 numbers. The July 2025 guidelines changed the formula to UMA days with higher multipliers, so older blog posts understate what you need.",
      sourceIds: ["dof-lineamientos-2025"],
    },
    {
      text: "Assuming every consulate uses the same dollar figure. Each consulate converts the peso amounts itself; check the page of the consulate where you'll apply.",
      sourceIds: ["consulmex-lv", "consulmex-sd-family"],
    },
    {
      text: "Missing the 30-day INM deadline after arrival.",
      sourceIds: ["consulmex-presidio"],
    },
    {
      text: "Treating the visa as guaranteed entry. Border officers can still interview you and check requirements.",
      sourceIds: ["consulmex-presidio"],
    },
  ],

  faqs: [
    {
      q: "How much income do I need for Mexican temporary residency in 2026?",
      a: "Tax-free monthly income above 680 UMA days for the last six months — about MXN 79,771 at the 2026 UMA of MXN 117.31. The Las Vegas consulate lists this as US$4,630 a month. Alternatively, show an average balance of 11,460 UMA days (about MXN 1.34 million; US$78,025 in Las Vegas) over 12 months.",
      sourceIds: ["dof-lineamientos-2025", "inegi-uma-2026", "consulmex-lv"],
    },
    {
      q: "Can I apply for Mexican residency from inside Mexico?",
      a: "The route in this guide starts with a resident visa from a Mexican consulate outside Mexico. Once the visa is issued and you enter Mexico, you have 30 calendar days to apply for your residence card at INM. If you're already in Mexico, ask INM or an immigration lawyer whether any in-country route applies to you.",
      sourceIds: ["consulmex-presidio"],
    },
    {
      q: "Can retirees get permanent residency in Mexico straight away?",
      a: "Yes, if they meet the pensioner threshold: tax-free monthly pension income above 1,140 UMA days (about MXN 133,733) for six months, or an average balance of 45,850 UMA days (about MXN 5.38 million) over 12 months.",
      sourceIds: ["dof-lineamientos-2025", "inegi-uma-2026"],
    },
    {
      q: "How long can I stay on temporary residency?",
      a: "Temporary residency is for stays longer than 180 days and up to four years.",
      sourceIds: ["consulmex-presidio"],
    },
    {
      q: "Do I still pay US taxes if I live in Mexico?",
      a: "Yes. US citizens file US returns wherever they live; the 2026 Foreign Earned Income Exclusion is up to $132,900, and Mexican accounts count toward the $10,000 FBAR threshold.",
      sourceIds: ["irs-abroad", "irs-notice-2026-25", "fincen-fbar"],
    },
  ],

  sources: [
    { id: "dof-lineamientos-2025", title: "Lineamientos para trámites y procedimientos migratorios (DOF, 25 July 2025)", publisher: "Consulate of Mexico in Houston (copy of the official gazette text)", url: "https://consulmex.sre.gob.mx/houston/images/lineamientos-visas-25-jul-2025.pdf", official: true, accessed: ACCESSED },
    { id: "inegi-uma-2026", title: "UMA 2026 values (in force from 1 February 2026)", publisher: "INEGI", url: "https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2026/uma/uma2026.pdf", official: true, accessed: ACCESSED },
    { id: "consulmex-lv", title: "Temporary Residence Visa 2026", publisher: "Consulate of Mexico in Las Vegas", url: "https://consulmex.sre.gob.mx/lasvegas/images/2026/VISAS2026/TemporaryResidenceVisa2026", official: true, accessed: ACCESSED },
    { id: "consulmex-sd-family", title: "Residente temporal – unidad familiar (2026)", publisher: "Consulate of Mexico in San Diego", url: "https://consulmex.sre.gob.mx/sandiego/images/visasespanol2026/5e_Temporal_-_Unidad_Familiar.pdf", official: true, accessed: ACCESSED },
    { id: "consulmex-presidio", title: "Visa de residencia temporal", publisher: "Consulate of Mexico in Presidio", url: "https://consulmex.sre.gob.mx/presidio/index.php/visas/30-visas/158-residente-temporal", official: true, accessed: ACCESSED },
    { id: "irs-abroad", title: "U.S. citizens and resident aliens abroad", publisher: "IRS", url: "https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad", official: true, accessed: ACCESSED },
    { id: "irs-notice-2026-25", title: "Notice 2026-25 (2026 foreign earned income exclusion: $132,900)", publisher: "IRS", url: "https://www.irs.gov/pub/irs-drop/n-26-25.pdf", official: true, accessed: ACCESSED },
    { id: "fincen-fbar", title: "Report of Foreign Bank and Financial Accounts (FBAR)", publisher: "FinCEN", url: "https://www.fincen.gov/report-foreign-bank-and-financial-accounts", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ gives you a US → Mexico roadmap: add your arrival date and the 30-day INM deadline to the agenda and your calendar, keep each family member's documents organised, and track your moving budget in the currency you choose.",
  related: ["moving-from-us-to-spain", "thailand-dtv-visa-guide"],
};
