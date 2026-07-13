import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function SupportPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <Section className="relative overflow-hidden bg-[#FAFBFF] pt-40">

        <div className="absolute left-1/2 top-[-350px] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              SUPPORT
            </p>

            <Heading className="mt-6">
              How can we help?
            </Heading>

            <Text className="mx-auto mt-8 max-w-3xl text-xl leading-9">
              Whether you need help with your account, subscriptions,
              documents or your relocation journey, we're here to help.
            </Text>

          </div>

        </Container>

      </Section>

      {/* Support Categories */}

      <Section className="bg-white">

        <Container>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)]">

              <h3 className="text-xl font-semibold text-slate-900">
                Account
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Login problems, profile settings, password changes and account access.
              </p>

            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)]">

              <h3 className="text-xl font-semibold text-slate-900">
                Subscription
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Questions about billing, payments, renewals or cancelling your subscription.
              </p>

            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)]">

              <h3 className="text-xl font-semibold text-slate-900">
                Documents
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Help with uploading, organizing or accessing your relocation documents.
              </p>

            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)]">

              <h3 className="text-xl font-semibold text-slate-900">
                Bug Reports
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Found something that isn't working correctly? Let us know so we can fix it.
              </p>

            </div>

          </div>

        </Container>

      </Section>

      {/* Contact */}

      <Section className="bg-[#F8FBFF]">

        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <Heading>
              Still need help?
            </Heading>

            <Text className="mx-auto mt-8 max-w-2xl text-xl leading-9">

              If you couldn't find the answer you're looking for,
              our support team is happy to assist you.

            </Text>

            <div className="mt-12 rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,.06)]">

              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                SUPPORT EMAIL
              </p>

              <p className="mt-4 text-2xl font-semibold text-[#2563EB]">
                info@relocate-plus.com
              </p>

              <p className="mt-6 text-slate-600">
                Average response time: 1–2 business days.
              </p>

            </div>

          </div>

        </Container>

      </Section>

      <Footer />

    </>
  );
}