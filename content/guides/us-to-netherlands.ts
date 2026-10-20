import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-19";

export const usToNetherlands: Guide = {
  slug: "moving-from-us-to-netherlands",
  status: "published",
  datePublished: "2026-10-20",
  fromCode: "US",
  toCode: "NL",
  fromName: "the US",
  toName: "the Netherlands",
  kind: "route",

  title: "Moving from the US to the Netherlands: 2026 Checklist (DAFT)",
  description:
    "DAFT for self-employed Americans, 2026 highly skilled migrant salaries, IND fees, 5-day municipal registration, health insurance and the 30% ruling.",
  h1: "Moving from the US to the Netherlands: the complete 2026 checklist",

  summary: [
    {
      text: "Americans don't need a provisional entry visa (MVV) for the Netherlands, so you can arrive and apply for your residence permit with the IND. The two main routes are a job with a recognised sponsor as a highly skilled migrant (from €5,942 gross a month if you're 30 or older in 2026) or self-employment under the Dutch-American Friendship Treaty (DAFT).",
      sourceIds: ["ind-mvv", "ind-income-2026", "ind-fees"],
    },
    {
      text: "DAFT usually means investing around €4,500 in your own Dutch business; the first permit runs for two years and can be extended by five. Every route costs €423 in IND fees in 2026, and you must register with your municipality within five days of arriving.",
      sourceIds: ["gt-daft", "ind-fees", "nl-register"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Entry visa (MVV)", value: "Not needed for US citizens", sourceIds: ["ind-mvv"] },
    { label: "Highly skilled migrant salary (2026)", value: "€5,942/month (30+) · €4,357 (under 30) · €3,122 (recent Dutch graduates)", sourceIds: ["ind-income-2026"] },
    { label: "DAFT investment", value: "Usually €4,500 in your own business", sourceIds: ["gt-daft"] },
    { label: "IND fee (self-employed or highly skilled)", value: "€423", sourceIds: ["ind-fees"] },
    { label: "Register with municipality", value: "Within 5 days of arrival (if staying 4+ months)", sourceIds: ["nl-register"] },
    { label: "Dutch health insurance", value: "Within 4 months of arrival", sourceIds: ["nl-health"] },
  ],

  visaOptions: [
    {
      name: "Self-employed under the Dutch-American Friendship Treaty (DAFT)",
      bestFor: "Freelancers and founders who will run their own business in the Netherlands.",
      requirement:
        "Investing a substantial amount of capital in your own company — usually €4,500. Under the current process the IND issues the first permit for two years, and you must meet the treaty conditions within six months of receiving it; extensions run for five years and require proof of genuine business activity.",
      notes: [
        "IND fee in 2026: €423 for a first application or an extension.",
        "Grant Thornton notes a statutory decision period of up to 90 days.",
      ],
      sourceIds: ["gt-daft", "ind-fees"],
    },
    {
      name: "Highly skilled migrant (kennismigrant)",
      bestFor: "Professionals with a job offer from a Dutch employer that is an IND-recognised sponsor.",
      requirement:
        "Only a recognised sponsor can apply, and your gross monthly salary must meet the 2026 threshold: €5,942 if you're 30 or older, €4,357 if you're under 30, or €3,122 under the reduced criterion for recent graduates. Holiday allowance doesn't count toward it.",
      notes: [
        "The IND aims to decide within two weeks of receiving the employer's application.",
      ],
      sourceIds: ["ind-income-2026", "bgn-hsm"],
    },
    {
      name: "EU Blue Card",
      bestFor: "Graduates with a higher-paid Dutch job offer who want EU mobility.",
      requirement:
        "A 2026 gross monthly salary of at least €5,942, or €4,754 under the reduced criterion for recent graduates.",
      sourceIds: ["ind-income-2026"],
    },
  ],

  recentChanges: [
    {
      text: "The 30% ruling for incoming employees drops to a maximum tax-free share of 27% from 1 January 2027, and the income standard rises to €50,436. Rulings that started before 2024 keep 30% for up to five years.",
      sourceIds: ["bgn-30-ruling"],
    },
    {
      text: "A draft bill to extend naturalisation from five to ten years went to consultation in September 2025, but as of October 2026 it had not become law; five years of lawful residence still applies.",
      sourceIds: ["lawandmore-naturalisation"],
    },
  ],

  steps: [
    {
      when: "3–6 months before",
      title: "Choose DAFT or a sponsored job",
      detail:
        "With a Dutch employer that's a recognised sponsor, they apply for you as a highly skilled migrant. If you'll work for yourself, DAFT is the treaty route open to Americans. Check the 2026 salary or investment figures first.",
      sourceIds: ["bgn-hsm", "ind-income-2026", "gt-daft"],
    },
    {
      when: "1–3 months before",
      title: "Prepare your business plan and capital (DAFT)",
      detail:
        "Plan to put around €4,500 into your Dutch business. Under the current rules you have six months after the permit is issued to meet the treaty conditions.",
      sourceIds: ["gt-daft"],
    },
    {
      when: "Arrival",
      title: "Enter without an MVV",
      detail:
        "US citizens are on the IND's list of nationalities that don't need a provisional residence permit (MVV) to come to the Netherlands for a longer stay.",
      sourceIds: ["ind-mvv"],
    },
    {
      when: "Within 5 days",
      title: "Register with your municipality",
      detail:
        "If you'll stay longer than four months you must register in the Personal Records Database within five days of arriving. You'll get a citizen service number (BSN), which you need for taxes and most official matters.",
      sourceIds: ["nl-register"],
    },
    {
      when: "Within 4 months",
      title: "Take out Dutch health insurance",
      detail:
        "Basic Dutch health insurance is required no later than four months after arrival, and it isn't backdated, so take it out as early as you can.",
      sourceIds: ["nl-health"],
    },
    {
      when: "First months",
      title: "Apply for (or complete) your residence permit",
      detail:
        "Pay the €423 IND fee for a self-employed or highly skilled migrant permit. For DAFT, set up the business, deposit the capital and file proof within six months.",
      sourceIds: ["ind-fees", "gt-daft"],
    },
    {
      when: "First year",
      title: "Sort out US and Dutch taxes",
      detail:
        "Employees may qualify for the 30% (from 2027: 27%) ruling. As an American you also keep filing US returns, and file an FBAR if your foreign accounts exceed $10,000.",
      sourceIds: ["bgn-30-ruling", "irs-abroad", "fincen-fbar"],
    },
  ],

  documents: [
    { item: "Valid US passport", sourceIds: ["ind-mvv"] },
    { item: "Signed employment contract meeting the 2026 salary threshold (highly skilled migrant)", sourceIds: ["ind-income-2026"] },
    { item: "Business plan and proof of capital invested, usually €4,500 (DAFT)", sourceIds: ["gt-daft"] },
    { item: "Proof of a genuine business for DAFT extensions", sourceIds: ["gt-daft"] },
    { item: "Proof of address for municipal registration", sourceIds: ["nl-register"] },
    { item: "Dutch basic health insurance policy", sourceIds: ["nl-health"] },
    { item: "IND fee payment (€423)", sourceIds: ["ind-fees"] },
  ],

  costs: [
    { item: "IND fee — self-employed (incl. DAFT), first application or extension", amount: "€423", sourceIds: ["ind-fees"] },
    { item: "IND fee — highly skilled migrant", amount: "€423", note: "Usually paid by the sponsoring employer.", sourceIds: ["ind-fees", "bgn-hsm"] },
    { item: "IND fee — partner or family member", amount: "€254", sourceIds: ["ind-fees"] },
    { item: "IND fee — child under 18 with an adoptive or foster parent (incl. born in NL)", amount: "€85", sourceIds: ["ind-fees"] },
  ],
  costNote:
    "IND fees change every 1 January. The DAFT investment is capital in your own business, not a fee.",

  tax: [
    {
      text: "Incoming employees can qualify for a tax-free allowance known as the 30% ruling. From 1 January 2027 the maximum falls to 27%, and the income standard rises to €50,436 (€38,388 for under-30s with a master's degree).",
      sourceIds: ["bgn-30-ruling"],
    },
    {
      text: "US citizens are taxed on worldwide income wherever they live. The 2026 Foreign Earned Income Exclusion is up to $132,900, and an FBAR is due when foreign accounts exceed $10,000 combined.",
      sourceIds: ["irs-abroad", "irs-notice-2026-25", "fincen-fbar"],
    },
  ],

  family: [
    {
      text: "Partners and family members apply for their own residence permits (IND fee €254; €85 for a child under 18 with an adoptive or foster parent). Each person staying longer than four months registers with the municipality.",
      sourceIds: ["ind-fees", "nl-register"],
    },
  ],

  pitfalls: [
    {
      text: "Missing the five-day registration. You need your BSN for almost everything, including taxes.",
      sourceIds: ["nl-register"],
    },
    {
      text: "Waiting on health insurance. It's required within four months and isn't backdated, so you pay for any care before the start date yourself.",
      sourceIds: ["nl-health"],
    },
    {
      text: "Counting holiday allowance toward the salary threshold. The IND doesn't include it.",
      sourceIds: ["ind-income-2026"],
    },
    {
      text: "Treating DAFT as a passive visa. Extensions require proof of a genuine business.",
      sourceIds: ["gt-daft"],
    },
  ],

  faqs: [
    {
      q: "Do Americans need a visa to move to the Netherlands?",
      a: "Not a provisional entry visa (MVV): US nationals are exempt. You still need a residence permit from the IND for a long stay, for example under DAFT or as a highly skilled migrant.",
      sourceIds: ["ind-mvv"],
    },
    {
      q: "How much do I need to invest for the Dutch-American Friendship Treaty?",
      a: "Usually €4,500 of capital in your own Dutch business. The first permit lasts two years and can be extended by five if you still meet the conditions.",
      sourceIds: ["gt-daft"],
    },
    {
      q: "What salary do I need as a highly skilled migrant in 2026?",
      a: "€5,942 gross per month if you're 30 or older, €4,357 if you're under 30, and €3,122 under the reduced criterion for recent graduates.",
      sourceIds: ["ind-income-2026"],
    },
    {
      q: "How soon must I register in the Netherlands?",
      a: "Within five days of arrival if you'll stay longer than four months. You'll receive your citizen service number (BSN).",
      sourceIds: ["nl-register"],
    },
    {
      q: "Is the 30% ruling still available?",
      a: "Yes for eligible employees, but the maximum drops to 27% from 1 January 2027 for rulings that started from 2024.",
      sourceIds: ["bgn-30-ruling"],
    },
  ],

  sources: [
    { id: "ind-mvv", title: "MVV exemptions", publisher: "IND (Dutch Immigration and Naturalisation Service)", url: "https://ind.nl/en/mvv-exemptions", official: true, accessed: ACCESSED },
    { id: "ind-income-2026", title: "Required amounts income requirements", publisher: "IND", url: "https://ind.nl/en/required-amounts-income-requirements", official: true, accessed: ACCESSED },
    { id: "ind-fees", title: "Fees: costs of an application", publisher: "IND", url: "https://ind.nl/en/fees-costs-of-an-application", official: true, accessed: ACCESSED },
    { id: "bgn-hsm", title: "Residence permit for highly skilled migrant", publisher: "Business.gov.nl (Netherlands Enterprise Agency)", url: "https://business.gov.nl/coming-to-the-netherlands/permits-and-visa/residence-permit-for-highly-skilled-migrant/", official: true, accessed: ACCESSED },
    { id: "bgn-30-ruling", title: "30 percent ruling compensation down to 27 percent", publisher: "Business.gov.nl (Netherlands Enterprise Agency)", url: "https://business.gov.nl/amendments/30-percent-ruling-compensation-down-to-27-percent/", official: true, accessed: ACCESSED },
    { id: "nl-register", title: "Registering with the municipality in the Netherlands", publisher: "Government of the Netherlands", url: "https://sdg.government.nl/government-services-in-the-netherlands/registering-with-the-municipality-in-the-netherlands", official: true, accessed: ACCESSED },
    { id: "nl-health", title: "When do I need to take out health insurance if I come to live in the Netherlands?", publisher: "Government of the Netherlands", url: "https://www.government.nl/faq/health-insurance/when-do-i-need-to-take-out-health-insurance-if-i-come-to-live-in-the-netherlands", official: true, accessed: ACCESSED },
    { id: "gt-daft", title: "Focus on the DAFT and DJFT: requirements and recent changes (30 Jun 2026)", publisher: "Grant Thornton Netherlands", url: "https://www.grantthornton.nl/en/insights-en/human-capital-services/focus-on-the-daft-and-djft-requirements-to-apply-and-recent-changes/", official: false, accessed: ACCESSED },
    { id: "lawandmore-naturalisation", title: "Naturalisation in the Netherlands: the five-year rule and the ten-year proposal", publisher: "Law & More", url: "https://lawandmore.eu/naturalisation-netherlands/", official: false, accessed: ACCESSED },
    { id: "irs-abroad", title: "U.S. citizens and resident aliens abroad", publisher: "IRS", url: "https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad", official: true, accessed: ACCESSED },
    { id: "irs-notice-2026-25", title: "Notice 2026-25 (2026 foreign earned income exclusion: $132,900)", publisher: "IRS", url: "https://www.irs.gov/pub/irs-drop/n-26-25.pdf", official: true, accessed: ACCESSED },
    { id: "fincen-fbar", title: "Report of Foreign Bank and Financial Accounts (FBAR)", publisher: "FinCEN", url: "https://www.fincen.gov/report-foreign-bank-and-financial-accounts", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ maps your US → Netherlands move: put the 5-day registration, 4-month insurance deadline and DAFT's 6-month window in the deadline agenda and calendar, keep business and family documents together, and track your moving budget.",
  related: ["moving-from-us-to-germany", "fbi-background-check-apostille-for-visa"],
};
