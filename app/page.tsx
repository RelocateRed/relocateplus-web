import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import RouteMarquee from "@/components/sections/route-marquee";
import WhyRelocate from "@/components/sections/why-relocate";
import AppTour from "@/components/sections/app-tour";
import DownloadCTA from "@/components/sections/download-cta";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import { Reveal } from "@/components/animations/motion";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <RouteMarquee />
      <WhyRelocate />
      <AppTour />
      <Reveal y={40}>
        <DownloadCTA />
      </Reveal>
      <Reveal y={40}>
        <FAQ />
      </Reveal>
      <Footer />
    </>
  );
}
