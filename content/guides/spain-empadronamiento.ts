import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-28";

export const spainEmpadronamiento: Guide = {
  slug: "empadronamiento-spain-padron",
  status: "published",
  datePublished: "2026-10-28",
  fromCode: "INT",
  toCode: "ES",
  fromName: "any country",
  toName: "Spain padrón",
  kind: "topic",
  labels: { visas: "Ways to register", costs: "Fees" },

  title: "Empadronamiento in Spain (2026): How to Register on the Padrón",
  description:
    "How to register on your Spanish town hall's padrón: who must do it, ID and proof-of-address documents, online or in person, the free certificate and 2-year renewal.",
  h1: "Empadronamiento in Spain: how to register on the padrón in 2026",

  summary: [
    {
      text: "Empadronamiento means registering on the padrón, your town hall's register of residents. Everyone living in Spain must register in the municipality where they live for most of the year, and it's free.",
      sourceIds: ["alicante-padron", "barcelona-padron"],
    },
    {
      text: "You need a valid ID (passport or TIE for non-EU citizens) and proof you live at the address, such as a rental contract or property deeds. The padrón gives access to public healthcare and schooling and is needed for most immigration procedures, but it isn't proof of legal residence.",
      sourceIds: ["alicante-alta", "barcelona-padron", "ine-extranjeros"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Who must register", value: "Everyone living in Spain, where they live most of the year", sourceIds: ["alicante-padron", "barcelona-padron"] },
    { label: "Cost", value: "Free", sourceIds: ["alicante-padron", "barcelona-padron"] },
    { label: "ID for non-EU citizens", value: "TIE or passport", sourceIds: ["alicante-alta"] },
    { label: "Proof of address", value: "Rental contract, deeds, IBI or utility bill", sourceIds: ["alicante-alta"] },
    { label: "Renewal (non-EU, no long-term residence)", value: "Every 2 years", sourceIds: ["zaragoza-renovacion"] },
    { label: "Proof of legal residence?", value: "No", sourceIds: ["ine-extranjeros"] },
  ],

  visaOptions: [
    {
      name: "In person at the town hall",
      bestFor: "Most newcomers, especially before you have a Spanish digital certificate.",
      requirement:
        "Book an appointment (cita previa) at a citizen service office and bring your original documents. In Alicante, one appointment covers several people at the same address.",
      notes: ["The ID you bring must match the one you used to book."],
      sourceIds: ["alicante-alta"],
    },
    {
      name: "Online through the town hall's e-office",
      bestFor: "People who already have a Spanish digital certificate or electronic DNI.",
      requirement:
        "Apply on your town hall's sede electrónica, upload the documents it asks for and give your consent. Alicante requires a digital certificate or electronic DNI; Madrid's online assistant tells you which documents to upload.",
      sourceIds: ["alicante-alta", "madrid-guide"],
    },
    {
      name: "Renewal for non-EU residents",
      bestFor: "Non-EU nationals without long-term or permanent residence.",
      requirement:
        "Your registration is valid for two years and must be renewed. If you don't renew, the town hall removes your registration for expiry.",
      notes: ["In Zaragoza you renew in person, or through a representative with a power of attorney."],
      sourceIds: ["zaragoza-renovacion"],
    },
  ],

  steps: [
    {
      when: "Once you have a home",
      title: "Find your town hall's padrón page",
      detail:
        "Register in the municipality where you actually live most of the year. Each town hall publishes its own document list and booking system.",
      sourceIds: ["alicante-padron", "barcelona-padron"],
    },
    {
      when: "Before your appointment",
      title: "Gather your ID",
      detail:
        "Non-EU citizens bring a TIE or passport. EU citizens bring a passport or national ID card and the NIE from their EU registration certificate. Documents must be valid originals.",
      sourceIds: ["alicante-alta"],
    },
    {
      when: "Before your appointment",
      title: "Gather proof of your address",
      detail:
        "Renting: a current rental contract in your name, the latest rent receipt and copies of the owners' IDs. Owning: deeds or a land registry extract if bought within a year, otherwise the last IBI receipt or a recent utility bill in your name.",
      sourceIds: ["alicante-alta"],
    },
    {
      when: "Step 4",
      title: "Book an appointment or apply online",
      detail:
        "Book a cita previa at a citizen service office, or apply on the town hall's e-office if you have a digital certificate.",
      sourceIds: ["alicante-alta", "madrid-guide"],
    },
    {
      when: "At the appointment",
      title: "Hand in the registration form and documents",
      detail:
        "Fill in the registration sheet (hoja de inscripción). For children, both parents or guardians must authorise the registration.",
      sourceIds: ["alicante-alta"],
    },
    {
      when: "After registering",
      title: "Get your padrón certificate",
      detail:
        "Ask for a padrón certificate (certificado de empadronamiento) when a procedure needs proof of address. It's free.",
      sourceIds: ["alicante-padron"],
    },
    {
      when: "Every 2 years",
      title: "Renew if you're a non-EU resident",
      detail:
        "Non-EU nationals without long-term residence must renew their registration every two years, or it lapses.",
      sourceIds: ["zaragoza-renovacion"],
    },
  ],

  documents: [
    { item: "Registration form (hoja de inscripción), signed by everyone registering", sourceIds: ["alicante-alta", "madrid-guide"] },
    { item: "Non-EU citizens: valid TIE or passport", sourceIds: ["alicante-alta"] },
    { item: "EU citizens: passport or ID card, plus the NIE from your registration certificate", sourceIds: ["alicante-alta"] },
    { item: "Renting: current rental contract in your name, latest rent receipt and owners' ID copies", sourceIds: ["alicante-alta"] },
    { item: "Owning: deeds or land registry extract (bought within a year), or last IBI receipt or a recent utility bill", sourceIds: ["alicante-alta"] },
    { item: "Living in someone else's home: the owner's signed authorisation and a copy of their ID", sourceIds: ["alicante-alta"] },
    { item: "Children: ID or passport, plus family book or birth certificate", sourceIds: ["alicante-alta"] },
    { item: "Sworn Spanish translation of foreign official documents", sourceIds: ["alicante-alta"] },
  ],

  costs: [
    { item: "Registering on the padrón", amount: "Free", sourceIds: ["alicante-padron", "barcelona-padron"] },
    { item: "Padrón certificate", amount: "Free", note: "Alicante says all padrón procedures are free.", sourceIds: ["alicante-padron"] },
  ],
  costNote: "Sworn translations of foreign documents are charged by the translator.",

  family: [
    {
      text: "Register children at the same time. Bring their ID or passport and your family book or their birth certificate; both parents or guardians must authorise it.",
      sourceIds: ["alicante-alta"],
    },
    {
      text: "Being on the padrón gives access to rights such as public healthcare and basic schooling for children.",
      sourceIds: ["barcelona-padron"],
    },
  ],

  pitfalls: [
    {
      text: "Treating the padrón as a residence permit. Registering doesn't prove you're legally resident in Spain or give you rights the law doesn't already grant.",
      sourceIds: ["ine-extranjeros"],
    },
    {
      text: "Forgetting the two-year renewal. Non-EU residents without long-term residence who don't renew are removed from the register.",
      sourceIds: ["zaragoza-renovacion"],
    },
    {
      text: "Bringing bank statements as proof of address. Alicante doesn't accept bank receipts, except the IBI property tax receipt.",
      sourceIds: ["alicante-alta"],
    },
    {
      text: "Using an old certificate. When renewing a TIE after moving house, Spain asks for a padrón certificate issued in the last three months.",
      sourceIds: ["interior-tie"],
    },
  ],

  faqs: [
    {
      q: "What is empadronamiento in Spain?",
      a: "Registering on the padrón, the register of residents kept by your town hall. Everyone living in Spain must register in the municipality where they live most of the year.",
      sourceIds: ["alicante-padron", "barcelona-padron"],
    },
    {
      q: "How much does it cost to register on the padrón?",
      a: "Nothing. Registering and getting the padrón certificate are free.",
      sourceIds: ["alicante-padron", "barcelona-padron"],
    },
    {
      q: "What documents do I need for the padrón?",
      a: "A valid ID (TIE or passport for non-EU citizens) and proof you live at the address, such as a current rental contract with the latest rent receipt, property deeds, or a recent utility bill in your name. Each town hall publishes its own list.",
      sourceIds: ["alicante-alta"],
    },
    {
      q: "Can I register on the padrón without legal residence?",
      a: "Yes, you don't need to be a regular resident of the country to register. But being on the padrón doesn't prove legal residence or give you a right to stay.",
      sourceIds: ["barcelona-padron", "ine-extranjeros"],
    },
    {
      q: "Do I need to renew my padrón?",
      a: "Non-EU nationals without long-term or permanent residence must renew every two years, or the registration lapses.",
      sourceIds: ["zaragoza-renovacion"],
    },
  ],

  sources: [
    { id: "alicante-padron", title: "Padrón Municipal de Habitantes", publisher: "Ayuntamiento de Alicante", url: "https://www.alicante.es/es/contenidos/padron-municipal-habitantes", official: true, accessed: ACCESSED },
    { id: "alicante-alta", title: "Altas y cambios de domicilio en el Padrón Municipal de Habitantes", publisher: "Ayuntamiento de Alicante", url: "https://www.alicante.es/es/tramites/altas-y-cambios-domicilio-padron-municipal-habitantes", official: true, accessed: ACCESSED },
    { id: "barcelona-padron", title: "Residents' register", publisher: "Ajuntament de Barcelona", url: "https://ajuntament.barcelona.cat/novaciutadania/en/residents-register", official: true, accessed: ACCESSED },
    { id: "madrid-guide", title: "Guía alta en el padrón (sede electrónica)", publisher: "Ayuntamiento de Madrid", url: "https://sede.madrid.es/UnidadesDescentralizadas/UDCEstadistica/TramitesMunicipales/Ficheros/Guia%20ALTA%20PADRON%20SEDE%20ORIENTADA%20AL%20CIUDADANO.pdf", official: true, accessed: ACCESSED },
    { id: "zaragoza-renovacion", title: "Padrón: renovación residentes extranjeros", publisher: "Ayuntamiento de Zaragoza", url: "https://zaragoza.es/sede/servicio/tramite/13701", official: true, accessed: ACCESSED },
    { id: "ine-extranjeros", title: "Nota del Consejo de Empadronamiento sobre empadronamiento de extranjeros no comunitarios", publisher: "INE — Consejo de Empadronamiento", url: "https://idapadron.ine.es/repositorio/legislacion/NOTAEXTR.PDF", official: true, accessed: ACCESSED },
    { id: "interior-tie", title: "Tarjeta de identidad de extranjero", publisher: "Ministry of the Interior (Spain)", url: "https://www.interior.gob.es/opencms/en/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/regimen-general/tarjeta-de-identidad-de-extranjero/", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ adds \"Register on the padrón\" to your roadmap as soon as you have a home, reminds you about the two-year renewal, and keeps your rental contract and padrón certificate in your document vault.",
  related: ["how-to-get-nie-number-spain", "spain-tie-card", "moving-from-uk-to-spain", "moving-from-us-to-spain"],
};
