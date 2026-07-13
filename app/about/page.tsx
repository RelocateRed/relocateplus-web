import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <Section className="relative overflow-hidden bg-[#FAFBFF] pt-40">

        <div className="absolute left-1/2 top-[-350px] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              ABOUT RELOCATE+
            </p>

            <Heading className="mt-6">

              Helping people
              <br />
              move abroad with confidence.

            </Heading>

            <Text className="mx-auto mt-8 max-w-3xl text-xl leading-9">

              Relocate+ was created to simplify one of life's biggest
              transitions. Instead of juggling spreadsheets, emails,
              paperwork and countless websites, everything you need is
              organized in one place.

            </Text>

          </div>

        </Container>

      </Section>

      {/* Mission */}

      <Section className="bg-white">

        <Container>

          <div className="grid gap-20 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
                OUR MISSION
              </p>

              <Heading className="mt-6">

                Make international relocation
                accessible for everyone.

              </Heading>

            </div>

            <div>

              <Text className="leading-9">

                Moving to another country is exciting, but it can also
                feel overwhelming. Every destination has different
                requirements, deadlines and paperwork.

              </Text>

              <Text className="mt-8 leading-9">

                Our mission is to remove that complexity by providing one
                simple platform where people can plan, organize and
                complete every step of their relocation journey with
                confidence.

              </Text>

            </div>

          </div>

        </Container>

      </Section>

      {/* Vision */}

      <Section className="bg-[#F8FBFF]">

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              OUR VISION
            </p>

            <Heading className="mt-6">

              A world where moving abroad
              feels effortless.

            </Heading>

            <Text className="mx-auto mt-8 max-w-3xl text-xl leading-9">

              We believe technology should remove stress, not add it.
              Relocate+ combines planning, organization and smart guidance
              into one experience so people can focus on building their
              new life instead of worrying about paperwork.

            </Text>

          </div>

        </Container>

      </Section>

      {/* Values */}

      <Section className="bg-white">

        <Container>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)]">

              <h3 className="text-2xl font-semibold text-slate-900">
                Simplicity
              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                Complex relocation processes presented in a simple,
                easy-to-follow experience.

              </p>

            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)]">

              <h3 className="text-2xl font-semibold text-slate-900">
                Security
              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                Your important information and documents deserve to be
                handled with care.

              </p>

            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)]">

              <h3 className="text-2xl font-semibold text-slate-900">
                Confidence
              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                Every feature is designed to help users feel prepared for
                their move abroad.

              </p>

            </div>

          </div>

        </Container>

      </Section>

      <Footer />
    </>
  );
}