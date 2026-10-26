"use client";

import Image from "next/image";
import Link from "next/link";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

type Feature = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  points: string[];
  image: string;
  alt: string;
  link?: { href: string; label: string };
};

const FEATURES: Feature[] = [
  {
    id: "roadmaps",
    label: "Roadmap",
    eyebrow: "Personalized roadmap",
    title: "Always know what comes next.",
    intro:
      "Relocate+ builds a roadmap from your destination, visa type and situation, and guides you step by step until you're settled.",
    points: ["Tailored to your move", "Grouped by phase", "Clear progress"],
    image: "/images/roadmap-v3.webp",
    alt: "Relocate+ roadmap with tasks grouped by phase",
  },
  {
    id: "deadlines",
    label: "Deadlines",
    eyebrow: "Deadline agenda",
    title: "Every date, in one agenda.",
    intro:
      "Your deadlines grouped into this week, this month and coming up. Tap the calendar icon to add any of them to your iPhone calendar.",
    points: ["Add to iPhone calendar", "Add your own dates", "Straight to the task"],
    image: "/images/agenda-v3.webp",
    alt: "Relocate+ deadline agenda grouped by this week and this month",
  },
  {
    id: "documents",
    label: "Documents",
    eyebrow: "Secure document vault",
    title: "Every document, in one vault.",
    intro:
      "See exactly which documents your move needs and upload them as you go. Everything is encrypted and only you can access your files.",
    points: ["Encrypted and private", "Required items flagged", "Progress at a glance"],
    image: "/images/documents-v3.webp",
    alt: "Relocate+ encrypted document vault with required documents",
  },
  {
    id: "budget",
    label: "Budget",
    eyebrow: "Budget",
    title: "Know what your move will cost.",
    intro:
      "Starting estimates for your route, from visa fees to deposits and flights, that you adjust to your situation. Then track what you actually spend.",
    points: ["Rough starting estimates", "Track actual spend", "Add your own costs"],
    image: "/images/budget-v3.webp",
    alt: "Relocate+ moving budget with estimated costs by category",
  },
  {
    id: "tax",
    label: "Tax",
    eyebrow: "Tax guide",
    title: "Tax on both sides, explained.",
    intro:
      "How tax works in the country you're moving to, and what to sort out in the one you're leaving. Explanations with official links, not tax advice.",
    points: ["Moving to and leaving", "Special regimes explained", "Links to official sources"],
    image: "/images/tax-v3.webp",
    alt: "Relocate+ tax guide for moving to Spain",
  },
  {
    id: "family",
    label: "Family",
    eyebrow: "Family",
    title: "Documents for everyone moving.",
    intro:
      "Add your partner and children. Each person gets their own checklist, including child items like school records and parental consent letters.",
    points: ["A checklist per person", "Child-specific items", "See who's ready"],
    image: "/images/family-v3.webp",
    alt: "Relocate+ family document checklists for a partner and child",
    link: { href: "/guides/moving-abroad-with-kids", label: "Moving abroad with kids: our guide" },
  },
  {
    id: "pets",
    label: "Pets",
    eyebrow: "Pets",
    title: "Vaccines, papers and timing.",
    intro:
      "Add each pet and get its own checklist for microchips, vaccinations and travel papers, with when to start every step.",
    points: ["Start dates per step", "Critical steps flagged", "One checklist per pet"],
    image: "/images/pets-v3.webp",
    alt: "Relocate+ pet checklist with microchip and rabies steps",
    link: { href: "/guides/moving-abroad-with-a-dog-or-cat", label: "Moving abroad with a pet: our guide" },
  },
  {
    id: "ai",
    label: "AI assistant",
    eyebrow: "AI assistant",
    title: "Answers for your exact move.",
    intro:
      "Ask about visas, deadlines, taxes, housing or banking. The assistant already knows where you're moving from and to.",
    points: ["Knows your route", "Suggested questions", "Pick up where you left off"],
    image: "/images/ai-v3.webp",
    alt: "Relocate+ AI assistant for your move",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function AppTour() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const n = FEATURES.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(n - 1, Math.max(0, Math.floor(v * n))));
  });

  const goTo = (i: number) => {
    document.getElementById(FEATURES[i].id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  const fade = reduce ? "" : "transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]";

  return (
    <section
      ref={ref}
      id="app-showcase"
      aria-label="Tour of the Relocate+ app"
      className="relative bg-[#0B1530]"
      style={{ height: `${n * 100}svh` }}
    >
      {/* Scroll anchors, one per feature, so the menu links land on the right screen */}
      {FEATURES.map((f, i) => (
        <div
          key={f.id}
          id={f.id}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 h-[100svh]"
          style={{ top: `${i * 100}svh` }}
        />
      ))}

      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Background glow that shifts with the active feature */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${fade}`}
          style={{
            background: `radial-gradient(900px 600px at ${active % 2 ? "25%" : "75%"} 40%, rgba(37,99,235,0.28), transparent 60%), radial-gradient(700px 500px at ${active % 2 ? "80%" : "15%"} 90%, rgba(56,189,248,0.12), transparent 60%)`,
          }}
        />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col px-5 pb-6 pt-24 sm:px-8 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20 lg:px-12 lg:pb-0 lg:pt-20">
          {/* TEXT */}
          <div className="relative">
            <div className="flex items-center gap-4">
              <p className="font-mono text-sm tracking-[0.2em] text-[#C9A46A]">
                {pad(active + 1)} / {pad(n)}
              </p>
              <div className="h-px flex-1 bg-white/10 lg:max-w-[220px]">
                <div
                  className={`h-px bg-[#C9A46A] ${reduce ? "" : "transition-[width] duration-500"}`}
                  style={{ width: `${((active + 1) / n) * 100}%` }}
                />
              </div>
            </div>

            {/* All feature texts stay in the page (for search engines); only the active one shows */}
            <div className="relative mt-4 min-h-[178px] sm:min-h-[190px] lg:mt-8 lg:min-h-[420px]">
              {FEATURES.map((f, i) => {
                const on = i === active;
                return (
                  <div
                    key={f.id}
                    aria-hidden={!on}
                    className={`absolute inset-x-0 top-0 ${fade} ${
                      on ? "opacity-100 translate-y-0" : `pointer-events-none opacity-0 ${i < active ? "-translate-y-6" : "translate-y-6"}`
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300 sm:text-sm">
                      {f.eyebrow}
                    </p>
                    <h3 className="mt-3 text-[26px] font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:mt-5 lg:text-6xl">
                      {f.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-[14.5px] leading-[1.45rem] text-slate-300 sm:text-base sm:leading-7 lg:mt-6 lg:line-clamp-none lg:max-w-xl lg:text-xl lg:leading-9">
                      {f.intro}
                    </p>
                    <ul className="mt-8 hidden flex-wrap gap-3 lg:flex">
                      {f.points.map((p) => (
                        <li
                          key={p}
                          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200"
                        >
                          ✓ {p}
                        </li>
                      ))}
                    </ul>
                    {f.link ? (
                      <Link
                        href={f.link.href}
                        tabIndex={on ? 0 : -1}
                        className="mt-8 hidden items-center gap-2 font-semibold text-blue-300 hover:text-white lg:inline-flex"
                      >
                        {f.link.label} <span aria-hidden="true">→</span>
                      </Link>
                    ) : null}
                  </div>
                );
              })}
            </div>

            {/* Feature list (desktop) */}
            <nav aria-label="App features" className="mt-4 hidden flex-wrap gap-2 lg:flex">
              {FEATURES.map((f, i) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    i === active ? "bg-white text-[#0B1530]" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </nav>
          </div>

          {/* PHONE */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center lg:flex-none">
            <div
              aria-hidden="true"
              className="absolute h-[70%] w-[70%] rounded-full bg-blue-500/25 blur-[90px]"
            />
            <div className="relative h-full max-h-[min(72svh,720px)] lg:h-[min(76svh,720px)]">
              <div className="h-full rounded-[44px] bg-gradient-to-b from-slate-500/60 via-slate-700/40 to-slate-500/60 p-[3px] shadow-[0_50px_120px_rgba(0,0,0,.45)]">
                <div className="relative h-full overflow-hidden rounded-[41px] border-[8px] border-[#05080F] bg-[#F4F3EF]" style={{ aspectRatio: "1320 / 2868" }}>
                  <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[1.3%] z-10 h-[3.4%] w-[29%] -translate-x-1/2 rounded-full bg-black" />
                  {FEATURES.map((f, i) => (
                    <Image
                      key={f.id}
                      src={f.image}
                      alt={i === active ? f.alt : ""}
                      fill
                      sizes="(max-width: 1023px) 260px, 360px"
                      priority={i === 0}
                      className={`object-contain object-top ${reduce ? "" : "transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]"} ${
                        i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dots (mobile) */}
          <div className="mt-4 flex justify-center gap-2 lg:hidden">
            {FEATURES.map((f, i) => (
              <button
                key={f.id}
                type="button"
                aria-label={f.label}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-[#C9A46A]" : "w-2 bg-white/25"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
