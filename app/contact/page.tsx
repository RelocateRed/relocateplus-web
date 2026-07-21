import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <Section className="relative overflow-hidden bg-[#FAFBFF] pt-40">

        <div className="absolute left-1/2 top-[-350px] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              CONTACT
            </p>

            <Heading className="mt-6">

              We're here to help.

            </Heading>

            <Text className="mx-auto mt-8 max-w-3xl text-xl leading-9">

              Whether you have a question, feedback or a business inquiry,
              we'd love to hear from you.

            </Text>

          </div>

        </Container>

      </Section>

      {/* Contact Cards */}

      <Section className="bg-white">

        <Container>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)]">

              <h3 className="text-2xl font-semibold text-slate-900">
                General Support
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Need help using Relocate+ or have a question about your account?
              </p>

              <p className="mt-8 font-semibold text-[#2563EB]">
                support@relocate-plus.com
              </p>

            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)]">

              <h3 className="text-2xl font-semibold text-slate-900">
                Business
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Interested in partnerships, media or collaboration opportunities?
              </p>

              <p className="mt-8 font-semibold text-[#2563EB]">
                info@relocate-plus.com
              </p>

            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)]">

              <h3 className="text-2xl font-semibold text-slate-900">
                Response Time
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                We aim to respond to all emails within 1–2 business days.
              </p>

            </div>

          </div>

        </Container>

      </Section>

      {/* Closing */}

      <Section className="bg-[#F8FBFF]">

        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <Heading>

              We look forward to hearing from you.

            </Heading>

            <Text className="mx-auto mt-8 max-w-2xl text-xl leading-9">

              Our team is committed to providing helpful, timely support so you
              can focus on your relocation with confidence.

            </Text>

          </div>

        </Container>

      </Section>

      <Footer />

    </>
  );
}