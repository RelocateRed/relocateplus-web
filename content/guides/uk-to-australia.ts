import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-19";

export const ukToAustralia: Guide = {
  slug: "moving-from-uk-to-australia",
  status: "published",
  datePublished: "2026-10-19",
  fromCode: "GB",
  toCode: "AU",
  fromName: "the UK",
  toName: "Australia",
  kind: "route",

  title: "Moving from the UK to Australia: 2026 Visa & Move Checklist",
  description:
    "Working holiday (now to age 35, no farm work), skilled and employer-sponsored visas, 2026 fees and salary thresholds, Medicare and tax basics for Brits.",
  h1: "Moving from the UK to Australia: the 2026 checklist",

  summary: [
    {
      text: "The three main routes for Brits are a Working Holiday visa (ages 18–35 for UK passport holders, AUD 840 for the first one), an employer-sponsored Skills in Demand visa (salary of at least AUD 79,423 from 1 July 2026), or a permanent Skilled Independent visa, which needs an invitation and 65 points on the points test.",
      sourceIds: ["au-whv", "au-uk-whv", "au-482", "au-indexation-2026", "au-189-pt"],
    },
    {
      text: "Since 1 July 2024, UK passport holders can get up to three 12-month Working Holiday visas without doing any farm or other \"specified work\". A UK passport also counts as proof of competent English for skilled visas.",
      sourceIds: ["au-uk-whv", "au-competent-english"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Working Holiday age limit (UK)", value: "18 to 35 inclusive (apply before your 36th birthday)", sourceIds: ["au-uk-whv"] },
    { label: "Working Holiday visas for Brits", value: "Up to 3 × 12 months, no specified work needed", sourceIds: ["au-uk-whv"] },
    { label: "Skills in Demand salary floor (Core Skills)", value: "AUD 79,423 from 1 July 2026", sourceIds: ["au-indexation-2026"] },
    { label: "Skilled Independent (189) points", value: "At least 65; under 45 when invited", sourceIds: ["au-189-pt"] },
    { label: "English for skilled visas", value: "UK passport = competent English", sourceIds: ["au-competent-english"] },
    { label: "Citizenship by conferral", value: "4 years living in Australia, last 12 months as a permanent resident", sourceIds: ["au-citizenship"] },
  ],

  visaOptions: [
    {
      name: "Working Holiday visa (subclass 417)",
      bestFor: "Brits aged 18–35 without children who want up to three years of work and travel.",
      requirement:
        "UK passport, aged 18–35 inclusive, apply online from outside Australia for the first visa, and no dependent children with you. Each visa allows a 12-month stay; the first costs AUD 840 and the second and third AUD 1,000 each.",
      notes: [
        "UK passport holders don't need to complete specified (e.g. farm) work for a second or third visa if they apply on or after 1 July 2024.",
        "You can still only work 6 months for one employer, and study for up to 4 months.",
        "Home Affairs says average processing is around three months — don't book flights before the grant.",
      ],
      sourceIds: ["au-whv", "au-uk-whv"],
    },
    {
      name: "Skills in Demand visa (subclass 482)",
      bestFor: "Skilled workers with a job offer from an approved Australian sponsor.",
      requirement:
        "Nomination by an approved employer sponsor, the right skills for the job and English at the required level. From 1 July 2026 the Core Skills stream needs a salary of at least AUD 79,423 and the Specialist Skills stream at least AUD 146,576. Stay up to 4 years; the visa costs from AUD 4,015.",
      notes: [
        "Core Skills: your occupation must be on the Core Skills Occupation List.",
      ],
      sourceIds: ["au-482", "au-indexation-2026"],
    },
    {
      name: "Skilled Independent visa (subclass 189, points-tested)",
      bestFor: "Professionals in listed occupations who want permanent residence without an employer sponsor.",
      requirement:
        "An occupation on the relevant skilled occupation list, a suitable skills assessment, an invitation through SkillSelect, being under 45 when invited and at least 65 points. It's a permanent visa costing from AUD 6,135.",
      notes: [
        "You submit an Expression of Interest (EOI) first and are ranked against other applicants; there's no guarantee of an invitation.",
      ],
      sourceIds: ["au-189", "au-189-pt"],
    },
  ],

  recentChanges: [
    {
      text: "Skilled visa income thresholds rose 3.8% on 1 July 2026: the Core Skills Income Threshold went from AUD 76,515 to AUD 79,423 and the Specialist Skills threshold from AUD 141,210 to AUD 146,576 for new nominations.",
      sourceIds: ["au-indexation-2026"],
    },
    {
      text: "Home Affairs updated its health insurance guidance in October 2026, reminding temporary visa holders that most aren't eligible for Medicare and may be responsible for all healthcare costs.",
      sourceIds: ["au-health-insurance-2026"],
    },
    {
      text: "The English tests accepted for Australian visas changed on 7 August 2025. This doesn't affect UK passport holders, who meet competent English through their passport.",
      sourceIds: ["au-competent-english"],
    },
  ],

  steps: [
    {
      when: "6–12 months before",
      title: "Choose your route",
      detail:
        "Under 36 with no job offer? The Working Holiday visa is the simplest start. With an employer willing to sponsor you, look at the Skills in Demand visa. For permanent residence on your own, check whether your occupation is on the 189 list and run the points calculator.",
      sourceIds: ["au-uk-whv", "au-482", "au-189-pt"],
    },
    {
      when: "4–9 months before (skilled visas)",
      title: "Get your skills assessed",
      detail:
        "For a Skilled Independent visa you must have a suitable skills assessment for your occupation at the time you're invited. The assessing body depends on your occupation.",
      sourceIds: ["au-189-pt"],
    },
    {
      when: "After the assessment",
      title: "Lodge an Expression of Interest",
      detail:
        "Submit an EOI in SkillSelect with your points claims. You're ranked against other applicants, and invitations are issued regularly. You need 65 points and must be under 45 when invited.",
      sourceIds: ["au-189-pt"],
    },
    {
      when: "When invited",
      title: "Apply with full evidence",
      detail:
        "Provide documents for every claim in your EOI, character documents and forms (such as Form 80), and evidence for your partner and children. A UK passport covers your competent English, and a partner with a UK passport doesn't need to prove functional English.",
      sourceIds: ["au-189-pt", "au-competent-english"],
    },
    {
      when: "Before you fly",
      title: "Wait for the grant, then book",
      detail:
        "Home Affairs warns not to book flights or commit to work until your visa is granted. For Working Holiday visas, average processing is around three months.",
      sourceIds: ["au-whv"],
    },
    {
      when: "Before you arrive",
      title: "Arrange health cover",
      detail:
        "Most temporary visa holders aren't eligible for Medicare. As a UK resident visitor you may be covered for medically necessary care under the reciprocal agreement, but that cover ends when your visa expires — so temporary residents should plan private health insurance.",
      sourceIds: ["au-health-insurance-2026", "sa-uk-reciprocal"],
    },
    {
      when: "First year",
      title: "Sort out tax residency",
      detail:
        "If you live in Australia you're usually an Australian tax resident and must declare income earned in Australia and overseas. The ATO uses the 'resides' test first, then the domicile and 183-day tests.",
      sourceIds: ["ato-residency"],
    },
  ],

  documents: [
    { item: "Valid UK passport (also proves competent English)", sourceIds: ["au-uk-whv", "au-competent-english"] },
    { item: "Skills assessment for your nominated occupation (skilled visas)", sourceIds: ["au-189-pt"] },
    { item: "SkillSelect Expression of Interest and invitation (189)", sourceIds: ["au-189-pt"] },
    { item: "Evidence for every points claim: degrees, employment records, references", sourceIds: ["au-189-pt"] },
    { item: "Character documents and Form 80 / Form 1221", sourceIds: ["au-189-pt"] },
    { item: "Partner documents: identity, relationship evidence, marriage certificate", sourceIds: ["au-189-pt"] },
    { item: "Employer nomination from an approved sponsor (482)", sourceIds: ["au-482"] },
    { item: "Proof of health insurance for temporary visas", sourceIds: ["au-health-insurance-2026"] },
  ],

  costs: [
    { item: "Working Holiday visa — first", amount: "AUD 840", sourceIds: ["au-whv"] },
    { item: "Working Holiday visa — second or third", amount: "AUD 1,000 each", sourceIds: ["au-whv"] },
    { item: "Skills in Demand visa (482)", amount: "From AUD 4,015", note: "Extra charges may apply for family members and second instalments.", sourceIds: ["au-482"] },
    { item: "Skilled Independent visa (189)", amount: "From AUD 6,135", note: "Use Home Affairs' Visa Pricing Estimator for your family size.", sourceIds: ["au-189"] },
  ],
  costNote:
    "Visa charges are set by Home Affairs and usually change on 1 July. Skills assessments, health checks, police certificates and flights are extra.",

  tax: [
    {
      text: "Australian tax residents must declare all income earned in Australia and overseas. The ATO's primary test is whether you 'reside' in Australia; the domicile and 183-day tests apply if that one doesn't settle it.",
      sourceIds: ["ato-residency"],
    },
    {
      text: "If you'll draw a UK State Pension, check how living in Australia affects it: GOV.UK says the pension only rises each year if you live in the EEA, Gibraltar, Switzerland or a country with a qualifying social security agreement with the UK, and the International Pension Centre can confirm your case.",
      sourceIds: ["govuk-pension-abroad"],
    },
  ],

  family: [
    {
      text: "Working Holiday visa holders can't bring dependent children. For skilled visas you include your partner and children in the application with identity and relationship documents.",
      sourceIds: ["au-whv", "au-189-pt"],
    },
  ],

  pitfalls: [
    {
      text: "Assuming you still need 88 days of farm work. That rule no longer applies to UK passport holders applying for a second or third Working Holiday visa on or after 1 July 2024.",
      sourceIds: ["au-uk-whv"],
    },
    {
      text: "Missing the age cut-off. UK applicants must lodge before midnight (AEST) on the day before their 36th birthday.",
      sourceIds: ["au-uk-whv"],
    },
    {
      text: "Using last year's salary threshold. Nominations from 1 July 2026 need at least AUD 79,423 (Core Skills).",
      sourceIds: ["au-indexation-2026"],
    },
    {
      text: "Relying on the UK reciprocal agreement as long-term health cover. It's for visitors and ends when your visa expires.",
      sourceIds: ["sa-uk-reciprocal", "au-health-insurance-2026"],
    },
  ],

  faqs: [
    {
      q: "How old can I be for an Australian Working Holiday visa with a UK passport?",
      a: "18 to 35 inclusive. UK passport holders can lodge an application until midnight Australian Eastern Standard Time on the day before their 36th birthday.",
      sourceIds: ["au-uk-whv"],
    },
    {
      q: "Do Brits still have to do farm work for a second Working Holiday visa?",
      a: "No. Since 1 July 2024, UK passport holders can get up to three Working Holiday visas without meeting any specified work requirement.",
      sourceIds: ["au-uk-whv"],
    },
    {
      q: "What salary do I need for an employer-sponsored visa to Australia in 2026?",
      a: "For the Core Skills stream of the Skills in Demand visa, at least AUD 79,423 for nominations from 1 July 2026. The Specialist Skills stream needs at least AUD 146,576.",
      sourceIds: ["au-indexation-2026"],
    },
    {
      q: "How many points do I need for Australian permanent residency?",
      a: "For the Skilled Independent visa (subclass 189), at least 65 points, and you must be under 45 when invited. Meeting the minimum doesn't guarantee an invitation, because applicants are ranked.",
      sourceIds: ["au-189-pt"],
    },
    {
      q: "Do I need an English test if I'm British?",
      a: "Not for competent English. Home Affairs accepts a valid UK passport as proof of competent English.",
      sourceIds: ["au-competent-english"],
    },
    {
      q: "Can I use Medicare as a Brit in Australia?",
      a: "UK residents visiting Australia can get medically necessary care under the reciprocal agreement, but cover ends when the visa expires. Most temporary visa holders aren't eligible for Medicare, so get private health insurance.",
      sourceIds: ["sa-uk-reciprocal", "au-health-insurance-2026"],
    },
  ],

  sources: [
    { id: "au-whv", title: "Working Holiday visa (subclass 417)", publisher: "Department of Home Affairs (Australia)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417", official: true, accessed: ACCESSED },
    { id: "au-uk-whv", title: "New Working Holiday Maker arrangements for UK passport holders", publisher: "Department of Home Affairs (Australia)", url: "https://immi.homeaffairs.gov.au/what-we-do/whm-program/latest-news/arrangements-uk-passport-holders", official: true, accessed: ACCESSED },
    { id: "au-482", title: "Skills in Demand visa (subclass 482)", publisher: "Department of Home Affairs (Australia)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482", official: true, accessed: ACCESSED },
    { id: "au-indexation-2026", title: "Annual indexation of skilled visa income thresholds from 1 July 2026", publisher: "Department of Home Affairs (Australia)", url: "https://immi.homeaffairs.gov.au/news-media/archive/article?itemId=1416", official: true, accessed: ACCESSED },
    { id: "au-189", title: "Skilled Independent visa (subclass 189)", publisher: "Department of Home Affairs (Australia)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189", official: true, accessed: ACCESSED },
    { id: "au-189-pt", title: "Skilled Independent visa (subclass 189) — Points-tested stream", publisher: "Department of Home Affairs (Australia)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/points-tested", official: true, accessed: ACCESSED },
    { id: "au-competent-english", title: "Competent English", publisher: "Department of Home Affairs (Australia)", url: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/competent-english", official: true, accessed: ACCESSED },
    { id: "au-health-insurance-2026", title: "Health insurance requirements for Australian visa holders (6 Oct 2026)", publisher: "Department of Home Affairs (Australia)", url: "https://immi.homeaffairs.gov.au/news-media/archive/article?itemId=1447", official: true, accessed: ACCESSED },
    { id: "au-citizenship", title: "Become an Australian citizen (by conferral): permanent residents", publisher: "Department of Home Affairs (Australia)", url: "https://immi.homeaffairs.gov.au/citizenship/become-a-citizen/permanent-resident", official: true, accessed: ACCESSED },
    { id: "sa-uk-reciprocal", title: "Reciprocal health care: visiting from the United Kingdom", publisher: "Services Australia", url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements-visiting-from-united-kingdom", official: true, accessed: ACCESSED },
    { id: "ato-residency", title: "Your tax residency", publisher: "Australian Taxation Office", url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/your-tax-residency", official: true, accessed: ACCESSED },
    { id: "govuk-pension-abroad", title: "State Pension if you retire abroad: how your pension is affected", publisher: "GOV.UK", url: "https://www.gov.uk/state-pension-if-you-retire-abroad/how-your-pension-is-affected", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ turns your UK → Australia move into a step-by-step roadmap: track your skills assessment, EOI and visa dates in the deadline agenda and calendar, keep the family's documents in one place, and plan your moving budget.",
  related: ["moving-abroad-with-a-dog-or-cat", "moving-from-uk-to-spain", "moving-from-uk-to-dubai"],
};
