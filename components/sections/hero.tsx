import Image from "next/image";

import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import StoreBadges from "@/components/ui/store-badges";
import { STORE_BADGES_LIVE } from "@/lib/site";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";
import FadeIn from "@/components/animations/fade-in";
import { Float, LineReveal, PopIn } from "@/components/animations/motion";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden bg-[#FAFBFF]">

      {/* Background — pure CSS gradients, zero blur filters, instant paint */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Soft radial glow behind content — gradient, not blur */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 600px at 70% 20%, rgba(37,99,235,0.09), transparent 60%), radial-gradient(800px 500px at 10% 80%, rgba(125,211,252,0.10), transparent 55%)",
          }}
        />
        {/* Subtle grid texture — premium detail, costs nothing */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 35%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 70% at 50% 35%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <Container>
        <div className="relative grid min-h-[92vh] items-center gap-16 py-24 lg:gap-28 lg:py-28 lg:grid-cols-[1.05fr_.95fr]">

          {/* LEFT */}
          <div className="relative z-20 max-w-2xl">

            <FadeIn>
              <Badge>
                Wherever you're moving, we've got you covered
              </Badge>
            </FadeIn>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              RELOCATE+
            </p>

            <Heading className="mt-6 text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">
              <LineReveal
                delay={0.1}
                lines={[
                  "Plan your move.",
                  <span key="s" className="hero-shimmer bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-[#2563EB] bg-[length:200%_auto] bg-clip-text text-transparent">
                    Stress less.
                  </span>,
                  "Move smarter.",
                ]}
              />
            </Heading>

            <FadeIn delay={0.1}>
              <Text className="mt-8 max-w-xl text-lg leading-8 lg:text-xl lg:leading-9">
                Plan every step of your international relocation with confidence.
                Organize your documents, follow a personalized roadmap,
                track your progress and always know exactly what comes next.
              </Text>

              {STORE_BADGES_LIVE ? (
                <StoreBadges campaign="home-hero" className="mt-12" />
              ) : (
                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  <Button href="https://apps.apple.com/app/relocate-plus/id6789252666">
                    Download on the App Store
                  </Button>
                  <Button variant="secondary" href="#app-showcase">
                    Explore the app
                  </Button>
                </div>
              )}

              <div className="mt-16 flex items-center gap-3">
                <div className="text-lg text-[#2563EB]">★★★★★</div>
                <p className="text-sm text-slate-500">Trusted by future expats worldwide</p>
              </div>
            </FadeIn>

          </div>

          {/* RIGHT */}
          <FadeIn delay={0.15} className="relative flex justify-center">

            {/* Glow behind phone — gradient ring, desktop only */}
            <div
              className="absolute inset-0 hidden items-center justify-center lg:flex"
              aria-hidden="true"
            >
              <div
                className="h-[560px] w-[560px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(37,99,235,0.14) 0%, rgba(37,99,235,0.05) 45%, transparent 70%)",
                }}
              />
            </div>

            {/* Phone */}
            <PopIn delay={0.35} className="relative z-20">
            <Float amplitude={12} duration={7}>
              {/* Gradient ring border around phone — premium detail */}
              <div className="rounded-[46px] bg-gradient-to-b from-slate-200 via-white to-slate-300 p-[3px] shadow-[0_50px_120px_rgba(15,23,42,.22)]">
                <div className="relative overflow-hidden rounded-[43px] border-[9px] border-[#0F172A] bg-black">
                  <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[1.3%] z-10 h-[3.4%] w-[29%] -translate-x-1/2 rounded-full bg-black" />
                  <Image
                    src="/images/home.webp"
                    alt="Relocate+ home screen showing a move from the Netherlands to Spain, 75% ready"
                    width={1320}
                    height={2868}
                    priority
                    className="h-auto w-[280px] sm:w-[320px] lg:w-[340px]"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 340px"
                  />
                </div>
              </div>
            </Float>
            </PopIn>

            {/* Floating cards — desktop only, no changes to content */}
            <PopIn delay={0.7} className="absolute -left-12 top-12 z-30 hidden lg:block">
              <Float amplitude={8} duration={5.5} delay={0.7}>
              <div className="w-60 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_30px_80px_rgba(15,23,42,.12)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl">
                  🌍
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Roadmap</p>
                  <p className="mt-1 text-sm text-slate-500">12 of 14 tasks to go</p>
                </div>
              </div>
            </div>
              </Float>
            </PopIn>

            <PopIn delay={0.85} className="absolute -right-10 top-40 z-30 hidden lg:block">
              <Float amplitude={8} duration={6.5} delay={0.85}>
              <div className="w-64 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_30px_80px_rgba(15,23,42,.12)] backdrop-blur-xl">
              <p className="text-sm font-semibold text-slate-900">Documents</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Passport</span>
                  <span className="font-medium text-emerald-500">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Visa</span>
                  <span className="font-medium text-emerald-500">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">NIE number</span>
                  <span className="font-medium text-amber-500">Pending</span>
                </div>
              </div>
            </div>
              </Float>
            </PopIn>

            <PopIn delay={1.0} className="absolute -left-8 bottom-28 z-30 hidden lg:block">
              <Float amplitude={8} duration={6} delay={1.0}>
              <div className="w-56 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_30px_80px_rgba(15,23,42,.12)] backdrop-blur-xl">
              <p className="text-sm font-semibold text-slate-900">Progress</p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8]" />
              </div>
              <p className="mt-3 text-sm text-slate-500">75% ready for your move.</p>
            </div>
              </Float>
            </PopIn>

            <PopIn delay={1.15} className="absolute -right-8 bottom-10 z-30 hidden lg:block">
              <Float amplitude={8} duration={7} delay={1.15}>
              <div className="w-64 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_30px_80px_rgba(15,23,42,.12)] backdrop-blur-xl">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  ✨
                </div>
                <div>
                  <p className="font-semibold text-slate-900">AI Insight</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Your visa route is chosen. Get your Spanish NIE number next.
                  </p>
                </div>
              </div>
            </div>
              </Float>
            </PopIn>

          </FadeIn>

        </div>
      </Container>

    </Section>
  );
}