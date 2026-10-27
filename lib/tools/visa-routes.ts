/**
 * Data behind the "Which visa could I qualify for?" tool.
 * Every number here comes from a published guide on this site and its
 * official source. When a guide's figure changes, change it here too.
 */

export type Situation = "remote" | "passive" | "job-offer" | "job-seeker" | "self-employed";
export type Passport = "us" | "uk" | "eu" | "other";
export type Currency = "EUR" | "USD" | "THB" | "MXN" | "AUD";

export type Source = { title: string; url: string };

/** How the route's money rule is tested. */
export type MoneyRule =
  | {
      kind: "monthly-income";
      amount: number;
      currency: Currency;
      /** extra per family member: first one, then each additional (absolute amounts) */
      familyFirst?: number;
      familyEach?: number;
      label: string;
    }
  | {
      kind: "savings-or-annual-income";
      amount: number;
      currency: Currency;
      perAdult?: number;
      perChild?: number;
      perDependant?: number;
      label: string;
    }
  | {
      kind: "income-or-savings";
      income: number;
      savings: number;
      currency: Currency;
      label: string;
    }
  | { kind: "savings"; amount: number; currency: Currency; label: string }
  | { kind: "annual-salary"; amount: number; currency: Currency; label: string; altAmount?: number; altLabel?: string }
  | { kind: "none"; label: string };

export type VisaRoute = {
  id: string;
  country: string;
  flag: string;
  name: string;
  situations: Situation[];
  /** Passports this route is meant for. EU citizens use free movement in EU countries instead. */
  passports: Passport[];
  money: MoneyRule;
  minAge?: number;
  maxAge?: number;
  conditions: string[];
  guide: string;
  sources: Source[];
};

export const EU_COUNTRIES = ["Spain", "Portugal", "Germany", "Netherlands"];

export const ROUTES: VisaRoute[] = [
  {
    id: "es-dnv",
    country: "Spain",
    flag: "🇪🇸",
    name: "Digital nomad (international telework) visa",
    situations: ["remote"],
    passports: ["us", "uk", "other"],
    money: {
      kind: "monthly-income",
      amount: 2442,
      currency: "EUR",
      familyFirst: 915.75,
      familyEach: 305.25,
      label: "200% of Spain's minimum wage: €2,442/month (some consulates use ≈ €2,849)",
    },
    conditions: [
      "Work for a company or clients outside Spain; Spanish clients max 20% of your work",
      "3+ months with your employer; company trading for 1+ year",
      "Degree or 3 years' relevant experience",
    ],
    guide: "/guides/spain-digital-nomad-visa",
    sources: [
      { title: "UGE digital nomad FAQ", url: "https://bibliovirtual.inclusion.gob.es/documents/d/unidadgrandesempresas/digital-nomad-faqs-english" },
      { title: "Spanish Consulate New York: telework visa", url: "https://exteriores.gob.es/Consulados/nuevayork/en/ServiciosConsulares/Paginas/Consular/Visado-de-teletrabajo.aspx" },
    ],
  },
  {
    id: "es-nlv",
    country: "Spain",
    flag: "🇪🇸",
    name: "Non-lucrative residence visa",
    situations: ["passive"],
    passports: ["us", "uk", "other"],
    money: {
      kind: "savings-or-annual-income",
      amount: 28800,
      currency: "EUR",
      perDependant: 7200,
      label: "400% of IPREM for the first year: €28,800, + €7,200 per family member",
    },
    conditions: ["No work allowed — not even remote work for a foreign employer", "Funds proven with bank documents or a qualifying pension"],
    guide: "/guides/moving-from-us-to-spain",
    sources: [
      { title: "Spanish Consulate Los Angeles: non-lucrative visa", url: "https://exteriores.gob.es/Consulados/losangeles/en/ServiciosConsulares/Paginas/Consular/Visado-de-residencia-no-lucrativa.aspx" },
    ],
  },
  {
    id: "pt-d8",
    country: "Portugal",
    flag: "🇵🇹",
    name: "D8 remote-work (digital nomad) visa",
    situations: ["remote"],
    passports: ["us", "uk", "other"],
    money: {
      kind: "monthly-income",
      amount: 3680,
      currency: "EUR",
      label: "4× Portugal's minimum wage: €3,680/month, averaged over 3 months",
    },
    conditions: ["Remote work for employers or clients outside Portugal", "Apostilled police certificate issued within 90 days"],
    guide: "/guides/portugal-d8-digital-nomad-visa",
    sources: [
      { title: "VFS Global (Portugal, USA): remote-work residency visa checklist", url: "https://www.vfsglobal.com/one-pager/portugal/usa/english/pdf/residency-visa-for-remote-work-digital-nomads-nov-25-national.pdf" },
      { title: "AIMA: remote work residence permit", url: "https://aima.gov.pt/pt/trabalhar/autorizacao-de-residencia-para-o-exercicio-de-atividade-profissional-prestada-de-forma-remota-com-visto-de-residencia-para-o-exe" },
    ],
  },
  {
    id: "pt-d7",
    country: "Portugal",
    flag: "🇵🇹",
    name: "D7 passive-income visa",
    situations: ["passive"],
    passports: ["us", "uk", "other"],
    money: {
      kind: "savings-or-annual-income",
      amount: 11040,
      currency: "EUR",
      perAdult: 5520,
      perChild: 3312,
      label: "12× minimum wage for one adult: €11,040, +50% per extra adult, +30% per child",
    },
    conditions: ["Pension or passive income, shown through a Portuguese bank account", "Accommodation for 12 months"],
    guide: "/guides/moving-from-us-to-portugal",
    sources: [
      { title: "VFS Global (Portugal, USA): passive-income visa checklist", url: "https://www.vfsglobal.com/one-pager/portugal/usa/english/pdf/RESIDENCY-VISA-FOR-ESTABLISHMENT-OF-RESIDENCE-FOR-PENSIONERS-RELIGIOUS-PURPOSES-nov-25-national.pdf" },
      { title: "AIMA: means of subsistence", url: "https://aima.gov.pt/pt/temas-transversais/meios-de-subsistencia" },
    ],
  },
  {
    id: "de-card",
    country: "Germany",
    flag: "🇩🇪",
    name: "Opportunity Card (job search)",
    situations: ["job-seeker"],
    passports: ["us", "uk", "other"],
    money: { kind: "none", label: "Show €1,091 net per month for living costs (blocked account or declaration of commitment)" },
    conditions: [
      "A fully recognised qualification, or 6+ points with German A1 or English B2",
      "Up to 1 year; part-time work up to 20 hours a week",
    ],
    guide: "/guides/germany-opportunity-card",
    sources: [{ title: "Make it in Germany: Opportunity Card", url: "https://www.make-it-in-germany.com/en/visa-residence/types/job-search-opportunity-card" }],
  },
  {
    id: "de-blue",
    country: "Germany",
    flag: "🇩🇪",
    name: "EU Blue Card",
    situations: ["job-offer"],
    passports: ["us", "uk", "other"],
    money: {
      kind: "annual-salary",
      amount: 50700,
      currency: "EUR",
      label: "Job offer of €50,700+ gross a year (2026)",
      altAmount: 45934.2,
      altLabel: "€45,934.20 for shortage occupations, IT and recent graduates",
    },
    conditions: ["German or comparable degree", "Job contract of at least 6 months matching your qualification"],
    guide: "/guides/moving-from-us-to-germany",
    sources: [
      { title: "Make it in Germany: EU Blue Card", url: "https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card" },
      { title: "Federal Employment Agency: Blue Card 2026", url: "https://www.arbeitsagentur.de/vor-ort/zav/working-and-living-in-germany/iss-en/issue-03-2026/blue-card" },
    ],
  },
  {
    id: "nl-hsm",
    country: "Netherlands",
    flag: "🇳🇱",
    name: "Highly skilled migrant (kennismigrant)",
    situations: ["job-offer"],
    passports: ["us", "uk", "other"],
    money: {
      kind: "annual-salary",
      amount: 5942 * 12,
      currency: "EUR",
      label: "€5,942 gross a month if 30 or older (€4,357 under 30), excluding holiday allowance",
      altAmount: 4357 * 12,
      altLabel: "under 30",
    },
    conditions: ["Employer must be a recognised sponsor with the IND"],
    guide: "/guides/moving-from-us-to-netherlands",
    sources: [{ title: "IND: income requirements 2026", url: "https://ind.nl/en/required-amounts-income-requirements" }],
  },
  {
    id: "nl-daft",
    country: "Netherlands",
    flag: "🇳🇱",
    name: "Self-employed under the Dutch-American Friendship Treaty",
    situations: ["self-employed"],
    passports: ["us"],
    money: { kind: "savings", amount: 4500, currency: "EUR", label: "Invest at least €4,500 in your own Dutch business" },
    conditions: ["US citizens only", "Genuine business activity to extend the permit"],
    guide: "/guides/moving-from-us-to-netherlands",
    sources: [{ title: "Grant Thornton: DAFT requirements", url: "https://www.grantthornton.nl/en/insights-en/human-capital-services/focus-on-the-daft-and-djft-requirements-to-apply-and-recent-changes/" }],
  },
  {
    id: "ae-remote",
    country: "Dubai (UAE)",
    flag: "🇦🇪",
    name: "Virtual work (remote work) visa",
    situations: ["remote"],
    passports: ["us", "uk", "eu", "other"],
    money: { kind: "monthly-income", amount: 3500, currency: "USD", label: "US$3,500/month from work for an entity outside the UAE" },
    conditions: ["Valid health insurance", "Medical test and Emirates ID after arrival"],
    guide: "/guides/dubai-remote-work-visa",
    sources: [
      { title: "GDRFA Dubai: virtual work visa", url: "https://www.gdrfad.gov.ae/en/node/13898" },
      { title: "GDRFA Dubai: virtual work residence permit", url: "https://gdrfad.gov.ae/en/node/13964" },
    ],
  },
  {
    id: "th-dtv",
    country: "Thailand",
    flag: "🇹🇭",
    name: "Destination Thailand Visa (DTV) – Workcation",
    situations: ["remote", "self-employed"],
    passports: ["us", "uk", "eu", "other"],
    money: { kind: "savings", amount: 500000, currency: "THB", label: "500,000 THB in the bank for each of the last 3 months" },
    conditions: ["Proof of remote work: contract, employment certificate or portfolio"],
    guide: "/guides/thailand-dtv-visa-guide",
    sources: [{ title: "Royal Thai Embassy Washington: DTV", url: "https://washingtondc.thaiembassy.org/en/page/dtv-visa" }],
  },
  {
    id: "mx-temp",
    country: "Mexico",
    flag: "🇲🇽",
    name: "Temporary resident visa (economic solvency)",
    situations: ["remote", "passive"],
    passports: ["us", "uk", "eu", "other"],
    money: {
      kind: "income-or-savings",
      income: 79771,
      savings: 1344373,
      currency: "MXN",
      label: "≈ MXN 79,771/month income (last 6 months) or ≈ MXN 1,344,373 average balance (12 months)",
    },
    conditions: ["Consulates publish their own US-dollar figures, which can differ"],
    guide: "/guides/moving-from-us-to-mexico",
    sources: [
      { title: "Lineamientos (DOF) via Consulmex Houston", url: "https://consulmex.sre.gob.mx/houston/images/lineamientos-visas-25-jul-2025.pdf" },
      { title: "INEGI: UMA 2026", url: "https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2026/uma/uma2026.pdf" },
    ],
  },
  {
    id: "au-whv",
    country: "Australia",
    flag: "🇦🇺",
    name: "Working Holiday visa (subclass 417)",
    situations: ["job-seeker", "job-offer"],
    passports: ["uk"],
    minAge: 18,
    maxAge: 35,
    money: { kind: "none", label: "No income threshold in our guide; first visa costs AUD 840" },
    conditions: ["UK passport, aged 18–35", "No dependent children with you", "12-month stay per visa"],
    guide: "/guides/moving-from-uk-to-australia",
    sources: [{ title: "Home Affairs: Working Holiday visa 417", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417" }],
  },
  {
    id: "au-482",
    country: "Australia",
    flag: "🇦🇺",
    name: "Skills in Demand visa (subclass 482)",
    situations: ["job-offer"],
    passports: ["us", "uk", "eu", "other"],
    money: { kind: "annual-salary", amount: 79423, currency: "AUD", label: "Core Skills stream: AUD 79,423+ a year (from 1 July 2026)" },
    conditions: ["Nomination by an approved employer sponsor", "Skills and English at the required level"],
    guide: "/guides/moving-from-uk-to-australia",
    sources: [{ title: "Home Affairs: Skills in Demand visa 482", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482" }],
  },
];

export const EU_FREE_MOVEMENT_SOURCE: Source = {
  title: "Your Europe: residence rights of EU citizens",
  url: "https://www.europa.eu/youreurope/citizens/residence/residence-rights/index_en.htm",
};
