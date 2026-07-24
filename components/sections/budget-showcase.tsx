import Image from "next/image";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function BudgetShowcase() {
  return (
    <Section
       id="budget"
       className="relative overflow-hidden bg-white"
>

      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]" />

      <Container>

        <div className="grid items-center gap-24 lg:grid-cols-2">

          {/* LEFT — text (swapped side for visual rhythm) */}

          <div className="order-2 lg:order-1">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              BUDGET TRACKER
            </p>

            <Heading className="mt-6">

              Know exactly
              <br />
              what your move costs.

            </Heading>

            <Text className="mt-8 text-xl leading-9">

              Real cost estimates for your exact destination — visa fees,
              housing deposits, flights, and more. Track what's estimated
              against what you actually spend.

            </Text>

            <div className="mt-12 space-y-8">

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  💰
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Destination-specific estimates
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Pre-filled costs based on real data for your corridor.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
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

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
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

          <div className="relative order-1 lg:order-2">

            <div className="absolute inset-0 rounded-[48px] bg-blue-500/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-[42px] border border-slate-200 bg-white shadow-[0_40px_120px_rgba(15,23,42,.08)]">

              <Image
                src="/images/budget.webp"
                alt="Relocate+ Budget Tracker"
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