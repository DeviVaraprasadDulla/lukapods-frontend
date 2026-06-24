import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import AboutFloatingParticles from "@/components/common/about/AboutFloatingParticles";

const BlogHeroSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-32
        pb-24
        lg:pt-40
        lg:pb-32
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          bg-[#f4f8fb]
        "
      >
        {/* Gradient Blur */}
        <div
          className="
            absolute
            left-[-10%]
            top-[-10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-100/50
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-[-10%]
            bottom-[-10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-sky-100/40
            blur-3xl
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
            [background-size:90px_90px]
          "
        />
      </div>

      {/* PARTICLES */}
      <AboutFloatingParticles />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
        "
      >
        <div
          className="
            max-w-5xl
          "
        >
          {/* TOP BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/70
              bg-white/70
              px-6
              py-3
              shadow-[0_15px_50px_rgba(15,23,42,0.06)]
              backdrop-blur-2xl
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-cyan-100
              "
            >
              <Sparkles
                size={16}
                className="
                  text-cyan-600
                "
              />
            </div>

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.32em]
                text-slate-700
              "
            >
              Luka Editorial Journal
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-10
            "
          >
            <h1
              className="
                text-[3.7rem]
                font-black
                leading-[0.9]
                tracking-[-0.08em]
                text-slate-950
                sm:text-[5rem]
                lg:text-[7rem]
              "
            >
              Stories Behind
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-cyan-500
                  via-sky-500
                  to-cyan-700
                  bg-clip-text
                  text-transparent
                "
              >
                Innovation
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-10
                max-w-3xl
                text-[17px]
                leading-[2]
                text-slate-600
                lg:text-[19px]
              "
            >
              Deep insights into formulation science, product innovation,
              premium home care, startup building, and global experiences
              shaping the future of Luka Home Essentials.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-12
              flex
              flex-wrap
              items-center
              gap-5
            "
          >
            {/* PRIMARY BUTTON */}
            <button
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-slate-950
                px-8
                py-5
                text-sm
                font-bold
                text-white
                shadow-[0_25px_60px_rgba(15,23,42,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Explore Articles
              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            {/* SECONDARY */}
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  flex
                  -space-x-4
                "
              >
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="
                        h-12
                        w-12
                        rounded-full
                        border-4
                        border-[#f4f8fb]
                        bg-gradient-to-br
                        from-cyan-400
                        to-sky-600
                      "
                  />
                ))}
              </div>

              <div>
                <h4
                  className="
                    text-sm
                    font-bold
                    text-slate-900
                  "
                >
                  12K+ Readers
                </h4>

                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Following Luka stories
                </p>
              </div>
            </div>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-20
              grid
              grid-cols-2
              gap-6
              sm:grid-cols-4
            "
          >
            {[
              {
                value: "20+",
                label: "Research Stories",
              },
              {
                value: "8+",
                label: "Years R&D",
              },
              {
                value: "12K+",
                label: "Monthly Readers",
              },
              {
                value: "Global",
                label: "Innovation Network",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="
                  rounded-[2rem]
                  border
                  border-white/70
                  bg-white/60
                  p-6
                  backdrop-blur-xl
                  shadow-[0_15px_50px_rgba(15,23,42,0.05)]
                "
              >
                <h3
                  className="
                    text-3xl
                    font-black
                    tracking-[-0.06em]
                    text-slate-950
                  "
                >
                  {item.value}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-500
                  "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
