import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-19";

export const fbiBackgroundCheck: Guide = {
  slug: "fbi-background-check-apostille-for-visa",
  status: "published",
  datePublished: "2026-10-20",
  fromCode: "US",
  toCode: "US",
  fromName: "the US",
  toName: "FBI background check",
  kind: "topic",
  labels: { visas: "What each country asks for", costs: "Fees" },

  title: "FBI Background Check & Apostille for a Visa: 2026 Guide",
  description:
    "How to get an FBI Identity History Summary ($18), have it apostilled ($20), and time it for Portugal, Spain and Thailand visa windows — with official sources.",
  h1: "FBI background check and apostille for a visa: step by step",

  summary: [
    {
      text: "Residence visas for Portugal, Spain and Thailand all ask Americans for an FBI Identity History Summary, and Portugal and Spain also want it apostilled. You request it from the FBI for $18 per person; applying online and giving fingerprints at a participating US Post Office is the fastest route, with results usually within 48 hours.",
      sourceIds: ["fbi-ihsc"],
    },
    {
      text: "For an apostille, the US Department of State's Office of Authentications charges $20 per document. Watch the age limit: Portugal wants the check issued within 90 days of your appointment, Spain within six months, and Thailand's DTV within three months.",
      sourceIds: ["ds-4194", "state-criminal-records", "vfs-pt-remote", "es-la-nlv", "th-dc-dtv"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "FBI fee", value: "$18 per person (no paid express option)", sourceIds: ["fbi-ihsc"] },
    { label: "Fastest route", value: "Online request + fingerprints at a US Post Office: within 48 hours", sourceIds: ["fbi-ihsc"] },
    { label: "Mailed fingerprint card", value: "About 10 days after the FBI receives it", sourceIds: ["fbi-ihsc"] },
    { label: "Apostille", value: "US Department of State Office of Authentications, $20 per document", sourceIds: ["ds-4194", "state-criminal-records"] },
    { label: "Portugal / Spain / Thailand DTV", value: "≤ 90 days / ≤ 6 months / ≤ 3 months old", sourceIds: ["vfs-pt-remote", "es-la-nlv", "th-dc-dtv"] },
  ],

  visaOptions: [
    {
      name: "Portugal (residence visas via VFS Global, USA)",
      bestFor: "Applicants for Portugal's passive-income or remote-work residence visas.",
      requirement:
        "A police clearance certificate issued within 90 days of submitting your application, apostilled under the Hague Convention. If you've lived in the US for more than a year, it must be the FBI check.",
      sourceIds: ["vfs-pt-remote"],
    },
    {
      name: "Spain (non-lucrative visa, Los Angeles consulate)",
      bestFor: "Applicants for Spain's non-lucrative residence visa.",
      requirement:
        "An FBI certificate no more than six months old, with a federal apostille from the US Department of State — a state apostille is not accepted — translated into Spanish by a certified translator. Add police records from any country you lived in during the last five years.",
      sourceIds: ["es-la-nlv"],
    },
    {
      name: "Spain (telework visa, New York consulate)",
      bestFor: "Applicants for Spain's digital nomad (telework) visa.",
      requirement:
        "An FBI background check with fingerprint verification, issued within six months before you apply, apostilled and translated by a sworn translator. Local police certificates are not accepted.",
      sourceIds: ["es-ny-telework"],
    },
    {
      name: "Thailand (Destination Thailand Visa)",
      bestFor: "DTV applicants applying through the Royal Thai Embassy in Washington.",
      requirement:
        "An FBI certificate issued within three months. Minors under 16 may use the main sponsor's FBI certificate.",
      sourceIds: ["th-dc-dtv"],
    },
  ],

  steps: [
    {
      when: "Before anything else",
      title: "Check your destination's age limit",
      detail:
        "Work backwards from your visa appointment: Portugal counts 90 days, Spain six months and Thailand's DTV three months.",
      sourceIds: ["vfs-pt-remote", "es-la-nlv", "th-dc-dtv"],
    },
    {
      when: "Step 2",
      title: "Request the Identity History Summary online",
      detail:
        "Start at the FBI's eDO portal (edo.cjis.gov) and pay the $18 fee by credit card. You can't pay extra for faster service.",
      sourceIds: ["fbi-ihsc"],
    },
    {
      when: "Step 3",
      title: "Give your fingerprints",
      detail:
        "The quickest option is electronic fingerprinting at a participating US Post Office (results within 48 hours). Otherwise mail an FD-1164 fingerprint card with your confirmation printout (about 10 days after it arrives). If you're abroad, mail the card to the address on your confirmation email.",
      sourceIds: ["fbi-ihsc"],
    },
    {
      when: "Step 4",
      title: "Receive your result",
      detail:
        "The FBI sends one sealed response per request, which you can copy as needed. FBI-approved channelers can also submit for you for an extra fee, but only for US citizens or permanent residents located in the US.",
      sourceIds: ["fbi-ihsc"],
    },
    {
      when: "Step 5",
      title: "Get the apostille from the State Department",
      detail:
        "FBI records are apostilled by the US Department of State Office of Authentications, not by a state Secretary of State. Use form DS-4194, state the destination country, and pay $20 per document by check or money order (mail) or card (walk-in, up to 15 documents).",
      sourceIds: ["state-criminal-records", "ds-4194"],
    },
    {
      when: "Step 6",
      title: "Translate if required, and check non-Hague countries",
      detail:
        "Spain requires a certified Spanish translation. For countries outside the Apostille Convention, the State Department says you'll also need authentication from that country's embassy.",
      sourceIds: ["es-la-nlv", "state-criminal-records"],
    },
  ],

  documents: [
    { item: "eDO online request confirmation (edo.cjis.gov) or signed applicant information form", sourceIds: ["fbi-ihsc"] },
    { item: "Electronic fingerprints at a US Post Office, or an FD-1164 fingerprint card", sourceIds: ["fbi-ihsc"] },
    { item: "$18 payment (credit card, money order or certified check)", sourceIds: ["fbi-ihsc"] },
    { item: "Your FBI result (one sealed response)", sourceIds: ["fbi-ihsc"] },
    { item: "Form DS-4194 request for authentication/apostille, naming the destination country", sourceIds: ["ds-4194", "state-criminal-records"] },
    { item: "$20 per document, check or money order payable to \"U.S. Department of State\" (by mail)", sourceIds: ["ds-4194"] },
    { item: "Certified translation where required (e.g. Spanish for Spain)", sourceIds: ["es-la-nlv", "es-ny-telework"] },
  ],

  costs: [
    { item: "FBI Identity History Summary", amount: "$18 per person", sourceIds: ["fbi-ihsc"] },
    { item: "FBI-approved channeler (optional)", amount: "Channeler's own fee on top", sourceIds: ["fbi-ihsc"] },
    { item: "Apostille (Department of State)", amount: "$20 per document", note: "Charged per document, not per page.", sourceIds: ["ds-4194"] },
  ],
  costNote:
    "Fingerprinting, shipping and translation costs depend on the provider you use.",

  family: [
    {
      text: "Each adult applicant needs their own FBI check. For Thailand's DTV, the Washington embassy lets minors under 16 use the main sponsor's FBI certificate.",
      sourceIds: ["fbi-ihsc", "th-dc-dtv"],
    },
  ],

  pitfalls: [
    {
      text: "Requesting too early. A check that's 100 days old is useless for Portugal's 90-day rule.",
      sourceIds: ["vfs-pt-remote"],
    },
    {
      text: "Getting a state apostille. FBI records are apostilled by the US Department of State, and Spain's Los Angeles consulate rejects local apostilles.",
      sourceIds: ["state-criminal-records", "es-la-nlv"],
    },
    {
      text: "Forgetting to name the country on the apostille request. The State Department asks you to specify the destination country.",
      sourceIds: ["state-criminal-records"],
    },
    {
      text: "Asking the FBI to forward your result to the State Department. The FBI says not to include that request in a mailed application.",
      sourceIds: ["fbi-ihsc"],
    },
  ],

  faqs: [
    {
      q: "How much does an FBI background check cost?",
      a: "$18 per person, paid to the FBI. There's no paid express option; FBI-approved channelers charge their own fee on top.",
      sourceIds: ["fbi-ihsc"],
    },
    {
      q: "How long does an FBI background check take?",
      a: "Within 48 hours if you apply online and give electronic fingerprints at a participating US Post Office; about 10 days after the FBI receives a mailed fingerprint card; up to 15 days plus mailing time for a fully mailed request.",
      sourceIds: ["fbi-ihsc"],
    },
    {
      q: "Who apostilles an FBI background check?",
      a: "The US Department of State Office of Authentications, for $20 per document. State Secretary of State offices only handle state-issued documents.",
      sourceIds: ["state-criminal-records", "ds-4194"],
    },
    {
      q: "How old can my FBI check be for a visa?",
      a: "It depends on the country: Portugal wants it issued within 90 days of submission, Spain within six months, and Thailand's DTV within three months.",
      sourceIds: ["vfs-pt-remote", "es-la-nlv", "th-dc-dtv"],
    },
    {
      q: "Can I get an FBI check if I already live abroad?",
      a: "Yes. Request it online and mail your completed fingerprint card with the confirmation printout to the address on your confirmation email. Channelers can't help if you're outside the US.",
      sourceIds: ["fbi-ihsc"],
    },
  ],

  sources: [
    { id: "fbi-ihsc", title: "Identity History Summary Checks", publisher: "FBI Criminal Justice Information Services", url: "https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks", official: true, accessed: ACCESSED },
    { id: "state-criminal-records", title: "Criminal records checks (living abroad)", publisher: "US Department of State", url: "https://travel.state.gov/en/international-travel/living-abroad/criminal-records.html", official: true, accessed: ACCESSED },
    { id: "ds-4194", title: "Form DS-4194: Request for Authentication Service", publisher: "US Department of State", url: "https://eforms.state.gov/forms/ds4194.pdf", official: true, accessed: ACCESSED },
    { id: "vfs-pt-remote", title: "Portugal residency visa for remote work (USA checklist, 06.11.2025)", publisher: "VFS Global for the Consulates of Portugal in the USA", url: "https://www.vfsglobal.com/one-pager/portugal/usa/english/pdf/residency-visa-for-remote-work-digital-nomads-nov-25-national.pdf", official: true, accessed: ACCESSED },
    { id: "es-la-nlv", title: "Non-working (non-lucrative) residence visa", publisher: "Consulate General of Spain in Los Angeles", url: "https://exteriores.gob.es/Consulados/losangeles/en/ServiciosConsulares/Paginas/Consular/Visado-de-residencia-no-lucrativa.aspx", official: true, accessed: ACCESSED },
    { id: "es-ny-telework", title: "Telework visa", publisher: "Consulate General of Spain in New York", url: "https://exteriores.gob.es/Consulados/nuevayork/en/ServiciosConsulares/Paginas/Consular/Visado-de-teletrabajo.aspx", official: true, accessed: ACCESSED },
    { id: "th-dc-dtv", title: "Destination Thailand Visa (DTV)", publisher: "Royal Thai Embassy, Washington D.C.", url: "https://washingtondc.thaiembassy.org/en/page/dtv-visa", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ helps you time it right: add your FBI check and apostille dates to the deadline agenda and calendar so they're still valid on appointment day, and keep the scans with the rest of your family's visa documents.",
  related: ["moving-from-us-to-portugal", "moving-from-us-to-spain", "thailand-dtv-visa-guide"],
};
