import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-24";

export const movingAbroadWithKids: Guide = {
  slug: "moving-abroad-with-kids",
  status: "published",
  datePublished: "2026-10-24",
  fromCode: "INT",
  toCode: "INT",
  fromName: "any country",
  toName: "Moving with kids",
  kind: "topic",
  labels: { visas: "What changes when children come", costs: "Official fees" },

  title: "Moving Abroad With Kids: Passports, Consent & Documents (2026)",
  description:
    "Child passports, the other parent's consent, apostilled birth certificates and how visa income rules grow with each child — with US, UK and destination sources.",
  h1: "Moving abroad with kids: passports, consent and paperwork",

  summary: [
    {
      text: "Moving abroad with children adds three things to your checklist: a valid passport for each child, permission from everyone with parental responsibility, and proof of your relationship, usually a birth certificate. In the UK, taking a child abroad without the required permission is child abduction.",
      sourceIds: ["govuk-permission", "us-child-passport", "govuk-child-passport"],
    },
    {
      text: "Children also raise the money you must show for many visas. Spain's digital nomad visa adds 25% of the minimum wage for each family member after the first, and Portugal's passive-income route adds 30% per child.",
      sourceIds: ["uge-faq", "aima-subsistence"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "US passport, under 16", value: "Both parents apply in person, or DS-3053 consent", sourceIds: ["us-child-passport"] },
    { label: "US child passport fee", value: "$100 + $35 acceptance fee (book)", sourceIds: ["us-child-passport"] },
    { label: "UK child passport fee", value: "£66.50 online · £80 paper", sourceIds: ["govuk-child-passport"] },
    { label: "Child passport validity (US and UK)", value: "5 years", sourceIds: ["us-child-passport", "govuk-child-passport"] },
    { label: "UK apostille (paper)", value: "£45 per document", sourceIds: ["govuk-legalisation"] },
    { label: "Hague Child Abduction Convention", value: "Covers children under 16", sourceIds: ["hcch-1980"] },
  ],

  visaOptions: [
    {
      name: "Spain: digital nomad (telework) visa",
      bestFor: "Families moving on Spain's remote-work route.",
      requirement:
        "Income of 200% of the minimum wage for the main applicant, plus 75% for the first family member and 25% for each additional one. Family members with a residence authorisation may work in Spain.",
      sourceIds: ["uge-faq"],
    },
    {
      name: "Portugal: passive-income (D7) route",
      bestFor: "Families moving on pensions or savings.",
      requirement:
        "Means of subsistence based on the minimum wage: 100% for the first adult, 50% for each additional adult and 30% for each child.",
      sourceIds: ["aima-subsistence"],
    },
    {
      name: "Dubai: virtual work visa",
      bestFor: "Families moving with a remote worker.",
      requirement:
        "GDRFA says the visa holder can sponsor family members for the same period as their own residence.",
      sourceIds: ["gdrfa-virtual"],
    },
  ],

  steps: [
    {
      when: "3+ months before",
      title: "Check every child's passport",
      detail:
        "US and UK child passports last five years. A US passport for a child under 16 can't be renewed: each new one needs an in-person application.",
      sourceIds: ["us-child-passport", "govuk-child-passport"],
    },
    {
      when: "3+ months before",
      title: "Get consent from the other parent",
      detail:
        "In the UK you need permission from everyone with parental responsibility, or from a court. A letter from the person with parental responsibility, with their contact details and the trip details, is usually enough.",
      sourceIds: ["govuk-permission"],
    },
    {
      when: "If consent isn't given",
      title: "Apply to the court",
      detail:
        "Without the other parent's permission you need a court's permission to take the child abroad from the UK. For longer stays the court will want more information, such as the child's education abroad.",
      sourceIds: ["govuk-permission"],
    },
    {
      when: "2–3 months before",
      title: "Apostille birth certificates if your destination asks",
      detail:
        "UK birth certificates are apostilled on paper by the Legalisation Office (no e-Apostille), for £45 each; the standard service usually takes up to 25 working days plus postage.",
      sourceIds: ["govuk-legalisation"],
    },
    {
      when: "When applying for visas",
      title: "Add the children to your money calculation",
      detail:
        "Many residence routes scale the required income or savings with family size, so recalculate before you apply.",
      sourceIds: ["uge-faq", "aima-subsistence"],
    },
    {
      when: "Travel day",
      title: "Carry proof of your relationship",
      detail:
        "GOV.UK suggests carrying a birth or adoption certificate and, if your family name differs from your child's, a marriage or divorce certificate.",
      sourceIds: ["govuk-permission"],
    },
  ],

  documents: [
    { item: "Each child's passport (valid for the whole move)", sourceIds: ["us-child-passport", "govuk-child-passport"] },
    { item: "US: Form DS-11 in person, or DS-3053 notarised consent from the absent parent", sourceIds: ["us-child-passport"] },
    { item: "Birth or adoption certificate (proof of relationship)", sourceIds: ["govuk-permission", "us-child-passport"] },
    { item: "Signed consent letter from the other parent, with contact details", sourceIds: ["govuk-permission"] },
    { item: "Court order, if relevant (custody or permission to relocate)", sourceIds: ["govuk-permission", "us-child-passport"] },
    { item: "Marriage or divorce certificate if surnames differ", sourceIds: ["govuk-permission"] },
    { item: "Apostilled certificates, where your destination requires them", sourceIds: ["govuk-legalisation"] },
  ],

  costs: [
    { item: "US child passport book (under 16)", amount: "$100 + $35 acceptance fee", note: "Expedited service adds $60.", sourceIds: ["us-child-passport"] },
    { item: "UK child passport", amount: "£66.50 online / £80 paper", sourceIds: ["govuk-child-passport"] },
    { item: "UK apostille, paper", amount: "£45 per document", note: "Plus postage or courier.", sourceIds: ["govuk-legalisation"] },
  ],
  costNote:
    "School fees, translations and childcare vary too much by country and provider to estimate honestly.",

  family: [
    {
      text: "The 1980 Hague Child Abduction Convention aims to secure the prompt return of children wrongfully removed to or kept in another member country. Whether a removal is wrongful is judged under the law of the country where the child lived just before, and the Convention stops applying when the child turns 16.",
      sourceIds: ["hcch-1980"],
    },
    {
      text: "In the UK, if a child arrangements order says the child lives with you, you can take them abroad for up to 28 days without permission — unless another court order says otherwise.",
      sourceIds: ["govuk-permission"],
    },
  ],

  pitfalls: [
    {
      text: "Assuming the other parent's agreement is a formality. Without the required permission, taking a child abroad from the UK is child abduction.",
      sourceIds: ["govuk-permission"],
    },
    {
      text: "Letting a DS-3053 go stale. The US State Department wants it submitted within 90 days of notarisation.",
      sourceIds: ["us-child-passport"],
    },
    {
      text: "Leaving apostilles to the last minute. The UK paper service can take up to 25 working days, and birth certificates can't get an e-Apostille.",
      sourceIds: ["govuk-legalisation"],
    },
    {
      text: "Using single-person income figures. Visa thresholds in Spain and Portugal rise with each family member.",
      sourceIds: ["uge-faq", "aima-subsistence"],
    },
  ],

  faqs: [
    {
      q: "Do I need the other parent's permission to move abroad with my child?",
      a: "From the UK, yes: you need permission from everyone with parental responsibility, or a court's permission. Taking a child abroad without it is child abduction.",
      sourceIds: ["govuk-permission"],
    },
    {
      q: "How do I get a US passport for my child if one parent can't come?",
      a: "The absent parent signs a notarised Statement of Consent (Form DS-3053), which must be submitted within 90 days of notarisation. Sole-custody cases have their own document rules.",
      sourceIds: ["us-child-passport"],
    },
    {
      q: "How much is a child passport?",
      a: "In the US, $100 plus a $35 acceptance fee for a passport book. In the UK, £66.50 online or £80 on paper. Both last five years.",
      sourceIds: ["us-child-passport", "govuk-child-passport"],
    },
    {
      q: "How do I get a UK birth certificate apostilled?",
      a: "Through the FCDO Legalisation Office's paper service, at £45 per document. Birth certificates can't get an e-Apostille.",
      sourceIds: ["govuk-legalisation"],
    },
    {
      q: "Do children increase the income I need for a visa?",
      a: "Often, yes. Spain's telework visa adds 25% of the minimum wage per additional family member, and Portugal's passive-income route adds 30% per child.",
      sourceIds: ["uge-faq", "aima-subsistence"],
    },
  ],

  sources: [
    { id: "us-child-passport", title: "Apply for a child's passport under 16", publisher: "US Department of State", url: "https://travel.state.gov/en/passports/apply/child/under-16.html", official: true, accessed: ACCESSED },
    { id: "govuk-permission", title: "Get permission to take a child abroad", publisher: "GOV.UK", url: "https://www.gov.uk/permission-take-child-abroad", official: true, accessed: ACCESSED },
    { id: "govuk-child-passport", title: "Get a passport for your child", publisher: "GOV.UK", url: "https://www.gov.uk/get-a-child-passport", official: true, accessed: ACCESSED },
    { id: "govuk-legalisation", title: "Get your document legalised", publisher: "GOV.UK (FCDO Legalisation Office)", url: "https://www.gov.uk/get-document-legalised", official: true, accessed: ACCESSED },
    { id: "hcch-1980", title: "Convention of 25 October 1980 on the Civil Aspects of International Child Abduction", publisher: "Hague Conference on Private International Law (HCCH)", url: "https://www.hcch.net/en/instruments/conventions/full-text/?cid=24", official: true, accessed: ACCESSED },
    { id: "uge-faq", title: "Digital nomads: frequently asked questions (English)", publisher: "Ministry of Inclusion, Social Security and Migration (UGE)", url: "https://bibliovirtual.inclusion.gob.es/documents/d/unidadgrandesempresas/digital-nomad-faqs-english", official: true, accessed: "2026-10-23" },
    { id: "aima-subsistence", title: "Meios de subsistência (means of subsistence)", publisher: "AIMA", url: "https://aima.gov.pt/pt/temas-transversais/meios-de-subsistencia", official: true, accessed: "2026-10-19" },
    { id: "gdrfa-virtual", title: "Visa issuance (Virtual Work)", publisher: "General Directorate of Residency and Foreigners Affairs (GDRFA) Dubai", url: "https://www.gdrfad.gov.ae/en/node/13898", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ is built for family moves: keep every child's passport, birth certificate and consent letter in family documents, put passport expiries and apostille deadlines in the deadline agenda and calendar, and plan the extra costs in your budget.",
  related: ["moving-abroad-with-a-dog-or-cat", "spain-digital-nomad-visa", "moving-from-us-to-portugal", "dubai-remote-work-visa"],
};
