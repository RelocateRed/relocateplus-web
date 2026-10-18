import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-18";

export const ukToSpain: Guide = {
  slug: "moving-from-uk-to-spain",
  status: "published",
  datePublished: "2026-10-18",
  fromCode: "GB",
  toCode: "ES",
  fromName: "the UK",
  toName: "Spain",
  kind: "route",

  title: "Moving from the UK to Spain after Brexit: 2026 Checklist",
  description:
    "The 90/180 rule, EES, non-lucrative and digital nomad visas, ACRO and medical certificates, S1 healthcare, padrón, TIE and licence exchange for Brits.",
  h1: "Moving from the UK to Spain after Brexit: the 2026 checklist",

  summary: [
    {
      text: "Since Brexit, UK nationals can stay in Spain visa-free for up to 90 days in any 180-day period; to live there you need a residence visa from the Spanish consulate before you go, applied for in person at the BLS centre in London.",
      sourceIds: ["eu-short-stay", "es-london-nlv"],
    },
    {
      text: "The most common routes are the non-lucrative visa (400% of IPREM: €28,800 a year in 2026) and the digital nomad (telework) visa (200% of the minimum wage). Once in Spain you register on the padrón, get your TIE card and exchange your UK driving licence within six months.",
      sourceIds: ["es-london-nlv", "arc-iprem-2026", "es-london-telework", "govuk-living-spain"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Visa-free stays", value: "90 days in any 180 days (Schengen)", sourceIds: ["eu-short-stay"] },
    { label: "Border system", value: "EES fully operational since 10 April 2026; ETIAS not yet running", sourceIds: ["ec-ees", "pl-ees", "gulfnews-etias"] },
    { label: "Non-lucrative visa funds (2026)", value: "€28,800/year + €7,200 per dependant", sourceIds: ["es-london-nlv", "arc-iprem-2026"] },
    { label: "Where to apply (London consulate)", value: "BLS Spain Visa Centre, 20 St Andrew Street, London EC4A 3AG", sourceIds: ["es-london-nlv"] },
    { label: "Decision time (NLV, London)", value: "2 months (legal period)", sourceIds: ["es-london-nlv"] },
    { label: "UK licence after residency", value: "Exchange within 6 months", sourceIds: ["govuk-living-spain"] },
  ],

  visaOptions: [
    {
      name: "Non-lucrative visa (retire or live on savings)",
      bestFor: "Retirees and Brits living on pensions, savings or investments who won't work in Spain.",
      requirement:
        "400% of IPREM (€28,800 for 2026) plus 100% of IPREM (€7,200) for each dependant. The London consulate asks for bank documents showing balances on 31 December of the previous year and the previous year's average balance.",
      notes: [
        "Health cover must come from an insurer authorised in Spain and cover everything the Spanish public system covers — or show a receipt of your S1 registration.",
        "The London consulate issues the visa with one year's validity.",
      ],
      sourceIds: ["es-london-nlv", "arc-iprem-2026"],
    },
    {
      name: "Digital nomad / telework visa",
      bestFor: "Remote employees and freelancers working for companies outside Spain.",
      requirement:
        "Income of 200% of Spain's minimum wage (about €2,849/month in 2026, based on €17,094 a year), three months with your employer (or clients), and a company that has existed for at least a year.",
      sourceIds: ["es-london-telework", "es-smi-2026"],
    },
  ],

  recentChanges: [
    {
      text: "The EU's Entry/Exit System (EES) went live on 12 October 2025 and has been fully operational since 10 April 2026: your passport is registered with fingerprints and a photo when you cross the Schengen border. Once you have a TIE card you're exempt from EES registration; the old green residence certificate doesn't give that exemption.",
      sourceIds: ["ec-ees", "pl-ees", "govuk-living-spain"],
    },
    {
      text: "ETIAS (the travel authorisation for visa-free visitors) is still not operating, and the EU has not announced a new start date.",
      sourceIds: ["gulfnews-etias"],
    },
  ],

  steps: [
    {
      when: "6+ months before",
      title: "Check the 90/180 rule against your plans",
      detail:
        "Visa-free, you can only spend 90 days in any rolling 180-day period in the Schengen area. If you want to live in Spain longer, you need a residence visa — apply from the UK before you move.",
      sourceIds: ["eu-short-stay", "es-london-nlv"],
    },
    {
      when: "3–6 months before",
      title: "Order your ACRO police certificate",
      detail:
        "Submit an ACRO certificate for UK records, plus certificates from any country you lived in during the last five years. They should generally be under six months old and need a sworn Spanish translation.",
      sourceIds: ["es-london-nlv"],
    },
    {
      when: "Within 3 months of applying",
      title: "Get a medical certificate and apostille it",
      detail:
        "A registered doctor must issue it within three months before you apply. It needs a Hague Apostille and a sworn translation if it isn't in Spanish. The London consulate only accepts certificates from the UK or Spain.",
      sourceIds: ["es-london-nlv"],
    },
    {
      when: "2–3 months before",
      title: "Apply in person at BLS London",
      detail:
        "Bring your form, passport, proof of funds, insurance (or S1 registration receipt), ACRO certificate and medical certificate. Pay the residence permit fee using form 790 code 052.",
      sourceIds: ["es-london-nlv"],
    },
    {
      when: "Decision",
      title: "Collect your visa within a month",
      detail:
        "The legal decision period is two months. After a favourable decision, collect the visa within one month.",
      sourceIds: ["es-london-nlv"],
    },
    {
      when: "First month in Spain",
      title: "Padrón and TIE",
      detail:
        "Apply for your TIE (Foreigner Identity Card) within one month of arriving, and register on the padrón at your local town hall. Children need their own residence documents.",
      sourceIds: ["es-london-nlv", "govuk-living-spain"],
    },
    {
      when: "Within 6 months of residency",
      title: "Exchange your UK driving licence",
      detail:
        "A UK licence can be used for six months after you become resident; apply for the exchange before then, using a DVLA check code. Jersey, Guernsey and Isle of Man licences can't be exchanged.",
      sourceIds: ["govuk-living-spain"],
    },
  ],

  documents: [
    { item: "Signed national visa application form and passport", sourceIds: ["es-london-nlv"] },
    { item: "ACRO police certificate (+ other countries lived in during the last 5 years), sworn translation", sourceIds: ["es-london-nlv"] },
    { item: "Medical certificate from a registered doctor, under 3 months old, apostilled", sourceIds: ["es-london-nlv"] },
    { item: "Health insurance from an insurer authorised in Spain, or S1 registration receipt", sourceIds: ["es-london-nlv"] },
    { item: "Bank documents: balance on 31 December and the previous year's average", sourceIds: ["es-london-nlv"] },
    { item: "Form 790 code 052 (residence permit fee)", sourceIds: ["es-london-nlv"] },
    { item: "After arrival: padrón certificate and TIE application", sourceIds: ["govuk-living-spain"] },
    { item: "DVLA check code for your licence exchange", sourceIds: ["govuk-living-spain"] },
  ],

  costs: [
    { item: "Spanish national visa fee", amount: "Paid in GBP; see the consulate's fee list", note: "The London consulate says fees are set in local currency and can change.", sourceIds: ["es-london-nlv"] },
    { item: "Residence permit fee", amount: "Form 790 code 052", sourceIds: ["es-london-nlv"] },
    { item: "Apostille and sworn translations", amount: "Varies by provider", sourceIds: ["es-london-nlv"] },
  ],
  costNote:
    "The London consulate doesn't publish a fixed GBP amount on the visa page itself, so check its current fee list before your appointment.",

  tax: [
    {
      text: "Spain generally treats you as tax resident if you spend more than 183 days there in a calendar year.",
      sourceIds: ["boe-irpf"],
    },
    {
      text: "The UK–Spain double taxation agreement helps you avoid paying tax twice on the same income. As a Spanish resident you must also declare assets held outside Spain; the UK government recommends using a Spanish tax adviser or gestor.",
      sourceIds: ["govuk-living-spain"],
    },
    {
      text: "You can keep claiming your UK State Pension while living in Spain.",
      sourceIds: ["govuk-living-spain"],
    },
  ],

  family: [
    {
      text: "Add 100% of IPREM (€7,200 for 2026) per dependant for the non-lucrative visa. Children need their own residence documents once you're in Spain.",
      sourceIds: ["es-london-nlv", "arc-iprem-2026", "govuk-living-spain"],
    },
  ],

  pitfalls: [
    {
      text: "Moving first and sorting the visa later. The 90/180 rule caps visa-free time, and residence visas are applied for from the UK.",
      sourceIds: ["eu-short-stay", "es-london-nlv"],
    },
    {
      text: "An unapostilled or foreign medical certificate. London wants it from a UK or Spanish doctor, apostilled, and under three months old.",
      sourceIds: ["es-london-nlv"],
    },
    {
      text: "Keeping the green certificate instead of a TIE. Only the TIE exempts you from EES registration at the border.",
      sourceIds: ["govuk-living-spain"],
    },
    {
      text: "Assuming you can hold both passports. Spain doesn't recognise dual citizenship with the UK.",
      sourceIds: ["govuk-living-spain"],
    },
  ],

  faqs: [
    {
      q: "How long can I stay in Spain without a visa as a UK citizen?",
      a: "Up to 90 days in any 180-day period across the Schengen area. To live in Spain longer you need a residence visa, applied for at the Spanish consulate in the UK before you move.",
      sourceIds: ["eu-short-stay", "es-london-nlv"],
    },
    {
      q: "How much money do I need for the non-lucrative visa from the UK?",
      a: "400% of IPREM — €28,800 for 2026 — plus €7,200 for each dependant. The London consulate asks for bank documents showing your 31 December balance and the previous year's average balance.",
      sourceIds: ["es-london-nlv", "arc-iprem-2026"],
    },
    {
      q: "Can I use my S1 for the Spanish non-lucrative visa?",
      a: "Yes. The London consulate accepts a receipt showing your S1 has been registered with Spanish Social Security as the medical insurance for this visa.",
      sourceIds: ["es-london-nlv"],
    },
    {
      q: "Do I need to exchange my UK driving licence in Spain?",
      a: "Yes. You can drive on your UK licence for six months after becoming resident; apply for the exchange before those six months are up, using a check code from the DVLA (or DVA in Northern Ireland).",
      sourceIds: ["govuk-living-spain"],
    },
    {
      q: "Do I need ETIAS to travel to Spain?",
      a: "Not yet. ETIAS is not operating and the EU hasn't announced a launch date. EES (fingerprint and photo registration at the border) has been fully operational since 10 April 2026; residents with a TIE are exempt from it.",
      sourceIds: ["gulfnews-etias", "pl-ees", "govuk-living-spain"],
    },
  ],

  sources: [
    { id: "es-london-nlv", title: "Non-working residence visa (updated 6 July 2026)", publisher: "Consulate General of Spain in London", url: "https://exteriores.gob.es/Consulados/londres/en/ServiciosConsulares/Paginas/Consular/Visado-de-residencia-no-lucrativa.aspx", official: true, accessed: ACCESSED },
    { id: "es-london-telework", title: "Telework visa", publisher: "Consulate General of Spain in New York (same national requirements)", url: "https://exteriores.gob.es/Consulados/nuevayork/en/ServiciosConsulares/Paginas/Consular/Visado-de-teletrabajo.aspx", official: true, accessed: ACCESSED },
    { id: "govuk-living-spain", title: "Living in Spain (last updated 3 July 2026)", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/living-in-spain", official: true, accessed: ACCESSED },
    { id: "eu-short-stay", title: "Spain travel advice: entry requirements (90 days in any 180-day period)", publisher: "GOV.UK (FCDO)", url: "https://www.gov.uk/foreign-travel-advice/spain/entry-requirements", official: true, accessed: ACCESSED },
    { id: "ec-ees", title: "The new Entry/Exit System went live on 12 October 2025", publisher: "European Commission (Migration and Home Affairs)", url: "https://home-affairs.ec.europa.eu/news/new-entryexit-system-went-live-12-october-2025-10-13_en", official: true, accessed: ACCESSED },
    { id: "pl-ees", title: "EES fully operational since 10 April 2026", publisher: "Government of Poland (EU member state notice)", url: "https://www.gov.pl/web/usa-en/entryexit-system---full-implementation-from-april-10th-2026", official: true, accessed: ACCESSED },
    { id: "gulfnews-etias", title: "Europe scraps 2026 ETIAS launch timeline (11 Aug 2026)", publisher: "Gulf News", url: "https://gulfnews.com/amp/story/business%2Ftourism%2Feurope-scraps-2026-etias-launch-timeline-travellers-wont-need-permit-yet-1.500637255", official: false, accessed: ACCESSED },
    { id: "arc-iprem-2026", title: "El IPREM en 2026 y cómo afecta a los trámites de extranjería", publisher: "ARC Legal", url: "https://www.arc-legal.es/el-iprem-en-2026-que-es-cuanto-es-y-como-afecta-a-los-tramites-de-extranjeria/", official: false, accessed: ACCESSED },
    { id: "es-smi-2026", title: "Real Decreto 126/2026: salario mínimo interprofesional 2026", publisher: "Fieldfisher", url: "https://www.fieldfisher.com/es-es/locations/espana/actualidad/salario-minimo-interprofesional-2026", official: false, accessed: ACCESSED },
    { id: "boe-irpf", title: "Ley 35/2006 del IRPF (consolidated text, art. 9)", publisher: "Boletín Oficial del Estado", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ maps your UK → Spain move step by step: put your ACRO and medical-certificate dates, padrón, TIE and the six-month licence exchange in your deadline agenda and calendar, and keep the whole family's documents in one place.",
  related: ["moving-from-us-to-spain", "moving-from-us-to-portugal"],
};
