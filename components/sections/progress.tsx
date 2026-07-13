import AppFrame from "@/components/ui/app-frame";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function Progress() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <Heading>
              See your progress.
              <br />
              Stay on track.
            </Heading>

            <div className="mt-6">
              <Text>
                Follow your relocation journey from start to finish. Track
                completed tasks, monitor upcoming milestones and always know
                exactly where you are in the process.
              </Text>
            </div>

            <div className="mt-12 grid gap-5">
              {[
                "Visual progress tracking",
                "Upcoming milestones",
                "Completed task history",
                "Stay motivated throughout your move",
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
              src="/images/progress.png"
              alt="Relocate+ Progress Tracking"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}