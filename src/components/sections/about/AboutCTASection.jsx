import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Globe2, Rocket } from "lucide-react";

import AboutFloatingParticles from "@/components/common/about/AboutFloatingParticles";

const AboutCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[#071120] py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_28%)]" />

        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <AboutFloatingParticles />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative overflow-hidden
            rounded-[3rem]
            border border-white/10
            bg-white/[0.04]
            p-10
            backdrop-blur-2xl
            shadow-[0_30px_120px_rgba(0,0,0,0.28)]
            lg:p-16
          "
        >
          {/* Top Glow */}
          <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />

          {/* Floating Gradient */}
          <div className="absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-sky-400/10 blur-3xl" />

          {/* Small Top Badge */}
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-white/10
              bg-white/5
              px-5 py-3
              backdrop-blur-md
            "
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-white/80
              "
            >
              Join The Future Of Luka
            </span>
          </div>

          {/* Main Content */}
          <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_360px] lg:items-end">
            {/* LEFT */}
            <div>
              <h2
                className="
                  max-w-5xl
                  text-5xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.06em]
                  text-white
                  sm:text-6xl
                  lg:text-[7rem]
                "
              >
                Building
                <br />
                <span className="text-white/45">globally inspired</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-500 bg-clip-text text-transparent">
                  household innovation.
                </span>
              </h2>

              <p
                className="
                  mt-10
                  max-w-3xl
                  text-lg
                  leading-9
                  text-white/70
                "
              >
                Luka is reimagining home essentials through formulation science,
                modern product thinking, and globally inspired innovation. We’re
                building experiences that feel premium, intentional, and
                future-ready.
              </p>

              {/* Features */}
              <div className="mt-12 flex flex-wrap gap-4">
                {[
                  {
                    icon: Globe2,
                    label: "Global Innovation",
                  },
                  {
                    icon: Sparkles,
                    label: "Premium Experiences",
                  },
                  {
                    icon: Rocket,
                    label: "Future-Driven Vision",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -4,
                      }}
                      className="
                        flex items-center gap-3
                        rounded-2xl
                        border border-white/10
                        bg-white/5
                        px-5 py-4
                        backdrop-blur-md
                      "
                    >
                      <div
                        className="
                          flex h-10 w-10
                          items-center justify-center
                          rounded-xl
                          bg-cyan-400/10
                        "
                      >
                        <Icon size={18} className="text-cyan-300" />
                      </div>

                      <span
                        className="
                          text-sm
                          font-semibold
                          text-white/85
                        "
                      >
                        {item.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT CARD */}
            <motion.div
              whileHover={{
                y: -6,
              }}
              className="
                relative overflow-hidden
                rounded-[2.4rem]
                border border-white/10
                bg-white/[0.05]
                p-8
                backdrop-blur-xl
              "
            >
              {/* Glow */}
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative">
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-cyan-300
                  "
                >
                  Let’s Build The Future
                </p>

                <h3
                  className="
                    mt-5
                    text-4xl
                    font-black
                    leading-[1]
                    tracking-[-0.05em]
                    text-white
                  "
                >
                  Innovation
                  <br />
                  starts with
                  <span className="text-cyan-400"> curiosity.</span>
                </h3>

                <p
                  className="
                    mt-6
                    text-[15px]
                    leading-8
                    text-white/65
                  "
                >
                  Luka continues to evolve through collaboration,
                  experimentation, and science-led product development.
                </p>

                {/* Buttons */}
                <div className="mt-10 space-y-4">
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      flex w-full items-center
                      justify-between
                      rounded-2xl
                      bg-cyan-400
                      px-6 py-5
                      text-sm
                      font-bold
                      text-slate-950
                      shadow-[0_20px_50px_rgba(34,211,238,0.24)]
                    "
                  >
                    Explore Luka
                    <ArrowUpRight size={18} />
                  </motion.button>

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      flex w-full items-center
                      justify-between
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                      px-6 py-5
                      text-sm
                      font-semibold
                      text-white
                      backdrop-blur-md
                    "
                  >
                    Connect With Us
                    <ArrowUpRight size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTASection;
