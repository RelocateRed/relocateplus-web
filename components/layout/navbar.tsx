"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";

// "/#..." so the links also work from other pages (e.g. /guides)
const links = [
  { label: "Why", href: "/#why-relocate" },
  { label: "Roadmap", href: "/#roadmaps" },
  { label: "Deadlines", href: "/#deadlines" },
  { label: "Documents", href: "/#documents" },
  { label: "AI", href: "/#ai" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .filter((link) => link.href.startsWith("/#"))
      .map((link) => document.querySelector(link.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        // getBoundingClientRect works for anchors nested inside other sections
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (
          scrollPosition >= top &&
          scrollPosition < top + section.offsetHeight
        ) {
          setActive(`/#${section.id}`);
          break;
        }
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/80 backdrop-blur-2xl shadow-[0_8px_40px_rgba(15,23,42,.06)]"
          : "bg-transparent"
      }`}
    >
      <Container>

        <div className="flex h-20 items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
            src="/logo.png"
            alt="Relocate+ Logo"
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-xl object-contain"
            />

            <span className="text-lg font-bold text-slate-900">
              Relocate+
            </span>

          </Link>

          <nav className="hidden items-center gap-10 lg:flex">

            {links.map((link) => (

              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition ${
                  active === link.href
                    ? "hover:text-[#2563EB] duration-300"
                    : "text-slate-600"
                }`}
              >
                {link.label}

                {active === link.href && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#2563EB]" />
                )}

              </Link>

            ))}

          </nav>

          <div className="hidden lg:block">

            <Button href="https://apps.apple.com/app/relocate-plus/id6789252666">
              Download
            </Button>

          </div>

        </div>

      </Container>

    </header>
  );
}