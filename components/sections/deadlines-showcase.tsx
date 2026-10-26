import FeatureShowcase from "@/components/sections/feature-showcase";

export default function DeadlinesShowcase() {
  return (
    <FeatureShowcase
      id="deadlines"
      eyebrow="DEADLINE AGENDA"
      title={
        <>
          Every date,
          <br />
          in one agenda.
        </>
      }
      intro="Your move's deadlines, grouped into this week, this month and coming up, so the urgent ones never get buried."
      features={[
        {
          icon: "📅",
          title: "Add to your iPhone calendar",
          text: "Tap the calendar icon on any deadline to put it in your iPhone calendar.",
        },
        {
          icon: "➕",
          title: "Add your own dates",
          text: "Appointments and personal deadlines sit next to the ones from your roadmap.",
        },
        {
          icon: "→",
          title: "Straight to the task",
          text: "Tap a deadline to open the task behind it and see what to do.",
        },
      ]}
      image={{ src: "/images/agenda.webp", alt: "Relocate+ deadline agenda grouped by this week and this month", width: 1320, height: 2680 }}
      imageSide="left"
    />
  );
}
