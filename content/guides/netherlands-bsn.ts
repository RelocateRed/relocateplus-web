import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-31";

export const netherlandsBsn: Guide = {
  slug: "netherlands-bsn-registration",
  status: "published",
  datePublished: "2026-10-31",
  fromCode: "INT",
  toCode: "NL",
  fromName: "any country",
  toName: "Netherlands BSN",
  kind: "topic",
  labels: { visas: "How to register", costs: "Fees" },

  title: "How to Get a BSN in the Netherlands (2026): Gemeente Registration",
  description:
    "Register with your Dutch municipality and get your BSN: the 5-day rule, documents to bring, legalised birth certificates, the RNI for short stays and timing.",
  h1: "How to get a BSN in the Netherlands: registering with your municipality in 2026",

  summary: [
    {
      text: "If you'll live in the Netherlands for more than four months, you must register as a resident in the Personal Records Database (BRP) within five days of arriving. You do that at the municipality (gemeente) where you live, and you get your citizen service number (BSN) when you register.",
      sourceIds: ["gov-brp", "rvig-brochure"],
    },
    {
      text: "Book an appointment, bring a valid ID, proof that you may live in the Netherlands, proof of your address and original foreign certificates such as your birth certificate. Registration is free and is usually processed within about four weeks, when your BSN arrives by post.",
      sourceIds: ["denhaag-first", "utrecht-abroad"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Who must register", value: "Anyone living in the Netherlands for more than 4 months", sourceIds: ["gov-brp", "rvig-brochure"] },
    { label: "Deadline", value: "Within 5 days of arriving", sourceIds: ["gov-brp", "rvig-brochure", "utrecht-abroad"] },
    { label: "What you get", value: "A citizen service number (BSN)", sourceIds: ["gov-brp"] },
    { label: "Cost", value: "Free (The Hague)", sourceIds: ["denhaag-first"] },
    { label: "Processing", value: "About 4 weeks, then a letter with your BSN", sourceIds: ["denhaag-first", "utrecht-abroad"] },
    { label: "Staying under 4 months?", value: "Register as a non-resident (RNI) instead", sourceIds: ["gov-brp"] },
  ],

  visaOptions: [
    {
      name: "Resident registration (BRP)",
      bestFor: "Anyone moving to the Netherlands for more than four months.",
      requirement:
        "Register in person at the municipality where you live, within five days of arriving. You need a legal right to live in the Netherlands, such as EU/EEA/Swiss nationality or a residence permit. Partners and children who moved with you come to the appointment too.",
      sourceIds: ["gov-brp", "rvig-brochure", "utrecht-abroad"],
    },
    {
      name: "Non-resident registration (RNI)",
      bestFor: "People staying less than four months, or who live abroad but need a BSN.",
      requirement:
        "Register in the Non-residents Records Database with your address abroad. You also get a BSN this way.",
      sourceIds: ["gov-brp"],
    },
    {
      name: "Through an international or expat centre",
      bestFor: "Highly skilled migrants, recognised researchers and some other groups.",
      requirement:
        "In The Hague, these groups book their registration through The Hague International Centre instead of the regular city counter.",
      sourceIds: ["denhaag-first"],
    },
  ],

  steps: [
    {
      when: "Before you move",
      title: "Get your foreign certificates legalised",
      detail:
        "Your birth certificate and, if relevant, your marriage, partnership or divorce papers may be checked. Foreign certificates often need legalisation or an apostille; Utrecht accepts English, German and French documents without a certified translation.",
      sourceIds: ["denhaag-first", "utrecht-abroad", "rvig-brochure"],
    },
    {
      when: "Before you move",
      title: "Secure an address you can register at",
      detail:
        "You'll need a rental or purchase contract, or written permission from the owner. In Utrecht you can't register before your contract starts.",
      sourceIds: ["utrecht-abroad"],
    },
    {
      when: "Within 5 days of arriving",
      title: "Book your registration appointment",
      detail:
        "Book online or by phone with your municipality. Appointments can be scarce, so book as soon as you know your arrival date. In The Hague, keep the booking confirmation: registration can be backdated to the day you booked.",
      sourceIds: ["gov-brp", "utrecht-abroad", "denhaag-first"],
    },
    {
      when: "At the appointment",
      title: "Register everyone in person",
      detail:
        "Bring originals of your ID, your proof of lawful residence, your proof of address and your certificates. Your partner and children must come with you. A driving licence doesn't count as ID in The Hague.",
      sourceIds: ["denhaag-first", "rvig-brochure", "utrecht-abroad"],
    },
    {
      when: "About 4 weeks later",
      title: "Receive your BSN",
      detail:
        "Once you're registered in the BRP, you get a letter by post showing your registered details and your BSN.",
      sourceIds: ["denhaag-first", "utrecht-abroad"],
    },
    {
      when: "Whenever you move",
      title: "Keep your registration up to date",
      detail:
        "Tell your municipality about a move within the Netherlands from four weeks before until five days after it. Leaving for more than eight months? Deregister within five days before you go.",
      sourceIds: ["rvig-brochure"],
    },
  ],

  documents: [
    { item: "Valid passport or ID card for each person (not a driving licence)", sourceIds: ["denhaag-first", "utrecht-abroad"] },
    { item: "Proof you may live in the Netherlands (e.g. residence permit, MVV sticker or IND letter)", sourceIds: ["denhaag-first", "rvig-brochure"] },
    { item: "Rental or purchase contract, or the owner's written permission", sourceIds: ["utrecht-abroad"] },
    { item: "Original birth certificate, legalised or apostilled if required", sourceIds: ["denhaag-first", "utrecht-abroad"] },
    { item: "Marriage, partnership or divorce papers, if they apply", sourceIds: ["denhaag-first", "rvig-brochure"] },
    { item: "Children's birth certificates", sourceIds: ["denhaag-first", "utrecht-abroad"] },
    { item: "Your appointment confirmation", sourceIds: ["denhaag-first"] },
  ],

  costs: [
    { item: "Registering with the municipality", amount: "Free", note: "As listed by The Hague.", sourceIds: ["denhaag-first"] },
  ],
  costNote: "Legalising or apostilling foreign certificates is charged by the country that issued them.",

  family: [
    {
      text: "Partners and children who moved with you register at the same appointment and must attend in person. Bring their birth certificates and your marriage or partnership papers.",
      sourceIds: ["gov-brp", "denhaag-first", "utrecht-abroad"],
    },
  ],

  pitfalls: [
    {
      text: "Waiting until you've settled in. The deadline is five days after arriving, and appointments can take time to get.",
      sourceIds: ["gov-brp", "utrecht-abroad"],
    },
    {
      text: "Arriving without a legalised birth certificate. Municipalities check foreign certificates, and some need an apostille or legalisation first.",
      sourceIds: ["denhaag-first"],
    },
    {
      text: "Booking before your rental contract starts. You can only register at an address you already live at.",
      sourceIds: ["utrecht-abroad"],
    },
    {
      text: "Using a driving licence as ID. It isn't accepted for registration.",
      sourceIds: ["denhaag-first"],
    },
  ],

  faqs: [
    {
      q: "How do I get a BSN in the Netherlands?",
      a: "Register at your municipality. Residents staying more than four months register in the BRP within five days of arriving; people staying less than four months register as non-residents (RNI). Either way you receive a BSN.",
      sourceIds: ["gov-brp"],
    },
    {
      q: "How long does it take to get a BSN?",
      a: "Registration is usually processed within about four weeks, after which the municipality sends you a letter with your BSN.",
      sourceIds: ["denhaag-first", "utrecht-abroad"],
    },
    {
      q: "What do I need to register with the gemeente?",
      a: "A valid ID, proof you may live in the Netherlands, proof of your address (such as a rental contract or the owner's permission) and original foreign certificates like your birth certificate, legalised where required.",
      sourceIds: ["denhaag-first", "utrecht-abroad", "rvig-brochure"],
    },
    {
      q: "What is a BSN used for?",
      a: "It's your personal number for dealing with government services. Your employer uses it for tax and pension, and doctors, hospitals and pharmacies use it too.",
      sourceIds: ["rvig-brochure", "gov-brp"],
    },
    {
      q: "Does registering cost anything?",
      a: "No. The Hague lists first registration from abroad as free.",
      sourceIds: ["denhaag-first"],
    },
  ],

  sources: [
    { id: "gov-brp", title: "When should I register with the Personal Records Database as a resident?", publisher: "Government of the Netherlands", url: "https://www.government.nl/faq/when-should-i-register-with-the-personal-records-database-as-a-resident", official: true, accessed: ACCESSED },
    { id: "rvig-brochure", title: "Brochure: The Personal Records Database (BRP)", publisher: "RvIG (National Office for Identity Data)", url: "https://www.rvig.nl/brochure-personal-records-database", official: true, accessed: ACCESSED },
    { id: "denhaag-first", title: "1st BRP registration when coming from abroad with residence permit", publisher: "Municipality of The Hague", url: "https://www.denhaag.nl/en/moving-and-immigration/1st-brp-registration-when-coming-from-abroad-with-residence-permit-you-do-not-have-a-bsn/", official: true, accessed: ACCESSED },
    { id: "utrecht-abroad", title: "Registering from abroad", publisher: "Municipality of Utrecht", url: "https://www.utrecht.nl/city-of-utrecht/registration/registering-from-abroad", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ puts your gemeente appointment and the 5-day deadline in your agenda, reminds you to legalise your birth certificate before you leave, and keeps your rental contract and certificates in your document vault.",
  related: ["moving-from-us-to-netherlands", "moving-abroad-with-kids", "moving-abroad-with-a-dog-or-cat"],
};
