import HeroSection from "@/components/sections/hero/HeroSection";
import PremiumFeaturesSection from "@/components/sections/features/PremiumFeaturesSection";
import VideoExperienceSection from "@/components/video/VideoExperienceSection";
import FeaturedProductsSection from "@/components/sections/products/FeaturedProductsSection";
import Highlights from "@/components/Highlights";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <section id="best-selling" className="scroll-mt-24">
        <Highlights />
      </section>
      <PremiumFeaturesSection />

      <VideoExperienceSection />
      <FeaturedProductsSection />
    </>
  );
};

export default HomePage;
