import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function Download() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[40px] bg-[#0D1B33] px-10 py-20 text-center shadow-[0_40px_120px_rgba(2,8,23,0.18)]">
          <Heading>
            Ready to start your
            <br />
            relocation journey?
          </Heading>

          <div className="mx-auto mt-6 max-w-2xl">
            <Text>
              Download Relocate+ today and keep your roadmap, documents,
              deadlines and relocation progress together in one beautifully
              organized app.
            </Text>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
            <Button>
              Download on the App Store
            </Button>

            <Button variant="secondary">
              View Features
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-10 text-sm text-slate-400">
            <span>✓ Personalized roadmaps</span>
            <span>✓ Secure documents</span>
            <span>✓ AI guidance</span>
            <span>✓ Progress tracking</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}