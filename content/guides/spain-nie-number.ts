import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-27";

export const spainNieNumber: Guide = {
  slug: "how-to-get-nie-number-spain",
  status: "published",
  datePublished: "2026-10-27",
  fromCode: "INT",
  toCode: "ES",
  fromName: "any country",
  toName: "Spain NIE number",
  kind: "topic",
  labels: { visas: "Where you can apply", costs: "Official fees" },

  title: "How to Get an NIE Number in Spain (2026): Forms, Fee & Timing",
  description:
    "Get your Spanish NIE from abroad or in Spain: form EX-15, the €9.84 fee (790 code 012), documents, appointments, processing times and what the NIE doesn't do.",
  h1: "How to get an NIE number in Spain: the 2026 step-by-step",

  summary: [
    {
      text: "The NIE (Número de Identidad de Extranjero) is Spain's personal, unique number for foreigners who deal with Spain for economic, professional or social reasons. You apply with form EX-15 and pay a €9.84 fee with form 790 code 012, either at a police or foreigners' office in Spain or at the Spanish consulate where you live.",
      sourceIds: ["interior-nie", "one-nie"],
    },
    {
      text: "In Spain, processing takes up to five days once registered. Through a consulate it's normally within two weeks and the number is emailed to you. An NIE is only an identification number: it doesn't let you live in Spain.",
      sourceIds: ["one-nie", "es-manchester-nie"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "What it is", value: "Personal, unique ID number for foreigners", sourceIds: ["interior-nie"] },
    { label: "Application form", value: "EX-15", sourceIds: ["one-nie", "es-manchester-nie"] },
    { label: "Fee in Spain", value: "€9.84 (form 790, code 012)", sourceIds: ["one-nie"] },
    { label: "Processing in Spain", value: "Up to 5 days after registration", sourceIds: ["one-nie"] },
    { label: "Processing via consulate", value: "Normally within 2 weeks, sent by email", sourceIds: ["es-manchester-nie"] },
    { label: "Right to live in Spain?", value: "No — you need a visa or residence permit", sourceIds: ["es-manchester-nie"] },
  ],

  visaOptions: [
    {
      name: "At a Spanish consulate abroad",
      bestFor: "People who need the number before they arrive, for example to buy property or sign contracts.",
      requirement:
        "Apply at the consulate for the area where you live, in person or through an accredited representative. Bring form EX-15 stating your reasons, your passport and a copy, proof that you live in the consular area and the paid fee.",
      notes: [
        "Spain's Manchester consulate charges £8.45; other consulates set their own local amount.",
        "The number is assigned by Spain's immigration police, so the consulate can't speed it up.",
      ],
      sourceIds: ["es-manchester-nie", "interior-nie"],
    },
    {
      name: "In Spain, at a police or foreigners' office",
      bestFor: "People already legally in Spain.",
      requirement:
        "Book an immigration appointment (cita previa), then hand in form EX-15 in duplicate, the paid 790 code 012 fee and your passport. You must not be in Spain irregularly, and you must explain why you need the number.",
      notes: ["A representative with a power of attorney can apply for you."],
      sourceIds: ["one-nie", "interior-nie"],
    },
    {
      name: "Assigned automatically with some visas",
      bestFor: "People applying for a qualifying visa.",
      requirement:
        "Spain's police assign the NIE automatically in certain visa procedures, so many visa holders don't need to apply separately.",
      sourceIds: ["interior-docs"],
    },
  ],

  steps: [
    {
      when: "Before you apply",
      title: "Check whether you already have one",
      detail:
        "If you're applying for a qualifying long-stay visa, the NIE may be assigned automatically as part of the visa procedure.",
      sourceIds: ["interior-docs"],
    },
    {
      when: "Step 1",
      title: "Fill in form EX-15",
      detail:
        "Complete and sign the EX-15 application, and state the economic, professional or social reason you need an NIE. Consulates prefer it filled in online and printed.",
      sourceIds: ["one-nie", "es-manchester-nie", "interior-nie"],
    },
    {
      when: "Step 2",
      title: "Pay the fee with form 790 code 012",
      detail:
        "In Spain, select \"Assignment of Foreigner Identity Number (NIE) at the request of the interested party\" and pay €9.84 at a bank. Consulates charge their own local amount.",
      sourceIds: ["one-nie", "es-manchester-nie"],
    },
    {
      when: "Step 3",
      title: "Prepare your documents",
      detail:
        "Bring your passport and a copy. Foreign public documents must be legalised or apostilled and translated into Spanish by a sworn translator.",
      sourceIds: ["one-nie", "es-manchester-nie"],
    },
    {
      when: "Step 4",
      title: "Book and attend your appointment",
      detail:
        "In Spain, book an immigration appointment (cita previa) at a foreigners' office or police station. Abroad, contact the consulate for your area. You or your representative must attend in person.",
      sourceIds: ["one-nie", "es-manchester-nie"],
    },
    {
      when: "After applying",
      title: "Receive your NIE",
      detail:
        "In Spain the decision comes within five days of registration. Through a consulate it normally takes up to two weeks, and the NIE is sent by email, so include a working email address on the form.",
      sourceIds: ["one-nie", "es-manchester-nie"],
    },
  ],

  documents: [
    { item: "Form EX-15, completed and signed (in duplicate)", sourceIds: ["one-nie", "es-manchester-nie"] },
    { item: "Form 790 code 012 with proof of payment", sourceIds: ["one-nie"] },
    { item: "Valid passport, plus a copy of the bio page", sourceIds: ["one-nie", "es-manchester-nie", "interior-nie"] },
    { item: "Statement of your reason for needing an NIE", sourceIds: ["interior-nie", "es-manchester-nie"] },
    { item: "Proof of residence in the consular area (if applying abroad)", sourceIds: ["es-manchester-nie"] },
    { item: "Power of attorney, if a representative applies", sourceIds: ["interior-nie", "one-nie"] },
    { item: "For children: birth certificate and the parent's ID", sourceIds: ["es-manchester-nie"] },
  ],

  costs: [
    { item: "NIE assignment in Spain (790 code 012)", amount: "€9.84", sourceIds: ["one-nie"] },
    { item: "NIE via Spain's Manchester consulate", amount: "£8.45", note: "Each consulate sets its own local amount.", sourceIds: ["es-manchester-nie"] },
  ],
  costNote:
    "Translations, apostilles and any legal representative cost extra, depending on the provider.",

  family: [
    {
      text: "Children need their own NIE. Applying for a minor, bring their birth certificate (or family record book) and the valid passport or ID of the parent or guardian.",
      sourceIds: ["es-manchester-nie"],
    },
  ],

  pitfalls: [
    {
      text: "Treating the NIE as a residence permit. It identifies you to Spanish authorities but doesn't give you the right to live in Spain.",
      sourceIds: ["es-manchester-nie"],
    },
    {
      text: "Leaving out your reason. The application must state why you need the number.",
      sourceIds: ["interior-nie", "es-manchester-nie"],
    },
    {
      text: "Untranslated documents. Foreign documents need a sworn Spanish translation and, where required, an apostille.",
      sourceIds: ["one-nie"],
    },
    {
      text: "Entering Spain from another Schengen country without an entry declaration. Non-EU nationals must file one on arrival or within three working days.",
      sourceIds: ["one-nie"],
    },
  ],

  faqs: [
    {
      q: "How much does an NIE number cost?",
      a: "€9.84 in Spain, paid with form 790 code 012. Consulates abroad charge their own local amount — £8.45 at Spain's Manchester consulate, for example.",
      sourceIds: ["one-nie", "es-manchester-nie"],
    },
    {
      q: "How long does it take to get an NIE?",
      a: "In Spain, up to five days once your application is registered. Through a Spanish consulate it's normally within two weeks, and the number is sent to you by email.",
      sourceIds: ["one-nie", "es-manchester-nie"],
    },
    {
      q: "Can I get an NIE before moving to Spain?",
      a: "Yes. Apply at the Spanish consulate covering where you live, in person or through an accredited representative.",
      sourceIds: ["interior-nie", "es-manchester-nie"],
    },
    {
      q: "Does an NIE let me live in Spain?",
      a: "No. It's an identification number only. To live in Spain as a non-EU citizen you need a visa or residence authorisation, and then a TIE card.",
      sourceIds: ["es-manchester-nie", "interior-docs"],
    },
    {
      q: "Do I need to apply for an NIE if I have a Spanish visa?",
      a: "Often not. Spain's police assign the NIE automatically in certain visa procedures.",
      sourceIds: ["interior-docs"],
    },
  ],

  sources: [
    { id: "interior-nie", title: "Número de Identidad de Extranjero (NIE)", publisher: "Ministry of the Interior (Spain)", url: "https://www.interior.gob.es/opencms/en/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/ciudadanos-de-la-union-europea/numero-de-Identidad-de-extranjero-nie/", official: true, accessed: ACCESSED },
    { id: "one-nie", title: "Application for NIE for international individuals", publisher: "Spanish government (one.gob.es)", url: "https://www.one.gob.es/en/procedures/application-nie-international-individuals", official: true, accessed: ACCESSED },
    { id: "es-manchester-nie", title: "NIE (Foreigner Identity Number)", publisher: "Consulate General of Spain in Manchester", url: "https://www.exteriores.gob.es/Consulados/manchester/en/ServiciosConsulares/Paginas/Consular/NIE.aspx", official: true, accessed: ACCESSED },
    { id: "interior-docs", title: "Documentación de las personas extranjeras", publisher: "Ministry of the Interior (Spain)", url: "https://www.interior.gob.es/opencms/en/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/regimen-general/documentacion-de-las-personas-extranjeras/", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ puts \"Get your Spanish NIE number\" in your roadmap at the right moment, adds the appointment to your deadline agenda and calendar, and keeps your EX-15, fee receipt and passport copies together in your document vault.",
  related: ["spain-tie-card", "spain-digital-nomad-visa", "moving-from-us-to-spain", "moving-from-uk-to-spain"],
};
