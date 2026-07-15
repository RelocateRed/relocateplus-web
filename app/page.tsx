import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import WhyRelocate from "@/components/sections/why-relocate";
import RoadmapShowcase from "@/components/sections/roadmap-showcase";
import DocumentsShowcase from "@/components/sections/documents-showcase";
import ProgressShowcase from "@/components/sections/progress-showcase";
import AIShowcase from "@/components/sections/ai-showcase";
import DownloadCTA from "@/components/sections/download-cta";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyRelocate />
      <RoadmapShowcase />
      <DocumentsShowcase />
      <ProgressShowcase />
      <AIShowcase />
      <DownloadCTA />
      <FAQ />
      <Footer />
    </>
  );
}