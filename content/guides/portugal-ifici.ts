import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-28";

export const portugalIfici: Guide = {
  slug: "portugal-ifici-tax-regime",
  status: "published",
  datePublished: "2026-10-28",
  fromCode: "INT",
  toCode: "PT",
  fromName: "any country",
  toName: "Portugal IFICI",
  kind: "topic",
  labels: { visas: "Who qualifies", costs: "Tax rates under IFICI" },

  title: "Portugal's IFICI Tax Regime (NHR 2.0) in 2026: Who Qualifies & How",
  description:
    "IFICI, Portugal's successor to NHR: the 20% rate for 10 years, which jobs qualify, the 15 January registration deadline, employer steps and foreign income rules.",
  h1: "Portugal's IFICI tax regime (\"NHR 2.0\"): who qualifies and how to register in 2026",

  summary: [
    {
      text: "IFICI (the tax incentive for scientific research and innovation, often called \"NHR 2.0\") taxes employment and self-employment income from qualifying activities at a flat 20%, for 10 consecutive years. Foreign-source income is generally exempt from Portuguese income tax, except pensions.",
      sourceIds: ["at-oficio"],
    },
    {
      text: "It isn't open to everyone who moves: you must work in a qualifying role (research, higher education, highly qualified jobs in certain companies, R&D or certified startups), and you can't have been Portuguese tax resident in the previous five years. You register on the Portal das Finanças by 15 January of the year after you become resident.",
      sourceIds: ["at-oficio", "portaria"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Rate", value: "20% on income from qualifying activities", sourceIds: ["at-oficio"] },
    { label: "How long", value: "10 consecutive years", sourceIds: ["at-oficio"] },
    { label: "Prior residence", value: "Not Portuguese tax resident in the previous 5 years", sourceIds: ["at-oficio"] },
    { label: "Foreign income", value: "Generally exempt, except pensions (category H)", sourceIds: ["at-oficio"] },
    { label: "Registration deadline", value: "15 January of the year after you become resident", sourceIds: ["at-oficio", "portaria"] },
    { label: "Not available if you had", value: "NHR, Programa Regressar or IFICI before", sourceIds: ["at-oficio"] },
  ],

  visaOptions: [
    {
      name: "Researchers and university teachers",
      bestFor: "Academics and scientists joining Portuguese universities, research institutions or technology centres.",
      requirement:
        "Higher education teaching, scientific research and jobs at recognised technology and innovation centres. FCT checks the activity.",
      sourceIds: ["portaria", "fct"],
    },
    {
      name: "Highly qualified professionals in certain companies",
      bestFor: "Engineers, ICT specialists, doctors, directors and similar roles.",
      requirement:
        "A listed profession (such as CEOs and directors, science and engineering specialists, doctors, university teachers or ICT specialists) at a company with relevant investment aid, or at an industrial or service company that exports at least 50% of its turnover. You need an EQF/ISCED level 8 qualification, or level 6 plus three years of proven experience.",
      sourceIds: ["portaria"],
    },
    {
      name: "Qualified jobs in companies recognised by AICEP or IAPMEI",
      bestFor: "Staff and board members at companies with investment contracts or recognised as relevant to the Portuguese economy.",
      requirement:
        "Qualified jobs or board positions in entities with a productive investment contract, or recognised as economically relevant by AICEP and IAPMEI.",
      sourceIds: ["portaria", "aicep"],
    },
    {
      name: "R&D staff and startup employees",
      bestFor: "People working in company R&D or at a certified Portuguese startup.",
      requirement:
        "R&D staff whose costs qualify for Portugal's business R&D tax incentive (checked by ANI), or jobs and board positions at startups certified under Law 21/2023 (checked by Startup Portugal).",
      sourceIds: ["portaria"],
    },
  ],

  steps: [
    {
      when: "Before you move",
      title: "Check that your role qualifies",
      detail:
        "Match your job to one of the qualifying activities and confirm you weren't Portuguese tax resident in the previous five years. Ask your employer which entity will check your activity.",
      sourceIds: ["at-oficio", "portaria"],
    },
    {
      when: "On arrival",
      title: "Get your NIF and Portal das Finanças access",
      detail:
        "Registration happens online in your personal area of the Portal das Finanças, so you need a Portuguese tax number and login first.",
      sourceIds: ["at-oficio", "fct"],
    },
    {
      when: "By 15 January",
      title: "Register for IFICI",
      detail:
        "Submit the registration form with your supporting documents by 15 January of the year after you become tax resident. If you register late, IFICI only applies from the year you register, for the remaining years.",
      sourceIds: ["at-oficio", "portaria"],
    },
    {
      when: "By 15 February",
      title: "The checking entity reports to the Tax Authority",
      detail:
        "FCT, AICEP, IAPMEI, ANI, Startup Portugal or the Tax Authority itself checks your activity and sends the result to the Tax Authority.",
      sourceIds: ["portaria"],
    },
    {
      when: "By 15 March",
      title: "Your employer confirms the requirements",
      detail:
        "For highly qualified professions, your employer confirms in its own Portal das Finanças area that you meet the requirements.",
      sourceIds: ["portaria"],
    },
    {
      when: "By 31 March",
      title: "Check your status and get the certificate",
      detail:
        "The Tax Authority shows whether your registration was accepted, and you can download a certificate from your Portal das Finanças area.",
      sourceIds: ["portaria"],
    },
    {
      when: "Every year",
      title: "Report any change by 15 January",
      detail:
        "If you change job or activity, notify it by 15 January of the following year. A change of employer or checking entity needs a new registration request.",
      sourceIds: ["portaria", "at-oficio"],
    },
  ],

  documents: [
    { item: "Employment contract (for a job)", sourceIds: ["portaria", "fct"] },
    { item: "Up-to-date commercial registration certificate (for board members)", sourceIds: ["portaria"] },
    { item: "Research grant or scholarship contract (for researchers)", sourceIds: ["portaria", "fct"] },
    { item: "Proof of your academic qualifications", sourceIds: ["portaria", "fct"] },
    { item: "Employer or entity declaration confirming the requirements", sourceIds: ["portaria", "fct"] },
    { item: "For researchers: proof of the employer's social security registration", sourceIds: ["fct"] },
    { item: "Records proving your activity and income, kept for Tax Authority checks", sourceIds: ["portaria"] },
  ],

  costs: [
    { item: "Employment and self-employment income from qualifying activities", amount: "20%", sourceIds: ["at-oficio"] },
    { item: "Most foreign-source income", amount: "Exempt", note: "Pensions (category H) are excluded from the exemption.", sourceIds: ["at-oficio"] },
    { item: "Income from blacklisted (clearly more favourable) tax jurisdictions", amount: "35%", sourceIds: ["at-oficio"] },
  ],
  costNote:
    "Registering is free through the Portal das Finanças. Portuguese income from non-qualifying activities is taxed under the normal rules.",

  tax: [
    {
      text: "Once you've asked to register, you can give your employer proof of the request so that tax is withheld from salary at 20%.",
      sourceIds: ["at-oficio"],
    },
    {
      text: "The 10 years run consecutively. If you stop qualifying or leave Portugal, you can use the remaining years if you become resident again and earn qualifying income.",
      sourceIds: ["at-oficio"],
    },
  ],

  pitfalls: [
    {
      text: "Assuming IFICI works like the old NHR for everyone. Retirees and most remote workers don't qualify, and pensions aren't covered by the foreign-income exemption.",
      sourceIds: ["at-oficio", "portaria"],
    },
    {
      text: "Missing 15 January. Registering late costs you the years before you register.",
      sourceIds: ["at-oficio"],
    },
    {
      text: "Having used NHR or Programa Regressar. Either rules you out, and IFICI can only be used once.",
      sourceIds: ["at-oficio"],
    },
    {
      text: "Combining it with IRS Jovem. From 2025, people who have IFICI can't also benefit from IRS Jovem.",
      sourceIds: ["at-oficio"],
    },
  ],

  faqs: [
    {
      q: "What is IFICI in Portugal?",
      a: "Portugal's tax incentive for scientific research and innovation, the successor to the NHR regime. Income from qualifying activities is taxed at 20% for 10 years, and most foreign income is exempt, except pensions.",
      sourceIds: ["at-oficio", "fct"],
    },
    {
      q: "Who qualifies for IFICI?",
      a: "People who weren't Portuguese tax resident in the previous five years and work in a qualifying activity: research and university teaching, highly qualified professions in certain companies, qualified jobs in companies recognised by AICEP or IAPMEI, R&D roles, or jobs at certified startups.",
      sourceIds: ["at-oficio", "portaria"],
    },
    {
      q: "When is the IFICI deadline?",
      a: "15 January of the year after you become Portuguese tax resident. If you register later, the regime only applies from the year you register.",
      sourceIds: ["at-oficio", "portaria"],
    },
    {
      q: "Do remote workers and digital nomads get IFICI?",
      a: "Only if their work is one of the qualifying activities. The registration documents are built around Portuguese jobs, board roles, research grants and startups, so most remote workers for foreign companies won't qualify.",
      sourceIds: ["portaria", "at-oficio"],
    },
    {
      q: "Are pensions tax-free under IFICI?",
      a: "No. Foreign-source income is generally exempt, but pensions (category H) are excluded from that exemption.",
      sourceIds: ["at-oficio"],
    },
  ],

  sources: [
    { id: "at-oficio", title: "Ofício Circulado n.º 20276/2025: IFICI (art. 58.º-A EBF)", publisher: "Autoridade Tributária e Aduaneira (Portuguese Tax Authority)", url: "https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/legislacao/instrucoes_administrativas/Documents/Oficio_circulado_20276_2025.pdf", official: true, accessed: ACCESSED },
    { id: "portaria", title: "Portaria n.º 352/2024/1 (IFICI registration rules)", publisher: "Portal das Finanças (Diário da República text)", url: "https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/legislacao/diplomas_legislativos/Documents/Portaria_352_2024_1.pdf", official: true, accessed: ACCESSED },
    { id: "aicep", title: "IFICI — Incentivo Fiscal à Investigação Científica e Inovação", publisher: "AICEP Portugal Global", url: "https://www.portugalglobal.pt/pt/internacionalizacao/incentivos/ifici", official: true, accessed: ACCESSED },
    { id: "fct", title: "IFICI registration and notification of changes", publisher: "FCT (Foundation for Science and Technology)", url: "https://www.fct.pt/en/inscricao-e-comunicacao-de-alteracoes-no-regime-do-incentivo-fiscal-a-investigacao-cientifica-e-inovacao-ifici/", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ puts the 15 January IFICI deadline in your agenda the moment you become resident, keeps your contract, diplomas and employer declaration in your document vault, and explains Portuguese tax for your move.",
  related: ["how-to-get-nif-portugal", "portugal-d8-digital-nomad-visa", "moving-from-us-to-portugal", "moving-from-uk-to-portugal"],
};
