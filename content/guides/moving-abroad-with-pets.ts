import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-24";

export const movingAbroadWithPets: Guide = {
  slug: "moving-abroad-with-a-dog-or-cat",
  status: "published",
  datePublished: "2026-10-24",
  fromCode: "INT",
  toCode: "INT",
  fromName: "any country",
  toName: "Moving with pets",
  kind: "topic",
  labels: { visas: "Rules by destination", costs: "Official fees" },

  title: "Moving Abroad With a Dog or Cat: Microchip, Rabies & Paperwork",
  description:
    "The order that matters when you move abroad with a pet: microchip, rabies jab, waiting periods, titre tests and health certificates for the EU, UK and Australia.",
  h1: "Moving abroad with a dog or cat: the step-by-step guide",

  summary: [
    {
      text: "The order of steps matters when you move with a pet. In the EU and Great Britain your pet must be microchipped before (or at the same time as) its rabies vaccination, and you then wait at least 21 days before travelling.",
      sourceIds: ["eu-pets", "govuk-to-eu", "govuk-to-gb"],
    },
    {
      text: "Coming from many non-EU countries, the EU also wants a rabies antibody blood test followed by a three-month wait. Australia goes further: an import permit, an antibody test and at least 10 days of post-entry quarantine. So start months ahead, not weeks.",
      sourceIds: ["eu-pets", "au-rabies", "au-fees"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "First step everywhere", value: "Microchip before (or with) the rabies vaccine", sourceIds: ["eu-pets", "govuk-to-eu", "govuk-to-gb"] },
    { label: "Rabies jab (EU)", value: "From 12 weeks old, then wait 21 days", sourceIds: ["eu-pets"] },
    { label: "EU antibody test (many non-EU countries)", value: "Then wait 3 months from the blood sample", sourceIds: ["eu-pets"] },
    { label: "EU health certificate", value: "Issued ≤ 10 days before arrival", sourceIds: ["eu-pets"] },
    { label: "Australia import permit", value: "AUD 626 for the first cat or dog", sourceIds: ["au-fees"] },
    { label: "Pets per person (EU and GB)", value: "Up to 5 under the pet rules", sourceIds: ["eu-pets", "govuk-to-gb"] },
  ],

  visaOptions: [
    {
      name: "Into the EU from outside the EU",
      bestFor: "Moving to an EU country with a dog, cat or ferret.",
      requirement:
        "Microchip, then a rabies vaccination at 12 weeks or older and a 21-day wait. From most non-EU countries, a rabies antibody test taken at least 30 days after vaccination and a 3-month wait from the sample date. An official state vet issues the EU animal health certificate no more than 10 days before arrival.",
      notes: [
        "Dogs going to Finland, Ireland, Malta or Norway need tapeworm treatment 1–5 days before travel.",
        "You generally enter through a designated travellers' point of entry.",
      ],
      sourceIds: ["eu-pets"],
    },
    {
      name: "From Great Britain to the EU",
      bestFor: "People in England, Scotland or Wales moving to the EU.",
      requirement:
        "A new animal health certificate from your vet for each trip; it's valid for entry to the EU for 10 days from issue, and for onward EU travel and return to GB for 6 months. Residents of England, Scotland and Wales can't use a pet passport to enter the EU.",
      sourceIds: ["govuk-to-eu"],
    },
    {
      name: "Into Great Britain",
      bestFor: "Moving to England, Scotland or Wales with a pet.",
      requirement:
        "Microchip before the rabies vaccine, a 21-day wait, the right pet travel document for the country you come from (and a rabies blood test from some countries), tapeworm treatment for dogs 1–5 days before arrival, and an approved travel route.",
      notes: [
        "Banned dog breeds need a valid Certificate of Exemption.",
        "Pets that don't comply can be quarantined for up to 4 months, at your cost.",
      ],
      sourceIds: ["govuk-to-gb"],
    },
    {
      name: "Into Australia",
      bestFor: "Moving to Australia with a cat or dog.",
      requirement:
        "An import permit, plus (from approved \"Group 3\" countries) a rabies neutralising antibody test at least 3–4 weeks after vaccination, valid for 12 months, and 180 days' continuous residence in an approved country before export. Post-entry quarantine is at least 30 days, or at least 10 days with an optional identity check.",
      sourceIds: ["au-rabies", "au-fees"],
    },
    {
      name: "Leaving the United States",
      bestFor: "Americans taking a pet abroad.",
      requirement:
        "A USDA-accredited vet completes the destination's health certificate; if the country requires it, USDA APHIS then endorses it (online through VEHCS or by mail). Travel with the original paperwork — APHIS says electronic copies aren't accepted by destination officials.",
      sourceIds: ["aphis-process", "aphis-faq"],
    },
  ],

  steps: [
    {
      when: "6+ months before (Australia: earlier)",
      title: "Check your destination's rules",
      detail:
        "Requirements change and vary by country. In the US, APHIS advises contacting an accredited vet as early as possible and building a schedule; it says the process can take a few weeks to many months.",
      sourceIds: ["aphis-process", "aphis-faq"],
    },
    {
      when: "Step 1",
      title: "Microchip your pet",
      detail:
        "Do this before, or at the same time as, the rabies vaccination. If the chip comes after the vaccine, the vaccine doesn't count for EU or GB travel and must be repeated.",
      sourceIds: ["eu-pets", "govuk-to-eu"],
    },
    {
      when: "Step 2",
      title: "Vaccinate against rabies",
      detail:
        "For the EU and GB, your pet must be at least 12 weeks old. Then wait at least 21 full days after the first vaccination before travelling.",
      sourceIds: ["eu-pets", "govuk-to-eu", "govuk-to-gb"],
    },
    {
      when: "Step 3 (if required)",
      title: "Do the antibody blood test",
      detail:
        "From most non-EU countries into the EU: blood sample at least 30 days after vaccination, then wait 3 months. For Australia: at least 3–4 weeks after the primary course; the result is valid for 12 months.",
      sourceIds: ["eu-pets", "au-rabies"],
    },
    {
      when: "Close to travel",
      title: "Get the health certificate",
      detail:
        "For the EU, an official vet issues it no more than 10 days before your pet arrives. From the US, an accredited vet signs it and APHIS endorses it if your destination requires that.",
      sourceIds: ["eu-pets", "aphis-process"],
    },
    {
      when: "1–5 days before",
      title: "Tapeworm treatment for dogs (where required)",
      detail:
        "Dogs entering Great Britain, Finland, Ireland, Malta or Norway need tapeworm treatment between 24 hours and 5 days before arrival or travel.",
      sourceIds: ["govuk-to-gb", "eu-pets"],
    },
  ],

  documents: [
    { item: "Microchip record (implanted before the rabies vaccine)", sourceIds: ["eu-pets", "govuk-to-gb"] },
    { item: "Rabies vaccination record", sourceIds: ["eu-pets", "govuk-to-eu"] },
    { item: "Rabies antibody test result, where required", sourceIds: ["eu-pets", "au-rabies"] },
    { item: "Animal health certificate (EU) or destination's health certificate", sourceIds: ["eu-pets", "govuk-to-eu", "aphis-faq"] },
    { item: "USDA APHIS endorsement, if the destination requires it", sourceIds: ["aphis-faq", "aphis-process"] },
    { item: "Import permit (e.g. Australia)", sourceIds: ["au-fees"] },
    { item: "Tapeworm treatment entry (dogs, certain countries)", sourceIds: ["eu-pets", "govuk-to-gb"] },
  ],

  costs: [
    { item: "Australia import permit, first cat or dog", amount: "AUD 626", note: "AUD 135 lodgement + AUD 491 assessment.", sourceIds: ["au-fees"] },
    { item: "Australia, each extra animal in the same consignment", amount: "AUD 299", sourceIds: ["au-fees"] },
    { item: "USDA endorsement", amount: "See APHIS fee schedule", note: "No endorsement fee for ADA service dogs.", sourceIds: ["aphis-process"] },
  ],
  costNote:
    "Vet visits, microchips, vaccinations, blood tests, quarantine stays and flights vary by provider and country, so we don't estimate them.",

  family: [
    {
      text: "You can bring up to five pets under the EU and GB pet rules. More than five — or a pet arriving more than five days before or after you in GB — falls under stricter commercial rules unless it's for a competition, show or sporting event.",
      sourceIds: ["eu-pets", "govuk-to-gb"],
    },
    {
      text: "Someone else can bring your pet into Great Britain if you authorise them in writing.",
      sourceIds: ["govuk-to-gb"],
    },
  ],

  pitfalls: [
    {
      text: "Vaccinating before microchipping. The rabies jab then doesn't count and has to be repeated.",
      sourceIds: ["govuk-to-eu", "eu-pets"],
    },
    {
      text: "Forgetting the 3-month wait after the EU antibody test. It adds at least three months to a move from most non-EU countries.",
      sourceIds: ["eu-pets"],
    },
    {
      text: "Getting the health certificate too early. For EU entry it must be issued no more than 10 days before arrival.",
      sourceIds: ["eu-pets", "govuk-to-eu"],
    },
    {
      text: "Travelling with copies. APHIS says destination officials won't accept electronic versions of US-endorsed paperwork.",
      sourceIds: ["aphis-process"],
    },
  ],

  faqs: [
    {
      q: "How far ahead should I start preparing my pet for a move abroad?",
      a: "Months, not weeks. The EU needs at least 21 days after the rabies jab, plus a 3-month wait after an antibody test from many non-EU countries. Australia also requires 180 days' residence in an approved country before export.",
      sourceIds: ["eu-pets", "au-rabies"],
    },
    {
      q: "Can I use a UK pet passport to move to the EU?",
      a: "Not if you live in England, Scotland or Wales. You need an animal health certificate from your vet for each trip.",
      sourceIds: ["govuk-to-eu"],
    },
    {
      q: "Does my dog need tapeworm treatment?",
      a: "For Great Britain, Finland, Ireland, Malta and Norway, yes: between 24 hours and 5 days before arrival.",
      sourceIds: ["govuk-to-gb", "eu-pets"],
    },
    {
      q: "Does my pet have to go into quarantine in Australia?",
      a: "Yes. Cats and dogs from approved Group 3 countries spend at least 30 days in post-entry quarantine, or at least 10 days with an optional identity check.",
      sourceIds: ["au-rabies"],
    },
    {
      q: "Who signs my pet's health certificate in the US?",
      a: "A USDA-accredited veterinarian. If your destination requires it, USDA APHIS then endorses the certificate.",
      sourceIds: ["aphis-faq", "aphis-process"],
    },
  ],

  sources: [
    { id: "eu-pets", title: "Travelling with pets and other animals in the EU (checked 01/09/2026)", publisher: "European Union (Your Europe)", url: "https://europa.eu/youreurope/citizens/travel/carry/animal-plant/index_en.htm", official: true, accessed: ACCESSED },
    { id: "govuk-to-eu", title: "Taking your pet dog, cat or ferret abroad", publisher: "GOV.UK", url: "https://www.gov.uk/taking-your-pet-abroad", official: true, accessed: ACCESSED },
    { id: "govuk-to-gb", title: "Bringing your pet dog, cat or ferret to Great Britain", publisher: "GOV.UK", url: "https://www.gov.uk/bring-pet-to-great-britain", official: true, accessed: ACCESSED },
    { id: "au-rabies", title: "Rabies vaccination and tests for cats and dogs coming to Australia", publisher: "Australian Government Department of Agriculture, Fisheries and Forestry", url: "https://www.agriculture.gov.au/cats-dogs/rabies-neutralising-antibody", official: true, accessed: ACCESSED },
    { id: "au-fees", title: "Fees for cat and dog import permit applications (updated 01 July 2026)", publisher: "Australian Government Department of Agriculture, Fisheries and Forestry", url: "https://www.agriculture.gov.au/biosecurity-trade/cats-dogs/fees-for-cat-and-dog-import-permit-applications", official: true, accessed: ACCESSED },
    { id: "aphis-process", title: "Pet travel process overview (USA to another country)", publisher: "USDA APHIS", url: "https://www.aphis.usda.gov/pet-travel/pet-travel-process-overview", official: true, accessed: ACCESSED },
    { id: "aphis-faq", title: "Frequently asked questions about traveling with your pet", publisher: "USDA APHIS", url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/frequently-asked-questions-about-traveling-your-pet", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ keeps your pet's timeline straight: put the vaccine date, the 21-day and antibody-test waits, the 10-day certificate window and the tapeworm treatment in the deadline agenda and calendar, and store your pet's records with the rest of your family documents.",
  related: ["moving-from-uk-to-australia", "moving-from-us-to-portugal", "moving-from-uk-to-spain"],
};
