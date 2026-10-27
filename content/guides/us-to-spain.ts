import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-18";

export const usToSpain: Guide = {
  slug: "moving-from-us-to-spain",
  status: "published",
  datePublished: "2026-10-18",
  fromCode: "US",
  toCode: "ES",
  fromName: "the US",
  toName: "Spain",
  kind: "route",

  title: "Moving from the US to Spain: 2026 Checklist & Visa Guide",
  description:
    "Non-lucrative vs digital nomad visa, 2026 income requirements in euros, FBI check rules, consulate fees and timeline for Americans moving to Spain.",
  h1: "Moving from the US to Spain: the complete 2026 checklist",

  summary: [
    {
      text: "Americans who won't work for a Spanish employer generally choose between two visas: the non-lucrative visa (no work allowed, not even remote work) and the international telework or digital nomad visa. The non-lucrative visa requires 400% of IPREM — €2,400 a month or €28,800 a year for the main applicant in 2026.",
      sourceIds: ["es-la-nlv", "arc-iprem-2026"],
    },
    {
      text: "The telework visa requires 200% of Spain's minimum wage; with the 2026 minimum wage at €17,094 a year, the official FAQ's monthly calculation gives €2,442 a month, or about €2,849 if your consulate uses the annual figure. The golden visa no longer exists: it ended for new applications on 3 April 2025.",
      sourceIds: ["uge-faq", "es-ny-telework", "es-smi-2026", "kpmg-golden"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Where you apply", value: "Your Spanish consulate in the US (Los Angeles uses BLS centers)", sourceIds: ["es-la-nlv"] },
    { label: "IPREM (2026)", value: "€600/month · €7,200/year", sourceIds: ["arc-iprem-2026"] },
    { label: "Non-lucrative visa funds", value: "€28,800/year + €7,200 per dependant", sourceIds: ["es-la-nlv", "arc-iprem-2026"] },
    { label: "Minimum wage (SMI 2026)", value: "€1,221 × 14 payments = €17,094/year", sourceIds: ["es-smi-2026"] },
    { label: "Telework visa income", value: "200% of SMI: €2,442/month (official FAQ) or ≈ €2,849 (annual basis)", sourceIds: ["uge-faq", "es-ny-telework", "es-smi-2026"] },
    { label: "Visa fee for US citizens (LA, 2026)", value: "$140 + $13 residence permit fee", sourceIds: ["es-la-nlv"] },
  ],

  visaOptions: [
    {
      name: "Non-lucrative residence visa (NLV)",
      bestFor: "Retirees and anyone living on savings, pensions or investments who won't work in Spain.",
      requirement:
        "400% of IPREM for the first year (€28,800 in 2026), plus 100% of IPREM (€7,200) for each family member in your care, proven with stamped original bank documents or a qualifying monthly pension.",
      notes: [
        "The Los Angeles consulate states the visa does not allow teleworking.",
        "Health insurance must have no deductible, copay, waiting period or coverage cap; travel insurance is not accepted.",
      ],
      sourceIds: ["es-la-nlv", "arc-iprem-2026"],
    },
    {
      name: "International telework visa (digital nomad)",
      bestFor: "Remote employees and freelancers working for companies outside Spain.",
      requirement:
        "Income of 200% of the minimum wage (€2,442/month per the official FAQ, or about €2,849 on an annual basis), plus 75% of SMI for the first family member and 25% for each additional one. Employees need three months with the company and written permission to work remotely; the company must be at least one year old.",
      notes: [
        "You need a university degree or at least three years of relevant professional experience.",
        "The legal decision period at the New York consulate is 10 days.",
      ],
      sourceIds: ["uge-faq", "es-ny-telework", "es-smi-2026"],
    },
    {
      name: "Golden visa (closed)",
      bestFor: "No longer available to new applicants.",
      requirement:
        "Residence through investment was abolished by Ley Orgánica 1/2025, effective 3 April 2025.",
      sourceIds: ["kpmg-golden"],
    },
  ],

  recentChanges: [
    {
      text: "The golden visa ended on 3 April 2025, so buying property no longer gives residence on its own.",
      sourceIds: ["kpmg-golden"],
    },
    {
      text: "The minimum wage rose to €1,221 per month (14 payments) for 2026 under Real Decreto 126/2026, which raises the telework visa threshold.",
      sourceIds: ["es-smi-2026"],
    },
    {
      text: "From 1 January 2026, the Los Angeles consulate charges US citizens $140 for a national visa, more than other nationalities ($106).",
      sourceIds: ["es-la-nlv"],
    },
  ],

  steps: [
    {
      when: "6+ months before",
      title: "Choose NLV or telework",
      detail:
        "If any of your income comes from working — even remotely for a US employer — the non-lucrative visa is the wrong fit; the LA consulate says it does not allow teleworking. Run your numbers against IPREM (€600/month) or the minimum wage (€17,094/year).",
      sourceIds: ["es-la-nlv", "arc-iprem-2026", "es-smi-2026"],
    },
    {
      when: "4–6 months before",
      title: "Request your FBI check and get the federal apostille",
      detail:
        "Spanish consulates want an FBI certificate no more than six months old with a federal apostille from the US Department of State (a state apostille isn't valid), translated into Spanish. If you lived in another country in the last five years you also need its police record.",
      sourceIds: ["es-la-nlv", "es-ny-telework"],
    },
    {
      when: "3–4 months before",
      title: "Get the medical certificate and insurance",
      detail:
        "For the NLV, the medical certificate must be issued within 90 days of submission, signed and stamped by a doctor, with a Spanish translation if needed. The health policy must cover 100% of costs with no copays, deductibles or waiting periods.",
      sourceIds: ["es-la-nlv"],
    },
    {
      when: "3 months before",
      title: "Submit in person",
      detail:
        "In the Los Angeles district you apply in person, by appointment, at a BLS center. Other consulates have their own booking systems — check yours before you plan dates.",
      sourceIds: ["es-la-nlv"],
    },
    {
      when: "Waiting",
      title: "Wait for the decision",
      detail:
        "The legal decision period for the non-lucrative visa is three months from the day after submission (longer if they ask for an interview or more documents). For the telework visa it's 10 days at the New York consulate.",
      sourceIds: ["es-la-nlv", "es-ny-telework"],
    },
    {
      when: "Within 90 days",
      title: "Travel to Spain",
      detail:
        "The Los Angeles consulate issues the NLV with 90 days' validity, so book your move inside that window.",
      sourceIds: ["es-la-nlv"],
    },
    {
      when: "First month in Spain",
      title: "Apply for your TIE card",
      detail:
        "After entering Spain you must apply for your Foreigner Identity Card (TIE) within one month.",
      sourceIds: ["es-la-nlv"],
    },
  ],

  documents: [
    { item: "National visa application form and passport", sourceIds: ["es-la-nlv"] },
    { item: "Proof of funds: 400% IPREM (NLV) or 200% SMI income (telework)", sourceIds: ["es-la-nlv", "es-ny-telework"] },
    { item: "FBI background check with federal apostille, under 6 months old, translated", sourceIds: ["es-la-nlv", "es-ny-telework"] },
    { item: "Police records from any other country you lived in during the last 5 years", sourceIds: ["es-la-nlv"] },
    { item: "Medical certificate issued within 90 days (NLV)", sourceIds: ["es-la-nlv"] },
    { item: "Spanish-standard health insurance: no copay, deductible or waiting period (NLV)", sourceIds: ["es-la-nlv"] },
    { item: "Employer letter authorising remote work + 3 months' seniority (telework)", sourceIds: ["es-ny-telework"] },
    { item: "Commercial Registry certificate showing the company is 1+ year old (telework)", sourceIds: ["es-ny-telework"] },
    { item: "Degree or proof of 3+ years' experience (telework)", sourceIds: ["es-ny-telework"] },
    { item: "Form 790-052 residence permit fee", sourceIds: ["es-la-nlv"] },
  ],

  costs: [
    { item: "National visa fee — US citizens (Los Angeles, from 1 Jan 2026)", amount: "$140", sourceIds: ["es-la-nlv"] },
    { item: "Residence permit fee (Form 790-052, 2026)", amount: "$13", sourceIds: ["es-la-nlv"] },
    { item: "Sworn Spanish translations, apostilles, FBI check", amount: "Varies", note: "Set by the providers you use.", sourceIds: ["es-la-nlv"] },
  ],
  costNote:
    "Fees are from the Los Angeles consulate; other US consulates publish their own fee lists, so check yours. We don't estimate rent or living costs.",

  tax: [
    {
      text: "Under Spain's income tax law you are generally tax resident if you spend more than 183 days in Spain in a calendar year, which makes you taxable on worldwide income there.",
      sourceIds: ["boe-irpf"],
    },
    {
      text: "Remote workers who move on the international telework visa are explicitly covered by Spain's special regime for impatriated workers (often called the Beckham Law) if they weren't Spanish tax resident in the previous five tax periods. Employment income is then taxed at a flat 24% up to €600,000, for the year you move plus the following five.",
      sourceIds: ["aeat-impatriados"],
    },
    {
      text: "You still file US returns as a US citizen. The 2026 Foreign Earned Income Exclusion is up to $132,900, and an FBAR is due if your foreign accounts exceed $10,000 combined at any point in the year.",
      sourceIds: ["irs-abroad", "irs-notice-2026-25", "fincen-fbar"],
    },
  ],

  family: [
    {
      text: "For the non-lucrative visa, add 100% of IPREM (€7,200 a year in 2026) for each family member in your care. For the telework visa, add 75% of the minimum wage for the first family member and 25% for each one after that.",
      sourceIds: ["es-la-nlv", "es-ny-telework", "arc-iprem-2026"],
    },
  ],

  pitfalls: [
    {
      text: "Planning to work remotely on the non-lucrative visa. The LA consulate states it's not a work permit and doesn't allow teleworking.",
      sourceIds: ["es-la-nlv"],
    },
    {
      text: "A state apostille on the FBI check. Spanish consulates require the federal apostille from the US Department of State.",
      sourceIds: ["es-la-nlv"],
    },
    {
      text: "Buying US-style insurance with copays. NLV insurance must have no deductible, copay, waiting period or coverage limit.",
      sourceIds: ["es-la-nlv"],
    },
    {
      text: "Counting on the golden visa. It closed to new applications on 3 April 2025.",
      sourceIds: ["kpmg-golden"],
    },
  ],

  faqs: [
    {
      q: "How much money do I need for Spain's non-lucrative visa in 2026?",
      a: "400% of IPREM for the main applicant — €2,400 a month or €28,800 for the year — plus €7,200 (100% of IPREM) for each family member in your care. IPREM has stayed at €600 a month.",
      sourceIds: ["es-la-nlv", "arc-iprem-2026"],
    },
    {
      q: "Can I work remotely for a US company on the non-lucrative visa?",
      a: "No. The Spanish consulate in Los Angeles states the non-lucrative visa is not a work permit and does not allow teleworking. Remote workers should look at the international telework (digital nomad) visa.",
      sourceIds: ["es-la-nlv", "es-ny-telework"],
    },
    {
      q: "What income do I need for Spain's digital nomad visa?",
      a: "200% of the Spanish minimum wage. For 2026 the minimum wage is €17,094 a year, so the official FAQ's figure is €2,442 a month (200% of €1,221), while an annual calculation gives about €2,849. Add extra for family members. Confirm how your consulate calculates it.",
      sourceIds: ["uge-faq", "es-ny-telework", "es-smi-2026"],
    },
    {
      q: "Does Spain still have a golden visa?",
      a: "No. Residence by investment was abolished by Ley Orgánica 1/2025 and ended for new applications on 3 April 2025.",
      sourceIds: ["kpmg-golden"],
    },
    {
      q: "How long does a Spanish visa decision take?",
      a: "The legal decision period is three months for the non-lucrative visa (Los Angeles consulate) and 10 days for the telework visa (New York consulate), counted from the day after you submit. It can be extended if they request an interview or more documents.",
      sourceIds: ["es-la-nlv", "es-ny-telework"],
    },
  ],

  sources: [
    { id: "uge-faq", title: "Digital nomads: frequently asked questions (English)", publisher: "Ministry of Inclusion, Social Security and Migration (UGE)", url: "https://bibliovirtual.inclusion.gob.es/documents/d/unidadgrandesempresas/digital-nomad-faqs-english", official: true, accessed: "2026-10-23" },
    { id: "es-la-nlv", title: "Non-working (non-lucrative) residence visa (updated 11 Feb 2026)", publisher: "Consulate General of Spain in Los Angeles", url: "https://exteriores.gob.es/Consulados/losangeles/en/ServiciosConsulares/Paginas/Consular/Visado-de-residencia-no-lucrativa.aspx", official: true, accessed: ACCESSED },
    { id: "es-ny-telework", title: "Telework visa", publisher: "Consulate General of Spain in New York", url: "https://exteriores.gob.es/Consulados/nuevayork/en/ServiciosConsulares/Paginas/Consular/Visado-de-teletrabajo.aspx", official: true, accessed: ACCESSED },
    { id: "arc-iprem-2026", title: "El IPREM en 2026 y cómo afecta a los trámites de extranjería", publisher: "ARC Legal", url: "https://www.arc-legal.es/el-iprem-en-2026-que-es-cuanto-es-y-como-afecta-a-los-tramites-de-extranjeria/", official: false, accessed: ACCESSED },
    { id: "es-smi-2026", title: "Real Decreto 126/2026: salario mínimo interprofesional 2026", publisher: "Fieldfisher", url: "https://www.fieldfisher.com/es-es/locations/espana/actualidad/salario-minimo-interprofesional-2026", official: false, accessed: ACCESSED },
    { id: "kpmg-golden", title: "Spain: elimination of the golden visa (GMS Flash Alert 2025-008)", publisher: "KPMG", url: "https://kpmg.com/xx/en/our-insights/gms-flash-alert/flash-alert-2025-008.html", official: false, accessed: ACCESSED },
    { id: "boe-irpf", title: "Ley 35/2006 del IRPF (consolidated text, art. 9: 183-day rule)", publisher: "Boletín Oficial del Estado", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764", official: true, accessed: ACCESSED },
    { id: "aeat-impatriados", title: "Régimen especial para trabajadores desplazados (impatriados)", publisher: "Agencia Tributaria", url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/regimenes-opcionales/regimen-especial-impatriados.html", official: true, accessed: ACCESSED },
    { id: "irs-abroad", title: "U.S. citizens and resident aliens abroad", publisher: "IRS", url: "https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad", official: true, accessed: ACCESSED },
    { id: "irs-notice-2026-25", title: "Notice 2026-25 (2026 foreign earned income exclusion: $132,900)", publisher: "IRS", url: "https://www.irs.gov/pub/irs-drop/n-26-25.pdf", official: true, accessed: ACCESSED },
    { id: "fincen-fbar", title: "Report of Foreign Bank and Financial Accounts (FBAR)", publisher: "FinCEN", url: "https://www.fincen.gov/report-foreign-bank-and-financial-accounts", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ builds a US → Spain roadmap you can follow step by step: track the documents for each family member, add dates like your medical certificate's 90-day limit and your TIE appointment to the deadline agenda and calendar, and keep your moving budget in one place.",
  related: ["how-to-get-nie-number-spain", "spain-digital-nomad-visa", "moving-from-us-to-portugal", "moving-from-uk-to-spain", "fbi-background-check-apostille-for-visa"],
};
