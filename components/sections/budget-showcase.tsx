import Image from "next/image";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function BudgetShowcase() {
  return (
    <Section
       id="budget"
       className="relative overflow-hidden py-20 lg:py-32 bg-surface"
>

      <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]" />

      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">

          {/* Text */}

          <div className="order-1 lg:order-2">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand">
              BUDGET TRACKER
            </p>

            <Heading className="mt-6 text-4xl sm:text-5xl">

              Know what your move
              <br />
              will cost.

            </Heading>

            <Text className="mt-6 text-lg leading-8 lg:mt-8 lg:text-xl lg:leading-9">

              Starting estimates for your route — visa fees, housing
              deposits, flights and more — that you adjust to your own
              situation. Then track what you actually spend.

            </Text>

            <div className="mt-8 space-y-6 lg:mt-12 lg:space-y-8">

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand">
                  💰
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Starting estimates for your route
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Common costs are pre-filled as rough estimates. Tap any
                    item to adjust it to your exact situation.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand">
                  📊
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Track actual spend
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Update actual costs as you go and see your progress
                    against budget.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand">
                  ✏️
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Add custom expenses
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Every relocation is different — add your own line items
                    anytime.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT — image */}

          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none order-2 lg:order-1">

            <div className="absolute inset-0 rounded-[48px] bg-blue-500/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-[42px] border border-slate-200 bg-surface shadow-[0_40px_120px_rgba(15,23,42,.08)]">

              <Image
                src="/images/budget.webp"
                alt="Relocate+ moving budget with estimated costs by category"
                width={1320}
                height={2372}
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