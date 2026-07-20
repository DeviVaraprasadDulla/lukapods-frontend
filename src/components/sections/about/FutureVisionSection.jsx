import { motion } from "framer-motion";
import {
  Sparkles,
  Globe2,
  Rocket,
  FlaskConical,
  ArrowUpRight,
} from "lucide-react";

import AboutHeadingBlock from "@/components/common/about/AboutHeadingBlock";
import AboutFloatingParticles from "@/components/common/about/AboutFloatingParticles";

const futureCards = [
  {
    icon: FlaskConical,
    title: "Science-Led Innovation",
    desc: "Building modern household solutions through formulation science, premium research, and product experimentation.",
  },
  {
    icon: Globe2,
    title: "Global Consumer Thinking",
    desc: "Designing products inspired by international innovation ecosystems and evolving modern lifestyles.",
  },
  {
    icon: Sparkles,
    title: "Elevated Experiences",
    desc: "Creating products that feel intentional, premium, and deeply connected to everyday living.",
  },
];

const FutureVisionSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#edf4f8] py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <AboutFloatingParticles />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Heading */}
        <AboutHeadingBlock
          title="Shaping The"
          highlight="Future Of Luka"
          description="The vision for Luka goes beyond products — it’s about building globally inspired experiences that combine innovation, simplicity, and meaningful design."
          center
        />

        {/* Main Layout */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Statement */}
            <div
              className="
                relative overflow-hidden
                rounded-[2.8rem]
                border border-white/60
                bg-slate-950
                p-10 lg:p-14
                shadow-[0_30px_90px_rgba(15,23,42,0.14)]
              "
            >
              {/* Glow */}
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

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
                  Luka Vision
                </p>

                <h2
                  className="
                    mt-6
                    text-5xl
                    font-black
                    leading-[0.95]
                    tracking-[-0.06em]
                    text-white
                    lg:text-[5.8rem]
                  "
                >
                  Building
                  <br />
                  <span className="text-white/45">modern products</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-500 bg-clip-text text-transparent">
                    for global living.
                  </span>
                </h2>

                <p
                  className="
                    mt-10
                    max-w-2xl
                    text-lg
                    leading-9
                    text-white/70
                  "
                >
                  Luka aims to redefine how modern households experience
                  everyday essentials — blending science, sustainability,
                  innovation, and premium design into products that feel
                  future-ready.
                </p>

                {/* CTA */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    mt-10 inline-flex
                    items-center gap-3
                    rounded-2xl
                    bg-cyan-400
                    px-7 py-5
                    text-sm font-bold
                    text-slate-950
                    shadow-[0_20px_50px_rgba(34,211,238,0.24)]
                  "
                >
                  Luka Vision
                  
                </motion.button>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                "Global Innovation",
                "Science-Led Thinking",
                "Premium Experiences",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="
                    rounded-[2rem]
                    border border-white/60
                    bg-white/75
                    p-6
                    backdrop-blur-xl
                    shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                  "
                >
                  <div className="h-3 w-3 rounded-full bg-cyan-400" />

                  <p
                    className="
                      mt-6
                      text-lg
                      font-bold
                      leading-8
                      tracking-[-0.03em]
                      text-slate-950
                    "
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {futureCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="
                    relative overflow-hidden
                    rounded-[2.4rem]
                    border border-white/60
                    bg-white/75
                    p-8
                    backdrop-blur-xl
                    shadow-[0_25px_70px_rgba(15,23,42,0.06)]
                  "
                >
                  {/* Glow */}
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-100/40 blur-2xl" />

                  <div className="relative flex items-start justify-between gap-8">
                    <div>
                      <div
                        className="
                          flex h-16 w-16
                          items-center justify-center
                          rounded-2xl
                          bg-slate-950
                          shadow-lg
                        "
                      >
                        <Icon size={26} className="text-cyan-400" />
                      </div>

                      <h3
                        className="
                          mt-7
                          text-3xl
                          font-black
                          leading-[1]
                          tracking-[-0.05em]
                          text-slate-950
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-5
                          max-w-xl
                          text-[16px]
                          leading-9
                          text-slate-600
                        "
                      >
                        {item.desc}
                      </p>
                    </div>

                    <button
                      className="
                        flex h-12 w-12
                        items-center justify-center
                        rounded-2xl
                        border border-slate-200
                        bg-white
                        shadow-md
                      "
                    >
                      <ArrowUpRight size={18} className="text-slate-700" />
                    </button>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom Premium Panel */}
            <motion.div
              whileHover={{ y: -6 }}
              className="
                relative overflow-hidden
                rounded-[2.6rem]
                border border-white/60
                bg-gradient-to-br
                from-cyan-500
                via-sky-500
                to-slate-900
                p-10
                shadow-[0_30px_90px_rgba(15,23,42,0.14)]
              "
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Glow */}
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

              <div className="relative">
                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-white/20
                    bg-white/10
                    px-5 py-3
                    backdrop-blur-md
                  "
                >
                  <Rocket size={14} className="text-white" />

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-white/85
                    "
                  >
                    Future Expansion
                  </span>
                </div>

                <h3
                  className="
                    mt-8
                    max-w-xl
                    text-5xl
                    font-black
                    leading-[0.95]
                    tracking-[-0.05em]
                    text-white
                  "
                >
                  The journey
                  <br />
                  is only
                  <br />
                  beginning.
                </h3>

                <p
                  className="
                    mt-7
                    max-w-lg
                    text-lg
                    leading-9
                    text-white/80
                  "
                >
                  Luka continues to evolve through experimentation, innovation,
                  collaboration, and the ambition to create globally inspired
                  consumer products.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FutureVisionSection;
