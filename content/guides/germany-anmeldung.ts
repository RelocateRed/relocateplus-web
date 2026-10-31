import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-31";

export const germanyAnmeldung: Guide = {
  slug: "germany-anmeldung",
  status: "published",
  datePublished: "2026-10-31",
  fromCode: "INT",
  toCode: "DE",
  fromName: "any country",
  toName: "Germany Anmeldung",
  kind: "topic",
  labels: { visas: "Ways to register", costs: "Fees and fines" },

  title: "Anmeldung in Germany (2026): How to Register Your Address in 14 Days",
  description:
    "How to do your Anmeldung in Germany: the two-week deadline, the landlord confirmation (Wohnungsgeberbestätigung), documents, appointments, fines and your tax ID.",
  h1: "Anmeldung in Germany: how to register your address in 2026",

  summary: [
    {
      text: "Anyone who moves into a home in Germany must register with the local registration office (Bürgeramt) within two weeks of moving in. This is the Anmeldung. You need your passport, a completed registration form and a confirmation from your landlord (Wohnungsgeberbestätigung); a rental contract doesn't replace it.",
      sourceIds: ["bmg", "berlin-anmeldung"],
    },
    {
      text: "In Berlin it's free and you get your registration certificate (Meldebestätigung) on the spot. The Federal Central Tax Office then sends your tax ID by letter once it receives your data from the registration office. Registering late can be fined up to €1,000.",
      sourceIds: ["berlin-anmeldung", "bzst-faq", "bmg"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Deadline", value: "Within 2 weeks of moving in", sourceIds: ["bmg", "berlin-anmeldung", "muenchen"] },
    { label: "Key document", value: "Landlord's confirmation (Wohnungsgeberbestätigung)", sourceIds: ["berlin-anmeldung", "frankfurt-landlord"] },
    { label: "Cost", value: "Free in Berlin", sourceIds: ["berlin-anmeldung"] },
    { label: "You receive", value: "Registration certificate (Meldebestätigung)", sourceIds: ["berlin-anmeldung", "muenchen"] },
    { label: "Tax ID", value: "Sent by letter after you register", sourceIds: ["bzst-faq"] },
    { label: "Fine for not registering", value: "Up to €1,000", sourceIds: ["bmg"] },
  ],

  visaOptions: [
    {
      name: "In person at the Bürgeramt",
      bestFor: "Most newcomers from abroad.",
      requirement:
        "Book an appointment at a citizens' office in your city and bring your passport (with your residence permit card if you have one), the signed registration form and the landlord's confirmation. In Berlin you get the Meldebestätigung immediately.",
      sourceIds: ["berlin-anmeldung", "muenchen"],
    },
    {
      name: "Through someone you authorise",
      bestFor: "People who can't attend in person.",
      requirement:
        "Send a representative with a written power of attorney and a registration form you've filled in and signed yourself.",
      sourceIds: ["frankfurt-registration", "berlin-anmeldung", "muenchen"],
    },
    {
      name: "Online (Berlin)",
      bestFor: "People with a German eID card or EU citizen card with the online function.",
      requirement:
        "Berlin offers online registration with a BundID account and an eID-enabled ID card. A residence permit card (eAT) doesn't work for this, so most non-EU newcomers register in person.",
      sourceIds: ["berlin-anmeldung"],
    },
  ],

  steps: [
    {
      when: "When you sign your lease",
      title: "Ask your landlord for the Wohnungsgeberbestätigung",
      detail:
        "Your landlord must give you this confirmation within two weeks of you moving in. It lists their name and address, the move-in date, the address and everyone moving in, and is signed by them.",
      sourceIds: ["frankfurt-landlord", "bmg"],
    },
    {
      when: "Before you move in",
      title: "Book your Bürgeramt appointment",
      detail:
        "Appointments are booked online with your city. In Munich you can choose any of the citizens' offices; in Frankfurt any Bürgeramt in the city.",
      sourceIds: ["muenchen", "frankfurt-registration"],
    },
    {
      when: "Before the appointment",
      title: "Fill in the registration form",
      detail:
        "Complete and sign the registration form (Anmeldeformular) yourself. If you have more than one home, add the main-residence declaration.",
      sourceIds: ["berlin-anmeldung", "muenchen"],
    },
    {
      when: "Within 2 weeks of moving in",
      title: "Register at the Bürgeramt",
      detail:
        "Bring your passport (and residence permit card, if you have one), the form and the landlord's confirmation. Original documents only; foreign documents may need a translation by an authorised translator.",
      sourceIds: ["berlin-anmeldung", "frankfurt-registration", "bmg"],
    },
    {
      when: "At the appointment",
      title: "Collect your Meldebestätigung",
      detail:
        "You get your written registration certificate. In Berlin it's handed to you on the spot.",
      sourceIds: ["berlin-anmeldung", "muenchen"],
    },
    {
      when: "A few weeks later",
      title: "Watch the post for your tax ID",
      detail:
        "The Federal Central Tax Office sends your tax identification number by letter once the registration office has passed on your data. If nothing has arrived after three months, you can ask the BZSt for it.",
      sourceIds: ["bzst-faq"],
    },
  ],

  documents: [
    { item: "Valid passport (plus electronic residence permit card, if you have one)", sourceIds: ["berlin-anmeldung", "muenchen"] },
    { item: "Landlord's confirmation (Wohnungsgeberbestätigung), signed", sourceIds: ["berlin-anmeldung", "frankfurt-landlord", "muenchen"] },
    { item: "Registration form (Anmeldeformular), signed by you", sourceIds: ["berlin-anmeldung", "muenchen"] },
    { item: "Main-residence declaration, if you keep more than one home", sourceIds: ["berlin-anmeldung"] },
    { item: "Birth or marriage certificates, for a first registration (Berlin)", sourceIds: ["berlin-anmeldung"] },
    { item: "Power of attorney, if someone registers for you", sourceIds: ["frankfurt-registration", "muenchen"] },
    { item: "Authorised translations of foreign documents, where required", sourceIds: ["frankfurt-registration"] },
  ],

  costs: [
    { item: "Registering your address (Berlin)", amount: "Free", sourceIds: ["berlin-anmeldung"] },
    { item: "Fine for not registering, or registering late", amount: "Up to €1,000", sourceIds: ["bmg"] },
  ],
  costNote: "A landlord who doesn't issue the confirmation correctly or on time can also be fined up to €1,000.",

  family: [
    {
      text: "Families can register together. Children under 18 need their parents' or guardians' consent, and birth and marriage certificates may be requested at a first registration.",
      sourceIds: ["berlin-anmeldung"],
    },
  ],

  pitfalls: [
    {
      text: "Bringing your rental contract instead of the landlord's confirmation. Berlin says the contract doesn't replace the Wohnungsgeberbestätigung.",
      sourceIds: ["berlin-anmeldung"],
    },
    {
      text: "Booking too late. The two weeks run from the day you move in, and appointments in big cities fill up.",
      sourceIds: ["bmg", "muenchen"],
    },
    {
      text: "Not deregistering when you leave Germany. You must deregister within two weeks of moving out if you're not moving to another German address.",
      sourceIds: ["bmg"],
    },
    {
      text: "Expecting to register online with a residence permit card. Berlin's online service doesn't accept the eAT.",
      sourceIds: ["berlin-anmeldung"],
    },
  ],

  faqs: [
    {
      q: "How long do I have to do my Anmeldung?",
      a: "Two weeks from the day you move in. If you normally live abroad and aren't registered in Germany, the requirement applies once your stay passes three months.",
      sourceIds: ["bmg", "berlin-anmeldung"],
    },
    {
      q: "What is the Wohnungsgeberbestätigung?",
      a: "A signed confirmation from your landlord that you moved in, with their details, the address, the move-in date and everyone who moved in. The landlord must issue it within two weeks, and a rental contract doesn't replace it.",
      sourceIds: ["frankfurt-landlord", "berlin-anmeldung"],
    },
    {
      q: "How do I get my German tax ID?",
      a: "You don't apply for it. After you register your address, the Federal Central Tax Office sends your tax ID by letter. If it hasn't arrived after three months, you can request it from the BZSt.",
      sourceIds: ["bzst-faq"],
    },
    {
      q: "What happens if I register late?",
      a: "Not registering, or not registering on time, is an administrative offence that can be fined up to €1,000.",
      sourceIds: ["bmg"],
    },
    {
      q: "Does the Anmeldung cost anything?",
      a: "Not in Berlin, which lists no fee, and you receive your registration certificate straight away at the appointment.",
      sourceIds: ["berlin-anmeldung"],
    },
  ],

  sources: [
    { id: "bmg", title: "Federal Act on Registration (Bundesmeldegesetz), English translation: sections 17, 19, 27 and 54", publisher: "Federal Ministry of Justice (gesetze-im-internet.de)", url: "https://www.gesetze-im-internet.de/englisch_bmg/englisch_bmg.html", official: true, accessed: ACCESSED },
    { id: "berlin-anmeldung", title: "Wohnsitz – Alleinige Wohnung oder Hauptwohnung anmelden", publisher: "Service Berlin (State of Berlin)", url: "https://service.berlin.de/dienstleistung/120686/", official: true, accessed: ACCESSED },
    { id: "muenchen", title: "Residence registration", publisher: "City of Munich", url: "https://stadt.muenchen.de/infos/residence-registration.html", official: true, accessed: ACCESSED },
    { id: "frankfurt-registration", title: "Registration of residence", publisher: "City of Frankfurt am Main", url: "https://frankfurt.de/english/service-and-city-hall/service-and-administration/municipal-offices/citizens-office-statistics-and-elections/our-services/registration-of-residence", official: true, accessed: ACCESSED },
    { id: "frankfurt-landlord", title: "Confirmation from the landlord", publisher: "City of Frankfurt am Main", url: "https://frankfurt.de/english/service-and-city-hall/service-and-administration/municipal-offices/citizens-office-statistics-and-elections/our-services/confirmation-from-the-landlord", official: true, accessed: ACCESSED },
    { id: "bzst-faq", title: "Questions and answers about the tax identification number", publisher: "Federal Central Tax Office (BZSt)", url: "https://www.bzst.de/EN/Private_individuals/Tax_identification_number/FAQ/faq_tin_node.html", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ counts down your two-week Anmeldung deadline from your move-in date, reminds you to get the landlord's confirmation, and keeps your Meldebestätigung and passport copies together in your document vault.",
  related: ["moving-from-us-to-germany", "germany-opportunity-card", "moving-abroad-with-kids"],
};
