import Image from "next/image";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function RoadmapShowcase() {
  return (
    <Section
       id="roadmaps"
       className="relative overflow-hidden bg-[#F8FBFF]"
>

      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]" />

      <Container>

        <div className="grid items-center gap-24 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              PERSONALIZED ROADMAPS
            </p>

            <Heading className="mt-6">

              Always know
              <br />
              what comes next.

            </Heading>

            <Text className="mt-8 text-xl leading-9">

              Every relocation is different.
              Relocate+ builds a personalized roadmap based on
              your destination, visa type and personal situation,
              guiding you step by step until you're fully settled.

            </Text>

            <div className="mt-12 space-y-8">

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
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

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
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

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
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

          <div className="relative">

            <div className="absolute inset-0 rounded-[48px] bg-blue-500/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-[42px] border border-slate-200 bg-white shadow-[0_40px_120px_rgba(15,23,42,.08)]">

              <Image
               src="/images/roadmap.png"
               alt="Relocate+ Roadmap"
               width={600}
               height={600}
               className="w-full"
               sizes="(max-width: 768px) 100vw, 600px"
             />

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}