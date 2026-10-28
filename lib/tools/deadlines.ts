/**
 * Rules behind the moving deadline planner. Every rule comes from a published
 * guide on this site and its official source. When a guide changes, change it here.
 */

export type Country = "ES" | "PT";
export type SpainVisa = "dnv" | "nlv" | "other";
export type PortugalVisa = "d8" | "d7" | "other";

export type PlannerInput = {
  country: Country;
  arrival: string; // YYYY-MM-DD
  visaStart: string; // YYYY-MM-DD, defaults to arrival
  esVisa: SpainVisa;
  ptVisa: PortugalVisa;
  viaSchengen: boolean;
  beckham: boolean;
  workStart: string;
  ukLicence: boolean;
  ifici: boolean;
};

export type Source = { title: string; url: string };

export type Deadline = {
  id: string;
  title: string;
  /** null = no fixed date, do it as soon as possible */
  date: string | null;
  /** "from" = earliest date you can do it (default "by" = deadline) */
  kind?: "by" | "from";
  rule: string;
  /** Extra caveat, e.g. an assumption we made */
  note?: string;
  guide: { href: string; label: string };
  sources: Source[];
};

const S = {
  oneNie: { title: "one.gob.es: NIE for international individuals (entry declaration)", url: "https://www.one.gob.es/en/procedures/application-nie-international-individuals" },
  interiorTie: { title: "Ministry of the Interior: Tarjeta de identidad de extranjero", url: "https://www.interior.gob.es/opencms/en/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/regimen-general/tarjeta-de-identidad-de-extranjero/" },
  alicantePadron: { title: "Ayuntamiento de Alicante: Padrón Municipal de Habitantes", url: "https://www.alicante.es/es/contenidos/padron-municipal-habitantes" },
  zaragozaPadron: { title: "Ayuntamiento de Zaragoza: renovación padrón residentes extranjeros", url: "https://zaragoza.es/sede/servicio/tramite/13701" },
  ugeFaq: { title: "UGE: digital nomad FAQs", url: "https://bibliovirtual.inclusion.gob.es/documents/d/unidadgrandesempresas/digital-nomad-faqs-english" },
  aeat149: { title: "Agencia Tributaria: Form 149 instructions", url: "https://sede.agenciatributaria.gob.es/Sede/en_gb/todas-gestiones/impuestos-tasas/impuesto-sobre-renta-personas-fisicas/modelo-149-irpf-comunicacion-opcion-exclusion_/instrucciones-cumplimentar-comunicacion.html" },
  govukSpain: { title: "GOV.UK: Living in Spain", url: "https://www.gov.uk/guidance/living-in-spain" },
  atNif: { title: "Portal das Finanças: Apply for your NIF", url: "https://info.portaldasfinancas.gov.pt/en/tax-information/getting-started-in-portugal/tax-identification-number/apply-for-your-nif/Pages/default.aspx" },
  atRep: { title: "Portal das Finanças: Appoint a tax representative", url: "https://info.portaldasfinancas.gov.pt/en/tax-information/getting-started-in-portugal/tax-identification-number/appoint-a-tax-representative/Pages/default.aspx" },
  ePortugalVisas: { title: "ePortugal: visas and permits to live in Portugal", url: "https://eportugal.gov.pt/en/migrantes-viver-e-trabalhar-em-portugal/migrantes-vistos-e-autorizacoes-para-entrar-e-viver-em-portugal" },
  atIfici: { title: "Portuguese Tax Authority: Ofício Circulado 20276/2025 (IFICI)", url: "https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/legislacao/instrucoes_administrativas/Documents/Oficio_circulado_20276_2025.pdf" },
};

const DAY = 86_400_000;
const parse = (iso: string) => (/^\d{4}-\d{2}-\d{2}$/.test(iso) ? new Date(iso + "T00:00:00Z") : null);
const iso = (d: Date) => d.toISOString().slice(0, 10);

/** Same day N months later (clamped to the month's last day). */
export function addMonths(isoDate: string, months: number): string {
  const d = parse(isoDate)!;
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth() + months;
  const last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
  return iso(new Date(Date.UTC(y, m, Math.min(d.getUTCDate(), last))));
}

export function addDays(isoDate: string, days: number): string {
  return iso(new Date(parse(isoDate)!.getTime() + days * DAY));
}

/** N working days later (Monday–Friday; public holidays not included). */
export function addWorkingDays(isoDate: string, n: number): string {
  let d = parse(isoDate)!;
  let left = n;
  while (left > 0) {
    d = new Date(d.getTime() + DAY);
    const wd = d.getUTCDay();
    if (wd !== 0 && wd !== 6) left--;
  }
  return iso(d);
}

export function planDeadlines(input: PlannerInput): Deadline[] {
  if (!parse(input.arrival)) return [];
  const arrival = input.arrival;
  const visaStart = parse(input.visaStart) ? input.visaStart : arrival;
  const out: Deadline[] = [];

  if (input.country === "ES") {
    if (input.viaSchengen) {
      out.push({
        id: "es-entry-declaration",
        title: "File your entry declaration",
        date: addWorkingDays(arrival, 3),
        rule: "Non-EU nationals entering Spain from another Schengen country must file an entry declaration on arrival or within three working days.",
        note: "We count Monday to Friday only; public holidays aren't taken into account.",
        guide: { href: "/guides/how-to-get-nie-number-spain", label: "NIE guide" },
        sources: [S.oneNie],
      });
    }
    out.push({
      id: "es-tie",
      title: "Apply for your TIE card",
      date: addMonths(arrival, 1),
      rule: "If you have a visa or authorisation to stay more than six months, apply in person for your TIE within one month of entering Spain.",
      guide: { href: "/guides/spain-tie-card", label: "TIE guide" },
      sources: [S.interiorTie],
    });
    out.push({
      id: "es-padron",
      title: "Register on the padrón",
      date: null,
      rule: "Everyone living in Spain must register at the town hall of the municipality where they live most of the year. Do it as soon as you have a home.",
      guide: { href: "/guides/empadronamiento-spain-padron", label: "Padrón guide" },
      sources: [S.alicantePadron],
    });
    out.push({
      id: "es-padron-renewal",
      title: "Renew your padrón registration",
      date: addMonths(arrival, 24),
      rule: "Non-EU nationals without long-term residence must renew their padrón registration every two years, or it lapses.",
      note: "We've assumed you register in the week you arrive. Count two years from your actual registration date.",
      guide: { href: "/guides/empadronamiento-spain-padron", label: "Padrón guide" },
      sources: [S.zaragozaPadron],
    });
    if (input.esVisa === "dnv") {
      out.push({
        id: "es-dnv-residence",
        title: "Apply for your residence authorisation",
        kind: "from",
        date: addDays(addMonths(visaStart, 12), -60),
        rule: "The telework visa authorises one year. You can ask for the residence authorisation (up to three years) when 60 days remain on the visa.",
        note: "Based on the date your visa starts. Check the exact end date on your visa.",
        guide: { href: "/guides/spain-digital-nomad-visa", label: "Digital nomad visa guide" },
        sources: [S.ugeFaq],
      });
    }
    if (input.beckham) {
      const start = parse(input.workStart) ? input.workStart : arrival;
      out.push({
        id: "es-beckham",
        title: "Opt into the Beckham Law (Form 149)",
        date: addMonths(start, 6),
        rule: "File Form 149 within six months of the date your work starts in Spain's Social Security system. Upload your supporting documents first.",
        note: parse(input.workStart) ? undefined : "We've used your arrival date. Enter your Social Security start date for an exact deadline.",
        guide: { href: "/guides/spain-beckham-law", label: "Beckham Law guide" },
        sources: [S.aeat149],
      });
    }
    if (input.ukLicence) {
      out.push({
        id: "es-uk-licence",
        title: "Exchange your UK driving licence",
        date: addMonths(arrival, 6),
        rule: "A UK licence can be used for six months after you become resident in Spain. Apply for the exchange before then, with a DVLA check code.",
        note: "We've assumed your residence starts when you arrive.",
        guide: { href: "/guides/moving-from-uk-to-spain", label: "UK to Spain guide" },
        sources: [S.govukSpain],
      });
    }
  } else {
    out.push({
      id: "pt-nif",
      title: "Get your NIF (tax number)",
      date: null,
      rule: "You need a NIF to work, open a bank account or deal with the tax authority. Request it as early as you can; it's free.",
      guide: { href: "/guides/how-to-get-nif-portugal", label: "NIF guide" },
      sources: [S.atNif],
    });
    out.push({
      id: "pt-tax-rep",
      title: "Appoint a tax representative or sign up for e-notifications",
      date: null,
      rule: "Once you have a tax relationship in Portugal, you have 15 days to appoint a tax representative or sign up for electronic notifications.",
      guide: { href: "/guides/how-to-get-nif-portugal", label: "NIF guide" },
      sources: [S.atRep],
    });
    if (input.ptVisa !== "other") {
      out.push({
        id: "pt-aima",
        title: "Apply for your residence permit at AIMA",
        date: addDays(addMonths(visaStart, 4), -1),
        rule: "The residence visa is valid for four months and two entries. Attend your AIMA appointment and apply for your residence permit inside that window.",
        note: "Based on the date your visa starts. Book the appointment well before this date.",
        guide: {
          href: input.ptVisa === "d8" ? "/guides/portugal-d8-digital-nomad-visa" : "/guides/moving-from-us-to-portugal",
          label: input.ptVisa === "d8" ? "D8 visa guide" : "US to Portugal guide (D7)",
        },
        sources: [S.ePortugalVisas],
      });
    }
    if (input.ifici) {
      const year = parse(arrival)!.getUTCFullYear() + 1;
      out.push({
        id: "pt-ifici",
        title: "Register for IFICI",
        date: `${year}-01-15`,
        rule: "Register on the Portal das Finanças by 15 January of the year after you become tax resident. Late registration only counts from the year you register.",
        note: "We've assumed you become tax resident in the year you arrive. Check this with a tax adviser.",
        guide: { href: "/guides/portugal-ifici-tax-regime", label: "IFICI guide" },
        sources: [S.atIfici],
      });
    }
  }

  return out.sort((a, b) => (a.date ?? "0000") .localeCompare(b.date ?? "0000"));
}

/** An .ics calendar file with one all-day event per dated deadline. */
export function toIcs(deadlines: Deadline[]): string {
  const stamp = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
  const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/[,;]/g, (m) => "\\" + m).replace(/\n/g, "\\n");
  const events = deadlines
    .filter((d) => d.date)
    .map((d) => {
      const start = d.date!.replace(/-/g, "");
      const end = addDays(d.date!, 1).replace(/-/g, "");
      return [
        "BEGIN:VEVENT",
        `UID:${d.id}-${start}@relocate-plus.com`,
        `DTSTAMP:${stamp}`,
        `DTSTART;VALUE=DATE:${start}`,
        `DTEND;VALUE=DATE:${end}`,
        `SUMMARY:${esc((d.kind === "from" ? "From today: " : "Deadline: ") + d.title)}`,
        `DESCRIPTION:${esc(d.rule + (d.note ? " " + d.note : "") + " Guide: https://relocate-plus.com" + d.guide.href)}`,
        "BEGIN:VALARM",
        "TRIGGER:-P7D",
        "ACTION:DISPLAY",
        `DESCRIPTION:${esc(d.title)}`,
        "END:VALARM",
        "END:VEVENT",
      ].join("\r\n");
    });
  // RFC 5545: lines longer than 75 octets are folded with CRLF + space
  const fold = (line: string) => {
    const parts: string[] = [];
    let rest = line;
    while (rest.length > 73) {
      parts.push(rest.slice(0, 73));
      rest = rest.slice(73);
    }
    parts.push(rest);
    return parts.join("\r\n ");
  };
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Relocate+//Moving deadline planner//EN", "CALSCALE:GREGORIAN", ...events, "END:VCALENDAR"]
    .join("\r\n")
    .split("\r\n")
    .map(fold)
    .join("\r\n");
}
