import AppFrame from "@/components/ui/app-frame";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function Documents() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <Heading>
              Your important
              <br />
              documents.
              <br />
              Always secure.
            </Heading>

            <div className="mt-6">
              <Text>
                Store your passport, visa, insurance, contracts and every
                important relocation document in one secure place. Everything
                stays organized and easy to access whenever you need it.
              </Text>
            </div>

            <div className="mt-12 grid gap-5">
              {[
                "Encrypted document storage",
                "Quick access anytime",
                "Organized by category",
                "Built for international relocation",
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

          <div className="flex justify-center">
            <AppFrame
              src="/images/documents.png"
              alt="Relocate+ Documents"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}