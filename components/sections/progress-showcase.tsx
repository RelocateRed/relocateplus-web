import Image from "next/image";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function ProgressShowcase() {
  return (
    <Section
       id="progress"
       className="relative overflow-hidden bg-[#F8FBFF]"
>

      <div className="absolute right-0 top-24 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]" />

      <Container>

        <div className="grid items-center gap-24 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              TRACK YOUR PROGRESS
            </p>

            <Heading className="mt-6">

              Stay motivated.
              <br />
              See every milestone.

            </Heading>

            <Text className="mt-8 text-xl leading-9">

              Every completed task moves you closer to your new life abroad.
              Relocate+ keeps your progress visible so you always know what
              you've accomplished and what's next.

            </Text>

            <div className="mt-12 space-y-8">

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  ✓
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Visual progress
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Instantly see how much of your relocation journey is complete.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  📅
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Upcoming milestones
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Stay prepared for every important deadline ahead.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  🚀
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Stay on track
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Keep moving forward with confidence until you're fully settled.
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
               src="/images/progress.png"
               alt="Relocate+ Progress"
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