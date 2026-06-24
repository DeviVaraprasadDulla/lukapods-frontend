import { motion } from "framer-motion";

import {
  Sparkles,
  ShieldCheck,
  Droplets,
  Leaf,
  Waves,
  ArrowUpRight,
} from "lucide-react";

import deepCleaningImg from "@/assets/images/features/deep-cleaning.jpeg";
import fragranceImg from "@/assets/images/features/luxury-fragrance.jpeg";
import protectionImg from "@/assets/images/features/fabric-protection.jpeg";
import ecoImg from "@/assets/images/features/eco-friendly.jpeg";
import dissolveImg from "@/assets/images/features/quick-dissolve.jpeg";

const features = [
  {
    title: "Deep Cleaning",
    description:
      "Powerful stain removal engineered to preserve softness and premium fabric quality.",
    image: deepCleaningImg,
    icon: Droplets,
    size: "large",
  },

  {
    title: "Luxury Fragrance",
    description:
      "Elegant freshness inspired by luxury fabric perfumes and modern care.",
    image: fragranceImg,
    icon: Sparkles,
    size: "medium",
  },

  {
    title: "Fabric Protection",
    description:
      "Advanced protection layer designed for delicate and premium fabrics.",
    image: protectionImg,
    icon: ShieldCheck,
    size: "medium",
  },

  {
    title: "Quick Dissolve",
    description:
      "Fast dissolving pods for smooth and residue-free washing experience.",
    image: dissolveImg,
    icon: Waves,
    size: "small",
  },

  {
    title: "Eco Friendly",
    description:
      "Modern cleaning technology with eco-conscious premium performance.",
    image: ecoImg,
    icon: Leaf,
    size: "small",
  },
];

const PremiumFeaturesSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
        bg-[linear-gradient(180deg,#f8fbff_0%,#eef6fc_50%,#f9fcff_100%)]
      "
    >
      {/* TOP SEPARATOR */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[140px]
          bg-gradient-to-b
          from-white
          via-[#f8fbff]
          to-transparent
          pointer-events-none
        "
      />

      {/* PREMIUM CORNER */}
      <div
        className="
          hidden
          lg:block
          absolute
          top-0
          right-0
          w-[260px]
          h-[260px]
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            inset-0
            rounded-bl-[90px]
            bg-gradient-to-bl
            from-cyan-100/70
            via-white/20
            to-transparent
            border-l
            border-b
            border-white/60
            backdrop-blur-3xl
          "
        />

        <div
          className="
            absolute
            top-10
            right-10
            grid
            grid-cols-3
            gap-2
          "
        >
          <div className="w-3 h-3 rounded-[4px] bg-cyan-300/90" />
          <div className="w-3 h-3 opacity-0" />
          <div className="w-3 h-3 rounded-[4px] bg-cyan-200/80" />

          <div className="w-3 h-3 opacity-0" />
          <div className="w-3 h-3 rounded-[4px] bg-cyan-300/80" />
          <div className="w-3 h-3 opacity-0" />

          <div className="w-3 h-3 rounded-[4px] bg-cyan-200/80" />
          <div className="w-3 h-3 opacity-0" />
          <div className="w-3 h-3 rounded-[4px] bg-cyan-300/90" />
        </div>
      </div>

      {/* LIGHT GLOW */}
      <div
        className="
          absolute
          top-[20%]
          left-1/2
          -translate-x-1/2
          w-[650px]
          h-[650px]
          rounded-full
          bg-cyan-100/40
          blur-[140px]
          pointer-events-none
        "
      />

      {/* PARTICLES */}
      <motion.div
        animate={{
          y: [0, -16, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[26%]
          left-[12%]
          w-2
          h-2
          rounded-full
          bg-cyan-300
        "
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[40%]
          right-[16%]
          w-3
          h-3
          rounded-full
          bg-sky-200
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            text-center
            max-w-2xl
            mx-auto
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-white/70
              bg-white/75
              backdrop-blur-2xl
              shadow-[0_10px_30px_rgba(15,23,42,0.04)]
            "
          >
            <div
              className="
                w-2
                h-2
                rounded-full
                bg-cyan-400
                shadow-[0_0_12px_rgba(34,211,238,0.8)]
              "
            />

            <span
              className="
                text-[10px]
                sm:text-[11px]
                font-semibold
                uppercase
                tracking-[2px]
                text-slate-600
              "
            >
              Premium Fabric Care
            </span>
          </div>

          <h2
            className="
              mt-5
              text-[34px]
              sm:text-[48px]
              lg:text-[58px]
              leading-[0.95]
              tracking-[-2px]
              font-black
              text-[#0f172a]
            "
          >
            Designed For
            <span
              className="
                block
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-slate-500
                via-slate-700
                to-cyan-500
              "
            >
              Modern Living
            </span>
          </h2>

          <p
            className="
              mt-5
              text-slate-500
              text-[14px]
              sm:text-[15px]
              leading-[1.8]
              max-w-xl
              mx-auto
            "
          >
            Luka Pods combines advanced cleaning performance with luxurious
            fabric care for a refined premium washing experience.
          </p>
        </motion.div>

        {/* FEATURES */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-12
            gap-5
            auto-rows-[240px]
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            const gridClasses =
              feature.size === "large"
                ? "lg:col-span-5 lg:row-span-2"
                : feature.size === "medium"
                  ? "lg:col-span-3 lg:row-span-1"
                  : "lg:col-span-3 lg:row-span-1";

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-white/70
                  bg-white/30
                  backdrop-blur-3xl
                  shadow-[0_18px_60px_rgba(15,23,42,0.05)]
                  transition-all
                  duration-700
                  ${gridClasses}
                `}
              >
                {/* IMAGE */}
                <motion.img
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                  src={feature.image}
                  alt={feature.title}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                  "
                />

                {/* DARK OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#07111f]/82
                    via-[#07111f]/30
                    to-transparent
                  "
                />

                {/* SIDE GLASS */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-full
                    w-[38%]
                    bg-gradient-to-r
                    from-white/12
                    to-transparent
                    backdrop-blur-[2px]
                  "
                />

                {/* TOP LIGHT */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-[25%]
                    bg-gradient-to-b
                    from-white/15
                    to-transparent
                  "
                />

                {/* LIGHT SWEEP */}
                <motion.div
                  animate={{
                    x: ["-120%", "220%"],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 3,
                  }}
                  className="
                    absolute
                    top-0
                    left-0
                    w-[30%]
                    h-full
                    rotate-[18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    blur-2xl
                  "
                />

                {/* CONTENT */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    flex-col
                    justify-between
                    h-full
                    p-6
                  "
                >
                  {/* TOP */}
                  <div>
                    <div
                      className="
                        w-14
                        h-14
                        rounded-2xl
                        border
                        border-white/20
                        bg-white/70
                        backdrop-blur-2xl
                        shadow-[0_10px_30px_rgba(15,23,42,0.12)]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon size={22} className="text-slate-700" />
                    </div>

                    <div
                      className="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        border
                        border-white/15
                        bg-white/65
                        backdrop-blur-2xl
                      "
                    >
                      <div
                        className="
                          w-2
                          h-2
                          rounded-full
                          bg-cyan-400
                        "
                      />

                      <span
                        className="
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[3px]
                          text-slate-600
                        "
                      >
                        Premium Care
                      </span>
                    </div>
                  </div>

                  {/* BOTTOM CONTENT */}
                  <div
                    className="
                      max-w-[85%]
                    "
                  >
                    <h3
                      className="
                        text-[30px]
                        sm:text-[34px]
                        leading-[0.95]
                        tracking-[-2px]
                        font-black
                        text-white
                        drop-shadow-[0_6px_20px_rgba(0,0,0,0.4)]
                      "
                    >
                      {feature.title}
                    </h3>

                    <div
                      className="
                        mt-4
                        w-16
                        h-[3px]
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-400
                        to-transparent
                      "
                    />

                    <p
                      className="
                        mt-5
                        text-white/80
                        text-[15px]
                        leading-[1.9]
                        font-medium
                      "
                    >
                      {feature.description}
                    </p>

                    <motion.button
                      whileHover={{
                        x: 4,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        mt-7
                        inline-flex
                        items-center
                        gap-3
                        px-5
                        py-3
                        rounded-full
                        border
                        border-white/15
                        bg-white/10
                        backdrop-blur-2xl
                        text-cyan-300
                        text-[14px]
                        font-semibold
                        shadow-[0_10px_30px_rgba(15,23,42,0.12)]
                      "
                    >
                      Explore Feature
                      <ArrowUpRight
                        size={16}
                        className="
                          transition-transform
                          duration-500
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </motion.button>
                  </div>
                </div>

                {/* BORDER */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[34px]
                    border
                    border-white/20
                    pointer-events-none
                  "
                />

                {/* HOVER GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-700
                    bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_45%)]
                    pointer-events-none
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PremiumFeaturesSection;
