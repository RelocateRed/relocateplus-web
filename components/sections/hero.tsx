import Image from "next/image";

import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-white">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100 opacity-60" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#dbeafe_0%,transparent_60%)]" />

      </div>

      <Container>

        <div className="grid min-h-[92vh] items-center gap-20 py-28 lg:grid-cols-2">

          {/* LEFT */}

          <div className="max-w-xl">

            <Badge>
              Trusted by future expats in 190+ countries
            </Badge>

            <Heading className="mt-8 text-5xl leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">

              Plan your move.

              <br />

              <span className="text-[#2563EB]">

                Stress less.

              </span>

              <br />

              Move smarter.

            </Heading>

            <Text className="mt-8 text-lg leading-8 text-slate-600">

              Plan every step of your international relocation with confidence.
              Organize important documents, follow your personalized roadmap,
              keep track of progress and always know what comes next.

            </Text>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

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

            <div className="mt-14 flex items-center gap-4">

              <div className="text-xl text-[#2563EB]">

                ★★★★★

              </div>

              <p className="text-sm text-slate-500">

                Trusted by future expats worldwide

              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              <div className="absolute inset-0 rounded-[50px] bg-blue-200/30 scale-110" />

              <div className="relative overflow-hidden rounded-[42px] border-[10px] border-[#0F172A] bg-black shadow-2xl">

                <Image
                  src="/images/dashboard.webp"
                  alt="Relocate+ Dashboard"
                  width={390}
                  height={844}
                  priority
                  quality={90}
                  sizes="(max-width:768px) 320px, 390px"
                  className="block h-auto w-[290px] sm:w-[330px] lg:w-[360px]"
                />

              </div>
                          </div>

          </div>

        </div>

        {/* Bottom Stats */}

        <div className="mt-10 grid gap-6 border-t border-slate-200 pt-10 sm:grid-cols-3">

          <div>

            <p className="text-3xl font-bold text-slate-900">
              190+
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Countries supported
            </p>

          </div>

          <div>

            <p className="text-3xl font-bold text-slate-900">
              Secure
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Organize your important relocation documents in one place.
            </p>

          </div>

          <div>

            <p className="text-3xl font-bold text-slate-900">
              Personalized
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Follow a relocation roadmap tailored to your destination.
            </p>

          </div>

        </div>

      </Container>

    </Section>
  );
}