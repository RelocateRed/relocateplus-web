import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-27";

export const portugalNifNumber: Guide = {
  slug: "how-to-get-nif-portugal",
  status: "published",
  datePublished: "2026-10-27",
  fromCode: "INT",
  toCode: "PT",
  fromName: "any country",
  toName: "Portugal NIF number",
  kind: "topic",
  labels: { visas: "Ways to apply", costs: "Fees" },

  title: "How to Get a NIF in Portugal (2026): Free, Online or In Person",
  description:
    "Get your Portuguese tax number (NIF) as a foreigner: documents, booking at Finanças, e-balcão via a representative, the 15-day tax representative rule, and NISS.",
  h1: "How to get a NIF in Portugal as a foreigner",

  summary: [
    {
      text: "The NIF is Portugal's nine-digit tax number. You need it to work, open a bank account or deal with the tax authority, and it stays the same whether you're resident or not. Requesting one is free.",
      sourceIds: ["at-nif", "at-leaflet", "eportugal-nif"],
    },
    {
      text: "You can apply in person at a tax office (Serviço de Finanças) or Loja do Cidadão by appointment, or online through the e-balcão, which a legal representative must submit for you. You don't need a tax representative just to request a NIF, but once you have a tax relationship in Portugal you have 15 days to appoint one or sign up for electronic notifications.",
      sourceIds: ["at-nif", "at-leaflet", "at-rep"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "What it is", value: "9-digit tax number, same for residents and non-residents", sourceIds: ["at-nif"] },
    { label: "Cost", value: "Free", sourceIds: ["eportugal-nif"] },
    { label: "In person", value: "Finanças or Loja do Cidadão, by appointment", sourceIds: ["at-nif", "at-leaflet"] },
    { label: "Online", value: "e-balcão, submitted by your legal representative", sourceIds: ["at-nif", "at-leaflet"] },
    { label: "Tax representative to request a NIF", value: "Not required (AT, July 2025)", sourceIds: ["at-leaflet", "at-rep"] },
    { label: "Booking line (CAT)", value: "+351 217 206 707, working days 9:00–19:00", sourceIds: ["at-nif", "at-leaflet"] },
  ],

  visaOptions: [
    {
      name: "In person at a tax office or Loja do Cidadão",
      bestFor: "People in Portugal, or visiting, who can attend themselves.",
      requirement:
        "Book an appointment online on the Portal das Finanças or by phone, then bring a valid passport (with your entry visa if you're from outside the EU) and proof of your address abroad if it isn't on your ID.",
      sourceIds: ["at-nif", "at-leaflet"],
    },
    {
      name: "Online through the e-balcão",
      bestFor: "People applying from abroad.",
      requirement:
        "A legal representative logs in to the Portal das Finanças and files the request with copies of your passport, proof of your address abroad, their own ID and a power of attorney. ePortugal says this route is for people living outside the EU, Norway, Iceland and Liechtenstein.",
      sourceIds: ["at-nif", "at-leaflet", "eportugal-nif"],
    },
  ],

  steps: [
    {
      when: "Step 1",
      title: "Choose in person or online",
      detail:
        "If you can be in Portugal, book a tax office appointment. If you're abroad, use a representative who can file through the e-balcão.",
      sourceIds: ["at-nif", "eportugal-nif"],
    },
    {
      when: "Step 2",
      title: "Gather your documents",
      detail:
        "Your passport (plus entry visa if you're a third-country national) and proof of your foreign address. Use originals or certified copies, with certified translations of anything not in Portuguese.",
      sourceIds: ["at-nif", "at-leaflet"],
    },
    {
      when: "Step 3",
      title: "Book or file",
      detail:
        "Book through Portal das Finanças (Contactos > Atendimento por Marcação) or call +351 217 206 707. Online, your representative selects Registo Contribuinte > Identificação > Atrib/Alte NIF – Singulares.",
      sourceIds: ["at-nif"],
    },
    {
      when: "Step 4",
      title: "Receive your NIF",
      detail:
        "If everything is in order, the NIF is issued with non-resident status.",
      sourceIds: ["at-nif"],
    },
    {
      when: "Within 15 days of a tax relationship",
      title: "Representative or e-notifications",
      detail:
        "Once you own a car or property, sign a Portuguese employment contract or start self-employment, you have 15 days to appoint a tax representative or join an electronic notification channel (Portal das Finanças notifications or ViaCTT).",
      sourceIds: ["at-rep", "at-leaflet"],
    },
    {
      when: "When you move",
      title: "Switch to resident status",
      detail:
        "When you become tax resident in Portugal, ask the tax authority to change your address and tax status. Your NIF number itself stays the same.",
      sourceIds: ["at-nif"],
    },
  ],

  documents: [
    { item: "Valid passport or equivalent ID", sourceIds: ["at-nif", "at-leaflet"] },
    { item: "Entry visa, if you're from outside the EU/Schengen", sourceIds: ["at-nif", "eportugal-nif"] },
    { item: "Proof of your address abroad (if not on your ID)", sourceIds: ["at-nif", "at-leaflet"] },
    { item: "Representative's ID and power of attorney (online route)", sourceIds: ["at-nif", "at-leaflet"] },
    { item: "Certified translations of foreign-language documents", sourceIds: ["at-nif", "at-leaflet"] },
    { item: "For children without a passport: proof of birth", sourceIds: ["eportugal-nif"] },
  ],

  costs: [
    { item: "NIF application", amount: "Free", sourceIds: ["eportugal-nif"] },
    { item: "NISS (social security number)", amount: "Free", sourceIds: ["eportugal-nif"] },
    { item: "Fine for not appointing a required representative", amount: "€75–€7,500", sourceIds: ["at-leaflet"] },
  ],
  costNote:
    "Private representatives and lawyers charge their own fees; the tax authority itself doesn't charge for a NIF.",

  family: [
    {
      text: "Children can have a NIF too — for example so parents can include their health and education expenses in their IRS tax return. Without a passport, a document proving birth is used.",
      sourceIds: ["eportugal-nif"],
    },
  ],

  pitfalls: [
    {
      text: "Conflicting advice on representatives. ePortugal still says non-residents need a fiscal representative, but the tax authority's July 2025 guidance says it isn't required just to request a NIF.",
      sourceIds: ["eportugal-nif", "at-leaflet"],
    },
    {
      text: "Forgetting the 15-day rule. Buying a car or property or signing a Portuguese job contract triggers it; ignoring it can mean a fine of €75 to €7,500.",
      sourceIds: ["at-leaflet", "at-rep"],
    },
    {
      text: "Self-employed from outside the EU. You must appoint a VAT-registered representative with Portuguese tax domicile before starting; electronic notifications don't replace this.",
      sourceIds: ["at-leaflet", "at-rep"],
    },
    {
      text: "Uncertified copies or translations. The tax authority wants originals or certified copies.",
      sourceIds: ["at-nif"],
    },
  ],

  faqs: [
    {
      q: "How much does a NIF cost in Portugal?",
      a: "Nothing — requesting a NIF is free. Only a private representative or lawyer, if you use one, will charge.",
      sourceIds: ["eportugal-nif"],
    },
    {
      q: "Can I get a NIF from outside Portugal?",
      a: "Yes, through the e-balcão on the Portal das Finanças, but a legal representative with a power of attorney must submit it for you.",
      sourceIds: ["at-nif", "at-leaflet"],
    },
    {
      q: "Do I need a fiscal representative for a NIF?",
      a: "Not to request one, according to the tax authority. Once you have a tax relationship in Portugal, you have 15 days to appoint a representative or join electronic notifications; EU/EEA residents can choose either.",
      sourceIds: ["at-leaflet", "at-rep"],
    },
    {
      q: "Does my NIF change when I become resident?",
      a: "No. The number stays the same; you ask the tax authority to update your address and tax status.",
      sourceIds: ["at-nif"],
    },
    {
      q: "What's the difference between NIF and NISS?",
      a: "The NIF is your tax number. The NISS is your social security number, requested separately online (or by your employer) and also free.",
      sourceIds: ["eportugal-nif"],
    },
  ],

  sources: [
    { id: "at-nif", title: "Apply for your NIF", publisher: "Autoridade Tributária e Aduaneira (Portal das Finanças)", url: "https://info.portaldasfinancas.gov.pt/en/tax-information/getting-started-in-portugal/tax-identification-number/apply-for-your-nif/Pages/default.aspx", official: true, accessed: ACCESSED },
    { id: "at-rep", title: "Appoint a tax representative", publisher: "Autoridade Tributária e Aduaneira (Portal das Finanças)", url: "https://info.portaldasfinancas.gov.pt/en/tax-information/getting-started-in-portugal/tax-identification-number/appoint-a-tax-representative/Pages/default.aspx", official: true, accessed: ACCESSED },
    { id: "at-leaflet", title: "Tax identification number to foreign citizens / non-residents (July 2025)", publisher: "Autoridade Tributária e Aduaneira", url: "https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Assignment_of_tax_id_number_to_foreign_citizens.pdf", official: true, accessed: ACCESSED },
    { id: "eportugal-nif", title: "How to request NIF and NISS for foreign citizens in Portugal", publisher: "ePortugal (Government of Portugal)", url: "https://eportugal.gov.pt/en-GB/migrantes-viver-e-trabalhar-em-portugal/migrantes-impostos-e-seguranca-social-em-portugal/como-pedir-o-nif-e-o-niss-para-cidadaos-estrangeiros-em-portugal", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ adds \"Get your NIF\" to your Portugal roadmap, reminds you of the 15-day representative rule in the deadline agenda and calendar, and keeps your passport, proof of address and power of attorney in your document vault.",
  related: ["portugal-d8-digital-nomad-visa", "moving-from-us-to-portugal", "moving-from-uk-to-portugal"],
};
