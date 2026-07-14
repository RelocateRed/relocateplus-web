import AppFrame from "@/components/ui/app-frame";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function Roadmaps() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="order-2 lg:order-1 flex justify-center">
            <AppFrame
              src="/images/roadmap.webp"
              alt="Relocate+ Roadmap"
            />
          </div>

          <div className="order-1 lg:order-2">
            <Heading>
              A roadmap built
              <br />
              around your move.
            </Heading>

            <div className="mt-6">
              <Text>
                Every relocation is different. Relocate+ creates a personalized
                roadmap based on your destination, timeline and situation,
                helping you complete each step in the right order.
              </Text>
            </div>

            <div className="mt-12 space-y-6">
              {[
                "Personalized checklist",
                "Country-specific requirements",
                "Clear step-by-step guidance",
                "Never miss an important task",
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