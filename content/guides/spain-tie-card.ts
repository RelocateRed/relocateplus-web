import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-27";

export const spainTieCard: Guide = {
  slug: "spain-tie-card",
  status: "published",
  datePublished: "2026-10-27",
  fromCode: "INT",
  toCode: "ES",
  fromName: "any country",
  toName: "Spain TIE card",
  kind: "topic",
  labels: { visas: "Who needs a TIE", costs: "Fees" },

  title: "Spain TIE Card 2026: The 1-Month Deadline, Documents & Fee",
  description:
    "Your Spanish residence card (TIE) explained: who needs it, the one-month deadline after arrival, form EX-17, both appointments, fees and renewals.",
  h1: "The Spanish TIE card: how to get your residence card in 2026",

  summary: [
    {
      text: "The TIE (Tarjeta de Identidad de Extranjero) is the card that proves you live in Spain legally. If you've been granted a visa or authorisation to stay longer than six months, you must apply for it in person within one month of entering Spain, or of your authorisation taking effect.",
      sourceIds: ["interior-tie", "interior-docs"],
    },
    {
      text: "You apply at the National Police documentation unit in your province, by appointment. The TIE proves your residence status, not your identity — that's still your passport — and it's valid for as long as your residence authorisation.",
      sourceIds: ["interior-tie", "one-nie"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Who needs it", value: "Anyone with a visa or authorisation for 6+ months", sourceIds: ["interior-tie", "interior-docs"] },
    { label: "Deadline", value: "Within 1 month of entry or of authorisation taking effect", sourceIds: ["interior-tie"] },
    { label: "Where", value: "National Police, in your province, by appointment", sourceIds: ["interior-tie"] },
    { label: "Form", value: "EX-17", sourceIds: ["ucm-tie"] },
    { label: "First card fee", value: "€16.08 (790 code 012)", sourceIds: ["ucm-tie"] },
    { label: "Validity", value: "Same as your residence authorisation", sourceIds: ["interior-tie", "one-nie"] },
  ],

  visaOptions: [
    {
      name: "First TIE after arriving on a visa",
      bestFor: "Non-EU nationals who entered Spain with a long-stay visa.",
      requirement:
        "Apply personally within one month of entry. Bring the signed application form, your passport with the entry stamp, a recent colour passport photo on a white background, your visa, the fee receipt and, where relevant, proof of Social Security registration.",
      sourceIds: ["interior-tie"],
    },
    {
      name: "TIE after an authorisation granted in Spain",
      bestFor: "People granted residence while already in Spain.",
      requirement:
        "The one-month clock starts when your authorisation is granted or takes effect — for some permits, after Social Security registration.",
      sourceIds: ["interior-tie"],
    },
    {
      name: "Renewal or replacement",
      bestFor: "Existing TIE holders.",
      requirement:
        "Renew in person when your authorisation is renewed. If your card is lost or stolen, apply for a replacement immediately with a police report; it's valid only for the rest of the original period.",
      sourceIds: ["interior-tie"],
    },
  ],

  steps: [
    {
      when: "Before you arrive",
      title: "Note your one-month deadline",
      detail:
        "The deadline runs from the day you enter Spain on your visa, or from when your authorisation takes effect. Make sure your passport gets an entry stamp.",
      sourceIds: ["interior-tie"],
    },
    {
      when: "First week",
      title: "Book a police appointment",
      detail:
        "Request an appointment (cita previa) at the Oficina de Extranjeros or police station for your province through the public administration's electronic office.",
      sourceIds: ["interior-tie"],
    },
    {
      when: "Before the appointment",
      title: "Fill in EX-17 and pay the fee",
      detail:
        "Complete and sign form EX-17 and pay the fee with form 790 code 012. Universidad Complutense de Madrid's guide lists €16.08 for a first card.",
      sourceIds: ["ucm-tie"],
    },
    {
      when: "Appointment 1",
      title: "Submit your application in person",
      detail:
        "Bring your passport with entry stamp, photo, visa, fee receipt and any documents linked to your permit. You must attend yourself.",
      sourceIds: ["interior-tie", "ucm-tie"],
    },
    {
      when: "Appointment 2",
      title: "Collect your card",
      detail:
        "You return to the same immigration office for a second appointment to collect the TIE.",
      sourceIds: ["ucm-tie"],
    },
    {
      when: "From then on",
      title: "Carry it and keep it up to date",
      detail:
        "Carry your TIE and show it when authorities ask. Report changes of address, nationality or family circumstances within one month.",
      sourceIds: ["interior-tie"],
    },
  ],

  documents: [
    { item: "Application form EX-17, signed (in duplicate)", sourceIds: ["ucm-tie", "interior-tie"] },
    { item: "Passport with your Spanish entry stamp (and a copy)", sourceIds: ["interior-tie", "ucm-tie"] },
    { item: "Recent colour passport photo, white background", sourceIds: ["interior-tie", "ucm-tie"] },
    { item: "Your visa, if you entered on one", sourceIds: ["interior-tie"] },
    { item: "Proof of payment, form 790 code 012", sourceIds: ["interior-tie", "ucm-tie"] },
    { item: "Social Security registration, if your permit requires it", sourceIds: ["interior-tie"] },
    { item: "Padrón certificate under 3 months old, if renewing after a move", sourceIds: ["interior-tie"] },
  ],

  costs: [
    { item: "First TIE (temporary residence)", amount: "€16.08", note: "Check the current amount on the National Police fee page before paying.", sourceIds: ["ucm-tie"] },
    { item: "Renewal, replacement or change of details", amount: "Set by the National Police fee table", sourceIds: ["interior-tie"] },
  ],
  costNote:
    "The TIE fee is paid with form 790 code 012. Photos and copies are extra.",

  family: [
    {
      text: "Each family member with a residence authorisation of more than six months gets their own TIE, applied for within the same one-month window.",
      sourceIds: ["interior-docs", "interior-tie"],
    },
  ],

  pitfalls: [
    {
      text: "Missing the one-month window. Book your appointment as soon as you arrive.",
      sourceIds: ["interior-tie"],
    },
    {
      text: "No entry stamp. You need your passport stamped on entry, or an entry declaration within 72 hours.",
      sourceIds: ["interior-tie"],
    },
    {
      text: "Using the TIE as ID abroad. It proves your Spanish residence status; your passport remains your identity document.",
      sourceIds: ["interior-tie"],
    },
    {
      text: "Not reporting a move. Changes of address must be reported within one month.",
      sourceIds: ["interior-tie"],
    },
  ],

  faqs: [
    {
      q: "How long do I have to apply for a TIE in Spain?",
      a: "One month from entering Spain, or from when your authorisation is granted or takes effect.",
      sourceIds: ["interior-tie"],
    },
    {
      q: "What's the difference between the NIE and the TIE?",
      a: "The NIE is your personal identification number. The TIE is the physical card that proves you have legal residence in Spain, issued to people with a visa or authorisation of more than six months.",
      sourceIds: ["interior-nie", "interior-tie", "interior-docs"],
    },
    {
      q: "How much does a TIE cost?",
      a: "Universidad Complutense de Madrid's guide lists €16.08 for a first card, paid with form 790 code 012. Renewals and replacements have their own fees, so check the National Police fee table.",
      sourceIds: ["ucm-tie", "interior-tie"],
    },
    {
      q: "How long is a TIE valid?",
      a: "As long as the residence authorisation it's based on. When you renew the authorisation, you renew the TIE in person.",
      sourceIds: ["interior-tie", "one-nie"],
    },
    {
      q: "Do EU citizens need a TIE?",
      a: "No. This TIE process is for non-EU nationals. EU citizens who settle in Spain register in the Central Registry of Foreign Nationals instead.",
      sourceIds: ["interior-tie", "es-manchester-nie"],
    },
  ],

  sources: [
    { id: "interior-tie", title: "Tarjeta de identidad de extranjero", publisher: "Ministry of the Interior (Spain)", url: "https://www.interior.gob.es/opencms/en/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/regimen-general/tarjeta-de-identidad-de-extranjero/", official: true, accessed: ACCESSED },
    { id: "interior-docs", title: "Documentación de las personas extranjeras", publisher: "Ministry of the Interior (Spain)", url: "https://www.interior.gob.es/opencms/en/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/regimen-general/documentacion-de-las-personas-extranjeras/", official: true, accessed: ACCESSED },
    { id: "interior-nie", title: "Número de Identidad de Extranjero (NIE)", publisher: "Ministry of the Interior (Spain)", url: "https://www.interior.gob.es/opencms/en/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/ciudadanos-de-la-union-europea/numero-de-Identidad-de-extranjero-nie/", official: true, accessed: ACCESSED },
    { id: "one-nie", title: "Application for NIE for international individuals (incl. TIE validity)", publisher: "Spanish government (one.gob.es)", url: "https://www.one.gob.es/en/procedures/application-nie-international-individuals", official: true, accessed: ACCESSED },
    { id: "es-manchester-nie", title: "NIE (Foreigner Identity Number)", publisher: "Consulate General of Spain in Manchester", url: "https://www.exteriores.gob.es/Consulados/manchester/en/ServiciosConsulares/Paginas/Consular/NIE.aspx", official: true, accessed: ACCESSED },
    { id: "ucm-tie", title: "Tarjeta de identidad como extranjero (TIE)", publisher: "Universidad Complutense de Madrid", url: "https://www.ucm.es/tarjeta-de-identidad-como-extranjero-(tie)", official: false, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ starts your TIE clock the day you arrive: the one-month deadline, both police appointments and your renewal go into the deadline agenda and calendar, with your passport, photos and fee receipt ready in the document vault.",
  related: ["how-to-get-nie-number-spain", "spain-digital-nomad-visa", "moving-from-us-to-spain", "moving-from-uk-to-spain"],
};
