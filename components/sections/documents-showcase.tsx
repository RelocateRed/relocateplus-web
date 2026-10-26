import Image from "next/image";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function DocumentsShowcase() {
  return (
    <Section
       id="documents"
       className="relative overflow-hidden py-20 lg:py-32 bg-[#F8FBFF]"
>

      <div className="absolute left-0 top-24 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]" />

      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">

          {/* LEFT */}

          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none order-2">

            <div className="absolute inset-0 rounded-[48px] bg-blue-500/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-[42px] border border-slate-200 bg-white shadow-[0_40px_120px_rgba(15,23,42,.08)]">

              <Image
               src="/images/documents.webp"
               alt="Relocate+ encrypted document vault with required documents"
               width={1320}
               height={2680}
               className="w-full"
               sizes="(max-width: 1023px) 320px, 600px"
             />

            </div>

          </div>

          {/* RIGHT */}

          <div className="order-1">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              SECURE DOCUMENT STORAGE
            </p>

            <Heading className="mt-6 text-4xl sm:text-5xl">

              Everything important.
              <br />
              Always within reach.

            </Heading>

            <Text className="mt-6 text-lg leading-8 lg:mt-8 lg:text-xl lg:leading-9">

              Keep your passport, visa, insurance,
              certificates and other essential documents
              organized in one secure place throughout
              your relocation journey.

            </Text>

            <div className="mt-8 space-y-6 lg:mt-12 lg:space-y-8">

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  🔒
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Secure cloud storage
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Access your documents whenever you need them.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  📄
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Everything organized
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    No more searching through emails or folders.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  ☁️
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Ready everywhere
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Your important files stay available wherever life takes you.
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