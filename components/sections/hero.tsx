import Image from "next/image";

import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";
import FadeIn from "@/components/animations/fade-in";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden bg-[#FAFBFF]">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[-420px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[170px]" />

        <div className="absolute -left-44 top-48 h-[420px] w-[420px] rounded-full bg-sky-300/20 blur-[140px]" />

        <div className="absolute -right-52 bottom-0 h-[520px] w-[520px] rounded-full bg-blue-300/20 blur-[150px]" />

      </div>

      <Container>

        <div className="relative grid min-h-[92vh] items-center gap-28 py-28 lg:grid-cols-[1.05fr_.95fr]">

          {/* LEFT */}

          <FadeIn className="relative z-20 max-w-2xl">

            <Badge>
              Trusted by future expats in 190+ countries
            </Badge>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              RELOCATE+
            </p>

            <Heading className="mt-6">

              Plan your move.

              <br />

              <span className="text-[#2563EB]">

                Stress less.

              </span>

              <br />

              Move smarter.

            </Heading>

            <Text className="mt-8 max-w-xl text-xl leading-9">

              Plan every step of your international relocation with confidence.
              Organize your documents, follow a personalized roadmap,
              track your progress and always know exactly what comes next.

            </Text>

            <div className="mt-12 flex flex-wrap gap-5">

              <Button>
                Download on the App Store
              </Button>

              <Button
                variant="secondary"
                href="#app-showcase"
              >
                Explore the app
              </Button>

            </div>

            <div className="mt-16 flex items-center gap-8">

              <div className="flex -space-x-3">

                <div className="h-11 w-11 rounded-full border-2 border-white bg-slate-300" />

                <div className="h-11 w-11 rounded-full border-2 border-white bg-slate-400" />

                <div className="h-11 w-11 rounded-full border-2 border-white bg-slate-500" />

                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#2563EB] text-sm font-bold text-white">

                  +

                </div>

              </div>

              <div>

                <div className="text-lg text-[#2563EB]">

                  ★★★★★

                </div>

                <p className="text-sm text-slate-500">

                  Trusted by future expats worldwide

                </p>

              </div>

            </div>

          </FadeIn>

          {/* RIGHT */}

          <FadeIn
            delay={0.15}
            className="relative flex justify-center"
            >

            {/* Glow */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="h-[520px] w-[520px] rounded-full bg-blue-500/12 blur-[110px]" />

            </div>

            {/* Phone */}

            <FadeIn
               delay={0.15}
               className="relative z-20"
               >

              <div className="overflow-hidden rounded-[42px] border-[10px] border-[#0F172A] bg-black shadow-[0_50px_120px_rgba(15,23,42,.25)]">

                <Image
                  src="/images/dashboard.png"
                  alt="Relocate+ Dashboard"
                  width={390}
                  height={844}
                  priority
                  className="h-auto w-[340px]"
                />

              </div>

            </FadeIn>
                        {/* Roadmap Card */}

            <FadeIn className="absolute -left-12 top-12 z-30 hidden w-60 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_30px_80px_rgba(15,23,42,.12)] backdrop-blur-xl lg:block">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl">
                  🌍
                </div>

                <div>

                  <p className="font-semibold text-slate-900">
                    Roadmap
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    18 tasks remaining
                  </p>

                </div>

              </div>

            </FadeIn>

            {/* Documents Card */}

            <div className="absolute -right-10 top-40 z-30 hidden w-64 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_30px_80px_rgba(15,23,42,.12)] backdrop-blur-xl lg:block">

              <p className="text-sm font-semibold text-slate-900">
                Documents
              </p>

              <div className="mt-4 space-y-3">

                <div className="flex items-center justify-between">

                  <span className="text-sm text-slate-600">
                    Passport
                  </span>

                  <span className="font-medium text-emerald-500">
                    ✓
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-sm text-slate-600">
                    Visa
                  </span>

                  <span className="font-medium text-emerald-500">
                    ✓
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-sm text-slate-600">
                    Insurance
                  </span>

                  <span className="font-medium text-amber-500">
                    Pending
                  </span>

                </div>

              </div>

            </div>

            {/* Progress Card */}

            <div className="absolute -left-8 bottom-28 z-30 hidden w-56 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_30px_80px_rgba(15,23,42,.12)] backdrop-blur-xl lg:block">

              <p className="text-sm font-semibold text-slate-900">
                Progress
              </p>

              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">

                <div className="h-full w-[68%] rounded-full bg-[#2563EB]" />

              </div>

              <p className="mt-3 text-sm text-slate-500">
                You're making great progress.
              </p>

            </div>

            {/* AI Card */}

            <div className="absolute -right-8 bottom-10 z-30 hidden w-64 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_30px_80px_rgba(15,23,42,.12)] backdrop-blur-xl lg:block">

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">

                  ✨

                </div>

                <div>

                  <p className="font-semibold text-slate-900">
                    AI Insight
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Your visa route is ready. Schedule your embassy appointment next.
                  </p>

                </div>

              </div>

            </div>

          </FadeIn>

        </div>

      </Container>

    </Section>
  );
}