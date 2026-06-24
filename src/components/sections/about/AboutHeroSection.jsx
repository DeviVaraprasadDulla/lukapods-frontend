import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Globe2, Beaker } from "lucide-react";

import founderMain from "@/assets/images/about/founder/founder-main.jpg";
import founderLab from "@/assets/images/about/founder/founder-lab.jpg";

import AboutFloatingParticles from "@/components/common/about/AboutFloatingParticles";

const stats = [
  {
    icon: Beaker,
    value: "8+",
    label: "Years in R&D",
  },
  {
    icon: Globe2,
    value: "Global",
    label: "Innovation Vision",
  },
  {
    icon: Sparkles,
    value: "Science",
    label: "Driven Products",
  },
];

const AboutHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fb] pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_38%)]" />

        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-sky-100/50 blur-3xl" />
      </div>

      <AboutFloatingParticles />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-white/60
                bg-white/70
                px-5 py-2.5
                backdrop-blur-xl
                shadow-[0_10px_40px_rgba(15,23,42,0.06)]
              "
            >
              <div className="h-2 w-2 rounded-full bg-cyan-400" />

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-slate-600
                "
              >
                Founder Story
              </span>
            </div>

            {/* Heading */}
            <div className="mt-8">
              <h1
                className="
                  max-w-3xl
                  text-[3.2rem]
                  font-black
                  leading-[0.95]
                  tracking-[-0.06em]
                  text-slate-950
                  sm:text-[4.5rem]
                  lg:text-[6.2rem]
                "
              >
                Building
                <br />
                <span className="text-slate-500">Science-Led</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-slate-900 bg-clip-text text-transparent">
                  Home Care.
                </span>
              </h1>

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-9
                  text-slate-600
                  lg:text-[19px]
                "
              >
                Founded by{" "}
                <span className="font-semibold text-slate-900">
                  Bbuvhan Cheerla
                </span>
                , Luka Home Essentials combines formulation science, modern
                product innovation, and premium design to reinvent everyday home
                essentials for a global audience.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="
                      rounded-[1.8rem]
                      border border-white/60
                      bg-white/70
                      p-5
                      backdrop-blur-xl
                      shadow-[0_12px_40px_rgba(15,23,42,0.06)]
                    "
                  >
                    <div
                      className="
                        flex h-12 w-12
                        items-center justify-center
                        rounded-2xl
                        bg-cyan-50
                      "
                    >
                      <Icon size={22} className="text-cyan-600" />
                    </div>

                    <h3
                      className="
                        mt-5
                        text-3xl
                        font-black
                        tracking-[-0.05em]
                        text-slate-950
                      "
                    >
                      {item.value}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex items-center gap-3
                  rounded-full
                  bg-slate-950
                  px-7 py-4
                  text-sm font-semibold
                  text-white
                  shadow-[0_20px_50px_rgba(15,23,42,0.18)]
                  transition-all
                "
              >
                Explore Journey
                <ArrowUpRight size={18} />
              </motion.button>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img
                    src={founderMain}
                    alt="Founder"
                    className="
                      h-12 w-12 rounded-full
                      border-2 border-white
                      object-cover
                    "
                  />

                  <img
                    src={founderLab}
                    alt="Innovation"
                    className="
                      h-12 w-12 rounded-full
                      border-2 border-white
                      object-cover
                    "
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Innovation from Guangzhou
                  </p>

                  <p className="text-sm text-slate-500">
                    Research • Design • Global Vision
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div
              className="
                relative overflow-hidden
                rounded-[2.5rem]
                border border-white/50
                bg-white/50
                p-4
                backdrop-blur-xl
                shadow-[0_30px_100px_rgba(15,23,42,0.12)]
              "
            >
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={founderMain}
                  alt="Founder"
                  className="
                    h-[620px]
                    w-full
                    object-cover
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <div
                    className="
                      inline-flex items-center gap-2
                      rounded-full
                      border border-white/20
                      bg-white/10
                      px-4 py-2
                      backdrop-blur-md
                    "
                  >
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />

                    <span
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-white/80
                      "
                    >
                      Founder & COO
                    </span>
                  </div>

                  <h2
                    className="
                      mt-5
                      text-4xl
                      font-black
                      tracking-[-0.05em]
                      text-white
                      lg:text-5xl
                    "
                  >
                    Bbuvhan
                    <br />
                    Cheerla
                  </h2>

                  <p
                    className="
                      mt-5
                      max-w-lg
                      text-base
                      leading-8
                      text-white/70
                    "
                  >
                    Reimagining home essentials through science, sustainability,
                    and premium product innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Lab Card */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-10
                -left-10
                hidden
                w-[280px]
                rounded-[2rem]
                border border-white/60
                bg-white/85
                p-4
                backdrop-blur-xl
                shadow-[0_25px_60px_rgba(15,23,42,0.12)]
                lg:block
              "
            >
              <img
                src={founderLab}
                alt="Lab Research"
                className="
                  h-[180px]
                  w-full
                  rounded-[1.5rem]
                  object-cover
                "
              />

              <div className="mt-4">
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-cyan-600
                  "
                >
                  Product Innovation
                </p>

                <h3
                  className="
                    mt-2
                    text-xl
                    font-bold
                    tracking-[-0.04em]
                    text-slate-900
                  "
                >
                  Formulation-led research for modern household products.
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
