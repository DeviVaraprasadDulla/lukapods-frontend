import HeroSection from "@/components/sections/hero/HeroSection";
import PremiumFeaturesSection from "@/components/sections/features/PremiumFeaturesSection";
import VideoExperienceSection from "@/components/video/VideoExperienceSection";
import FeaturedProductsSection from "@/components/sections/products/FeaturedProductsSection";
import Highlights from "@/components/Highlights";

import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <>
      <HeroSection />

      <section id="best-selling" className="scroll-mt-24">
        <Highlights />
      </section>

      <PremiumFeaturesSection />

      <section id="experience" className="scroll-mt-24">
        <VideoExperienceSection />
      </section>

      <FeaturedProductsSection />

      {/* MOBILE FLOATING SHOP NOW BUTTON */}
      <div
        className="
          fixed
          bottom-5
          right-5
          z-50
          md:hidden
        "
      >
        <Link to="/products">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 rgba(6,182,212,0.35)",
                "0 0 30px rgba(6,182,212,0.55)",
                "0 0 0 rgba(6,182,212,0.35)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative

              flex
              items-center
              gap-2

              px-6
              py-3

              rounded-full

              bg-gradient-to-r
              from-cyan-500
              via-sky-500
              to-cyan-600

              text-white
              font-semibold

              border
              border-cyan-300/40

              backdrop-blur-xl

              shadow-[0_12px_35px_rgba(6,182,212,0.45)]

              overflow-hidden

              transition-all
              duration-300
            "
          >
            {/* Glow Overlay */}
            <span
              className="
                absolute
                inset-0

                rounded-full

                bg-white/10

                blur-xl

                pointer-events-none
              "
            />

            <ShoppingBag
              size={18}
              className="relative z-10"
            />

            <span className="relative z-10">
              Shop Now
            </span>
          </motion.button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
