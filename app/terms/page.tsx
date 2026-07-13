import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <Section className="relative overflow-hidden bg-[#FAFBFF] pt-40">

        <div className="absolute left-1/2 top-[-350px] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              LEGAL
            </p>

            <Heading className="mt-6">
              Terms of Service
            </Heading>

            <Text className="mt-8 text-lg">
              Last updated: July 2026
            </Text>

          </div>

        </Container>

      </Section>

      <Section className="bg-white">

        <Container>

          <article className="mx-auto max-w-4xl space-y-12">

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                1. Acceptance of Terms
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                By downloading and using Relocate+, you agree to these Terms
                of Service. If you do not agree, please do not use the app.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                2. Description of Service
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Relocate+ provides personalized relocation planning tools,
                including roadmaps, document checklists, AI assistance and
                deadline tracking.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The app is provided for informational purposes only and does
                not constitute legal, financial or immigration advice.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                3. User Accounts
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                You are responsible for keeping your account credentials
                confidential and for all activity that occurs under your
                account.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                4. Subscriptions and Billing
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Relocate+ offers auto-renewable subscriptions managed by Apple.
                Payment is charged to your Apple ID account upon confirmation
                of purchase.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Subscriptions automatically renew unless cancelled at least
                24 hours before the end of the current subscription period.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                You can manage or cancel your subscription at any time in your
                Apple ID account settings or at appleid.apple.com.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                5. Free Trial
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                A 7-day free trial is available to new subscribers only. If
                you do not cancel before the trial ends, your subscription
                will automatically begin and payment will be charged.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                6. Refunds and Cancellations
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                All purchases are processed by Apple. Refund requests must be
                submitted through Apple's refund process at
                reportaproblem.apple.com.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Cancelling your subscription prevents future renewals but does
                not provide a refund for the current billing period.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                7. Accuracy of Information
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Relocation information provided in Relocate+ is intended for
                general guidance only.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Immigration laws, visa requirements and regulations change
                frequently. Always verify important information with official
                government sources or a qualified immigration specialist.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                8. Limitation of Liability
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Relocate+ and its developers are not liable for decisions made
                based on information provided in the app. Use of the app is at
                your own risk.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                9. Intellectual Property
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                All content, branding, design and software related to
                Relocate+ are protected by intellectual property laws and may
                not be copied, reproduced or distributed without prior written
                permission.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                10. Changes to These Terms
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                We may update these Terms of Service at any time. Continued
                use of Relocate+ after changes have been published constitutes
                acceptance of the updated Terms.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                11. Governing Law
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                These Terms of Service are governed by the laws of the
                Netherlands.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                12. Contact
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                If you have questions regarding these Terms of Service,
                please contact:
              </p>

              <p className="mt-4 text-lg font-semibold text-[#2563EB]">
                info@relocate-plus.com
              </p>

            </section>

          </article>

        </Container>

      </Section>

      <Footer />
    </>
  );
}