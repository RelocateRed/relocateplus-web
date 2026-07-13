import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function DownloadCTA() {
  return (
    <Section
      id="download"
      className="relative overflow-hidden bg-[#071426]"
>

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[-250px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-400/10 blur-[120px]" />

      </div>

      <Container>

        <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-white/5 px-10 py-20 backdrop-blur-xl lg:px-24">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
              READY TO START?
            </p>

            <Heading className="mt-6 text-white">

              Your relocation starts here.

            </Heading>

            <Text className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-300">

              Join thousands of future expats who are planning
              their move with confidence using Relocate+.

            </Text>

            <div className="mt-14 flex flex-wrap justify-center gap-5">

              <Button href="#">
                Download on the App Store
              </Button>

              <Button
                href="#"
                variant="secondary"
              >
                Coming soon on Google Play
              </Button>

            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400">

              <span>✓ Personalized Roadmaps</span>

              <span>✓ Secure Documents</span>

              <span>✓ Progress Tracking</span>

              <span>✓ AI Guidance</span>

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}