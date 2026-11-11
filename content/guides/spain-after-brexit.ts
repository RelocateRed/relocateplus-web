import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-11-11";

export const spainAfterBrexit: Guide = {
  slug: "living-in-spain-after-brexit",
  status: "draft",
  fromCode: "GB",
  toCode: "ES",
  fromName: "the UK",
  toName: "Spain after Brexit",
  kind: "topic",
  labels: { visas: "Your situation", costs: "Healthcare and other costs" },

  title: "Living in Spain After Brexit (2026): TIE, Green Certificate & EES",
  description:
    "Brits in Spain in 2026: why to swap the green certificate for a TIE, EES at the border, visas for new arrivals, 90/180 days, the 6-month driving rule and healthcare.",
  h1: "Living in Spain after Brexit: what British residents and newcomers need to know in 2026",

  summary: [
    {
      text: "If you're British and were living legally in Spain before 1 January 2021, the Withdrawal Agreement protects your right to stay. You'll have either a TIE card or the older green certificate. The TIE is the only residence document named in the Withdrawal Agreement, and the green certificate isn't accepted as proof of residence at Spanish or other Schengen borders, so the Spanish authorities and the British Embassy strongly recommend swapping it.",
      sourceIds: ["govuk-living-spain", "govuk-tie"],
    },
    {
      text: "Arriving now is different: you need a visa or residence permit before you move, and afterwards you register as a resident, collect a TIE and sign on to the padrón. As a visitor you get 90 days in any 180-day period. Once resident, your UK driving licence only works for 6 months.",
      sourceIds: ["govuk-living-spain", "govuk-travel-es"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Protected group", value: "Legally resident before 1 January 2021", sourceIds: ["govuk-living-spain"] },
    { label: "Best proof of status", value: "TIE marked \"Articulo 50 TUE\"", sourceIds: ["govuk-tie"] },
    { label: "Green certificate at the border", value: "Not accepted; you'd register with EES", sourceIds: ["govuk-tie", "govuk-living-spain"] },
    { label: "Visitors", value: "90 days in any 180-day period", sourceIds: ["govuk-travel-es"] },
    { label: "UK driving licence", value: "Valid for 6 months after you become resident", sourceIds: ["govuk-living-spain", "govuk-driving-eu"] },
    { label: "Dual nationality", value: "Spain doesn't recognise it with the UK", sourceIds: ["govuk-living-spain"] },
  ],

  visaOptions: [
    {
      name: "Resident before 2021, with a TIE",
      bestFor: "Withdrawal Agreement beneficiaries who already hold the card.",
      requirement:
        "Nothing new to apply for. Renew the TIE when it expires or when personal details such as your address change, and show it with your passport at the border.",
      sourceIds: ["govuk-tie", "govuk-living-spain"],
    },
    {
      name: "Resident before 2021, with a green certificate",
      bestFor: "People still holding the Certificado de Registro de Ciudadano de la Unión.",
      requirement:
        "The certificate still shows your Withdrawal Agreement rights inside Spain, but it can't prove you're exempt from EES. Book an appointment at a foreigners' office (Oficina de Extranjería) or a local police station to exchange it for a TIE.",
      sourceIds: ["govuk-tie", "govuk-living-spain"],
    },
    {
      name: "Resident before 2021, with no document",
      bestFor: "People who moved in time but never registered.",
      requirement:
        "You must register on the central register and apply for a TIE. You'll need to prove you met the residence criteria, including being on the padrón and having comprehensive healthcare insurance, both since before 1 January 2021.",
      sourceIds: ["govuk-tie"],
    },
    {
      name: "Moving to Spain now",
      bestFor: "British citizens arriving after Brexit.",
      requirement:
        "Get a visa or residence permit before you move, for example to retire, study or work, including as a digital nomad. After arriving, register as a resident, get a TIE and register on the padrón at your town hall. Children need their own residency documents.",
      sourceIds: ["govuk-living-spain"],
    },
    {
      name: "Visiting, or using a holiday home",
      bestFor: "British citizens who aren't resident in Spain.",
      requirement:
        "Visa-free for up to 90 days in any 180-day period. Days spent in other Schengen countries in the 180 days before you travel count towards the 90, and an overstay may mean a ban of up to 3 years.",
      sourceIds: ["govuk-travel-es"],
    },
  ],

  recentChanges: [
    {
      text: "With the Entry/Exit System (EES), non-EU nationals have their photo and fingerprints taken or verified at the border, and the data is used to monitor time spent in the Schengen area. British residents with a biometric TIE don't register. Green certificate holders will need to.",
      sourceIds: ["govuk-living-spain"],
    },
    {
      text: "A Spanish regularisation scheme for migrants closed on 30 June 2026, and GOV.UK removed its information about it on 3 July 2026.",
      sourceIds: ["govuk-living-spain"],
    },
  ],

  steps: [
    {
      when: "Today",
      title: "Look at what your residence document actually is",
      detail:
        "A TIE is a biometric card. The green certificate is the older Certificado de Registro de Ciudadano de la Unión. If that's what you hold, plan the swap before your next trip abroad.",
      sourceIds: ["govuk-living-spain", "govuk-tie"],
    },
    {
      when: "Before your next trip",
      title: "Book the TIE exchange",
      detail:
        "Make an appointment at an Oficina de Extranjería or a local police station. Your fingerprints are taken at the appointment, and the authorities often ask for a padrón certificate issued in the last 3 months. Applications may take several weeks to process.",
      sourceIds: ["govuk-tie"],
    },
    {
      when: "At every border",
      title: "Hand over your TIE with your passport",
      detail:
        "British nationals living in Spain don't need passport stamps. Show proof of residence such as the TIE at border control; if you don't, your passport may be stamped.",
      sourceIds: ["govuk-travel-es", "govuk-living-spain"],
    },
    {
      when: "Within 6 months of becoming resident",
      title: "Exchange your UK driving licence",
      detail:
        "Get a check code from the DVLA (or the DVA for Northern Ireland licences) and apply to exchange your licence before the 6 months are up, because processing takes time. UK and Gibraltar licences are exchanged without a theory or practical test.",
      sourceIds: ["govuk-living-spain", "govuk-driving-eu"],
    },
    {
      when: "When you register as resident",
      title: "Arrange your healthcare route",
      detail:
        "All residents need to register to access healthcare. The usual routes are working and paying Spanish social security, an S1 form from the UK, permanent residency, the Convenio Especial public insurance scheme, or private insurance.",
      sourceIds: ["govuk-health-es"],
    },
    {
      when: "When your TIE is being renewed",
      title: "Don't leave Spain without a return permit",
      detail:
        "If you have to travel while a renewal is pending, apply for an Autorización de Regreso so you can re-enter.",
      sourceIds: ["govuk-tie"],
    },
    {
      when: "Every year",
      title: "Keep up with Spanish tax reporting",
      detail:
        "Spanish residents must declare all assets held outside Spain and may need to file an annual tax return. Filing nothing, or filing incorrect or incomplete information, carries penalties.",
      sourceIds: ["govuk-living-spain"],
    },
  ],

  documents: [
    { item: "Valid British passport", sourceIds: ["govuk-living-spain"] },
    { item: "TIE, or your green certificate if you still need to exchange it", sourceIds: ["govuk-living-spain", "govuk-tie"] },
    { item: "Padrón certificate issued within the last 3 months", sourceIds: ["govuk-tie"] },
    { item: "DVLA or DVA check code, for the licence exchange", sourceIds: ["govuk-living-spain"] },
    { item: "Spanish social security number, if you work or are self-employed", sourceIds: ["govuk-health-es"] },
    { item: "S1 form, if you receive a UK State Pension or an exportable benefit", sourceIds: ["govuk-health-es"] },
    { item: "\"Legislation letter\" (documento de no exportación) from the NHS, for permanent residents registering with the INSS", sourceIds: ["govuk-health-es"] },
    { item: "Autorización de Regreso, if you travel during a TIE renewal", sourceIds: ["govuk-tie"] },
  ],

  costs: [
    { item: "Prescriptions for residents in the state system", amount: "Usually 10% to 60% of the price", sourceIds: ["govuk-health-es"] },
    { item: "Convenio Especial (public health insurance scheme)", amount: "Monthly fee", note: "You pay the full cost of prescriptions under this scheme. GOV.UK doesn't state the fee; your regional health authority does.", sourceIds: ["govuk-health-es"] },
    { item: "EES registration at the border, for non-residents", amount: "Free", sourceIds: ["govuk-travel-es"] },
    { item: "Exchanging a UK or Gibraltar driving licence", amount: "No driving test", sourceIds: ["govuk-driving-eu"] },
  ],
  costNote: "GOV.UK doesn't list the fee for the TIE itself; check the instructions for your appointment.",

  tax: [
    {
      text: "The UK–Spain double taxation agreement is there so you don't pay tax on the same income in both countries. If you live in Spain you must declare all your assets outside Spain, and you may have to file a yearly tax return.",
      sourceIds: ["govuk-living-spain"],
    },
    {
      text: "For people covered by the Withdrawal Agreement, the UK State Pension keeps rising in line with UK rates.",
      sourceIds: ["govuk-wa"],
    },
  ],

  family: [
    {
      text: "Family members who lived with you in Spain by 31 December 2020 share your Withdrawal Agreement rights. Each child needs their own residency document.",
      sourceIds: ["govuk-wa", "govuk-living-spain"],
    },
  ],

  pitfalls: [
    {
      text: "Flying on a green certificate. Without a TIE you may be wrongly identified as overstaying in the Schengen area.",
      sourceIds: ["govuk-tie"],
    },
    {
      text: "Driving on a UK licence after 6 months of residence. It's no longer valid for driving in Spain, although you can still exchange it.",
      sourceIds: ["govuk-driving-eu", "govuk-living-spain"],
    },
    {
      text: "Holding a Jersey, Guernsey or Isle of Man licence. Those can't be exchanged, so you'd take the Spanish theory and practical tests.",
      sourceIds: ["govuk-living-spain", "govuk-driving-eu"],
    },
    {
      text: "Expecting the Convenio Especial from day one. You can only join after living in Spain, and being on the padrón, for at least one year, and not at all if the UK pays for your healthcare through an S1.",
      sourceIds: ["govuk-health-es"],
    },
    {
      text: "Spending too long outside Spain. Until you have permanent residence, Withdrawal Agreement rights depend on being in the country at least 6 months in any 12; permanent residence is lost after more than 5 consecutive years abroad.",
      sourceIds: ["govuk-wa"],
    },
  ],

  faqs: [
    {
      q: "Is the green residency certificate still valid in Spain?",
      a: "It still shows your rights under the Withdrawal Agreement, but it won't be accepted as proof of legal residence at Spanish or other Schengen borders and can't show you're exempt from EES. The Spanish authorities and the British Embassy strongly recommend exchanging it for a TIE.",
      sourceIds: ["govuk-tie", "govuk-living-spain"],
    },
    {
      q: "Can British citizens still move to Spain after Brexit?",
      a: "Yes, with a visa or residence permit obtained before you move, for example for retirement, study or work, including digital nomad work. After you arrive you register as a resident, get a TIE and register on the padrón.",
      sourceIds: ["govuk-living-spain"],
    },
    {
      q: "How long can I stay in Spain without a visa as a British citizen?",
      a: "Up to 90 days in any 180-day period, counting days in every Schengen country. If you overstay you may be banned from Schengen countries for up to 3 years. Time spent on a residence permit or long-stay visa doesn't count towards the 90 days.",
      sourceIds: ["govuk-travel-es"],
    },
    {
      q: "Do British residents in Spain need to register for EES?",
      a: "Not if you hold a biometric TIE. Legally resident British nationals with that card are exempt. If you only have the green certificate, you'll need to register with EES when you cross the border.",
      sourceIds: ["govuk-living-spain"],
    },
    {
      q: "Can I drive in Spain on a UK licence?",
      a: "For up to 6 months after you become resident. To keep driving, exchange your UK or Gibraltar licence for a Spanish one, which doesn't require a test. You need a check code from the DVLA or DVA, and you should apply before the 6 months end.",
      sourceIds: ["govuk-living-spain", "govuk-driving-eu"],
    },
    {
      q: "Can British residents vote in Spain?",
      a: "In local elections, yes, once you've been resident for 3 years and are on the electoral register. You can't vote in Spanish general or regional elections unless you're a Spanish citizen, or in European Parliament elections unless you're an EU citizen.",
      sourceIds: ["govuk-living-spain"],
    },
  ],

  sources: [
    { id: "govuk-living-spain", title: "Living in Spain (updated 3 July 2026)", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/living-in-spain", official: true, accessed: ACCESSED },
    { id: "govuk-tie", title: "Spain: registering as a resident and getting a TIE (22 December 2025)", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/spain-registering-as-a-resident-and-getting-a-tie", official: true, accessed: ACCESSED },
    { id: "govuk-travel-es", title: "Spain travel advice: entry requirements", publisher: "GOV.UK (FCDO)", url: "https://www.gov.uk/foreign-travel-advice/spain/entry-requirements", official: true, accessed: ACCESSED },
    { id: "govuk-health-es", title: "Healthcare for UK nationals living in Spain", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/healthcare-in-spain-including-the-balearic-and-canary-islands", official: true, accessed: ACCESSED },
    { id: "govuk-driving-eu", title: "Driving in Europe: UK licence holders living in the EU (23 February 2024)", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/driving-in-the-eu-uk-licence-holders-living-in-the-eu", official: true, accessed: ACCESSED },
    { id: "govuk-wa", title: "The Withdrawal Agreement: what UK nationals need to know about citizens' rights", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/the-withdrawal-agreement-what-uk-nationals-need-to-know-about-citizens-rights", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ puts your TIE appointment, the 6-month driving licence deadline and your TIE renewal in your agenda, and keeps your TIE, padrón certificate and healthcare papers in your document vault.",
  related: ["moving-from-uk-to-spain", "spain-tie-card", "empadronamiento-spain-padron", "living-in-portugal-after-brexit", "moving-back-to-uk-from-spain-portugal"],
};
