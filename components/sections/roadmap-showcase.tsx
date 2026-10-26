import Image from "next/image";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function RoadmapShowcase() {
  return (
    <Section
       id="roadmaps"
       className="relative overflow-hidden py-20 lg:py-32 bg-[#F8FBFF]"
>

      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]" />

      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">

          {/* LEFT */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              PERSONALIZED ROADMAPS
            </p>

            <Heading className="mt-6 text-4xl sm:text-5xl">

              Always know
              <br />
              what comes next.

            </Heading>

            <Text className="mt-6 text-lg leading-8 lg:mt-8 lg:text-xl lg:leading-9">

              Every relocation is different.
              Relocate+ builds a personalized roadmap based on
              your destination, visa type and personal situation,
              guiding you step by step until you're fully settled.

            </Text>

            <div className="mt-8 space-y-6 lg:mt-12 lg:space-y-8">

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  ✓
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Tailored to your journey
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Every task is generated based on your relocation profile.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  ✓
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Never miss a deadline
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Stay ahead with reminders for every important milestone.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  ✓
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Clear progress
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    See exactly how much you've completed and what's left.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none">

            <div className="absolute inset-0 rounded-[48px] bg-blue-500/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-[42px] border border-slate-200 bg-white shadow-[0_40px_120px_rgba(15,23,42,.08)]">

              <Image
               src="/images/roadmap.webp"
               alt="Relocate+ roadmap with tasks grouped by phase"
               width={1320}
               height={2680}
               className="w-full"
               sizes="(max-width: 1023px) 320px, 600px"
             />

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}