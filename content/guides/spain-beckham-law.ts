import type { Guide } from "@/lib/guides/types";

const ACCESSED = "2026-10-28";

export const spainBeckhamLaw: Guide = {
  slug: "spain-beckham-law",
  status: "published",
  datePublished: "2026-10-28",
  fromCode: "INT",
  toCode: "ES",
  fromName: "any country",
  toName: "Spain Beckham Law",
  kind: "topic",
  labels: { visas: "Who can apply", costs: "Tax rates under the regime" },

  title: "Spain's Beckham Law in 2026: Who Qualifies, 24% Rate & How to Apply",
  description:
    "Spain's special tax regime for people who move there: 24% up to €600,000 for six tax years, who qualifies, the six-month deadline, Form 149 and family rules.",
  h1: "Spain's Beckham Law: the 2026 guide to the special tax regime for new arrivals",

  summary: [
    {
      text: "The 'Beckham Law' is Spain's special tax regime for workers, professionals, entrepreneurs and investors who move to Spain. If you opt in, you're taxed under non-resident rules: work and business income is taxed at 24% up to €600,000 and 47% above that, and most other income is only taxed if it comes from Spain.",
      sourceIds: ["aeat-manual", "aeat-151"],
    },
    {
      text: "It lasts for the year you become Spanish tax resident plus the next five. You can't have been Spanish tax resident in the previous five tax years, and you must opt in with Form 149 within six months of starting work in Spain (your Social Security start date).",
      sourceIds: ["aeat-149-instr", "aeat-manual"],
    },
  ],

  lastVerified: ACCESSED,

  keyFacts: [
    { label: "Rate on work income", value: "24% up to €600,000; 47% above", sourceIds: ["aeat-manual", "aeat-151"] },
    { label: "How long", value: "Year you become resident + 5 more tax years", sourceIds: ["aeat-149-instr", "aeat-manual"] },
    { label: "Prior residence", value: "Not Spanish tax resident in the previous 5 tax years", sourceIds: ["aeat-149-instr"] },
    { label: "Deadline to opt in", value: "6 months from your Social Security start date", sourceIds: ["aeat-149-instr"] },
    { label: "Form to opt in", value: "Form 149 (after uploading your documents)", sourceIds: ["aeat-149"] },
    { label: "Annual return", value: "Form 151, in the normal income-tax season", sourceIds: ["aeat-151"] },
  ],

  visaOptions: [
    {
      name: "Employees moving for a job",
      bestFor: "People hired by a Spanish employer or sent to Spain by their employer.",
      requirement:
        "The move must follow a work contract with a Spanish employer or a transfer ordered by your employer, in the year you move or the year before.",
      notes: ["You'll need a statement from your employer and, for transfers, the transfer letter."],
      sourceIds: ["aeat-149-instr"],
    },
    {
      name: "Remote workers (including the digital nomad visa)",
      bestFor: "People who keep working for a company abroad from Spain.",
      requirement:
        "Remote work done only through computers and telecommunications qualifies even without an employer-ordered transfer. The Tax Agency confirms that employees holding Spain's international telework visa meet this condition.",
      sourceIds: ["aeat-149-instr", "aeat-impatriados"],
      notes: ["Freelancers on the telework visa should check with a tax adviser: the Tax Agency's confirmation refers to employed workers."],
    },
    {
      name: "Company directors",
      bestFor: "People who move to become an administrator of a company.",
      requirement: "You move because you become an administrator of an entity, and you provide a statement from that entity.",
      sourceIds: ["aeat-149-instr"],
    },
    {
      name: "Entrepreneurs and highly qualified professionals",
      bestFor: "Founders of innovative businesses and specialists working for startups or in R&D.",
      requirement:
        "Entrepreneurs need an innovative business activity recognised under Spain's entrepreneurs law (an ENISA report, unless you hold an entrepreneur residence permit). Highly qualified professionals must work for emerging companies or in training, research, development and innovation, earning more than 40% of their total work and business income from it.",
      sourceIds: ["aeat-149-instr"],
    },
  ],

  recentChanges: [
    {
      text: "From 2025 the top rate on savings income (dividends, interest and gains) under the Beckham regime rose from 28% to 30% for amounts above €300,000.",
      sourceIds: ["aeat-151", "aeat-manual"],
    },
  ],

  steps: [
    {
      when: "Before you move",
      title: "Check that you qualify",
      detail:
        "Confirm you weren't Spanish tax resident in the previous five tax years and that your move fits one of the qualifying reasons: a job or transfer, remote work, becoming a director, or an entrepreneurial or highly qualified activity.",
      sourceIds: ["aeat-149-instr"],
    },
    {
      when: "On arrival",
      title: "Get a Spanish tax number and register with the Tax Agency",
      detail:
        "You need a Spanish tax number (NIF) and must be on the Tax Agency's census of taxpayers. If you aren't, file the census declaration first.",
      sourceIds: ["aeat-149"],
    },
    {
      when: "When you start work",
      title: "Note your Social Security start date",
      detail:
        "Your six-month deadline runs from the date your activity starts in Spain's Social Security system (or the equivalent document if you stay in another country's system).",
      sourceIds: ["aeat-149-instr"],
    },
    {
      when: "Within 6 months",
      title: "Upload your supporting documents",
      detail:
        "Use the Tax Agency procedure \"Provide the necessary documentation to opt for the special regime\". Keep the registration number it gives you: Form 149 must include it.",
      sourceIds: ["aeat-149"],
    },
    {
      when: "Within 6 months",
      title: "File Form 149",
      detail:
        "File online. Each person files their own Form 149, and the main taxpayer must file before any family members.",
      sourceIds: ["aeat-149", "aeat-149-instr"],
    },
    {
      when: "While you're paid",
      title: "Check your payroll withholding",
      detail:
        "Under the regime, tax withheld from salary is 24%, and 47% on anything above €600,000 paid by the same employer in a calendar year.",
      sourceIds: ["aeat-151"],
    },
    {
      when: "Every year",
      title: "File Form 151 instead of the normal return",
      detail:
        "The deadline is the same as Spain's general income tax return period each year.",
      sourceIds: ["aeat-151"],
    },
  ],

  documents: [
    { item: "Spanish tax number (NIF) and census registration", sourceIds: ["aeat-149"] },
    { item: "Proof of your Social Security registration, or the equivalent document", sourceIds: ["aeat-149-instr"] },
    { item: "Your residence authorisation, if you need one", sourceIds: ["aeat-149-instr"] },
    { item: "Employees: employer statement and, for transfers, the transfer letter", sourceIds: ["aeat-149-instr"] },
    { item: "Directors: statement from the entity", sourceIds: ["aeat-149-instr"] },
    { item: "Entrepreneurs: ENISA report (unless you hold an entrepreneur residence permit)", sourceIds: ["aeat-149-instr"] },
    { item: "Highly qualified professionals: proof of status and of services to an emerging company", sourceIds: ["aeat-149-instr"] },
    { item: "Family members: documents proving the family link", sourceIds: ["aeat-149-instr"] },
    { item: "Registration number from the documentation upload (goes on Form 149)", sourceIds: ["aeat-149"] },
  ],

  costs: [
    { item: "Work and business income up to €600,000", amount: "24%", sourceIds: ["aeat-manual", "aeat-151"] },
    { item: "Work and business income above €600,000", amount: "47%", sourceIds: ["aeat-manual", "aeat-151"] },
    { item: "Savings income: first €6,000", amount: "19%", sourceIds: ["aeat-manual"] },
    { item: "Savings income: €6,000–€50,000", amount: "21%", sourceIds: ["aeat-manual"] },
    { item: "Savings income: €50,000–€200,000", amount: "23%", sourceIds: ["aeat-manual"] },
    { item: "Savings income: €200,000–€300,000", amount: "27%", sourceIds: ["aeat-manual"] },
    { item: "Savings income: above €300,000", amount: "30%", sourceIds: ["aeat-manual", "aeat-151"] },
  ],
  costNote:
    "These are the regime's state rates. Whether the regime saves you money depends on your income and where it comes from, so have a tax adviser compare it with normal Spanish taxation before you opt in.",

  tax: [
    {
      text: "All work and business income earned while the regime applies counts as earned in Spain, including salary paid from abroad. Other income (such as foreign dividends or rent) is only taxed in Spain if it comes from Spain.",
      sourceIds: ["aeat-151"],
    },
    {
      text: "Relief for tax paid abroad is limited: it can't exceed 30% of the Spanish tax on that income for the year.",
      sourceIds: ["aeat-151"],
    },
  ],

  family: [
    {
      text: "Your spouse (or the other parent of your children, if you aren't married) and children under 25 (any age if disabled) can also opt in. Their combined taxable income must be lower than yours.",
      sourceIds: ["aeat-149-instr"],
    },
    {
      text: "Family members file their own Form 149 after you, with their own deadline counted from when they arrive in Spain or from your start date.",
      sourceIds: ["aeat-149", "aeat-149-instr"],
    },
  ],

  pitfalls: [
    {
      text: "Missing the six-month window. The clock starts on your Social Security start date, not when you arrive or get your visa.",
      sourceIds: ["aeat-149-instr"],
    },
    {
      text: "Filing Form 149 before uploading documents. The form needs the registration number from the separate documentation procedure.",
      sourceIds: ["aeat-149"],
    },
    {
      text: "Assuming salary from a foreign employer is tax-free. Under the regime, all work income counts as Spanish.",
      sourceIds: ["aeat-151"],
    },
    {
      text: "Having lived in Spain recently. Being Spanish tax resident in any of the previous five tax years rules you out.",
      sourceIds: ["aeat-149-instr"],
    },
  ],

  faqs: [
    {
      q: "What is the Beckham Law in Spain?",
      a: "A special tax regime for people who move to Spain to work, run a business or invest. You pay tax under non-resident rules: 24% on work income up to €600,000 and 47% above that, for the year you arrive and the next five.",
      sourceIds: ["aeat-manual", "aeat-149-instr"],
    },
    {
      q: "Can digital nomads use the Beckham Law?",
      a: "Employed digital nomads, yes. Remote work done only through computers and telecommunications qualifies, and the Tax Agency confirms that employees holding the international telework visa meet the move condition, provided they weren't Spanish tax resident in the previous five years. Freelancers should check with an adviser.",
      sourceIds: ["aeat-149-instr", "aeat-impatriados"],
    },
    {
      q: "What is the deadline to apply for the Beckham Law?",
      a: "Six months from the date your work activity starts in Spain's Social Security system. You opt in with Form 149, after uploading your supporting documents.",
      sourceIds: ["aeat-149-instr", "aeat-149"],
    },
    {
      q: "How long does the Beckham Law last?",
      a: "Six tax years: the year you become Spanish tax resident and the following five.",
      sourceIds: ["aeat-149-instr", "aeat-manual"],
    },
    {
      q: "Can my family use the Beckham Law too?",
      a: "Yes, your spouse (or your children's other parent) and children under 25 can opt in, as long as their combined taxable income is lower than yours. Each files their own Form 149 after you.",
      sourceIds: ["aeat-149-instr", "aeat-149"],
    },
    {
      q: "Is foreign income taxed under the Beckham Law?",
      a: "Work and business income is taxed in Spain wherever it's paid. Other foreign income, such as dividends or rent from abroad, isn't taxed in Spain under the regime.",
      sourceIds: ["aeat-151"],
    },
  ],

  sources: [
    { id: "aeat-149", title: "Modelo 149: Régimen especial para trabajadores, profesionales, emprendedores e inversores desplazados", publisher: "Agencia Tributaria (Spanish Tax Agency)", url: "https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G606.shtml", official: true, accessed: ACCESSED },
    { id: "aeat-149-instr", title: "Form 149: instructions for completing the communication", publisher: "Agencia Tributaria (Spanish Tax Agency)", url: "https://sede.agenciatributaria.gob.es/Sede/en_gb/todas-gestiones/impuestos-tasas/impuesto-sobre-renta-personas-fisicas/modelo-149-irpf-comunicacion-opcion-exclusion_/instrucciones-cumplimentar-comunicacion.html", official: true, accessed: ACCESSED },
    { id: "aeat-manual", title: "Manual práctico IRPF 2025: régimen fiscal especial aplicable a trabajadores desplazados", publisher: "Agencia Tributaria (Spanish Tax Agency)", url: "https://sede.agenciatributaria.gob.es/Sede/eu_es/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c15-calculo-impuesto-determinacion-cuotas-integras/regimen-fiscal-especial-aplicable-trabajadores.html", official: true, accessed: ACCESSED },
    { id: "aeat-151", title: "Form 151: instructions for fiscal year 2023 and following", publisher: "Agencia Tributaria (Spanish Tax Agency)", url: "https://sede.agenciatributaria.gob.es/Sede/en_gb/todas-gestiones/impuestos-tasas/impuesto-sobre-renta-personas-fisicas/modelo-151-decla_____los-trabajadores-desplazados-espanol_/instrucciones-cumplimentacion-ejercicio-2023-siguientes.html", official: true, accessed: ACCESSED },
    { id: "aeat-impatriados", title: "Régimen especial para trabajadores desplazados (impatriados)", publisher: "Agencia Tributaria (Spanish Tax Agency)", url: "https://sede.agenciatributaria.gob.es/Sede/en_gb/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/regimenes-opcionales/regimen-especial-impatriados.html", official: true, accessed: ACCESSED },
  ],

  appPitch:
    "Relocate+ puts the Beckham Law's six-month deadline in your agenda from your Social Security start date, keeps your employer letter and Form 149 receipt in your document vault, and explains Spanish tax for your exact move.",
  related: ["spain-digital-nomad-visa", "how-to-get-nie-number-spain", "moving-from-us-to-spain", "moving-from-uk-to-spain"],
};
