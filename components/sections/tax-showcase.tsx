import FeatureShowcase from "@/components/sections/feature-showcase";

export default function TaxShowcase() {
  return (
    <FeatureShowcase
      id="tax"
      eyebrow="TAX GUIDE"
      title={
        <>
          Tax on both sides,
          <br />
          explained.
        </>
      }
      intro="See how tax works in the country you're moving to, and what to sort out in the one you're leaving."
      features={[
        {
          icon: "⇄",
          title: "Moving to and leaving",
          text: "Two tabs: your new country's system, and what to handle on your way out.",
        },
        {
          icon: "📚",
          title: "The topics that matter",
          text: "For Spain, that means tax residency, regional income tax, the Beckham Law, foreign asset reporting and social security.",
        },
        {
          icon: "🔗",
          title: "Explained, not calculated",
          text: "Plain-language explanations with links to official sources. It isn't tax advice, so speak to an advisor before you decide.",
        },
      ]}
      image={{ src: "/images/tax.webp", alt: "Relocate+ tax guide for moving to Spain", width: 1320, height: 2680 }}
      imageSide="right"
      tint
    />
  );
}
