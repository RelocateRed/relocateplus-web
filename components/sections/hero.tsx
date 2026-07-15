import Image from "next/image";

import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden bg-white">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#edf4ff_0%,#ffffff_72%)]" />

      </div>

      <Container>

        <div className="grid min-h-[92vh] items-center gap-20 py-24 lg:grid-cols-[1.05fr_.95fr]">

          {/* LEFT */}

          <div className="max-w-xl">

            <Badge>
              Trusted by future expats in 190+ countries
            </Badge>

            <Heading className="mt-10 text-5xl font-bold leading-[1.02] tracking-[-0.05em] text-slate-900 sm:text-6xl lg:text-7xl">

              Plan your move.

              <br />

              <span className="text-[#2563EB]">
                Stress less.
              </span>

              <br />

              Move smarter.

            </Heading>

            <Text className="mt-10 text-lg leading-9 text-slate-600">

              Everything you need to plan an international relocation in one
              place. Organize your documents, follow personalized roadmaps,
              track your progress and confidently manage every step of your move.

            </Text>

            <div className="mt-14 flex flex-col gap-4 sm:flex-row">

              <Button>
                Download on the App Store
              </Button>

              <Button
                variant="secondary"
                href="#roadmaps"
              >
                Explore Features
              </Button>

            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">

              <div>

                <p className="text-3xl font-bold text-slate-900">
                  190+
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Countries
                </p>

              </div>

              <div>

                <p className="text-3xl font-bold text-slate-900">
                  Secure
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Documents
                </p>

              </div>

              <div>

                <p className="text-3xl font-bold text-slate-900">
                  Smart
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Roadmaps
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 opacity-70" />

              <div className="relative rounded-[42px] border border-slate-200 bg-white p-3 shadow-[0_40px_100px_rgba(15,23,42,.10)]">

                <Image
                  src="/images/dashboard.webp"
                  alt="Relocate+ Dashboard"
                  width={390}
                  height={844}
                  priority
                  quality={90}
                  sizes="(max-width:768px) 320px, 390px"
                  className="block w-[290px] rounded-[30px] sm:w-[330px] lg:w-[360px]"
                />
                              </div>

              <div className="absolute -bottom-6 left-1/2 hidden w-[300px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,.08)] lg:block">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                      RELOCATE+
                    </p>

                    <p className="mt-2 text-lg font-semibold text-slate-900">
                      Your relocation hub
                    </p>

                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">

                    🌍

                  </div>

                </div>

                <div className="mt-6 space-y-4">

                  <div className="flex items-center justify-between">

                    <span className="text-sm text-slate-500">
                      Personalized roadmap
                    </span>

                    <span className="font-semibold text-emerald-500">
                      ✓
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-sm text-slate-500">
                      Secure documents
                    </span>

                    <span className="font-semibold text-emerald-500">
                      ✓
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-sm text-slate-500">
                      Progress tracking
                    </span>

                    <span className="font-semibold text-emerald-500">
                      ✓
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
                <div className="border-t border-slate-200 pt-14">

          <div className="mx-auto max-w-5xl">

            <p className="text-center text-sm font-semibold uppercase tracking-[0.20em] text-slate-400">

              Everything you need for a successful relocation

            </p>

            <div className="mt-10 grid gap-10 md:grid-cols-3">

              <div className="text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">

                  📍

                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">

                  Personalized Roadmaps

                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">

                  Receive a relocation roadmap tailored to your destination,
                  helping you complete every important step in the right order.

                </p>

              </div>

              <div className="text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">

                  📄

                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">

                  Secure Documents

                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">

                  Store passports, visas and every important relocation
                  document in one organized and secure place.

                </p>

              </div>

              <div className="text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">

                  📈

                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">

                  Track Progress

                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">

                  Stay on top of deadlines, completed tasks and upcoming
                  milestones throughout your relocation.

                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}