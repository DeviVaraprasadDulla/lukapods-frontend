import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import FounderStorySection from "@/components/sections/about/FounderStorySection";
import InnovationJourneySection from "@/components/sections/about/InnovationJourneySection";
import PhilosophySection from "@/components/sections/about/PhilosophySection";
import AboutTimelineSection from "@/components/sections/about/AboutTimelineSection";
import GlobalVisionSection from "@/components/sections/about/GlobalVisionSection";
import FutureVisionSection from "@/components/sections/about/FutureVisionSection";
import AboutCTASection from "@/components/sections/about/AboutCTASection";

const About = () => {
  return (
    <main className="overflow-hidden">
      <AboutHeroSection />

      <FounderStorySection />

      <InnovationJourneySection />

      <PhilosophySection />

      <AboutTimelineSection />

      <GlobalVisionSection />

      <FutureVisionSection />

      <AboutCTASection />
    </main>
  );
};

export default About;
