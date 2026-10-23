import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-19";

export const ukToPortugal: Guide = {
  slug: "moving-from-uk-to-portugal",
  status: "published",
  datePublished: "2026-10-20",
  fromCode: "GB",
  toCode: "PT",
  fromName: "the UK",
  toName: "Portugal",
  kind: "route",

  title: "Moving from the UK to Portugal after Brexit: 2026 Checklist",
  description:
    "Residence visas for Brits (remote work €3,680/month, passive income), ACRO certificate, AIMA, S1 healthcare, your UK driving licence and the 2026 citizenship rules.",
  h1: "Moving from the UK to Portugal after Brexit: the 2026 checklist",

  summary: [
    {
      text: "Since Brexit, Brits who want to live in Portugal enter on a residence visa applied for in the UK through VFS Global, then apply to AIMA for a residence card after arrival. For the remote-work (digital nomad) visa, VFS UK asks for average monthly income of at least €3,680 over three months and a bank balance of at least €920.",
      sourceIds: ["govuk-living-pt", "vfs-uk-remote"],
    },
    {
      text: "Good news for Brits: Portugal recognises dual citizenship with the UK, and registered residents can drive on their UK licence until it expires. Citizenship now takes 10 years of legal residence for UK nationals under the 2026 nationality law.",
      sourceIds: ["govuk-living-pt", "lo-1-2026"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Where you apply", value: "VFS Global in the UK, then AIMA in Portugal", sourceIds: ["vfs-uk-remote", "govuk-living-pt"] },
    { label: "Remote-work visa income", value: "≥ €3,680/month (3-month average) + €920 bank balance", sourceIds: ["vfs-uk-remote"] },
    { label: "Passive-income visa (1 adult)", value: "Means of subsistence based on the €920 minimum wage", sourceIds: ["aima-subsistence", "pt-min-wage-2026"] },
    { label: "Police certificate", value: "ACRO, apostilled, issued within 90 days", sourceIds: ["vfs-uk-remote"] },
    { label: "UK driving licence", value: "Valid until it expires once you're a registered resident", sourceIds: ["govuk-living-pt"] },
    { label: "Dual citizenship", value: "Recognised between Portugal and the UK", sourceIds: ["govuk-living-pt"] },
  ],

  visaOptions: [
    {
      name: "Remote-work residence visa (VFS UK lists it as \"D9\"; often called D8)",
      bestFor: "Brits employed by, or freelancing for, clients outside Portugal.",
      requirement:
        "Average monthly income of at least €3,680 over the last three months and a bank balance of at least €920, plus payslips or invoices for the last three months and your P60 (employees) or latest tax return (self-employed).",
      notes: [
        "Visa codes differ between VFS centres — use the checklist for the visa you're applying for on VFS UK.",
      ],
      sourceIds: ["vfs-uk-remote"],
    },
    {
      name: "Passive income / retirement residence visa (\"D7\")",
      bestFor: "Retirees and people living on pensions, rental income or investments.",
      requirement:
        "Means of subsistence under Portaria 1563/2007, set against Portugal's minimum wage (€920 a month in 2026): 100% for the first adult, 50% for each extra adult and 30% for each child.",
      notes: [
        "UK State Pension recipients may be able to use an S1 for Portuguese healthcare.",
      ],
      sourceIds: ["aima-subsistence", "pt-min-wage-2026", "govuk-living-pt"],
    },
  ],

  recentChanges: [
    {
      text: "Lei Orgânica 1/2026 (in force 19 May 2026) set the naturalisation period at 10 years for UK nationals and other non-EU, non-CPLP citizens. Pending applications keep the old rules.",
      sourceIds: ["lo-1-2026"],
    },
    {
      text: "Portugal's minimum wage rose to €920 a month in 2026, which raises the money thresholds for residence visas.",
      sourceIds: ["pt-min-wage-2026"],
    },
  ],

  steps: [
    {
      when: "4–6 months before",
      title: "Decide between remote work and passive income",
      detail:
        "If your income is a salary or freelance fees from outside Portugal, the remote-work visa fits. If it's a pension or investments, look at the passive-income visa and its means-of-subsistence rules.",
      sourceIds: ["vfs-uk-remote", "aima-subsistence"],
    },
    {
      when: "Within 90 days of applying",
      title: "Get your ACRO certificate apostilled",
      detail:
        "If you've lived in the UK in the past year, VFS UK requires an ACRO police certificate issued within the last 90 days and legalised with a Hague apostille from the UK Legalisation Office.",
      sourceIds: ["vfs-uk-remote"],
    },
    {
      when: "2–3 months before",
      title: "Arrange insurance or an S1",
      detail:
        "Travel insurance must cover medical costs, urgent assistance and repatriation for the full 120 days of the visa. British nationals who qualify can apply for an S1 instead.",
      sourceIds: ["vfs-uk-remote"],
    },
    {
      when: "2–3 months before",
      title: "Apply at VFS Global",
      detail:
        "Bring a passport valid at least 90 days beyond the 120-day visa period, three months of payslips or invoices and bank statements, and your P60 or tax return. Fees are non-refundable.",
      sourceIds: ["vfs-uk-remote"],
    },
    {
      when: "After arrival",
      title: "Apply for your AIMA residence card",
      detail:
        "Enter on your residence visa and apply to AIMA for a residence card. Temporary cards are renewed every 2–3 years, and after 5 years you may be able to apply for permanent residency.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      when: "First weeks",
      title: "Get your NIF and register with the SNS",
      detail:
        "You need a Portuguese tax number (NIF) to work and pay tax. Register at your local health centre for an SNS user number — you'll have the same rights to treatment as Portuguese citizens.",
      sourceIds: ["govuk-living-pt"],
    },
  ],

  documents: [
    { item: "Passport valid 90+ days beyond the 120-day visa period", sourceIds: ["vfs-uk-remote"] },
    { item: "ACRO police certificate, issued within 90 days, apostilled", sourceIds: ["vfs-uk-remote"] },
    { item: "Travel insurance for 120 days, or a certified S1", sourceIds: ["vfs-uk-remote"] },
    { item: "Last 3 months of payslips/invoices and bank statements", sourceIds: ["vfs-uk-remote"] },
    { item: "P60 (employees) or latest tax return (self-employed)", sourceIds: ["vfs-uk-remote"] },
    { item: "Proof of pension or investment income (passive-income visa)", sourceIds: ["aima-subsistence"] },
    { item: "NIF (Portuguese tax number) after arrival", sourceIds: ["govuk-living-pt"] },
  ],

  costs: [
    { item: "Residence visa application fee (Portugal)", amount: "€90", sourceIds: ["govpt-visa-fee"] },
    { item: "VFS service fee", amount: "Set by VFS UK", note: "VFS UK says fees are non-refundable.", sourceIds: ["vfs-uk-remote"] },
    { item: "AIMA residence card fee", amount: "See AIMA's fee table", sourceIds: ["aima-remote"] },
  ],
  costNote:
    "We list only official fees. Apostilles, translations and insurance depend on your provider.",

  tax: [
    {
      text: "The UK and Portugal have a double taxation agreement so that you don't pay tax on the same income twice. GOV.UK recommends professional advice on Portuguese tax.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      text: "Before leaving, tell HMRC: use form P85 if you don't file Self Assessment, or SA109 with your return. Once non-resident you don't pay UK tax on income you get outside the UK, but UK income such as rent may still be taxed.",
      sourceIds: ["govuk-leaving-uk"],
    },
  ],

  family: [
    {
      text: "For the passive-income visa, the money requirement goes up by 50% of the minimum wage for each extra adult and 30% for each child.",
      sourceIds: ["aima-subsistence"],
    },
  ],

  pitfalls: [
    {
      text: "An ACRO certificate without an apostille, or older than 90 days on the day you apply.",
      sourceIds: ["vfs-uk-remote"],
    },
    {
      text: "Insurance that doesn't cover the full 120 days of the visa.",
      sourceIds: ["vfs-uk-remote"],
    },
    {
      text: "Using your UK GHIC as long-term health cover. Residents generally can't use a UK-issued EHIC/GHIC in Portugal; register with the SNS instead.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      text: "Assuming five years to Portuguese citizenship. Since May 2026 it's 10 years for UK nationals.",
      sourceIds: ["lo-1-2026"],
    },
  ],

  faqs: [
    {
      q: "Can Brits still move to Portugal after Brexit?",
      a: "Yes, with a residence visa applied for in the UK through VFS Global, followed by a residence card from AIMA after you arrive.",
      sourceIds: ["govuk-living-pt", "vfs-uk-remote"],
    },
    {
      q: "How much income do I need for Portugal's digital nomad visa from the UK?",
      a: "VFS UK asks for average monthly income of at least €3,680 over the last three months, plus a bank balance of at least €920.",
      sourceIds: ["vfs-uk-remote"],
    },
    {
      q: "Can I drive in Portugal on my UK licence?",
      a: "Yes. Once you're a registered resident you can drive on a UK or Gibraltar licence until it expires. Jersey, Guernsey and Isle of Man licences should be exchanged.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      q: "Can I keep my British passport if I become Portuguese?",
      a: "Yes. Portugal recognises dual citizenship with the UK. Citizenship by residence now generally takes 10 years for UK nationals.",
      sourceIds: ["govuk-living-pt", "lo-1-2026"],
    },
    {
      q: "Will the NHS cover me in Portugal?",
      a: "Not as a resident with a GHIC. Register with Portugal's SNS. If you receive a UK State Pension or certain other benefits, an S1 may make the UK responsible for your healthcare costs.",
      sourceIds: ["govuk-living-pt"],
    },
  ],

  sources: [
    { id: "govuk-living-pt", title: "Living in Portugal (updated 10 July 2026)", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/living-in-portugal", official: true, accessed: ACCESSED },
    { id: "vfs-uk-remote", title: "Residence visa for professional activity done remotely — digital nomads (UK checklist)", publisher: "VFS Global for the Consulates of Portugal in the UK", url: "https://www.vfsglobal.com/one-pager/portugal/uk/english/pdf/D9-RESIDENCE-VISA-FOR-PROFESSIONAL-ACTIVITY-DONE-REMOTELY-DIGITAL-NOMADS.pdf", official: true, accessed: ACCESSED },
    { id: "aima-subsistence", title: "Meios de subsistência (means of subsistence)", publisher: "AIMA", url: "https://aima.gov.pt/pt/temas-transversais/meios-de-subsistencia", official: true, accessed: ACCESSED },
    { id: "aima-remote", title: "Residence permit for remote professional activity", publisher: "AIMA", url: "https://aima.gov.pt/pt/trabalhar/autorizacao-de-residencia-para-o-exercicio-de-atividade-profissional-prestada-de-forma-remota-com-visto-de-residencia-para-o-exe", official: true, accessed: ACCESSED },
    { id: "pt-min-wage-2026", title: "Minimum wage rises to €920 in 2026 (Decreto-Lei 139/2025)", publisher: "Sábado", url: "https://www.sabado.pt/dinheiro/amp/subida-do-salario-minimo-para-920-euros-em-2026-publicada-em-diario-da-republica", official: false, accessed: ACCESSED },
    { id: "govpt-visa-fee", title: "Residence visa application fee", publisher: "gov.pt", url: "https://www2.gov.pt/en/servicos/pedir-um-visto-de-residencia-para-reagrupamento-familiar", official: true, accessed: ACCESSED },
    { id: "lo-1-2026", title: "Lei Orgânica n.º 1/2026 (nationality law amendment)", publisher: "Diário da República", url: "https://files.diariodarepublica.pt/1s/2026/05/09500/0000200020.pdf", official: true, accessed: ACCESSED },
    { id: "govuk-leaving-uk", title: "Tax if you leave the UK to live abroad", publisher: "GOV.UK", url: "https://www.gov.uk/tax-right-retire-abroad-return-to-uk", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ turns your UK → Portugal move into one roadmap: put your ACRO certificate's 90-day window, VFS appointment and AIMA date in the deadline agenda and calendar, keep the family's documents together, and plan your moving budget.",
  related: ["portugal-d8-digital-nomad-visa", "moving-from-us-to-portugal", "moving-from-uk-to-spain"],
};
