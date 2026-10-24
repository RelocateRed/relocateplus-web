import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-24";

export const dubaiRemoteWorkVisa: Guide = {
  slug: "dubai-remote-work-visa",
  status: "published",
  datePublished: "2026-10-24",
  fromCode: "INT",
  toCode: "AE",
  fromName: "any country",
  toName: "Dubai",
  kind: "visa",

  title: "Dubai Remote Work Visa 2026: US$3,500 Rule, Fees & How to Apply",
  description:
    "Dubai's virtual work residence visa for remote employees: the US$3,500/month income rule, GDRFA fees in AED, documents, medical test, Emirates ID, family and tax.",
  h1: "Dubai's remote work visa (virtual work residence) in 2026",

  summary: [
    {
      text: "Dubai's virtual work visa lets you live in Dubai for a year while working remotely for an organisation outside the UAE, without a local sponsor. GDRFA Dubai requires a monthly income of at least US$3,500 (or the equivalent), proof of remote work and valid health insurance.",
      sourceIds: ["gdrfa-virtual", "gdrfa-residence"],
    },
    {
      text: "It works in two stages: an entry visa that gives you 60 days in the UAE, then a one-year residence permit that can be renewed. As a resident you also take a medical fitness test and apply for an Emirates ID.",
      sourceIds: ["gdrfa-virtual", "gdrfa-residence", "uae-medical"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Who it's for", value: "People working remotely for an organisation outside the UAE", sourceIds: ["gdrfa-virtual", "uae-remote-federal"] },
    { label: "Income", value: "≥ US$3,500 per month (or equivalent)", sourceIds: ["gdrfa-virtual", "gdrfa-residence"] },
    { label: "Local sponsor", value: "Not needed (self-sponsored)", sourceIds: ["gdrfa-residence", "uae-remote-federal"] },
    { label: "Entry visa", value: "60 days to complete residence formalities", sourceIds: ["gdrfa-virtual"] },
    { label: "Residence permit", value: "1 year, renewable", sourceIds: ["gdrfa-residence"] },
    { label: "Processing time (GDRFA)", value: "48 hours", sourceIds: ["gdrfa-virtual", "gdrfa-residence"] },
    { label: "Personal income tax in the UAE", value: "None", sourceIds: ["pwc-uae-tax"] },
  ],

  labels: { visas: "The two stages, and other emirates" },

  visaOptions: [
    {
      name: "Stage 1: virtual work entry visa (GDRFA Dubai)",
      bestFor: "Applying from abroad before you fly to Dubai.",
      requirement:
        "A colour photo on a white background, a passport valid for at least six months, evidence that you work remotely for an entity outside the UAE, proof of at least US$3,500 a month and valid health insurance. The visa lets you stay 60 days from entry while you complete the residence steps.",
      notes: ["Fee AED 200 plus 5% VAT; GDRFA adds AED 520 if you're already inside the UAE."],
      sourceIds: ["gdrfa-virtual"],
    },
    {
      name: "Stage 2: virtual work residence permit (GDRFA Dubai)",
      bestFor: "Completing your residence once you've entered.",
      requirement:
        "Passport copy, photo, health insurance, a medical fitness test result, proof of remote work, a salary certificate showing US$3,500 or the equivalent, and your Emirates ID application receipt. Valid for one year and renewable.",
      notes: ["After the permit expires or is cancelled, GDRFA lists a 60-day grace period to remain in the country."],
      sourceIds: ["gdrfa-residence"],
    },
    {
      name: "Abu Dhabi and other emirates",
      bestFor: "People who want to live outside Dubai.",
      requirement:
        "Abu Dhabi's Residents Office lists a one-year remote work visa with the same US$3,500 monthly income and a six-month bank statement, but currently says applications in this category are unavailable. Check the issuing authority for the emirate you'll live in.",
      sourceIds: ["adro-remote"],
    },
  ],

  steps: [
    {
      when: "Before you apply",
      title: "Check your income and paperwork",
      detail:
        "You need evidence of remote work for an employer or entity outside the UAE, plus proof of at least US$3,500 a month, such as a salary certificate.",
      sourceIds: ["gdrfa-virtual", "gdrfa-residence"],
    },
    {
      when: "Before you apply",
      title: "Buy health insurance",
      detail:
        "A valid health insurance document is mandatory for both the entry visa and the residence permit.",
      sourceIds: ["gdrfa-virtual", "gdrfa-residence"],
    },
    {
      when: "Application",
      title: "Apply online or at an Amer centre",
      detail:
        "Apply through GDRFA's smart services (with UAE Pass or a username) or at an Amer service centre, and pay the fee. GDRFA quotes 48 hours. Applying while already in the UAE adds an inside-country fee.",
      sourceIds: ["gdrfa-virtual"],
    },
    {
      when: "Within 60 days of entry",
      title: "Do your medical test and Emirates ID",
      detail:
        "Residence visa applicants aged 18 and over must pass a medical fitness test and apply for an Emirates ID with the Federal Authority for Identity and Citizenship.",
      sourceIds: ["uae-medical", "gdrfa-residence"],
    },
    {
      when: "Within 60 days of entry",
      title: "Get your residence permit",
      detail:
        "Submit the residence permit application with your medical result and Emirates ID receipt. It's valid for one year and can be renewed.",
      sourceIds: ["gdrfa-residence"],
    },
    {
      when: "Each year",
      title: "Renew before it expires",
      detail:
        "The permit lasts one year. If it expires or is cancelled, GDRFA lists 60 days to stay in the country.",
      sourceIds: ["gdrfa-residence"],
    },
  ],

  documents: [
    { item: "Passport valid for at least 6 months (and a copy)", sourceIds: ["gdrfa-virtual", "gdrfa-residence"] },
    { item: "Recent colour photo with a white background", sourceIds: ["gdrfa-virtual"] },
    { item: "Proof of remote work for an entity outside the UAE", sourceIds: ["gdrfa-virtual", "gdrfa-residence"] },
    { item: "Salary certificate or income proof: US$3,500+/month", sourceIds: ["gdrfa-virtual", "gdrfa-residence"] },
    { item: "Valid health insurance", sourceIds: ["gdrfa-virtual", "gdrfa-residence"] },
    { item: "Medical fitness test result (residence stage)", sourceIds: ["gdrfa-residence", "uae-medical"] },
    { item: "Emirates ID application receipt (residence stage)", sourceIds: ["gdrfa-residence"] },
  ],

  costs: [
    { item: "Virtual work entry visa", amount: "AED 200 + 5% VAT", sourceIds: ["gdrfa-virtual"] },
    { item: "Residence permit", amount: "AED 200", sourceIds: ["gdrfa-residence"] },
    { item: "Knowledge Dirham + Innovation Dirham", amount: "AED 10 + AED 10", sourceIds: ["gdrfa-residence"] },
    { item: "Delivery (residence permit)", amount: "AED 20", sourceIds: ["gdrfa-residence"] },
    { item: "Inside-country fee", amount: "AED 500", note: "Listed by GDRFA for applications made from inside the UAE.", sourceIds: ["gdrfa-virtual", "gdrfa-residence"] },
  ],
  costNote:
    "GDRFA notes totals can vary with your circumstances. Health insurance, the medical test and Emirates ID have their own charges, which we don't estimate.",

  tax: [
    {
      text: "There's currently no federal or emirate-level personal income tax in the UAE. Whether you stop being taxable in your home country depends on that country's own residence rules, so check before you move.",
      sourceIds: ["pwc-uae-tax"],
    },
  ],

  family: [
    {
      text: "GDRFA says virtual work visa holders can sponsor family members for the same period as their own residence.",
      sourceIds: ["gdrfa-virtual"],
    },
    {
      text: "Family members aged 18 and over applying for residence also need the medical fitness test.",
      sourceIds: ["uae-medical"],
    },
  ],

  pitfalls: [
    {
      text: "Treating the entry visa as the end of the process. It only gives you 60 days to complete residence, including the medical test and Emirates ID.",
      sourceIds: ["gdrfa-virtual", "uae-medical"],
    },
    {
      text: "Applying from inside the UAE without budgeting for it. GDRFA adds AED 500 plus the Knowledge and Innovation Dirhams.",
      sourceIds: ["gdrfa-virtual"],
    },
    {
      text: "Confusing programmes. The federal portal also describes a separate Dubai virtual working programme with a US$5,000 salary, while GDRFA's current service lists US$3,500.",
      sourceIds: ["uae-remote-federal", "gdrfa-virtual"],
    },
    {
      text: "Assuming every emirate is open. Abu Dhabi's Residents Office currently isn't accepting applications in this category.",
      sourceIds: ["adro-remote"],
    },
  ],

  faqs: [
    {
      q: "How much do I need to earn for Dubai's remote work visa?",
      a: "At least US$3,500 a month, or the equivalent in another currency, from remote work for an organisation outside the UAE.",
      sourceIds: ["gdrfa-virtual", "gdrfa-residence"],
    },
    {
      q: "How much does Dubai's remote work visa cost?",
      a: "GDRFA lists AED 200 plus 5% VAT for the entry visa, then AED 200 for the residence permit plus AED 10 Knowledge Dirham, AED 10 Innovation Dirham and AED 20 delivery. Applying from inside the UAE adds AED 500.",
      sourceIds: ["gdrfa-virtual", "gdrfa-residence"],
    },
    {
      q: "How long is the Dubai remote work visa valid?",
      a: "The residence permit is valid for one year and can be renewed. The entry visa before it gives you 60 days to complete residence.",
      sourceIds: ["gdrfa-residence", "gdrfa-virtual"],
    },
    {
      q: "Can I bring my family on Dubai's remote work visa?",
      a: "Yes. GDRFA says you can sponsor family members for the same period as your own residence.",
      sourceIds: ["gdrfa-virtual"],
    },
    {
      q: "Do I pay income tax in Dubai as a remote worker?",
      a: "The UAE currently has no personal income tax. Your home country may still tax you depending on its residence rules.",
      sourceIds: ["pwc-uae-tax"],
    },
  ],

  sources: [
    { id: "gdrfa-virtual", title: "Visa issuance (Virtual Work)", publisher: "General Directorate of Residency and Foreigners Affairs (GDRFA) Dubai", url: "https://www.gdrfad.gov.ae/en/node/13898", official: true, accessed: ACCESSED },
    { id: "gdrfa-residence", title: "Issuance of the virtual work residence permit (updated 13/08/2025)", publisher: "General Directorate of Residency and Foreigners Affairs (GDRFA) Dubai", url: "https://gdrfad.gov.ae/en/node/13964", official: true, accessed: ACCESSED },
    { id: "uae-remote-federal", title: "Residence visa for working outside the UAE", publisher: "UAE Government portal (u.ae)", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/residence-visa-for-working-outside-the-uae", official: true, accessed: ACCESSED },
    { id: "uae-medical", title: "Medical test (residence visa)", publisher: "UAE Government portal (u.ae)", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/general-provisions-for-the-residence-visa/medical-test", official: true, accessed: ACCESSED },
    { id: "adro-remote", title: "Remote Work Visa", publisher: "Abu Dhabi Residents Office", url: "https://adro.gov.ae/Visas/Types-of-Visas/Abu-Dhabi-Non-Working-Visa/Remote-Work-Visa", official: true, accessed: ACCESSED },
    { id: "pwc-uae-tax", title: "United Arab Emirates: Taxes on personal income (reviewed 9 Sep 2026)", publisher: "PwC Worldwide Tax Summaries", url: "https://taxsummaries.pwc.com/united-arab-emirates/individual/taxes-on-personal-income", official: false, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ keeps your Dubai move on schedule: put the 60-day entry window, medical test, Emirates ID and yearly renewal in the deadline agenda and calendar, and keep insurance, salary certificates and family documents in one place.",
  related: ["moving-from-uk-to-dubai"],
};
