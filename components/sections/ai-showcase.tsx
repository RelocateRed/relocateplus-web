import Image from "next/image";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function AIShowcase() {
  return (
    <Section
       id="ai"
       className="relative overflow-hidden py-20 lg:py-32 bg-white"
>

      <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]" />

      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">

          {/* LEFT */}

          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none order-2 lg:order-1">

            <div className="absolute inset-0 rounded-[48px] bg-blue-500/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-[42px] border border-slate-200 bg-white shadow-[0_40px_120px_rgba(15,23,42,.08)]">

              <Image
               src="/images/ai.webp"
               alt="Relocate+ AI"
               width={600}
               height={600}
               className="w-full"
               sizes="(max-width: 1023px) 320px, 600px"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div className="order-1 lg:order-2">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              AI ASSISTANT
            </p>

            <Heading className="mt-6 text-4xl sm:text-5xl">

              Guidance when
              <br />
              you need it.

            </Heading>

            <Text className="mt-6 text-lg leading-8 lg:mt-8 lg:text-xl lg:leading-9">

              Relocate+ uses AI to support your relocation journey with helpful
              recommendations, explanations and answers. The app stays in control—
              AI simply helps you move forward with more confidence.

            </Text>

            <div className="mt-8 space-y-6 lg:mt-12 lg:space-y-8">

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  💡
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Smart recommendations
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Receive suggestions based on your destination and progress.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  🌍
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Country-specific guidance
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Understand relocation requirements with clear explanations.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  ⚡
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Instant answers
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Get quick help without searching through dozens of websites.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}