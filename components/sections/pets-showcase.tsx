import FeatureShowcase from "@/components/sections/feature-showcase";

export default function PetsShowcase() {
  return (
    <FeatureShowcase
      id="pets"
      eyebrow="PETS"
      title={
        <>
          Bringing a pet?
          <br />
          Get the timing right.
        </>
      }
      intro="Add each pet and get its own checklist for microchips, vaccinations and travel papers, with when to start every step."
      features={[
        {
          icon: "⏱️",
          title: "Start dates for every step",
          text: "Each step shows when to begin, like checking the rabies vaccination about 21 days before travel.",
        },
        {
          icon: "⚠️",
          title: "Critical steps flagged",
          text: "The checks that can stop your pet from travelling are marked critical.",
        },
        {
          icon: "🐾",
          title: "One checklist per pet",
          text: "Track progress separately for every animal you're bringing.",
        },
      ]}
      image={{ src: "/images/pets.webp", alt: "Relocate+ pet checklist with microchip and rabies steps", width: 1320, height: 1612 }}
      imageSide="right"
      tint
      link={{ href: "/guides/moving-abroad-with-a-dog-or-cat", label: "Read our guide to moving abroad with a pet" }}
    />
  );
}
