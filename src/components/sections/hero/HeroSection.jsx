// src/components/sections/hero/HeroSection.jsx

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroProductShowcase from "./HeroProductShowcase";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden

        pt-[118px]
        sm:pt-[128px]
        lg:pt-[138px]

        pb-16
        sm:pb-20
        lg:pb-24
      "
    >
      {/* BACKGROUND */}
      <HeroBackground />

      {/* CONTENT */}
      <div
        className="
          relative
          z-20

          max-w-[1400px]
          mx-auto

          px-5
          sm:px-8
          lg:px-12

          grid
          grid-cols-1
          lg:grid-cols-2

          items-center

          gap-10
          lg:gap-2
        "
      >
        {/* LEFT */}
        <HeroContent />

        {/* RIGHT */}
        <HeroProductShowcase />
      </div>
    </section>
  );
};

export default HeroSection;
