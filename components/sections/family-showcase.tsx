import Image from "next/image";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function FamilyShowcase() {
  return (
    <Section
       id="family"
       className="relative overflow-hidden bg-white"
>

      <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]" />

      <Container>

        <div className="grid items-center gap-24 lg:grid-cols-2">

          {/* LEFT — image */}

          <div className="relative">

            <div className="absolute inset-0 rounded-[48px] bg-blue-500/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-[42px] border border-slate-200 bg-white shadow-[0_40px_120px_rgba(15,23,42,.08)]">

              <Image
                src="/images/family.webp"
                alt="Relocate+ Family Tracking"
                width={600}
                height={600}
                className="w-full"
                sizes="(max-width: 768px) 100vw, 600px"
              />

            </div>

          </div>

          {/* RIGHT — text */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              FAMILY TRACKING
            </p>

            <Heading className="mt-6">

              Moving with family?
              <br />
              Track everyone's documents.

            </Heading>

            <Text className="mt-8 text-xl leading-9">

              Add your partner and children to your relocation. Track
              passport, visa, and document status for each family member
              individually.

            </Text>

            <div className="mt-12 space-y-8">

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  👨‍👩‍👧
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Individual checklists
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Each family member gets their own document checklist,
                    tailored to their needs.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  👶
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Child-specific requirements
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Extra items like school records and parental consent
                    letters, added automatically.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  ✅
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    See everyone's progress
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    One glance shows exactly who's ready and who still needs
                    documents.
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