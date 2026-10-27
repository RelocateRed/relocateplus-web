import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-23";

export const spainDigitalNomadVisa: Guide = {
  slug: "spain-digital-nomad-visa",
  status: "published",
  datePublished: "2026-10-23",
  fromCode: "INT",
  toCode: "ES",
  fromName: "any country",
  toName: "Spain",
  kind: "visa",

  title: "Spain Digital Nomad Visa 2026: Income, Rules & How to Apply",
  description:
    "Spain's telework visa for non-EU remote workers: 2026 income (200% of minimum wage), the 20% Spanish-client rule, consulate vs in-Spain route, fees and family.",
  h1: "Spain's digital nomad visa (international telework) in 2026",

  summary: [
    {
      text: "Spain's digital nomad visa lets non-EU nationals live in Spain while working remotely for employers or clients abroad. You can apply at a Spanish consulate (the visa authorises one year) or, if you're already legally in Spain, for a residence permit of up to three years, renewable in two-year periods.",
      sourceIds: ["uge-faq", "one-telework", "garrigues-startups"],
    },
    {
      text: "The income requirement is 200% of Spain's minimum wage. The official FAQ puts the minimum wage at €1,221 a month, which means €2,442; some consulates calculate it from the annual minimum wage of €17,094 (about €2,849 a month), so check how yours does it. Freelancers may earn up to 20% of their work from Spanish clients.",
      sourceIds: ["uge-faq", "es-smi-2026", "es-ny-telework"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Who can apply", value: "Non-EU adults working remotely for a company abroad", sourceIds: ["uge-faq"] },
    { label: "Income (holder)", value: "200% of minimum wage: €2,442/month per official FAQ", sourceIds: ["uge-faq", "es-smi-2026"] },
    { label: "Family members", value: "+75% of minimum wage for the first, +25% for each extra", sourceIds: ["uge-faq"] },
    { label: "Spanish clients", value: "Max 20% of your total professional activity", sourceIds: ["uge-faq", "garrigues-startups"] },
    { label: "Duration", value: "Visa: 1 year · Residence permit in Spain: up to 3 years, renewable 2 years", sourceIds: ["uge-faq", "one-telework", "garrigues-startups"] },
    { label: "In-Spain permit fee", value: "€89.96 (renewal €95.27)", sourceIds: ["one-telework"] },
  ],

  visaOptions: [
    {
      name: "Telework visa from a Spanish consulate",
      bestFor: "Remote workers applying from their home country before moving.",
      requirement:
        "Income of 200% of the minimum wage, at least three months with your employer (or a three-month contract for freelancers), a company that has existed for at least a year, and a degree or three years' relevant experience. The visa authorises residence and work in Spain for one year.",
      notes: [
        "Spain's New York consulate lists a 10-day legal decision period.",
        "You can request a residence authorisation in Spain when 60 days remain on the visa.",
      ],
      sourceIds: ["es-ny-telework", "uge-faq"],
    },
    {
      name: "Residence permit applied for in Spain (UGE)",
      bestFor: "Non-EU nationals who are already legally in Spain.",
      requirement:
        "You must be in a regular situation in Spain. Apply to the Large Companies Unit (UGE) with form MI-T, the employer's authorisation letter, proof the company has traded for at least a year, social security coverage, criminal records and health insurance. The permit lasts up to three years.",
      notes: [
        "Travel insurance isn't accepted as health cover.",
        "Fee €89.96 (form 790, code 038); renewal €95.27.",
      ],
      sourceIds: ["one-telework"],
    },
  ],

  recentChanges: [
    {
      text: "Spain's 2026 minimum wage is €1,221 a month in 14 payments (€17,094 a year) under Real Decreto 126/2026 — so the visa's income threshold rose this year.",
      sourceIds: ["es-smi-2026"],
    },
  ],

  steps: [
    {
      when: "Before you apply",
      title: "Check you fit the profile",
      detail:
        "You must be a non-EU adult working remotely for a company outside Spain, with at least three months' relationship with it. If you're freelance, Spanish clients can make up no more than 20% of your work.",
      sourceIds: ["uge-faq", "one-telework"],
    },
    {
      when: "1–2 months before",
      title: "Get your employer's paperwork",
      detail:
        "You need a letter from the foreign company authorising remote work from Spain (with position, salary and conditions) and proof the company has at least one year of real, continuous activity.",
      sourceIds: ["one-telework", "es-ny-telework"],
    },
    {
      when: "1–2 months before",
      title: "Sort out social security",
      detail:
        "Employers must register with Spanish Social Security as a non-resident company, unless a bilateral agreement lets you keep home-country coverage. Freelancers register in Spain's self-employed scheme (RETA). Failing to register can end the permit.",
      sourceIds: ["uge-faq"],
    },
    {
      when: "Application",
      title: "Apply at the consulate or the UGE",
      detail:
        "From abroad, apply for the visa at your Spanish consulate. If you're already legally in Spain, file the MI-T form online with the UGE using a digital certificate or Cl@ve, after paying the €89.96 fee.",
      sourceIds: ["es-ny-telework", "one-telework"],
    },
    {
      when: "Before the visa runs out",
      title: "Switch to a residence permit",
      detail:
        "The visa authorises one year. You can ask for the residence authorisation when 60 days remain; it lasts up to three years and is then renewable for two-year periods.",
      sourceIds: ["uge-faq", "garrigues-startups"],
    },
  ],

  documents: [
    { item: "Passport and application form (consulate) or form MI-T (UGE)", sourceIds: ["es-ny-telework", "one-telework"] },
    { item: "Employer letter authorising remote work from Spain", sourceIds: ["one-telework"] },
    { item: "Proof the company has traded for 1+ year", sourceIds: ["one-telework", "es-ny-telework"] },
    { item: "Contract showing 3+ months' relationship", sourceIds: ["one-telework", "uge-faq"] },
    { item: "Degree, or proof of equivalent professional experience", sourceIds: ["one-telework", "es-ny-telework"] },
    { item: "Social security registration (or home-country certificate under a treaty)", sourceIds: ["uge-faq", "one-telework"] },
    { item: "Criminal record certificates + sworn statement", sourceIds: ["one-telework"] },
    { item: "Public or private health insurance (not travel insurance)", sourceIds: ["one-telework"] },
    { item: "Proof of income: 200% of minimum wage, plus family amounts", sourceIds: ["uge-faq"] },
  ],

  costs: [
    { item: "Residence permit applied for in Spain (form 790, code 038)", amount: "€89.96", sourceIds: ["one-telework"] },
    { item: "Renewal", amount: "€95.27", sourceIds: ["one-telework"] },
    { item: "Consulate visa fee", amount: "Set by each consulate", note: "Check your consulate's current fee list.", sourceIds: ["es-ny-telework"] },
  ],
  costNote:
    "Translations, apostilles and insurance depend on your provider, so we don't estimate them.",

  tax: [
    {
      text: "Employees who move on the international telework visa meet the move condition of Spain's special regime for impatriated workers (the 'Beckham Law'), provided they weren't Spanish tax resident in the previous five tax periods. Employment income is then taxed at a flat 24% up to €600,000, for the year of the move and the next five.",
      sourceIds: ["aeat-impatriados"],
    },
  ],

  family: [
    {
      text: "A spouse or partner, dependent children and dependent parents can apply with you or later. Add 75% of the minimum wage for the first family member and 25% for each additional one. Family members with a residence authorisation may work in Spain without restrictions.",
      sourceIds: ["uge-faq"],
    },
  ],

  pitfalls: [
    {
      text: "Using the wrong income figure. The official FAQ calculates from €1,221 a month (€2,442); some consulates use the annual minimum wage (about €2,849). Ask yours.",
      sourceIds: ["uge-faq", "es-smi-2026"],
    },
    {
      text: "Too many Spanish clients. If you're self-employed, work for Spanish companies can't exceed 20% of your activity.",
      sourceIds: ["uge-faq"],
    },
    {
      text: "Skipping social security registration. The authorisation can be terminated if you don't register.",
      sourceIds: ["uge-faq"],
    },
    {
      text: "Bringing travel insurance. The UGE requires public or private health insurance; travel insurance isn't accepted.",
      sourceIds: ["one-telework"],
    },
  ],

  faqs: [
    {
      q: "How much income do I need for Spain's digital nomad visa in 2026?",
      a: "200% of the minimum wage. Spain's official FAQ uses €1,221 a month, giving €2,442. Some consulates calculate from the annual figure of €17,094 (about €2,849 a month), so confirm with yours. Add 75% for the first family member and 25% for each additional one.",
      sourceIds: ["uge-faq", "es-smi-2026"],
    },
    {
      q: "Can I work for Spanish clients on the digital nomad visa?",
      a: "Yes, as a self-employed professional, as long as work for Spanish companies doesn't exceed 20% of your total professional activity.",
      sourceIds: ["uge-faq", "garrigues-startups"],
    },
    {
      q: "Can I apply for the digital nomad permit from inside Spain?",
      a: "Yes, if you're legally in Spain: apply to the Large Companies Unit (UGE) for a residence permit of up to three years. From abroad you need the consular visa instead.",
      sourceIds: ["one-telework", "uge-faq"],
    },
    {
      q: "How long is Spain's digital nomad visa valid?",
      a: "The consular visa authorises one year. A residence permit lasts up to three years and can be renewed for two-year periods.",
      sourceIds: ["uge-faq", "garrigues-startups"],
    },
    {
      q: "Does the Beckham Law apply to digital nomads?",
      a: "For employees, yes. The Spanish Tax Agency says employed workers holding the international telework visa meet the move condition, provided they weren't Spanish tax resident in the previous five tax periods. Freelancers should check with a tax adviser.",
      sourceIds: ["aeat-impatriados"],
    },
  ],

  sources: [
    { id: "uge-faq", title: "Digital nomads: frequently asked questions (English)", publisher: "Ministry of Inclusion, Social Security and Migration (UGE)", url: "https://bibliovirtual.inclusion.gob.es/documents/d/unidadgrandesempresas/digital-nomad-faqs-english", official: true, accessed: ACCESSED },
    { id: "one-telework", title: "Residency application for international teleworkers", publisher: "Spanish government (one.gob.es)", url: "https://www.one.gob.es/en/procedures/residency-application-international-teleworkers", official: true, accessed: ACCESSED },
    { id: "es-ny-telework", title: "Telework visa", publisher: "Consulate General of Spain in New York", url: "https://exteriores.gob.es/Consulados/nuevayork/en/ServiciosConsulares/Paginas/Consular/Visado-de-teletrabajo.aspx", official: true, accessed: ACCESSED },
    { id: "es-smi-2026", title: "Real Decreto 126/2026: salario mínimo interprofesional 2026", publisher: "Fieldfisher", url: "https://www.fieldfisher.com/es-es/locations/espana/actualidad/salario-minimo-interprofesional-2026", official: false, accessed: ACCESSED },
    { id: "garrigues-startups", title: "Spain: the Startups Law regulates international remote working", publisher: "Garrigues", url: "https://www.garrigues.com/en_GB/new/spain-startups-law-regulates-international-remote-working-foreign-digital-nomads", official: false, accessed: ACCESSED },
    { id: "aeat-impatriados", title: "Régimen especial para trabajadores desplazados (impatriados)", publisher: "Agencia Tributaria", url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/regimenes-opcionales/regimen-especial-impatriados.html", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ keeps a Spain digital nomad move on track: put your visa expiry, the 60-day window to switch to a residence permit and renewal dates in the deadline agenda and calendar, and keep contracts, insurance and family documents together.",
  related: ["how-to-get-nie-number-spain", "moving-from-us-to-spain", "moving-from-uk-to-spain"],
};
