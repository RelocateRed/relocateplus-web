import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-11-11";

export const ukReturnFromSpainPortugal: Guide = {
  slug: "moving-back-to-uk-from-spain-portugal",
  status: "published",
  datePublished: "2026-11-11",
  fromCode: "EU",
  toCode: "GB",
  fromName: "Spain or Portugal",
  toName: "Moving back to the UK",
  kind: "topic",
  labels: { visas: "Who can move back, and how", costs: "Costs to plan for" },

  title: "Moving Back to the UK from Spain or Portugal (2026): Checklist",
  description:
    "Returning to the UK from Spain or Portugal: ToR1 relief for your belongings, UK tax residence, NHS access, pets, cars, deregistering abroad and family visas.",
  h1: "Moving back to the UK from Spain or Portugal: what to do before and after you return",

  summary: [
    {
      text: "British citizens can move back to the UK whenever they like, but several things don't happen by themselves. Before you ship anything, ask HMRC for Transfer of Residence (ToR) relief so your belongings come in without import duty or VAT. You qualify if you've lived outside the UK for at least 12 consecutive months and have had the goods for at least 6 months.",
      sourceIds: ["govuk-tor", "govuk-moving"],
    },
    {
      text: "Once you're back you'll usually be UK tax resident again, you can use the NHS when you can show you've returned to live here, and a partner who isn't British or settled needs a family visa. Before leaving Spain, deregister from the padrón and tell the foreigners' office and your health centre. In both countries, cancel your S1 if the NHS pays for your healthcare.",
      sourceIds: ["govuk-tax-return", "govuk-nhs-return", "govuk-returning", "govuk-living-spain", "govuk-living-pt"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "ToR relief on belongings", value: "Lived abroad 12+ months, goods owned 6+ months", sourceIds: ["govuk-tor"] },
    { label: "Window to bring goods in", value: "Within 12 months of moving back", sourceIds: ["govuk-tor"] },
    { label: "UK tax", value: "Usually UK resident again when you return", sourceIds: ["govuk-tax-return"] },
    { label: "NHS", value: "Available once you show you live in the UK again", sourceIds: ["govuk-nhs-return"] },
    { label: "Dog tapeworm treatment", value: "24 to 120 hours before you arrive", sourceIds: ["govuk-pets-tapeworm"] },
    { label: "Bringing a car", value: "Tell HMRC within 14 days of arrival", sourceIds: ["govuk-vehicles"] },
  ],

  visaOptions: [
    {
      name: "British citizens",
      bestFor: "You, if you hold a British passport.",
      requirement:
        "You don't need a visa or permission to return. Travel on a valid British passport: dual nationals also have to carry a valid British passport or a certificate of entitlement when they travel to the UK.",
      sourceIds: ["govuk-returning", "govuk-living-spain"],
    },
    {
      name: "Partner or children who aren't British",
      bestFor: "A Spanish, Portuguese or other non-British partner and family.",
      requirement:
        "Family members who already have UK citizenship or settled status don't need to do anything. Others, including a future spouse, need a family visa before they move.",
      notes: [
        "An EU Settlement Scheme family permit route existed for relatives who lived with you in the EU before 1 January 2021. Its deadline was 29 March 2022, unless you have reasonable grounds for returning later.",
      ],
      sourceIds: ["govuk-returning"],
    },
    {
      name: "Returning with a dog, cat or ferret",
      bestFor: "Pet owners travelling to England, Wales or Scotland.",
      requirement:
        "Your pet needs a microchip, a rabies vaccination given after the microchip, a pet travel document from your vet and travel on an approved route. Dogs also need tapeworm treatment from a vet before every entry.",
      sourceIds: ["govuk-pets", "govuk-pets-tapeworm"],
    },
  ],

  steps: [
    {
      when: "Before you ship anything",
      title: "Apply to HMRC for ToR relief (form ToR1)",
      detail:
        "You must get HMRC's approval before you claim the relief. HMRC gives you a unique reference number (URN) for your import declaration. Without a valid URN you may be billed import duties and administration charges on your own belongings.",
      sourceIds: ["govuk-tor", "govuk-moving"],
    },
    {
      when: "Before you leave Spain",
      title: "Deregister from the padrón and tell the authorities",
      detail:
        "GOV.UK's Spain guide says to deregister from the padrón at your town hall and to tell your local foreigners' office (Oficina de Extranjería) and your health centre that you're leaving.",
      sourceIds: ["govuk-living-spain"],
    },
    {
      when: "Before you leave either country",
      title: "Cancel your S1 if you have one",
      detail:
        "If the NHS funds your Spanish or Portuguese healthcare through an S1 form, contact the NHS Overseas Healthcare Team to cancel it.",
      sourceIds: ["govuk-living-spain", "govuk-living-pt"],
    },
    {
      when: "At least 3 weeks before travel",
      title: "Get your pet's paperwork in order",
      detail:
        "The microchip has to be in place before the rabies vaccination, and you have to wait at least 21 full days after the first vaccination before travelling. A vet must treat a dog for tapeworm no less than 24 hours and no more than 120 hours before you enter Great Britain, and record it in the pet passport or health certificate.",
      sourceIds: ["govuk-pets", "govuk-pets-tapeworm"],
    },
    {
      when: "Within 12 months of moving",
      title: "Bring your belongings in",
      detail:
        "Goods covered by ToR relief have to be imported within 12 months of you coming to live in the UK, and they can arrive in several consignments. Private cars and their trailers are eligible too.",
      sourceIds: ["govuk-tor"],
    },
    {
      when: "Within 14 days of arriving with a car",
      title: "Tell HMRC about your vehicle",
      detail:
        "A vehicle you import permanently has to be notified to HMRC within 14 days of arriving (the NOVA declaration). After that come vehicle approval, registering and taxing it with DVLA, and insurance. You can be prosecuted for using it on public roads before completing the steps.",
      sourceIds: ["govuk-vehicles", "govuk-tor"],
    },
    {
      when: "First weeks back",
      title: "Register with a GP and keep proof you're back",
      detail:
        "Register with a GP near your home using form GMS1. The first time you're treated, bring at least two documents showing you've returned, such as a tenancy or purchase agreement, a recent utility or council tax bill, or evidence that you ended your home, job or contracts abroad.",
      sourceIds: ["govuk-nhs-return"],
    },
    {
      when: "First weeks back",
      title: "Sort out UK tax, licence and schools",
      detail:
        "Register for Self Assessment if you become self-employed or have other untaxed income. Use GOV.UK's licence tool to see how to exchange a Spanish or Portuguese driving licence, and apply to your local council for a state school place for children aged 4 or over in England.",
      sourceIds: ["govuk-tax-return", "govuk-licence-tool", "govuk-returning"],
    },
  ],

  documents: [
    { item: "Valid British passport for every British family member", sourceIds: ["govuk-returning", "govuk-living-spain"] },
    { item: "HMRC's ToR approval and URN, before your goods are shipped", sourceIds: ["govuk-tor"] },
    { item: "Details of the goods you're bringing, with supporting evidence, for the ToR1 form", sourceIds: ["govuk-tor"] },
    { item: "UK tenancy or purchase agreement, or a recent utility or council tax bill", sourceIds: ["govuk-nhs-return"] },
    { item: "Proof you no longer live abroad (home sold or rented out, job ended, contracts cancelled)", sourceIds: ["govuk-nhs-return"] },
    { item: "Pet passport or health certificate showing microchip, rabies vaccination and tapeworm treatment", sourceIds: ["govuk-pets", "govuk-pets-tapeworm"] },
    { item: "Motor insurance proof (Green Card) for a vehicle registered in the EU", sourceIds: ["govuk-returning"] },
    { item: "Family visa for a partner or child who isn't British or settled", sourceIds: ["govuk-returning"] },
  ],

  costs: [
    { item: "Import duty and VAT on belongings, with ToR relief", amount: "None", note: "Relief has to be approved by HMRC first.", sourceIds: ["govuk-tor", "govuk-moving"] },
    { item: "Belongings without ToR relief", amount: "Customs Duty plus VAT", note: "VAT is charged on the value of the goods plus shipping, insurance and any duty.", sourceIds: ["govuk-moving"] },
    { item: "Alcohol and tobacco in your shipment", amount: "Excise Duty applies", note: "They're excluded from ToR relief.", sourceIds: ["govuk-moving", "govuk-tor"] },
    { item: "A&E treatment", amount: "Free", sourceIds: ["govuk-nhs-return"] },
  ],
  costNote: "HMRC decides ToR relief per application, so apply before you book a removal firm.",

  tax: [
    {
      text: "If you come back to the UK after living abroad, you'll usually be classed as UK resident again. You then pay UK tax on your UK income and gains and on your foreign income and gains. The tax year is usually split into a non-resident part and a resident part, but not if you lived abroad for less than a full tax year.",
      sourceIds: ["govuk-tax-return", "govuk-residence"],
    },
    {
      text: "Watch the temporary non-residence rules. If you return within 5 years of moving abroad and were UK resident in at least 4 of the 7 tax years before you left, you may have to pay UK tax on certain income and gains you made while you were away. Wages and other employment income aren't included.",
      sourceIds: ["govuk-tax-return"],
    },
    {
      text: "You're automatically UK resident for a tax year in which you spend 183 or more days in the UK. The UK has double taxation agreements with Spain and with Portugal so the same income isn't taxed twice. The UK tax year runs from 6 April to 5 April, so take advice on the year you move.",
      sourceIds: ["govuk-residence", "govuk-living-spain", "govuk-living-pt", "govuk-tax-return"],
    },
  ],

  family: [
    {
      text: "A partner or child without UK citizenship or settled status needs a family visa. For children aged 4 or over in England you apply to the local council for a state school place; Scotland, Wales and Northern Ireland have their own processes.",
      sourceIds: ["govuk-returning"],
    },
  ],

  pitfalls: [
    {
      text: "Shipping before HMRC has approved your ToR application. Without a valid URN you may be charged import duties on things you already own.",
      sourceIds: ["govuk-tor"],
    },
    {
      text: "Selling or lending items too soon. Goods brought in under ToR relief can't be lent, hired out or transferred within 12 months of the date you moved.",
      sourceIds: ["govuk-tor"],
    },
    {
      text: "Missing the tapeworm window for a dog. A pet that doesn't meet the rules can be quarantined for up to 4 months, at your cost, or refused entry if you came by sea.",
      sourceIds: ["govuk-pets", "govuk-pets-tapeworm"],
    },
    {
      text: "Staying away too long if you might go back. With Withdrawal Agreement permanent residence you only lose it after more than 5 consecutive years outside that country, but before permanent residence you must spend at least 6 months in every 12 there.",
      sourceIds: ["govuk-wa"],
    },
    {
      text: "Driving an imported car before it's notified, approved, registered and insured in the UK.",
      sourceIds: ["govuk-vehicles"],
    },
  ],

  faqs: [
    {
      q: "Can I use the NHS straight away when I move back to the UK?",
      a: "Yes. UK nationals who return to live in the UK can use the NHS. Register with a GP using form GMS1, and the first time you're treated bring at least two documents that show you live here again, such as a tenancy agreement, a recent council tax or utility bill, or proof that you ended your home or job abroad. A&E treatment is free.",
      sourceIds: ["govuk-nhs-return"],
    },
    {
      q: "Do I pay import tax on my belongings when I move back from Spain or Portugal?",
      a: "Not if HMRC approves Transfer of Residence relief. You need to have lived outside the UK for at least 12 consecutive months, have had the goods for at least 6 months and bring them in within 12 months of moving. Apply with form ToR1 before you ship. Without relief you pay Customs Duty and VAT.",
      sourceIds: ["govuk-tor", "govuk-moving"],
    },
    {
      q: "Will I be UK tax resident as soon as I return?",
      a: "Usually, yes. People who come back after living abroad are normally classed as UK resident again and taxed on UK and foreign income and gains. The tax year is usually split so foreign income is only taxed for the part after you return, provided you lived abroad for at least a full tax year.",
      sourceIds: ["govuk-tax-return", "govuk-residence"],
    },
    {
      q: "Can I bring my dog back to the UK from Spain or Portugal?",
      a: "Yes. The dog needs a microchip, a rabies vaccination given at least 21 full days before travel, a pet travel document and travel on an approved route. A vet must also give tapeworm treatment between 24 and 120 hours before you enter Great Britain and record it in the pet's document.",
      sourceIds: ["govuk-pets", "govuk-pets-tapeworm"],
    },
    {
      q: "Do I lose my Spanish or Portuguese residence if I move back to the UK?",
      a: "It depends on your status and how long you stay away. Under the Withdrawal Agreement, people with permanent residence only lose it after living outside that country for more than 5 consecutive years. If you don't have permanent residence yet, you must spend at least 6 months in any 12-month period there to keep your rights.",
      sourceIds: ["govuk-wa"],
    },
    {
      q: "Can my Spanish or Portuguese partner move to the UK with me?",
      a: "Only with the right status. A partner who already has UK citizenship or settled status can simply move. Otherwise they need a family visa before travelling. The earlier EU Settlement Scheme family permit route closed on 29 March 2022, except where there are reasonable grounds for a later return.",
      sourceIds: ["govuk-returning"],
    },
  ],

  sources: [
    { id: "govuk-returning", title: "Returning to the UK", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/returning-to-the-uk", official: true, accessed: ACCESSED },
    { id: "govuk-tor", title: "Transfer of residence to the UK (updated 12 November 2025)", publisher: "GOV.UK (HM Revenue & Customs)", url: "https://www.gov.uk/guidance/transfer-of-residence-to-great-britain", official: true, accessed: ACCESSED },
    { id: "govuk-moving", title: "Moving personal belongings to the UK", publisher: "GOV.UK", url: "https://www.gov.uk/moving-to-uk", official: true, accessed: ACCESSED },
    { id: "govuk-tax-return", title: "Tax if you return to the UK", publisher: "GOV.UK", url: "https://www.gov.uk/tax-return-uk", official: true, accessed: ACCESSED },
    { id: "govuk-residence", title: "Tax on foreign income: UK residence and tax", publisher: "GOV.UK", url: "https://www.gov.uk/tax-foreign-income/residence", official: true, accessed: ACCESSED },
    { id: "govuk-nhs-return", title: "Using the NHS when you return to live in the UK", publisher: "GOV.UK (Department of Health and Social Care)", url: "https://www.gov.uk/guidance/using-the-nhs-when-you-return-to-live-in-the-uk", official: true, accessed: ACCESSED },
    { id: "govuk-pets", title: "Bringing your pet dog, cat or ferret to Great Britain", publisher: "GOV.UK", url: "https://www.gov.uk/bring-pet-to-great-britain", official: true, accessed: ACCESSED },
    { id: "govuk-pets-tapeworm", title: "Bringing your pet to Great Britain: tapeworm treatment for dogs", publisher: "GOV.UK", url: "https://www.gov.uk/bring-pet-to-great-britain/tapeworm-treatment-dogs", official: true, accessed: ACCESSED },
    { id: "govuk-vehicles", title: "Importing vehicles into the UK", publisher: "GOV.UK", url: "https://www.gov.uk/importing-vehicles-into-the-uk", official: true, accessed: ACCESSED },
    { id: "govuk-licence-tool", title: "Exchange a non-GB driving licence", publisher: "GOV.UK", url: "https://www.gov.uk/exchange-nongb-driving-licence", official: true, accessed: ACCESSED },
    { id: "govuk-living-spain", title: "Living in Spain (updated 3 July 2026)", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/living-in-spain", official: true, accessed: ACCESSED },
    { id: "govuk-living-pt", title: "Living in Portugal (updated 10 July 2026)", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/living-in-portugal", official: true, accessed: ACCESSED },
    { id: "govuk-wa", title: "The Withdrawal Agreement: what UK nationals need to know about citizens' rights", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/the-withdrawal-agreement-what-uk-nationals-need-to-know-about-citizens-rights", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ keeps the dates of your move back in one agenda, from the ToR1 application to your dog's tapeworm window and the 14-day vehicle notification, and stores your HMRC approval, pet papers and proof of address in your document vault.",
  related: ["living-in-spain-after-brexit", "living-in-portugal-after-brexit", "moving-from-uk-to-spain", "moving-from-uk-to-portugal", "moving-abroad-with-a-dog-or-cat"],
};
