import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function PrivacyPage() {
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
              Privacy Policy
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
                1. Introduction
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Relocate+ ("we", "our", or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect,
                use and protect your information when you use the
                Relocate+ mobile application.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                2. Information We Collect
              </h2>

              <h3 className="mt-8 text-xl font-semibold text-slate-900">
                Account Information
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                When you create an account, we collect your email address.
                This is used to authenticate your account and allow you to
                access your data across devices.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-slate-900">
                Relocation Profile
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                During onboarding we collect information about your
                relocation plans including your origin country,
                destination country, employment type, housing
                preferences and timeline. This information is used
                exclusively to generate your personalized relocation
                roadmap.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-slate-900">
                App Usage Data
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                We collect information about how you use the app,
                including completed tasks, document status and your
                overall relocation progress. This allows us to
                personalize your experience and calculate your
                readiness score.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-slate-900">
                Subscription Information
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Relocate+ uses RevenueCat to manage subscriptions.
                Payment information is processed entirely by Apple.
                We never receive or store your payment card details.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                3. How We Use Your Information
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                We use your information to:
              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-600">

                <li>Create and maintain your account.</li>
                <li>Generate your personalized relocation roadmap.</li>
                <li>Track your relocation progress.</li>
                <li>Provide AI-powered relocation guidance.</li>
                <li>Manage subscriptions and premium access.</li>
                <li>Send account-related communications.</li>

              </ul>

              <p className="mt-6 leading-8 text-slate-600">
                We do not sell your personal information and we do not
                use your information for advertising purposes.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                4. Third-Party Services
              </h2>

              <div className="mt-8 space-y-8">

                <div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    Supabase
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    Database and authentication provider. Your account
                    information and relocation profile are securely
                    stored using Supabase.
                  </p>

                </div>

                <div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    RevenueCat
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    Subscription management provider used to verify your
                    premium subscription status.
                  </p>

                </div>

                <div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    Anthropic
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    Provides the AI assistant through Claude. Messages
                    sent to the AI are processed to generate responses.
                    Conversation history is not stored beyond the
                    current session.
                  </p>

                </div>

              </div>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                5. Data Storage and Security
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Your information is stored securely using Supabase.
                Appropriate technical and organizational safeguards are
                implemented to protect your personal information against
                unauthorized access, alteration, disclosure or
                destruction.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                6. Data Retention
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                We retain your account data while your account remains
                active. You may request deletion of your account and all
                associated information at any time.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                7. Your Rights
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Depending on your location, you may have the right to:
              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-600">

                <li>Access your personal information.</li>
                <li>Correct inaccurate information.</li>
                <li>Request deletion of your data.</li>
                <li>Object to processing.</li>
                <li>Request restriction of processing.</li>
                <li>Request data portability.</li>

              </ul>

              <p className="mt-6 leading-8 text-slate-600">
                If you are located within the European Union, your
                personal information is processed in accordance with the
                General Data Protection Regulation (GDPR).
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                8. Children's Privacy
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Relocate+ is not intended for children under the age of
                13. We do not knowingly collect personal information
                from children.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                9. Changes to this Privacy Policy
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                We may update this Privacy Policy from time to time.
                Continued use of Relocate+ after changes have been
                published constitutes acceptance of the updated policy.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-slate-900">
                10. Contact Us
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                If you have questions regarding this Privacy Policy or
                how your information is handled, please contact us at:
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