import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-19";

export const ukToDubai: Guide = {
  slug: "moving-from-uk-to-dubai",
  status: "published",
  datePublished: "2026-10-19",
  fromCode: "GB",
  toCode: "AE",
  fromName: "the UK",
  toName: "Dubai",
  kind: "route",

  title: "Moving from the UK to Dubai: 2026 Visa, Tax & Move Checklist",
  description:
    "Work visa, Dubai's remote work visa (US$3,500/month), Golden Visa, Emirates ID, health insurance and what changes for your UK tax when you move.",
  h1: "Moving from the UK to Dubai: the 2026 checklist",

  summary: [
    {
      text: "To live in Dubai you need a UAE residence visa and an Emirates ID. With a UAE job offer, your employer applies for a work visa, valid for two years and renewable. Remote workers can use Dubai's virtual work residence visa, which needs proof of at least US$3,500 a month from an employer outside the UAE.",
      sourceIds: ["uae-work-visa", "gdrfa-virtual", "govuk-living-uae"],
    },
    {
      text: "The UAE has no income tax on salaries, and there's a UK–UAE double taxation agreement. To stop paying UK tax on income earned abroad, you have to become UK non-resident and tell HMRC you're leaving, usually on form P85.",
      sourceIds: ["govuk-living-uae", "govuk-leaving-uk"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Work visa validity", value: "2 years, renewable (employer applies)", sourceIds: ["uae-work-visa"] },
    { label: "Remote work visa income (Dubai)", value: "≥ US$3,500 per month", sourceIds: ["gdrfa-virtual"] },
    { label: "Remote work visa fee (Dubai)", value: "AED 200 + 5% VAT (more if applying inside the UAE)", sourceIds: ["gdrfa-virtual"] },
    { label: "Golden Visa", value: "5 or 10 years, renewable, by category", sourceIds: ["uae-golden"] },
    { label: "Income tax on salaries", value: "None in the UAE", sourceIds: ["govuk-living-uae"] },
    { label: "NHS / reciprocal healthcare", value: "No UK–UAE reciprocal agreement", sourceIds: ["govuk-living-uae"] },
  ],

  visaOptions: [
    {
      name: "Employment (work) residence visa",
      bestFor: "Brits with a job offer from a UAE company or government body.",
      requirement:
        "Your employer must apply for the standard work visa. It's valid for two years and can be renewed under the conditions set by the issuing authorities.",
      notes: [
        "Employers in Dubai are legally required to provide health insurance to their employees.",
        "Skilled workers, freelancers and the self-employed can look at the separate Green Visa instead.",
      ],
      sourceIds: ["uae-work-visa", "govuk-living-uae"],
    },
    {
      name: "Virtual work (remote work) residence visa — Dubai",
      bestFor: "Employees or business owners working remotely for an organisation outside the UAE.",
      requirement:
        "Proof of remote work for an entity outside the UAE, monthly income of at least US$3,500 (or the foreign-currency equivalent), valid health insurance and a passport valid for six months. The residence lasts one year from issue and can be extended; you can sponsor family members for the same period.",
      notes: [
        "GDRFA Dubai quotes 48 hours expected processing.",
        "The UAE's federal portal describes a remote-work programme with a higher US$5,000 salary threshold, so confirm which scheme and authority you're applying through.",
      ],
      sourceIds: ["gdrfa-virtual", "uae-remote-federal"],
    },
    {
      name: "Golden Visa (long-term residence)",
      bestFor: "Investors, entrepreneurs and people with exceptional talent or specialist skills.",
      requirement:
        "A 5- or 10-year renewable residence visa. Categories include public investment (10 years), real estate investment (5 years), entrepreneurs with innovative projects (5 years) and exceptional talents such as executives, PhD holders and specialists in priority fields (10 years). Holders can sponsor their spouse and children.",
      sourceIds: ["uae-golden"],
    },
  ],

  steps: [
    {
      when: "2–4 months before",
      title: "Pick your residence route",
      detail:
        "With a UAE job, your employer runs the work visa. Working remotely for a UK or other non-UAE employer, check you meet Dubai's US$3,500/month virtual work threshold. Investors and specialists can check the Golden Visa categories.",
      sourceIds: ["uae-work-visa", "gdrfa-virtual", "uae-golden"],
    },
    {
      when: "1–2 months before",
      title: "Gather your documents",
      detail:
        "For the virtual work visa: passport valid 6+ months, a colour photo on a white background, proof of remote employment, proof of income and valid health insurance.",
      sourceIds: ["gdrfa-virtual"],
    },
    {
      when: "Before you leave the UK",
      title: "Tell HMRC you're leaving",
      detail:
        "If you don't normally file Self Assessment, fill in form P85; if you do, use form SA109 with your return. You can't report leaving through HMRC's online services.",
      sourceIds: ["govuk-leaving-uk"],
    },
    {
      when: "Arrival",
      title: "Complete residency within the entry window",
      detail:
        "The virtual work entry visa lets you stay 60 days from entry while you complete residence requirements. Apply from outside the UAE to avoid the extra in-country fees.",
      sourceIds: ["gdrfa-virtual"],
    },
    {
      when: "With your residence visa",
      title: "Get your Emirates ID",
      detail:
        "All UAE residents must hold an Emirates ID. You should receive it with your residence visa; problems go to the Federal Authority for Identity, Citizenship, Customs and Port Security.",
      sourceIds: ["govuk-living-uae"],
    },
    {
      when: "First weeks",
      title: "Sort health cover and driving",
      detail:
        "There's no reciprocal health agreement with the UK, so make sure you're insured (employers in Dubai must cover employees). GOV.UK links to the UAE's rules for exchanging a foreign driving licence.",
      sourceIds: ["govuk-living-uae"],
    },
  ],

  documents: [
    { item: "UK passport valid for at least 6 months", sourceIds: ["gdrfa-virtual"] },
    { item: "Recent colour photo with white background", sourceIds: ["gdrfa-virtual"] },
    { item: "Employment contract or offer (work visa; your employer applies)", sourceIds: ["uae-work-visa"] },
    { item: "Proof of remote work for a non-UAE employer (virtual work visa)", sourceIds: ["gdrfa-virtual"] },
    { item: "Proof of income ≥ US$3,500 per month (virtual work visa)", sourceIds: ["gdrfa-virtual"] },
    { item: "Valid health insurance", sourceIds: ["gdrfa-virtual", "govuk-living-uae"] },
    { item: "HMRC form P85 (or SA109 with Self Assessment)", sourceIds: ["govuk-leaving-uk"] },
  ],

  costs: [
    { item: "Virtual work visa fee (GDRFA Dubai)", amount: "AED 200 + 5% VAT", sourceIds: ["gdrfa-virtual"] },
    { item: "Extra if applying from inside the UAE", amount: "AED 500 + AED 10 + AED 10", note: "Inside-country fee plus Knowledge and Innovation Dirham.", sourceIds: ["gdrfa-virtual"] },
    { item: "Health insurance", amount: "Varies", note: "Required for the virtual work visa; employers provide it for employees in Dubai.", sourceIds: ["gdrfa-virtual", "govuk-living-uae"] },
  ],
  costNote:
    "Work visa and Golden Visa fees are paid through the issuing authority and depend on your category. We don't estimate rents or living costs.",

  tax: [
    {
      text: "The UAE doesn't tax salaries or wages, though there can be taxes on some goods and services, municipal taxes or customs duties depending on the emirate. The UK and the UAE have a double taxation agreement.",
      sourceIds: ["govuk-living-uae"],
    },
    {
      text: "If you become UK non-resident, you don't pay UK tax on income or gains you get outside the UK — but you may still owe UK tax on UK income such as rent from a UK property. Split-year treatment can make you non-resident from the day after you leave.",
      sourceIds: ["govuk-leaving-uk"],
    },
    {
      text: "You can claim your UK State Pension from abroad. Only UAE citizens get a UAE state pension, but expats who worked there may get end-of-service benefits.",
      sourceIds: ["govuk-living-uae", "govuk-pension-abroad"],
    },
  ],

  family: [
    {
      text: "Virtual work visa holders can sponsor family members for the same period as their own residence, and Golden Visa holders can sponsor their spouse and children.",
      sourceIds: ["gdrfa-virtual", "uae-golden"],
    },
  ],

  pitfalls: [
    {
      text: "Assuming the NHS or a GHIC covers you. There is no reciprocal health agreement between the UK and the UAE.",
      sourceIds: ["govuk-living-uae"],
    },
    {
      text: "Not telling HMRC you've left. GOV.UK says to fill in form P85 (or SA109 with Self Assessment), and you can't do it online.",
      sourceIds: ["govuk-leaving-uk"],
    },
    {
      text: "Forgetting UK income. Rent from a UK property can still be taxed in the UK after you move.",
      sourceIds: ["govuk-leaving-uk"],
    },
    {
      text: "Mixing up remote-work schemes. Dubai's GDRFA lists US$3,500/month, while the federal portal describes a programme at US$5,000 — check which one you're applying for.",
      sourceIds: ["gdrfa-virtual", "uae-remote-federal"],
    },
  ],

  faqs: [
    {
      q: "Can I live in Dubai while working remotely for a UK company?",
      a: "Yes, with Dubai's virtual work residence visa. You need proof of remote work for an employer outside the UAE, at least US$3,500 a month in income, health insurance and a passport valid for six months. It lasts one year and can be extended.",
      sourceIds: ["gdrfa-virtual"],
    },
    {
      q: "Do I pay income tax in Dubai?",
      a: "No. The UAE doesn't tax salaries or wages. You may still owe UK tax on UK income, such as rent from a UK property, after you become non-resident.",
      sourceIds: ["govuk-living-uae", "govuk-leaving-uk"],
    },
    {
      q: "How do I tell HMRC I'm moving to Dubai?",
      a: "Fill in form P85 if you don't normally file Self Assessment. If you do, complete form SA109 with your return. Leaving can't be reported through HMRC's online services.",
      sourceIds: ["govuk-leaving-uk"],
    },
    {
      q: "Does the NHS cover me in the UAE?",
      a: "No. The UAE has no reciprocal health agreement with the UK. Employers in Dubai and Abu Dhabi must provide health insurance for employees; everyone else should arrange their own cover.",
      sourceIds: ["govuk-living-uae"],
    },
    {
      q: "How long is a UAE Golden Visa valid?",
      a: "Five or ten years depending on the category, and it's renewable. Holders can sponsor their spouse and children.",
      sourceIds: ["uae-golden"],
    },
  ],

  sources: [
    { id: "gdrfa-virtual", title: "Visa issuance (Virtual Work)", publisher: "General Directorate of Residency and Foreigners Affairs (GDRFA) Dubai", url: "https://www.gdrfad.gov.ae/en/node/13898", official: true, accessed: ACCESSED },
    { id: "uae-work-visa", title: "Residence visa for working in the UAE", publisher: "UAE Government portal (u.ae)", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/residence-visa-for-working-in-the-uae", official: true, accessed: ACCESSED },
    { id: "uae-remote-federal", title: "Residence visa for working outside the UAE", publisher: "UAE Government portal (u.ae)", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/residence-visa-for-working-outside-the-uae", official: true, accessed: ACCESSED },
    { id: "uae-golden", title: "Golden visa", publisher: "UAE Government portal (u.ae)", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa", official: true, accessed: ACCESSED },
    { id: "govuk-living-uae", title: "Living in the United Arab Emirates", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/living-in-the-united-arab-emirates", official: true, accessed: ACCESSED },
    { id: "govuk-leaving-uk", title: "Tax if you leave the UK to live abroad", publisher: "GOV.UK", url: "https://www.gov.uk/tax-right-retire-abroad-return-to-uk", official: true, accessed: ACCESSED },
    { id: "govuk-pension-abroad", title: "State Pension if you retire abroad", publisher: "GOV.UK", url: "https://www.gov.uk/state-pension-if-you-retire-abroad", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ maps your UK → Dubai move: put your visa entry window, Emirates ID and HMRC P85 in the deadline agenda and calendar, keep contracts, insurance and family documents together, and plan your moving budget.",
  related: ["dubai-remote-work-visa", "moving-from-uk-to-australia", "moving-from-uk-to-spain"],
};
