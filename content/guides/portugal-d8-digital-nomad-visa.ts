import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-23";

export const portugalD8Visa: Guide = {
  slug: "portugal-d8-digital-nomad-visa",
  status: "published",
  datePublished: "2026-10-23",
  fromCode: "INT",
  toCode: "PT",
  fromName: "any country",
  toName: "Portugal",
  kind: "visa",

  title: "Portugal D8 Digital Nomad Visa 2026: €3,680 Income & How to Apply",
  description:
    "Portugal's remote-work visa for non-EU nationals: the 2026 income rule, residence vs temporary-stay version, documents, fees, AIMA permit, family and tax.",
  h1: "Portugal's D8 digital nomad visa in 2026",

  summary: [
    {
      text: "Portugal's digital nomad visa, usually called the D8, is for people who work remotely for employers or clients based outside Portugal. In 2026 you need average earnings of at least €3,680 a month over the last three months: four times the €920 minimum wage.",
      sourceIds: ["vfs-remote", "pt-min-wage-2026"],
    },
    {
      text: "It comes in two versions. The residence visa leads to a two-year AIMA residence permit you can renew for three years at a time; the temporary-stay visa covers up to a year and cannot be renewed. You apply in the country where you live, usually through VFS Global for the Portuguese consulate.",
      sourceIds: ["aima-remote", "srs-legal-2022", "vfs-remote-temp", "vfs-remote", "vfs-uk-remote"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Who it's for", value: "Employees or freelancers working remotely for clients abroad", sourceIds: ["vfs-remote", "aima-remote"] },
    { label: "Income (2026)", value: "≥ €3,680/month, averaged over 3 months (4× €920)", sourceIds: ["vfs-remote", "pt-min-wage-2026"] },
    { label: "Residence visa", value: "4 months, 2 entries — then apply to AIMA", sourceIds: ["eportugal-visas", "aima-remote"] },
    { label: "AIMA permit", value: "2 years, renewable for 3-year periods", sourceIds: ["aima-remote"] },
    { label: "Temporary-stay version", value: "Up to 1 year, not renewable", sourceIds: ["srs-legal-2022", "vfs-remote-temp"] },
    { label: "Visa fee", value: "€90 (residence visa)", sourceIds: ["govpt-visa-fee"] },
    { label: "Citizenship by residence", value: "10 years for most non-EU nationals (7 for CPLP)", sourceIds: ["lo-1-2026", "europesimple-nationality"] },
  ],

  visaOptions: [
    {
      name: "Residence visa for remote work (D8)",
      bestFor: "People who want to live in Portugal long term and possibly settle.",
      requirement:
        "Proof of remote work for a foreign employer or clients (contract, employer declaration or freelance service contracts), at least €3,680 average monthly income over the past three months, a police certificate and travel insurance. After arrival you apply to AIMA for a residence permit.",
      notes: [
        "Consulates publish their own checklists: VFS UK labels it \"D9\" and also asks for a €920 bank balance.",
        "The AIMA permit lasts two years and renews for three-year periods.",
      ],
      sourceIds: ["vfs-remote", "vfs-uk-remote", "aima-remote", "pt-min-wage-2026"],
    },
    {
      name: "Temporary-stay visa for remote work",
      bestFor: "Remote workers who want up to a year in Portugal without becoming resident.",
      requirement:
        "A separate consular checklist for a stay of up to one year. It can't be renewed, so pick the residence visa if you might stay longer.",
      sourceIds: ["vfs-remote-temp", "srs-legal-2022"],
    },
  ],

  recentChanges: [
    {
      text: "The income bar went up because the minimum wage rose to €920 a month for 2026 (from €870), so the four-times rule now means €3,680.",
      sourceIds: ["pt-min-wage-2026", "vfs-remote"],
    },
    {
      text: "Lei Orgânica 1/2026, in force from 19 May 2026, lengthened the residence needed for Portuguese nationality: 10 years for most nationalities and 7 for EU and CPLP citizens.",
      sourceIds: ["lo-1-2026", "europesimple-nationality"],
    },
  ],

  steps: [
    {
      when: "3–4 months before",
      title: "Choose residence or temporary stay",
      detail:
        "If there's any chance you'll stay longer than a year, go for the residence version: only that one leads to an AIMA permit and renewals.",
      sourceIds: ["aima-remote", "srs-legal-2022"],
    },
    {
      when: "3 months before",
      title: "Line up three months of income proof",
      detail:
        "Consulates look at your average over the last three months, so gather payslips or invoices and bank statements showing at least €3,680 a month. US checklists also ask for a tax residence certificate; UK ones for a P60 or tax return.",
      sourceIds: ["vfs-remote", "vfs-uk-remote"],
    },
    {
      when: "Within 90 days of applying",
      title: "Order your police certificate",
      detail:
        "Get the criminal record certificate from the country where you live (for example the FBI check in the US or ACRO in the UK), apostilled and issued no more than 90 days before you submit.",
      sourceIds: ["vfs-remote", "vfs-uk-remote"],
    },
    {
      when: "Application",
      title: "Submit at VFS or the consulate",
      detail:
        "Hand in the national visa form, photos, passport, travel insurance, your proof of remote work and income, and the police certificate. Pay the visa fee to the consulate; VFS adds its own service charge.",
      sourceIds: ["vfs-remote", "vfs-uk-remote", "govpt-visa-fee"],
    },
    {
      when: "Within 4 months of the visa",
      title: "Travel and apply to AIMA",
      detail:
        "The residence visa allows two entries over four months. Book your AIMA appointment within that window and deliver your residence permit application in person.",
      sourceIds: ["eportugal-visas", "aima-remote"],
    },
  ],

  documents: [
    { item: "National visa application form, signed, plus passport photos", sourceIds: ["vfs-remote"] },
    { item: "Passport with enough validity beyond the visa period", sourceIds: ["vfs-remote", "vfs-uk-remote"] },
    { item: "Employment contract, employer declaration, or freelance service contracts", sourceIds: ["vfs-remote"] },
    { item: "Payslips/invoices and bank statements for the last 3 months", sourceIds: ["vfs-remote", "vfs-uk-remote"] },
    { item: "Tax residence certificate or latest tax return (varies by consulate)", sourceIds: ["vfs-remote", "vfs-uk-remote"] },
    { item: "Police certificate, apostilled, issued within 90 days", sourceIds: ["vfs-remote", "vfs-uk-remote"] },
    { item: "Travel insurance covering medical care and repatriation", sourceIds: ["vfs-remote", "vfs-uk-remote"] },
    { item: "Signed statement about why Portugal and where you'll live", sourceIds: ["vfs-remote"] },
  ],

  costs: [
    { item: "Residence visa application", amount: "€90", note: "Paid to the consulate; check which payment methods it accepts.", sourceIds: ["govpt-visa-fee"] },
    { item: "VFS Global service fee", amount: "Set by VFS in your country", sourceIds: ["vfs-remote", "vfs-uk-remote"] },
    { item: "AIMA residence permit", amount: "See AIMA's fee table", sourceIds: ["aima-remote"] },
  ],
  costNote:
    "Police certificates, apostilles, translations and insurance cost different amounts in every country, so we don't estimate them.",

  tax: [
    {
      text: "Becoming resident usually means Portuguese tax residence. The old NHR scheme is closed to new arrivals; its successor IFICI (a 20% flat rate for up to 10 years) only covers qualifying research, innovation and highly skilled activities, so many remote workers won't qualify.",
      sourceIds: ["gcs-ifici"],
    },
  ],

  family: [
    {
      text: "Family reunification generally requires two years of residence first, but minor children, and a spouse who is the other parent of your minor child, can apply without waiting.",
      sourceIds: ["lei-61-2025", "europesimple-family"],
    },
  ],

  pitfalls: [
    {
      text: "Quoting last year's figure. Many sites still show the threshold based on the 2025 minimum wage of €870; for 2026 it's €3,680.",
      sourceIds: ["pt-min-wage-2026", "vfs-remote"],
    },
    {
      text: "Choosing the temporary-stay visa and then wanting to stay. It lasts up to one year and can't be renewed.",
      sourceIds: ["srs-legal-2022"],
    },
    {
      text: "A police certificate that's too old or missing its apostille on submission day.",
      sourceIds: ["vfs-remote", "vfs-uk-remote"],
    },
    {
      text: "Letting the four-month visa run out before your AIMA appointment.",
      sourceIds: ["eportugal-visas", "aima-remote"],
    },
  ],

  faqs: [
    {
      q: "How much income do I need for Portugal's D8 visa in 2026?",
      a: "An average of at least €3,680 a month over the last three months, which is four times Portugal's 2026 minimum wage of €920. Some consulates, such as VFS UK, also ask for a bank balance of at least €920.",
      sourceIds: ["vfs-remote", "vfs-uk-remote", "pt-min-wage-2026"],
    },
    {
      q: "What's the difference between the D8 residence visa and the temporary-stay visa?",
      a: "The residence visa leads to a two-year AIMA permit, renewable for three years at a time. The temporary-stay version allows up to one year and can't be renewed.",
      sourceIds: ["aima-remote", "srs-legal-2022"],
    },
    {
      q: "Is the D8 the same as the D9?",
      a: "Naming varies. Most people call the remote-work residence visa the D8, but VFS Global's UK checklist labels it D9. Use the checklist from the consulate where you apply.",
      sourceIds: ["vfs-uk-remote", "vfs-remote"],
    },
    {
      q: "Do digital nomads get Portugal's IFICI tax regime?",
      a: "Only if their work is a qualifying research, innovation or highly skilled activity. IFICI isn't a general scheme for remote workers.",
      sourceIds: ["gcs-ifici"],
    },
    {
      q: "Can the D8 lead to Portuguese citizenship?",
      a: "Possibly, in the long run: since 19 May 2026 nationality by residence needs 10 years of legal residence for most nationalities, or 7 for EU and Portuguese-speaking (CPLP) citizens.",
      sourceIds: ["lo-1-2026", "europesimple-nationality"],
    },
  ],

  sources: [
    { id: "vfs-remote", title: "Residency visa for remote work – \"Digital Nomads\" (USA checklist, 06.11.2025)", publisher: "VFS Global for the Consulates of Portugal in the USA", url: "https://www.vfsglobal.com/one-pager/portugal/usa/english/pdf/residency-visa-for-remote-work-digital-nomads-nov-25-national.pdf", official: true, accessed: ACCESSED },
    { id: "vfs-remote-temp", title: "Temporary stay visa for remote work (USA checklist)", publisher: "VFS Global for the Consulates of Portugal in the USA", url: "https://www.vfsglobal.com/one-pager/portugal/usa/english/pdf/temporary-stay-visa-for-remote-work-digital-nomads.pdf", official: true, accessed: ACCESSED },
    { id: "vfs-uk-remote", title: "Residence visa for professional activity done remotely — digital nomads (UK checklist)", publisher: "VFS Global for the Consulates of Portugal in the UK", url: "https://www.vfsglobal.com/one-pager/portugal/uk/english/pdf/D9-RESIDENCE-VISA-FOR-PROFESSIONAL-ACTIVITY-DONE-REMOTELY-DIGITAL-NOMADS.pdf", official: true, accessed: ACCESSED },
    { id: "aima-remote", title: "Residence permit for remote professional activity (\"digital nomads\")", publisher: "AIMA", url: "https://aima.gov.pt/pt/trabalhar/autorizacao-de-residencia-para-o-exercicio-de-atividade-profissional-prestada-de-forma-remota-com-visto-de-residencia-para-o-exe", official: true, accessed: ACCESSED },
    { id: "eportugal-visas", title: "Visas and permits to enter and live in Portugal", publisher: "ePortugal (Government of Portugal)", url: "https://eportugal.gov.pt/en/migrantes-viver-e-trabalhar-em-portugal/migrantes-vistos-e-autorizacoes-para-entrar-e-viver-em-portugal", official: true, accessed: ACCESSED },
    { id: "govpt-visa-fee", title: "Residence visa application fee", publisher: "gov.pt", url: "https://www2.gov.pt/en/servicos/pedir-um-visto-de-residencia-para-reagrupamento-familiar", official: true, accessed: ACCESSED },
    { id: "lo-1-2026", title: "Lei Orgânica n.º 1/2026 (nationality law amendment)", publisher: "Diário da República", url: "https://files.diariodarepublica.pt/1s/2026/05/09500/0000200020.pdf", official: true, accessed: ACCESSED },
    { id: "pt-min-wage-2026", title: "Minimum wage rises to €920 in 2026 (Decreto-Lei 139/2025)", publisher: "Sábado", url: "https://www.sabado.pt/dinheiro/amp/subida-do-salario-minimo-para-920-euros-em-2026-publicada-em-diario-da-republica", official: false, accessed: ACCESSED },
    { id: "srs-legal-2022", title: "Information note: Law 18/2022 (remote work visas)", publisher: "SRS Legal", url: "https://www.srslegal.pt/xms/files/Nota_Informativa_Imigracao_e_Golden_Visa_EN_06.09.2022.pdf", official: false, accessed: ACCESSED },
    { id: "europesimple-nationality", title: "Portugal's new nationality law: 7 or 10 years", publisher: "Europe Simple", url: "https://europesimple.com/portugal/en/news/2026-05-18-nationality-law-lo-1-2026/", official: false, accessed: ACCESSED },
    { id: "lei-61-2025", title: "Alterações à Lei de Estrangeiros (Lei 61/2025)", publisher: "Cuatrecasas", url: "https://www.cuatrecasas.com/pt/portugal/laboral-1/art/alteracoes-lei-estrangeiros", official: false, accessed: ACCESSED },
    { id: "europesimple-family", title: "Family reunification in Portugal", publisher: "Europe Simple", url: "https://europesimple.com/portugal/en/guides/family-reunification/", official: false, accessed: ACCESSED },
    { id: "gcs-ifici", title: "Portugal NHR 2.0 (IFICI): complete guide", publisher: "Global Citizen Solutions", url: "https://www.globalcitizensolutions.com/new-nhr/", official: false, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ keeps your D8 timeline straight: add the police certificate's 90-day limit, your four-month visa window, the AIMA appointment and permit renewal to the deadline agenda and calendar, and keep income proof and family documents in one place.",
  related: ["how-to-get-nif-portugal", "moving-from-us-to-portugal", "moving-from-uk-to-portugal", "fbi-background-check-apostille-for-visa"],
};
