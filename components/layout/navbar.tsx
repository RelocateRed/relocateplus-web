"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { appStoreLink } from "@/lib/site";

// Same anchors as the app tour on the homepage. "/#..." so they also work from other pages.
const FEATURES = [
  { label: "Roadmap", href: "/#roadmaps", icon: "🗺️", text: "Every step, in the right order" },
  { label: "Deadlines", href: "/#deadlines", icon: "📅", text: "One agenda, synced to your calendar" },
  { label: "Documents", href: "/#documents", icon: "🔒", text: "An encrypted vault for every file" },
  { label: "Budget", href: "/#budget", icon: "💶", text: "Estimate and track moving costs" },
  { label: "Tax", href: "/#tax", icon: "％", text: "Tax on both sides, explained" },
  { label: "Family", href: "/#family", icon: "👨‍👩‍👧", text: "Checklists for everyone moving" },
  { label: "Pets", href: "/#pets", icon: "🐾", text: "Vaccines, papers and timing" },
  { label: "AI assistant", href: "/#ai", icon: "✨", text: "Answers for your exact move" },
];

const LINKS = [
  { label: "Why Relocate+", href: "/#why-relocate", key: "why" },
  { label: "Moving guides", href: "/guides", key: "guides" },
  { label: "Visa finder", href: "/tools/visa-finder", key: "finder" },
  { label: "FAQ", href: "/#faq", key: "faq" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Which part of the homepage are we in?
      const y = window.scrollY + 140;
      const inside = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const top = el.getBoundingClientRect().top + window.scrollY;
        return y >= top && y < top + el.offsetHeight;
      };
      if (inside("app-showcase")) setActive("features");
      else if (inside("why-relocate")) setActive("why");
      else if (inside("faq")) setActive("faq");
      else setActive("");

      // Switch to the dark header while it sits over the dark app tour
      const tour = document.getElementById("app-showcase");
      if (tour) {
        const r = tour.getBoundingClientRect();
        setOnDark(r.top <= 40 && r.bottom > 40);
      } else setOnDark(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Close the mobile menu on navigation and lock page scroll while it's open
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (key: string) =>
    key === "guides"
      ? pathname.startsWith("/guides") || pathname.startsWith("/visa-rule-changes")
      : key === "finder"
        ? pathname.startsWith("/tools")
        : active === key;

  const dark = onDark && !menuOpen;
  // "!" because the global a { color: inherit } rule would otherwise win
  const linkBase = dark ? "!text-slate-300 hover:!text-white" : "!text-slate-600 hover:!text-brand";
  const linkOn = dark ? "!text-white" : "!text-slate-900";

  const openFeatures = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setFeaturesOpen(true);
  };
  const closeFeatures = () => {
    closeTimer.current = setTimeout(() => setFeaturesOpen(false), 120);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        menuOpen
          ? "bg-surface"
          : dark
            ? "on-dark border-b border-white/10 bg-[#0B1530]/80 backdrop-blur-2xl"
            : scrolled
              ? "border-b border-slate-200/70 bg-surface/80 backdrop-blur-2xl shadow-[0_8px_40px_rgba(15,23,42,.06)]"
              : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Relocate+ home">
          <Image
            src="/logo.png"
            alt="Relocate+ Logo"
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-xl object-contain"
          />
          <span className={`text-lg font-bold transition-colors ${dark ? "!text-white" : "!text-slate-900"}`}>
            Relocate+
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          <Link
            href={LINKS[0].href}
            className={`relative text-sm font-medium transition-colors ${isActive("why") ? linkOn : linkBase}`}
          >
            {LINKS[0].label}
            {isActive("why") && <Underline dark={dark} />}
          </Link>

          <div className="relative" onMouseEnter={openFeatures} onMouseLeave={closeFeatures}>
            <button
              type="button"
              aria-expanded={featuresOpen}
              aria-controls="features-menu"
              onClick={() => setFeaturesOpen((o) => !o)}
              className={`relative flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isActive("features") ? linkOn : linkBase
              }`}
            >
              Features
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className={`h-4 w-4 transition-transform ${featuresOpen ? "rotate-180" : ""}`}
              >
                <path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {isActive("features") && <Underline dark={dark} />}
            </button>

            <AnimatePresence>
              {featuresOpen && (
                <motion.div
                  id="features-menu"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4"
                >
                  <div className="grid grid-cols-2 gap-1 rounded-3xl border border-slate-200 bg-surface p-3 shadow-[0_30px_80px_rgba(15,23,42,.14)]">
                    {FEATURES.map((f) => (
                      <Link
                        key={f.href}
                        href={f.href}
                        onClick={() => setFeaturesOpen(false)}
                        className="flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-tint"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-base">
                          {f.icon}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold !text-slate-900">{f.label}</span>
                          <span className="mt-0.5 block text-xs leading-5 text-slate-500">{f.text}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {LINKS.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative text-sm font-medium transition-colors ${isActive(l.key) ? linkOn : linkBase}`}
            >
              {l.label}
              {isActive(l.key) && <Underline dark={dark} />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={appStoreLink("nav")}
            className="hidden rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold !text-white shadow-[0_10px_30px_rgba(37,99,235,.35)] transition-colors hover:bg-[#1D4ED8] sm:inline-flex"
          >
            Download
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
            className={`flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
              dark ? "bg-white/10 text-white" : "bg-slate-100 text-slate-900"
            }`}
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="h-[calc(100svh-80px)] overflow-y-auto bg-surface px-5 pb-10 pt-2 sm:px-8 lg:hidden"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Features</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={f.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 px-3 py-3"
                  >
                    <span className="text-lg">{f.icon}</span>
                    <span className="text-sm font-semibold !text-slate-900">{f.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 divide-y divide-slate-100 border-y border-slate-100">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-4 text-lg font-semibold !text-slate-900"
                >
                  {l.label}
                  <span aria-hidden="true" className="text-slate-400">→</span>
                </Link>
              ))}
            </div>

            <a
              href={appStoreLink("nav-mobile")}
              className="mt-8 flex w-full items-center justify-center rounded-full bg-[#2563EB] px-6 py-4 font-semibold !text-white"
            >
              Download on the App Store
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Underline({ dark }: { dark: boolean }) {
  return (
    <span
      className={`absolute -bottom-2 left-0 h-[2px] w-full rounded-full ${dark ? "bg-[#C9A46A]" : "bg-[#2563EB]"}`}
    />
  );
}
