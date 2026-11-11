import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-11-11";

export const portugalAfterBrexit: Guide = {
  slug: "living-in-portugal-after-brexit",
  status: "draft",
  fromCode: "GB",
  toCode: "PT",
  fromName: "the UK",
  toName: "Portugal after Brexit",
  kind: "topic",
  labels: { visas: "Which group are you in?", costs: "Fees and charges" },

  title: "Living in Portugal After Brexit: UK Citizens' Rules for 2026",
  description:
    "UK citizens in Portugal in 2026: the Withdrawal Agreement residence card, visas if you move now, the 90/180 rule, EES at the border, UK driving licences and the SNS.",
  h1: "Living in Portugal after Brexit: the rules for UK citizens in 2026",

  summary: [
    {
      text: "British citizens in Portugal fall into two groups. If you were living there legally before 1 January 2021, you keep your rights under the Withdrawal Agreement and should hold a biometric Withdrawal Agreement residence card. If you move now, you enter on a residence visa and apply for a residence card with AIMA after you arrive.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      text: "Without residence you can spend up to 90 days in any 180-day period in the whole Schengen area. Residents with a biometric card don't register in the EU's Entry/Exit System (EES), can drive on a valid UK licence until it expires, and sign up with the national health service (SNS) at their local health centre.",
      sourceIds: ["govuk-travel-pt", "govuk-living-pt"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Cut-off date", value: "Legally resident before 1 January 2021", sourceIds: ["govuk-living-pt"] },
    { label: "Your document", value: "Biometric Withdrawal Agreement residence card", sourceIds: ["govuk-living-pt"] },
    { label: "Permanent card", value: "After 5 years of residence, valid 10 years", sourceIds: ["govuk-living-pt"] },
    { label: "Visitors", value: "90 days in any 180-day period", sourceIds: ["govuk-travel-pt"] },
    { label: "EES", value: "Not needed with a biometric residence card", sourceIds: ["govuk-living-pt"] },
    { label: "UK driving licence", value: "Usable until it expires", sourceIds: ["govuk-living-pt"] },
  ],

  visaOptions: [
    {
      name: "You lived in Portugal before 1 January 2021",
      bestFor: "British citizens, and their families, who were legally resident before the end of the transition period.",
      requirement:
        "You have Withdrawal Agreement rights and should hold the biometric residence card. If you never got one, email AIMA at brexit@aima.gov.pt with evidence that you were legally resident before 1 January 2021, or had moved permanently before that date even if you weren't registered.",
      notes: ["If AIMA asks for more information or documents, respond within 10 working days."],
      sourceIds: ["govuk-living-pt"],
    },
    {
      name: "You're moving to Portugal now",
      bestFor: "British citizens arriving after Brexit to work, retire, study or work remotely.",
      requirement:
        "Enter Portugal on a residence visa, then apply for a residence card after you arrive. AIMA handles the applications. Temporary cards are renewed every 2 to 3 years, and you may apply for permanent residence after holding one for at least 5 years.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      name: "You visit, or own a holiday home",
      bestFor: "British citizens who aren't resident.",
      requirement:
        "No visa for up to 90 days in any 180-day period. Visits to other Schengen countries in the previous 180 days count towards the 90, and overstaying may lead to a ban of up to 3 years.",
      sourceIds: ["govuk-travel-pt"],
    },
  ],

  recentChanges: [
    {
      text: "The EU's Entry/Exit System now registers fingerprints and a photo of non-EU travellers at the border. British nationals legally resident in Portugal with a biometric residence card don't need to register. Without an accepted document you may be wrongly flagged as overstaying and denied entry.",
      sourceIds: ["govuk-living-pt", "govuk-travel-pt"],
    },
    {
      text: "GOV.UK updated its residence card and driving information for Portugal on 10 July 2026. It now says registered residents can drive on a UK or Gibraltar licence until it expires.",
      sourceIds: ["govuk-living-pt"],
    },
  ],

  steps: [
    {
      when: "Now",
      title: "Check which residence document you hold",
      detail:
        "People covered by the Withdrawal Agreement should have the biometric card. If you only have older EU residency documents, or nothing, you need to get the card.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      when: "If you have no card",
      title: "Email AIMA with your evidence",
      detail:
        "Write to brexit@aima.gov.pt and attach proof of your residence before 1 January 2021. Reply within 10 working days if AIMA asks for anything else. If you're refused you may be able to appeal, and GOV.UK suggests getting legal advice.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      when: "At your AIMA appointment",
      title: "Give your biometric data and pay the fee",
      detail:
        "Bring your valid passport, proof of address, your original EU residency documents if you have them, your NIF, your health number (NNU) and your NISS if you have one. Go even if you're still waiting for a health or tax number. Your old EU documents are cancelled and returned, and AIMA posts the new card.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      when: "After 5 years of residence",
      title: "Apply for the permanent card",
      detail: "Once you've lived in Portugal for 5 years you can apply for a permanent residence card, which is valid for 10 years.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      when: "Every time you travel",
      title: "Carry your passport and your residence card together",
      detail:
        "Take both when you enter, leave or travel within the Schengen area. If you can't show the residence document, your passport may be stamped. Carrying a valid residence document is also a legal requirement inside Portugal, and police can fine you if you can't show it.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      when: "When you become resident",
      title: "Register with the health service",
      detail:
        "Go to your local health centre with your residence certificate, passport and NIF to get a health user number (NNU). You then have the same rights to treatment as a Portuguese citizen.",
      sourceIds: ["govuk-living-pt", "govuk-health-pt"],
    },
    {
      when: "Before your UK licence expires",
      title: "Exchange your driving licence",
      detail:
        "Get a check code from DVLA (or DVA for Northern Ireland), then give biometric data and surrender your licence at the IMT, which issues a temporary permit (guia). A test normally isn't required. You can exchange up to 2 years after expiry, but you can't drive on the expired licence in the meantime.",
      sourceIds: ["govuk-living-pt"],
    },
  ],

  documents: [
    { item: "Valid British passport", sourceIds: ["govuk-living-pt"] },
    { item: "Biometric Withdrawal Agreement residence card, or your residence card if you moved after 2021", sourceIds: ["govuk-living-pt"] },
    { item: "Evidence of residence before 1 January 2021, if you never received a card", sourceIds: ["govuk-living-pt"] },
    { item: "Proof of address in Portugal", sourceIds: ["govuk-living-pt"] },
    { item: "Original EU residency documents, if you still have them", sourceIds: ["govuk-living-pt"] },
    { item: "NIF (tax number), NNU (health number) and NISS (social security number)", sourceIds: ["govuk-living-pt"] },
    { item: "DVLA or DVA check code, for a licence exchange", sourceIds: ["govuk-living-pt"] },
    { item: "S1 form, if you receive a UK State Pension", sourceIds: ["govuk-health-pt", "govuk-living-pt"] },
  ],

  costs: [
    { item: "Withdrawal Agreement residence card", amount: "Fee paid at your AIMA appointment", note: "GOV.UK doesn't state the amount; AIMA confirms it when you attend.", sourceIds: ["govuk-living-pt"] },
    { item: "EES registration at the border, for non-residents", amount: "Free", sourceIds: ["govuk-travel-pt"] },
    { item: "Private health insurance", amount: "Optional", note: "You still register with the state system.", sourceIds: ["govuk-living-pt"] },
  ],
  costNote:
    "GOV.UK's healthcare page says SNS patients can be asked for user fees and part of the cost of prescriptions. That page dates from 2021, so check current charges with your health centre.",

  tax: [
    {
      text: "The UK and Portugal have a double taxation agreement, so you don't pay tax on the same income in both countries. You need a Portuguese tax number (NIF) to work and pay tax in Portugal.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      text: "If you're covered by the Withdrawal Agreement, your UK State Pension increases in line with rates in the UK.",
      sourceIds: ["govuk-wa"],
    },
  ],

  family: [
    {
      text: "Family members who were living with you in Portugal by 31 December 2020 are covered by the Withdrawal Agreement too. Children aged 17 and under who travel without a parent or guardian need a letter of authority, with the parent's signature witnessed by a notary or solicitor.",
      sourceIds: ["govuk-wa", "govuk-living-pt"],
    },
  ],

  pitfalls: [
    {
      text: "Travelling without the biometric card. GOV.UK warns that without an accepted document you may be wrongly identified as an overstayer and refused entry.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      text: "Counting on residence to cover trips elsewhere. Time in Portugal on your residence card doesn't count towards the 90-day visa-free limit, so keep track of the days you spend in other Schengen countries.",
      sourceIds: ["govuk-living-pt", "govuk-travel-pt"],
    },
    {
      text: "Long absences. Before you have permanent residence you must spend at least 6 months in any 12-month period in Portugal to keep your Withdrawal Agreement rights. With permanent residence, you lose it only after more than 5 consecutive years away.",
      sourceIds: ["govuk-wa"],
    },
    {
      text: "Relying on a UK GHIC. You can't use or renew a UK EHIC or GHIC while living in Portugal unless you're a UK student, or a State Pensioner or frontier worker with a registered S1.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      text: "Not telling AIMA when your address, email or name changes. You may need an appointment for a new card.",
      sourceIds: ["govuk-living-pt"],
    },
  ],

  faqs: [
    {
      q: "Can UK citizens still live in Portugal after Brexit?",
      a: "Yes. If you were legally resident before 1 January 2021 you keep your rights under the Withdrawal Agreement and should hold a biometric residence card. If you move now, you need a residence visa first and then apply for a residence card with AIMA once you've arrived.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      q: "How long can a British citizen stay in Portugal without a visa?",
      a: "Up to 90 days in any 180-day period, and that total covers the whole Schengen area, not just Portugal. Overstaying may get you banned from Schengen countries for up to 3 years. The limit doesn't apply if you hold a residence permit or long-stay visa.",
      sourceIds: ["govuk-travel-pt"],
    },
    {
      q: "Do British residents of Portugal have to register for EES?",
      a: "No. British nationals who are legally resident and hold a biometric residence card don't register with the Entry/Exit System. Carry the card with your passport whenever you cross a Schengen border. If you don't have a card yet, contact AIMA.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      q: "Can I drive in Portugal on my UK licence?",
      a: "Yes. GOV.UK's Portugal guide says registered residents can use a UK or Gibraltar licence until it expires, under an agreement between the two countries. An older GOV.UK driving page adds that the licence should be registered with the IMT within 60 days of your residence certificate being issued, so confirm that with the IMT.",
      sourceIds: ["govuk-living-pt", "govuk-driving-eu"],
    },
    {
      q: "I lived in Portugal before 2021 but never got the Brexit residence card. What now?",
      a: "Email AIMA at brexit@aima.gov.pt with evidence that you were legally resident before 1 January 2021, or had moved permanently by then. If AIMA accepts it, you attend an office to give biometric data and pay the fee, and the card is posted to you.",
      sourceIds: ["govuk-living-pt"],
    },
    {
      q: "Do I have to give up British citizenship to become Portuguese?",
      a: "No. Portugal recognises dual citizenship with the UK, so you don't have to renounce your British citizenship.",
      sourceIds: ["govuk-living-pt"],
    },
  ],

  sources: [
    { id: "govuk-living-pt", title: "Living in Portugal (updated 10 July 2026)", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/living-in-portugal", official: true, accessed: ACCESSED },
    { id: "govuk-travel-pt", title: "Portugal travel advice: entry requirements (updated 11 August 2026)", publisher: "GOV.UK (FCDO)", url: "https://www.gov.uk/foreign-travel-advice/portugal/entry-requirements", official: true, accessed: ACCESSED },
    { id: "govuk-health-pt", title: "Healthcare for UK nationals living in Portugal", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/healthcare-in-portugal-including-madeira", official: true, accessed: ACCESSED },
    { id: "govuk-wa", title: "The Withdrawal Agreement: what UK nationals need to know about citizens' rights", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/the-withdrawal-agreement-what-uk-nationals-need-to-know-about-citizens-rights", official: true, accessed: ACCESSED },
    { id: "govuk-driving-eu", title: "Driving in Europe: UK licence holders living in the EU (23 February 2024)", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/driving-in-the-eu-uk-licence-holders-living-in-the-eu", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ puts the expiry dates of your residence card and UK driving licence in your agenda with reminders, and keeps your card, NIF and health number together in your document vault.",
  related: ["moving-from-uk-to-portugal", "portugal-aima-residence-permit", "how-to-get-nif-portugal", "living-in-spain-after-brexit", "moving-back-to-uk-from-spain-portugal"],
};
