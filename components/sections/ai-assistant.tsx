import AppFrame from "@/components/ui/app-frame";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function AiAssistant() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="order-2 flex justify-center lg:order-1">
            <AppFrame
              src="/images/ai.webp"
              alt="Relocate+ AI Assistant"
            />
          </div>

          <div className="order-1 lg:order-2">
            <Heading>
              Guidance when
              <br />
              you need it.
            </Heading>

            <div className="mt-6">
              <Text>
                Relocate+ helps answer relocation questions, explains
                requirements, and provides helpful guidance throughout your
                journey. AI supports your move without replacing your decisions.
              </Text>
            </div>

            <div className="mt-12 grid gap-5">
              {[
                "Instant relocation guidance",
                "Country-specific information",
                "Answers based on your journey",
                "AI that supports, not replaces",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="h-3 w-3 rounded-full bg-[#3E6AE1]" />

                  <span className="text-lg text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}