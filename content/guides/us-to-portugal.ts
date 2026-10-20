import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-18";

export const usToPortugal: Guide = {
  slug: "moving-from-us-to-portugal",
  status: "published",
  datePublished: "2026-10-18",
  fromCode: "US",
  toCode: "PT",
  fromName: "the US",
  toName: "Portugal",
  kind: "route",

  title: "Moving from the US to Portugal: 2026 Checklist & Visa Guide",
  description:
    "Visas (D7, digital nomad), 2026 income thresholds, documents, timeline, fees and tax basics for Americans moving to Portugal — with official sources.",
  h1: "Moving from the US to Portugal: the complete 2026 checklist",

  summary: [
    {
      text: "Americans moving to Portugal apply in the US, through VFS Global, for a residence visa — most commonly the passive-income visa (often called the D7) or the remote-work visa (often called the D8). In 2026 the remote-work visa requires average monthly income of at least €3,680, four times Portugal's €920 minimum wage.",
      sourceIds: ["vfs-remote", "pt-min-wage-2026"],
    },
    {
      text: "The visa is valid for four months and two entries; once in Portugal you apply to AIMA for your residence permit. Since 19 May 2026, citizenship requires 10 years of legal residence for US citizens, up from 5.",
      sourceIds: ["eportugal-visas", "aima-remote", "lo-1-2026"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Where you apply", value: "VFS Global centers in the US, for the Portuguese consulates", sourceIds: ["vfs-remote", "vfs-passive"] },
    { label: "Portugal minimum wage (2026)", value: "€920 per month", sourceIds: ["pt-min-wage-2026"] },
    { label: "Remote-work visa income", value: "≥ 4× minimum wage = €3,680/month (3-month average)", sourceIds: ["vfs-remote", "pt-min-wage-2026"] },
    { label: "Passive-income visa savings (1 adult)", value: "12× minimum wage = €11,040", sourceIds: ["vfs-passive", "pt-min-wage-2026"] },
    { label: "Residence visa validity", value: "4 months, 2 entries", sourceIds: ["eportugal-visas"] },
    { label: "Citizenship by residence", value: "10 years (law in force since 19 May 2026)", sourceIds: ["lo-1-2026", "europesimple-nationality"] },
  ],

  visaOptions: [
    {
      name: "Passive-income / retirement residence visa (\"D7\")",
      bestFor: "Retirees and people living on pensions, rental income, dividends or other passive income.",
      requirement:
        "Proof of resources for 12 months under Portaria 1563/2007: for one adult, 12 minimum wages in savings (€11,040 at the 2026 rate), plus 50% for each additional adult and 30% for each child under 18. Pension or investment income must be shown as available through a Portuguese bank account.",
      notes: [
        "VFS says the savings amount can be halved if your accommodation is already secured.",
        "You need proof of accommodation in Portugal for at least 12 months.",
      ],
      sourceIds: ["vfs-passive", "pt-min-wage-2026", "aima-subsistence"],
    },
    {
      name: "Remote-work residence visa (\"D8\" / digital nomad)",
      bestFor: "Employees or freelancers working remotely for clients or employers outside Portugal.",
      requirement:
        "Average monthly income over the last three months of at least four times the Portuguese minimum wage (€3,680 in 2026), plus an employment contract, employer declaration or proof of freelance services, and a US tax residence certificate.",
      notes: [
        "There is also a temporary-stay version (up to one year, not renewable) if you don't want residency.",
        "After arrival, the residence permit is valid for two years and renewable for three-year periods.",
      ],
      sourceIds: ["vfs-remote", "vfs-remote-temp", "aima-remote", "srs-legal-2022"],
    },
    {
      name: "Other routes",
      bestFor: "Job offers, study, entrepreneurs and investors.",
      requirement:
        "Portugal also issues residence visas for work, study and business. These have their own checklists on the VFS USA site; this guide focuses on the two routes most Americans use.",
      sourceIds: ["vfs-passive"],
    },
  ],

  recentChanges: [
    {
      text: "Citizenship now takes longer. Lei Orgânica 1/2026, in force since 19 May 2026, raised the residence requirement to 10 years for most nationalities, including Americans (7 years for EU and Portuguese-speaking CPLP citizens). Only applications already pending keep the old 5-year rule.",
      sourceIds: ["lo-1-2026", "europesimple-nationality"],
    },
    {
      text: "Family reunification changed in October 2025 (Lei 61/2025). The general rule is now two years of residence before you can bring family over, but minor children and a spouse who is the other parent of your minor child are exempt from that wait.",
      sourceIds: ["lei-61-2025", "europesimple-family"],
    },
    {
      text: "The old NHR tax regime is closed to newcomers. Its successor, IFICI, gives a 20% flat rate only to people in qualifying research, innovation and highly skilled roles — most retirees and remote workers won't qualify.",
      sourceIds: ["gcs-ifici"],
    },
  ],

  steps: [
    {
      when: "6+ months before",
      title: "Pick your visa and check the money",
      detail:
        "Decide between the passive-income and remote-work routes and check your numbers against the 2026 minimum wage of €920. Remote work needs €3,680/month averaged over three months; passive income needs 12 minimum wages in savings per adult (plus family percentages).",
      sourceIds: ["vfs-remote", "vfs-passive", "pt-min-wage-2026"],
    },
    {
      when: "4–6 months before",
      title: "Order your FBI background check",
      detail:
        "VFS requires a police clearance certificate issued within 90 days of submitting, apostilled under the Hague Convention, and it must be an FBI check if you have lived in the US for over a year. Time the request so it is still under 90 days old on your appointment date.",
      sourceIds: ["vfs-remote", "vfs-passive"],
    },
    {
      when: "3–5 months before",
      title: "Get a Portuguese bank account and housing",
      detail:
        "For the passive-income visa, VFS asks for proof that your pension or income is available through a Portuguese bank account, and proof of accommodation for at least 12 months. For the remote-work visa you describe your intended accommodation in a signed personal statement.",
      sourceIds: ["vfs-passive", "vfs-remote"],
    },
    {
      when: "3–4 months before",
      title: "Book and attend your VFS appointment",
      detail:
        "Bring the signed national visa form, two photos, a passport valid 3+ months beyond your stay, proof of US address, travel insurance covering medical care and repatriation, and the category documents. The consular visa fee is paid by money order or cashier's check to the consulate; VFS charges its service fee separately by card.",
      sourceIds: ["vfs-remote", "vfs-passive"],
    },
    {
      when: "Visa approved",
      title: "Enter Portugal within the visa's validity",
      detail:
        "A residence visa is valid for four months and two entries, and lets you apply for your residence permit from inside Portugal.",
      sourceIds: ["eportugal-visas"],
    },
    {
      when: "After arrival",
      title: "Apply to AIMA for your residence permit",
      detail:
        "Applications are made by appointment and delivered in person at an AIMA office with the signed form, valid passport and visa, plus declarations about your work or income and your address. For remote workers, the permit is valid for two years and renewable for three-year periods.",
      sourceIds: ["aima-remote"],
    },
    {
      when: "First year",
      title: "Sort out taxes on both sides",
      detail:
        "As a US citizen you keep filing US returns while abroad. If you have more than $10,000 across foreign accounts at any point in the year, you also file an FBAR. Get advice on Portuguese tax residence before you arrive.",
      sourceIds: ["irs-abroad", "fincen-fbar"],
    },
  ],

  documents: [
    { item: "Signed national visa application form + two passport photos", sourceIds: ["vfs-remote", "vfs-passive"] },
    { item: "Passport valid at least 3 months beyond your intended stay", note: "Plus a notarized color copy of the bio page for the remote-work checklist.", sourceIds: ["vfs-remote-temp", "vfs-passive"] },
    { item: "FBI background check, apostilled, issued within 90 days of submission", sourceIds: ["vfs-remote", "vfs-passive"] },
    { item: "Travel insurance covering medical costs, urgent care and repatriation", sourceIds: ["vfs-remote", "vfs-passive"] },
    { item: "Proof of US address (lease and/or driver's license)", sourceIds: ["vfs-remote", "vfs-passive"] },
    { item: "Signed personal statement: why Portugal, where you'll live, type of accommodation", sourceIds: ["vfs-remote", "vfs-passive"] },
    { item: "Proof of accommodation in Portugal for 12+ months (passive-income visa)", sourceIds: ["vfs-passive"] },
    { item: "Proof of pension/passive income and a Portuguese bank account (passive-income visa)", sourceIds: ["vfs-passive"] },
    { item: "Employment contract or employer declaration, or freelance contracts (remote-work visa)", sourceIds: ["vfs-remote"] },
    { item: "Last three months of income proof and a US tax residence certificate (remote-work visa)", sourceIds: ["vfs-remote"] },
  ],

  costs: [
    { item: "Residence visa application fee", amount: "€90", note: "Official gov.pt fee for residence visa applications; US consulates set the dollar amount and take money orders or cashier's checks.", sourceIds: ["govpt-visa-fee", "vfs-remote"] },
    { item: "VFS Global service fee", amount: "Varies", note: "Paid by card at the VFS center.", sourceIds: ["vfs-remote"] },
    { item: "AIMA residence permit fee", amount: "See AIMA fee table", note: "AIMA publishes its fees in a separate table that changes over time.", sourceIds: ["aima-remote"] },
  ],
  costNote:
    "We only list official fees. Rent, flights, shipping and insurance vary too much to quote honestly — track your own numbers in a budget.",

  tax: [
    {
      text: "US citizens are taxed on worldwide income wherever they live, so you keep filing US returns from Portugal. For 2026 the Foreign Earned Income Exclusion is up to $132,900 of earned income; it does not cover pensions, dividends or other passive income.",
      sourceIds: ["irs-abroad", "irs-notice-2026-25"],
    },
    {
      text: "If the combined balance of your foreign accounts exceeds $10,000 at any time during the year, you must file an FBAR (FinCEN Form 114).",
      sourceIds: ["fincen-fbar"],
    },
    {
      text: "Portugal's NHR regime is closed to new residents. Its replacement, IFICI, applies a 20% flat rate to income from qualifying activities (research, innovation, certain highly qualified roles) for up to 10 years if you weren't a Portuguese tax resident in the previous five years; you must register by 15 January of the year after you become resident.",
      sourceIds: ["gcs-ifici"],
    },
  ],

  family: [
    {
      text: "For the passive-income route, the required resources go up by 50% of the base amount for each additional adult and 30% for each child under 18.",
      sourceIds: ["vfs-passive", "aima-subsistence"],
    },
    {
      text: "If you bring family later through reunification, the general wait is two years of residence. Minor children and a spouse who is the other parent of your minor child can apply without waiting; a childless spouse falls under the general rule unless your permit type is exempt.",
      sourceIds: ["lei-61-2025", "europesimple-family"],
    },
  ],

  pitfalls: [
    {
      text: "Letting the FBI check expire. VFS wants it issued within 90 days of your submission date, and apostilled — a check that's 100 days old means reordering.",
      sourceIds: ["vfs-remote"],
    },
    {
      text: "Using old income figures. Thresholds are tied to the minimum wage, which rose from €870 in 2025 to €920 in 2026; many websites still show the old numbers.",
      sourceIds: ["pt-min-wage-2026", "aima-subsistence"],
    },
    {
      text: "Assuming five years to a passport. Under the 2026 nationality law it's 10 years for Americans, and only applications already pending kept the old rules.",
      sourceIds: ["lo-1-2026", "europesimple-nationality"],
    },
    {
      text: "Missing the visa window. The residence visa lasts four months; plan your flight and AIMA appointment inside it.",
      sourceIds: ["eportugal-visas"],
    },
  ],

  faqs: [
    {
      q: "How much money do I need to move to Portugal from the US in 2026?",
      a: "It depends on the visa. The remote-work (digital nomad) visa requires average monthly income of at least €3,680 — four times the 2026 minimum wage of €920. The passive-income (D7) visa asks one adult to show 12 minimum wages in savings (€11,040), plus 50% for each extra adult and 30% per child.",
      sourceIds: ["vfs-remote", "vfs-passive", "pt-min-wage-2026"],
    },
    {
      q: "Where do Americans apply for a Portuguese residence visa?",
      a: "At VFS Global visa application centers in the US, which receive applications on behalf of the Portuguese consulates. You pay the consular visa fee by money order or cashier's check and the VFS service fee by card.",
      sourceIds: ["vfs-remote", "vfs-passive"],
    },
    {
      q: "Can I work remotely on Portugal's D7 visa?",
      a: "The D7 is built for pensions and passive income. If your income comes from remote work for employers or clients outside Portugal, the remote-work (D8) visa is the category designed for that, with its own income threshold of four times the minimum wage.",
      sourceIds: ["vfs-passive", "vfs-remote"],
    },
    {
      q: "How long until I can get Portuguese citizenship?",
      a: "Ten years of legal residence for US citizens, under Lei Orgânica 1/2026 in force since 19 May 2026. You also need to show knowledge of Portuguese language and culture. Applications already pending before that date keep the old rules.",
      sourceIds: ["lo-1-2026", "europesimple-nationality"],
    },
    {
      q: "Do I still pay US taxes if I live in Portugal?",
      a: "Yes. US citizens file US returns wherever they live. You may be able to exclude up to $132,900 of earned income in 2026 with the Foreign Earned Income Exclusion, and you must file an FBAR if your foreign accounts exceed $10,000 combined.",
      sourceIds: ["irs-abroad", "irs-notice-2026-25", "fincen-fbar"],
    },
    {
      q: "Is the NHR tax regime still available?",
      a: "No, not for new residents. The replacement, IFICI, offers a 20% flat rate on income from qualifying research, innovation and highly qualified activities, for up to 10 years, and requires registration by 15 January of the year after you become tax resident.",
      sourceIds: ["gcs-ifici"],
    },
  ],

  sources: [
    { id: "vfs-remote", title: "Residency visa for remote work – \"Digital Nomads\" (USA checklist, 06.11.2025)", publisher: "VFS Global for the Consulates of Portugal in the USA", url: "https://www.vfsglobal.com/one-pager/portugal/usa/english/pdf/residency-visa-for-remote-work-digital-nomads-nov-25-national.pdf", official: true, accessed: ACCESSED },
    { id: "vfs-remote-temp", title: "Temporary stay visa for remote work (USA checklist)", publisher: "VFS Global for the Consulates of Portugal in the USA", url: "https://www.vfsglobal.com/one-pager/portugal/usa/english/pdf/temporary-stay-visa-for-remote-work-digital-nomads.pdf", official: true, accessed: ACCESSED },
    { id: "vfs-passive", title: "Residency visa for pensioners, religious purposes or own income (USA checklist, 06.11.2025)", publisher: "VFS Global for the Consulates of Portugal in the USA", url: "https://www.vfsglobal.com/one-pager/portugal/usa/english/pdf/RESIDENCY-VISA-FOR-ESTABLISHMENT-OF-RESIDENCE-FOR-PENSIONERS-RELIGIOUS-PURPOSES-nov-25-national.pdf", official: true, accessed: ACCESSED },
    { id: "pt-min-wage-2026", title: "Minimum wage rises to €920 in 2026 (Decreto-Lei 139/2025)", publisher: "Sábado", url: "https://www.sabado.pt/dinheiro/amp/subida-do-salario-minimo-para-920-euros-em-2026-publicada-em-diario-da-republica", official: false, accessed: ACCESSED },
    { id: "aima-subsistence", title: "Meios de subsistência (means of subsistence)", publisher: "AIMA", url: "https://aima.gov.pt/pt/temas-transversais/meios-de-subsistencia", official: true, accessed: ACCESSED },
    { id: "aima-remote", title: "Residence permit for remote professional activity (\"digital nomads\")", publisher: "AIMA", url: "https://aima.gov.pt/pt/trabalhar/autorizacao-de-residencia-para-o-exercicio-de-atividade-profissional-prestada-de-forma-remota-com-visto-de-residencia-para-o-exe", official: true, accessed: ACCESSED },
    { id: "eportugal-visas", title: "Visas and permits to enter and live in Portugal", publisher: "ePortugal (Government of Portugal)", url: "https://eportugal.gov.pt/en/migrantes-viver-e-trabalhar-em-portugal/migrantes-vistos-e-autorizacoes-para-entrar-e-viver-em-portugal", official: true, accessed: ACCESSED },
    { id: "govpt-visa-fee", title: "Apply for a residence visa for family reunification (fee schedule)", publisher: "gov.pt", url: "https://www2.gov.pt/en/servicos/pedir-um-visto-de-residencia-para-reagrupamento-familiar", official: true, accessed: ACCESSED },
    { id: "lo-1-2026", title: "Lei Orgânica n.º 1/2026 (nationality law amendment)", publisher: "Diário da República", url: "https://files.diariodarepublica.pt/1s/2026/05/09500/0000200020.pdf", official: true, accessed: ACCESSED },
    { id: "europesimple-nationality", title: "Portugal's new nationality law: 7 or 10 years", publisher: "Europe Simple", url: "https://europesimple.com/portugal/en/news/2026-05-18-nationality-law-lo-1-2026/", official: false, accessed: ACCESSED },
    { id: "lei-61-2025", title: "Alterações à Lei de Estrangeiros (Lei 61/2025)", publisher: "Cuatrecasas", url: "https://www.cuatrecasas.com/pt/portugal/laboral-1/art/alteracoes-lei-estrangeiros", official: false, accessed: ACCESSED },
    { id: "europesimple-family", title: "Family reunification in Portugal", publisher: "Europe Simple", url: "https://europesimple.com/portugal/en/guides/family-reunification/", official: false, accessed: ACCESSED },
    { id: "srs-legal-2022", title: "Information note: Law 18/2022 (remote work visas)", publisher: "SRS Legal", url: "https://www.srslegal.pt/xms/files/Nota_Informativa_Imigracao_e_Golden_Visa_EN_06.09.2022.pdf", official: false, accessed: ACCESSED },
    { id: "gcs-ifici", title: "Portugal NHR 2.0 (IFICI): complete guide", publisher: "Global Citizen Solutions", url: "https://www.globalcitizensolutions.com/new-nhr/", official: false, accessed: ACCESSED },
    { id: "irs-abroad", title: "U.S. citizens and resident aliens abroad", publisher: "IRS", url: "https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad", official: true, accessed: ACCESSED },
    { id: "irs-notice-2026-25", title: "Notice 2026-25 (2026 foreign earned income exclusion: $132,900)", publisher: "IRS", url: "https://www.irs.gov/pub/irs-drop/n-26-25.pdf", official: true, accessed: ACCESSED },
    { id: "fincen-fbar", title: "Report of Foreign Bank and Financial Accounts (FBAR)", publisher: "FinCEN", url: "https://www.fincen.gov/report-foreign-bank-and-financial-accounts", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ turns this checklist into a personal US → Portugal roadmap. Add your own dates — like the day your FBI check turns 90 days old or your AIMA appointment — to the deadline agenda and your calendar, track documents for every family member and keep your moving budget in one place.",
  related: ["moving-from-us-to-spain", "moving-from-uk-to-spain", "fbi-background-check-apostille-for-visa"],
};
