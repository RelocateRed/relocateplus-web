import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-31";

export const portugalAimaPermit: Guide = {
  slug: "portugal-aima-residence-permit",
  status: "published",
  datePublished: "2026-10-31",
  fromCode: "INT",
  toCode: "PT",
  fromName: "any country",
  toName: "Portugal AIMA residence permit",
  kind: "topic",
  labels: { visas: "How the appointment works", costs: "AIMA fees" },

  title: "AIMA Residence Permit in Portugal 2026: Appointment, Documents, Fees",
  description:
    "Turn your Portuguese residence visa into a residence permit at AIMA: the 4-month window, booking if your visa has no appointment, documents, fees and validity.",
  h1: "Getting your AIMA residence permit in Portugal after your D visa (2026)",

  summary: [
    {
      text: "A Portuguese residence visa (such as the D7 or D8) is valid for four months and two entries. Inside that window you apply in person at AIMA, Portugal's migration agency, for your residence permit. The first temporary permit lasts two years and is renewable for successive three-year periods.",
      sourceIds: ["mne-visa-types", "aima-general", "aima-remote"],
    },
    {
      text: "Normally your visa sticker includes your AIMA appointment details. If it doesn't, you book after arriving through AIMA's contact form (contactenos.aima.gov.pt) under \"Residence Permit with Consular Visa (Non-CPLP)\", with your passport and visa numbers and copies of both.",
      sourceIds: ["mne-no-appointment", "aima-news"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Residence visa", value: "Valid 4 months, 2 entries", sourceIds: ["mne-visa-types"] },
    { label: "Where you apply", value: "In person at any AIMA store, by appointment", sourceIds: ["aima-general"] },
    { label: "No appointment on your visa?", value: "Book via contactenos.aima.gov.pt", sourceIds: ["mne-no-appointment", "aima-news"] },
    { label: "First permit", value: "2 years from issue", sourceIds: ["aima-general", "aima-remote"] },
    { label: "Renewals", value: "Successive 3-year periods", sourceIds: ["aima-general", "aima-remote"] },
    { label: "Digital-channel fees", value: "25% lower than in person", sourceIds: ["aima-fees"] },
  ],

  visaOptions: [
    {
      name: "Appointment printed on your visa",
      bestFor: "Most people: the consulate schedules your AIMA appointment when it issues the visa.",
      requirement:
        "Your visa sticker normally carries the appointment details link. Attend on that date with all your documents and the signed application form.",
      sourceIds: ["mne-no-appointment", "aima-general"],
    },
    {
      name: "Booking through AIMA's contact form",
      bestFor: "People whose visa was issued without an AIMA appointment.",
      requirement:
        "After arriving, go to contactenos.aima.gov.pt, choose Subject \"Residence Permit\" and Subtype \"Residence Permit with Consular Visa (Non-CPLP)\", give your passport and visa numbers, attach copies of both and use your own email address.",
      notes: ["Highly qualified professionals choose \"Residence Permit with Consular Visa (Highly Skilled)\" instead."],
      sourceIds: ["mne-no-appointment", "aima-news"],
    },
  ],

  steps: [
    {
      when: "When your visa is issued",
      title: "Check your visa sticker for the appointment",
      detail:
        "The appointment details are normally printed on the sticker. If there were no AIMA slots, the visa is issued without them and you book after arriving.",
      sourceIds: ["mne-no-appointment"],
    },
    {
      when: "Within the 4-month visa",
      title: "Enter Portugal and book if you need to",
      detail:
        "The visa allows two entries over four months. Without an appointment, request one through contactenos.aima.gov.pt straight away, with your passport and visa numbers and copies.",
      sourceIds: ["mne-visa-types", "mne-no-appointment", "aima-news"],
    },
    {
      when: "Before the appointment",
      title: "Prepare proof of where you live",
      detail:
        "You'll sign a declaration of your address and how you live there. Owners bring the land registry certificate (or its access code); tenants bring a declaration from the landlord or host.",
      sourceIds: ["aima-general", "aima-remote"],
    },
    {
      when: "Before the appointment",
      title: "Gather your documents",
      detail:
        "Passport, valid residence visa, proof of means of subsistence, health insurance or proof of National Health Service cover, and tax and social security registration if they apply. D8 holders also bring the foreign employer's or client's sworn declaration.",
      sourceIds: ["aima-general", "aima-remote"],
    },
    {
      when: "At the appointment",
      title: "Apply in person at AIMA",
      detail:
        "Hand in the signed application form (Model 1) with your documents at any AIMA store, or have your legal representative sign and submit it.",
      sourceIds: ["aima-general"],
    },
    {
      when: "Before it expires",
      title: "Renew every three years",
      detail:
        "The first temporary permit is valid for two years from issue; each renewal is for three more years.",
      sourceIds: ["aima-general", "aima-remote"],
    },
  ],

  documents: [
    { item: "Valid passport", sourceIds: ["aima-general", "aima-remote"] },
    { item: "Valid residence visa", sourceIds: ["aima-general", "aima-remote"] },
    { item: "Signed application form (Model 1)", sourceIds: ["aima-general", "aima-remote"] },
    { item: "Proof of means of subsistence", sourceIds: ["aima-general"] },
    { item: "Signed declaration of your address, plus land registry certificate (owners) or landlord's declaration (tenants)", sourceIds: ["aima-general", "aima-remote"] },
    { item: "Health insurance, or proof you're covered by the National Health Service", sourceIds: ["aima-general"] },
    { item: "Proof of tax and social security registration, if applicable", sourceIds: ["aima-general"] },
    { item: "D8 only: sworn declaration from your foreign employer or client", sourceIds: ["aima-remote"] },
    { item: "Proof of family relationship, if family members apply", sourceIds: ["aima-general"] },
  ],

  costs: [
    { item: "Grant or renewal of a temporary residence permit (art. 75(1))", amount: "€114.30", note: "€85.80 through a digital channel.", sourceIds: ["aima-fees"] },
    { item: "Reception and analysis, for permits such as the D8 remote-work permit", amount: "€133.00", note: "€99.80 through a digital channel.", sourceIds: ["aima-fees"] },
  ],
  costNote:
    "Amounts from AIMA's official fee table (Portaria 307/2023). Which lines apply depends on your permit type, so check the table for your case.",

  family: [
    {
      text: "Where a family relationship is part of the application, bring documents that prove it.",
      sourceIds: ["aima-general"],
    },
  ],

  pitfalls: [
    {
      text: "Letting the four-month visa run out. The permit application has to happen while the visa is valid.",
      sourceIds: ["mne-visa-types"],
    },
    {
      text: "Using a relative's or agent's email on the contact form. AIMA communicates by email and asks for your own address.",
      sourceIds: ["mne-no-appointment"],
    },
    {
      text: "Arriving without proof of your address. AIMA wants a signed declaration plus the landlord's declaration or land registry certificate.",
      sourceIds: ["aima-general"],
    },
    {
      text: "Forgetting renewals. The first permit lasts only two years.",
      sourceIds: ["aima-general"],
    },
  ],

  faqs: [
    {
      q: "How long is a Portuguese residence visa valid?",
      a: "Four months, with two entries. You apply for your residence permit with AIMA within that period.",
      sourceIds: ["mne-visa-types"],
    },
    {
      q: "My visa has no AIMA appointment. What do I do?",
      a: "After arriving, use AIMA's contact form at contactenos.aima.gov.pt: choose \"Residence Permit\" and then \"Residence Permit with Consular Visa (Non-CPLP)\", enter your passport and visa numbers and attach copies of both.",
      sourceIds: ["mne-no-appointment", "aima-news"],
    },
    {
      q: "How long is the AIMA residence permit valid?",
      a: "The first temporary residence permit is valid for two years from the date it's issued, and it can be renewed for successive three-year periods.",
      sourceIds: ["aima-general", "aima-remote"],
    },
    {
      q: "How much does the AIMA residence permit cost?",
      a: "AIMA's fee table lists €114.30 to grant or renew a temporary permit, plus a €133.00 reception and analysis fee for many permit types such as the D8. Applications through a digital channel are 25% cheaper.",
      sourceIds: ["aima-fees"],
    },
  ],

  sources: [
    { id: "aima-general", title: "Autorização de Residência (Regime e Requisitos Gerais) – Art.º 77.º, n.º 1", publisher: "AIMA (Portuguese migration agency)", url: "https://aima.gov.pt/pt/viver/autorizacao-de-residencia-regime-e-requisitos-gerais-art-o-77-o-n-o-1", official: true, accessed: ACCESSED },
    { id: "aima-remote", title: "Residence permit for remote work (digital nomads) – Art. 88.º, n.º 1", publisher: "AIMA (Portuguese migration agency)", url: "https://aima.gov.pt/pt/trabalhar/autorizacao-de-residencia-para-o-exercicio-de-atividade-profissional-prestada-de-forma-remota-com-visto-de-residencia-para-o-exe", official: true, accessed: ACCESSED },
    { id: "aima-news", title: "Agendamento Online para Autorização de Residência com Visto Consular", publisher: "AIMA (Portuguese migration agency)", url: "https://aima.gov.pt/pt/noticias/agendamento-de-autorizacao-de-residencia-para-quem-dispoe-de-visto-consular", official: true, accessed: ACCESSED },
    { id: "aima-fees", title: "Tabela de taxas e demais encargos (Portaria n.º 307/2023)", publisher: "AIMA (Portuguese migration agency)", url: "https://aima.gov.pt/documents/tabela-de-taxas-e-demais-encargos-a-cobrar-pelos-procedimentos-administrativos.pdf", official: true, accessed: ACCESSED },
    { id: "mne-no-appointment", title: "Residence visa issued without appointment at AIMA (3 Dec 2025)", publisher: "Ministry of Foreign Affairs (Portugal), Visa portal", url: "https://vistos.mne.gov.pt/en/highlights/residence-visa-issued-without-appointment-at-aima", official: true, accessed: ACCESSED },
    { id: "mne-visa-types", title: "Type of visa – national visas", publisher: "Ministry of Foreign Affairs (Portugal), Visa portal", url: "https://vistos.mne.gov.pt/en/national-visas/general-information/type-of-visa", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ counts down your four-month visa window, puts your AIMA appointment and permit renewal in your agenda, and keeps your visa, address declaration and insurance in your document vault.",
  related: ["portugal-d8-digital-nomad-visa", "how-to-get-nif-portugal", "moving-from-us-to-portugal", "moving-from-uk-to-portugal"],
};
