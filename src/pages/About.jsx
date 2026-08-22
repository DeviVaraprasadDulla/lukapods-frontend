import WhoWeAreSection from "@/components/sections/about/WhoWeAreSection";
import WhyWeBuiltLukaSection from "@/components/sections/about/WhyWeBuiltLukaSection";
import AboutCTASection from "@/components/sections/about/AboutCTASection";

const About = () => {
  return (
    <main className="overflow-hidden">
      <WhoWeAreSection />

      <WhyWeBuiltLukaSection />

      <AboutCTASection />
    </main>
  );
};

export default About;
