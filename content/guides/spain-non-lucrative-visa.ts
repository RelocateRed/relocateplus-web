import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-31";

export const spainNonLucrativeVisa: Guide = {
  slug: "spain-non-lucrative-visa",
  status: "published",
  datePublished: "2026-10-31",
  fromCode: "INT",
  toCode: "ES",
  fromName: "any country",
  toName: "Spain non-lucrative visa",
  kind: "visa",
  labels: { visas: "What the visa allows", costs: "Money and fees" },

  title: "Spain Non-Lucrative Visa 2026: €28,800 Rule, Documents & Renewal",
  description:
    "Spain's non-lucrative visa for 2026: 400% of IPREM (€2,400 a month), +€600 per family member, insurance rules, documents, consulate timing and the 2-year renewal.",
  h1: "Spain's non-lucrative visa in 2026: requirements, documents and renewal",

  summary: [
    {
      text: "The non-lucrative visa lets non-EU citizens live in Spain on their own money without working. You need monthly means of 400% of IPREM for yourself and 100% for each family member. With IPREM at €600 a month in 2026, that's €2,400 a month (€28,800 for the first year) plus €600 a month (€7,200 a year) per family member.",
      sourceIds: ["inclusion-initial", "ocu-iprem"],
    },
    {
      text: "You apply at the Spanish consulate where you live, with health insurance, a medical certificate and criminal records for the last five years. The first authorisation lasts one year; renewals last two years if you've spent more than 183 days a year in Spain. Remote work isn't allowed on this visa.",
      sourceIds: ["inclusion-initial", "inclusion-renewal", "es-la-nlv"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Money for the main applicant", value: "400% of IPREM: €2,400/month (€28,800/year)", sourceIds: ["inclusion-initial", "ocu-iprem"] },
    { label: "Per family member", value: "100% of IPREM: €600/month (€7,200/year)", sourceIds: ["inclusion-initial", "ocu-iprem"] },
    { label: "Work allowed?", value: "No, not even remote work", sourceIds: ["inclusion-initial", "es-la-nlv"] },
    { label: "First authorisation", value: "1 year", sourceIds: ["inclusion-initial"] },
    { label: "Renewal", value: "2 years; more than 183 days a year in Spain", sourceIds: ["inclusion-renewal"] },
    { label: "After arrival", value: "Apply for your TIE within 1 month", sourceIds: ["inclusion-initial", "es-london-nlv"] },
  ],

  visaOptions: [
    {
      name: "Non-lucrative residence visa",
      bestFor: "Retirees and people living on savings, pensions or passive income.",
      requirement:
        "Monthly means of 400% of IPREM for you and 100% for each family member, public or private health insurance from an insurer authorised in Spain, a medical certificate and no criminal record in Spain or anywhere you lived in the last five years.",
      notes: [
        "Consulates set their own details: Los Angeles wants insurance with no deductible, copay or waiting period; London requires a UK or Spanish medical certificate with an apostille.",
      ],
      sourceIds: ["inclusion-initial", "es-la-nlv", "es-london-nlv"],
    },
    {
      name: "If you'll keep working remotely",
      bestFor: "People with a job or clients abroad.",
      requirement:
        "The non-lucrative visa doesn't allow teleworking. Remote workers apply for Spain's international telework (digital nomad) visa instead.",
      sourceIds: ["es-la-nlv"],
    },
  ],

  recentChanges: [
    {
      text: "IPREM stays at €600 a month in 2026 because Spain's 2023 budget has been extended again, so the non-lucrative visa's figure is unchanged at €28,800 for the first year.",
      sourceIds: ["ocu-iprem", "inclusion-initial"],
    },
  ],

  steps: [
    {
      when: "3–4 months before",
      title: "Check you can show the money",
      detail:
        "Work out 400% of IPREM for yourself and 100% for each family member. At €600 a month in 2026 that's €2,400 a month for one person, plus €600 per family member.",
      sourceIds: ["inclusion-initial", "ocu-iprem"],
    },
    {
      when: "3–4 months before",
      title: "Request your criminal record certificates",
      detail:
        "You need certificates from every country you've lived in during the last five years. London accepts them up to six months old (ACRO for UK records); Los Angeles wants the FBI check with a federal apostille and a certified translation.",
      sourceIds: ["inclusion-initial", "es-london-nlv", "es-la-nlv"],
    },
    {
      when: "2–3 months before",
      title: "Arrange insurance and the medical certificate",
      detail:
        "Get health insurance from an insurer authorised in Spain that covers what the public system covers, and a medical certificate issued within three months (London) or 90 days (Los Angeles) of applying.",
      sourceIds: ["inclusion-initial", "es-london-nlv", "es-la-nlv"],
    },
    {
      when: "2–3 months before",
      title: "Apply in person at your consulate",
      detail:
        "Apply at the Spanish consulate for the area where you live and pay the visa fee (Los Angeles: $140 for US citizens, $106 for others) and the residence fee on form 790 code 052.",
      sourceIds: ["inclusion-initial", "es-la-nlv"],
    },
    {
      when: "After applying",
      title: "Wait for the decision",
      detail:
        "The legal decision period is two months in London and three months in Los Angeles, longer if they ask for an interview or more documents.",
      sourceIds: ["es-london-nlv", "es-la-nlv"],
    },
    {
      when: "Within 1 month of arriving",
      title: "Apply for your TIE",
      detail:
        "Once in Spain, apply in person for your foreigner identity card at the immigration office or police station within one month of entry.",
      sourceIds: ["inclusion-initial", "es-london-nlv"],
    },
    {
      when: "Before the first year ends",
      title: "Renew for two years",
      detail:
        "Apply in the two months before your authorisation expires. You need to have been in Spain for more than 183 days in the calendar year and still have sufficient means.",
      sourceIds: ["inclusion-renewal"],
    },
  ],

  documents: [
    { item: "National visa application form and valid passport", sourceIds: ["es-la-nlv", "es-london-nlv"] },
    { item: "Proof of means: 400% of IPREM, plus 100% per family member", sourceIds: ["inclusion-initial", "es-london-nlv"] },
    { item: "Health insurance from an insurer authorised in Spain", sourceIds: ["inclusion-initial"] },
    { item: "Medical certificate (issued within 3 months in London, 90 days in Los Angeles)", sourceIds: ["es-london-nlv", "es-la-nlv"] },
    { item: "Criminal record certificates for every country lived in during the last 5 years", sourceIds: ["inclusion-initial", "es-london-nlv"] },
    { item: "Form 790 code 052 (residence fee)", sourceIds: ["inclusion-initial"] },
    { item: "Apostilles and sworn translations, as your consulate requires", sourceIds: ["es-la-nlv", "es-london-nlv"] },
  ],

  costs: [
    { item: "Means for one person (first year)", amount: "€28,800", note: "€2,400 a month (400% of IPREM).", sourceIds: ["inclusion-initial", "ocu-iprem"] },
    { item: "Means per family member (first year)", amount: "€7,200", note: "€600 a month (100% of IPREM).", sourceIds: ["inclusion-initial", "ocu-iprem"] },
    { item: "Visa fee at the Los Angeles consulate", amount: "$140 (US citizens) · $106 (others)", sourceIds: ["es-la-nlv"] },
  ],
  costNote:
    "Other consulates charge in local currency and change the amount with exchange rates. Insurance, translations and apostilles are extra.",

  family: [
    {
      text: "Each family member you support adds 100% of IPREM to the money you must show: €600 a month, or €7,200 a year, in 2026.",
      sourceIds: ["inclusion-initial", "ocu-iprem"],
    },
  ],

  tax: [
    {
      text: "Renewal requires more than 183 days a year in Spain, which is also the usual threshold for Spanish tax residence, so plan for being taxed in Spain on your worldwide income.",
      sourceIds: ["inclusion-renewal", "boe-irpf"],
    },
  ],

  pitfalls: [
    {
      text: "Planning to keep working remotely. The visa doesn't allow teleworking; use the digital nomad visa instead.",
      sourceIds: ["es-la-nlv"],
    },
    {
      text: "Buying travel insurance. Los Angeles rejects travel policies with medical cover and wants full cover with no copay or waiting period.",
      sourceIds: ["es-la-nlv"],
    },
    {
      text: "Spending too little time in Spain. Renewal requires more than 183 days in the calendar year.",
      sourceIds: ["inclusion-renewal"],
    },
    {
      text: "Missing the TIE deadline. You have one month from entering Spain.",
      sourceIds: ["inclusion-initial", "es-london-nlv"],
    },
  ],

  faqs: [
    {
      q: "How much money do I need for Spain's non-lucrative visa in 2026?",
      a: "400% of IPREM for yourself: €2,400 a month, or €28,800 for the first year. Add 100% of IPREM (€600 a month, €7,200 a year) for each family member.",
      sourceIds: ["inclusion-initial", "ocu-iprem"],
    },
    {
      q: "Can I work remotely on the non-lucrative visa?",
      a: "No. The authorisation is for living in Spain without working, and the Los Angeles consulate states it doesn't allow teleworking. Remote workers should look at the digital nomad visa.",
      sourceIds: ["inclusion-initial", "es-la-nlv"],
    },
    {
      q: "How long does the non-lucrative visa last?",
      a: "The first authorisation lasts one year. After that you renew for two years, provided you spent more than 183 days a year in Spain.",
      sourceIds: ["inclusion-initial", "inclusion-renewal"],
    },
    {
      q: "How long does the consulate take?",
      a: "The legal decision period is two months at the London consulate and three months at Los Angeles, and it can be extended if they ask for an interview or more documents.",
      sourceIds: ["es-london-nlv", "es-la-nlv"],
    },
    {
      q: "What health insurance do I need?",
      a: "Public or private insurance from an insurer authorised in Spain. London says it must cover everything Spain's public system covers; Los Angeles requires no deductible, copay or waiting period.",
      sourceIds: ["inclusion-initial", "es-london-nlv", "es-la-nlv"],
    },
  ],

  sources: [
    { id: "inclusion-initial", title: "Sheet 6: Initial authorisation of non-lucrative temporary residence (May 2025)", publisher: "Ministry of Inclusion, Social Security and Migration (Spain)", url: "https://www.inclusion.gob.es/en/web/migraciones/w/autorizacion-inicial-de-residencia-temporal-no-lucrativa", official: true, accessed: ACCESSED },
    { id: "inclusion-renewal", title: "Sheet 7: Renewal of the non-lucrative temporary residence permit (May 2025)", publisher: "Ministry of Inclusion, Social Security and Migration (Spain)", url: "https://www.inclusion.gob.es/en/web/migraciones/w/renovacion-de-la-autorizacion-de-residencia-temporal-no-lucrativa", official: true, accessed: ACCESSED },
    { id: "es-london-nlv", title: "Non-working residence visa (updated 6 July 2026)", publisher: "Consulate General of Spain in London", url: "https://www.exteriores.gob.es/Consulados/londres/en/ServiciosConsulares/Paginas/Consular/Visado-de-residencia-no-lucrativa.aspx", official: true, accessed: ACCESSED },
    { id: "es-la-nlv", title: "Non-working (non-lucrative) residence visa (updated 11 Feb 2026)", publisher: "Consulate General of Spain in Los Angeles", url: "https://www.exteriores.gob.es/Consulados/losangeles/en/ServiciosConsulares/Paginas/Consular/Visado-de-residencia-no-lucrativa.aspx", official: true, accessed: ACCESSED },
    { id: "boe-irpf", title: "Ley 35/2006 del IRPF (consolidated text, art. 9: 183-day rule)", publisher: "Boletín Oficial del Estado", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764", official: true, accessed: ACCESSED },
    { id: "ocu-iprem", title: "SMI e IPREM en 2026", publisher: "OCU (Spanish consumers' organisation)", url: "https://www.ocu.org/dinero/trabajo-paro/noticias/smi-iprem", official: false, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ builds your non-lucrative visa roadmap: it times your criminal record and medical certificate so they're still valid at the consulate, adds the TIE and renewal deadlines to your agenda, and keeps every document in your vault.",
  related: ["moving-from-us-to-spain", "moving-from-uk-to-spain", "spain-tie-card", "spain-digital-nomad-visa", "empadronamiento-spain-padron"],
};
