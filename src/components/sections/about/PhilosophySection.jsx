import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, Sparkles, Lightbulb } from "lucide-react";

import founderPortrait from "@/assets/images/about/founder/founder-portrait.jpg";
import globalNetwork from "@/assets/images/about/global/global-network.jpg";

import AboutHeadingBlock from "@/components/common/about/AboutHeadingBlock";
import AboutFloatingParticles from "@/components/common/about/AboutFloatingParticles";
import AboutQuoteCard from "@/components/common/about/AboutQuoteCard";

const values = [
  {
    icon: Sparkles,
    title: "Meaningful Simplicity",
    desc: "Building products that feel premium, intuitive, and effortless in everyday life.",
  },
  {
    icon: Globe2,
    title: "Global Thinking",
    desc: "Learning from international ecosystems to shape modern consumer experiences.",
  },
  {
    icon: Lightbulb,
    title: "Founder-Led Innovation",
    desc: "Every product decision begins with research, curiosity, and real-world problem solving.",
  },
];

const PhilosophySection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7fafc] py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <AboutFloatingParticles />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Heading */}
        <AboutHeadingBlock
          title="A Founder"
          highlight="Driven Philosophy"
          description="A vision shaped through formulation science, product thinking, and the belief that everyday essentials deserve thoughtful innovation."
          center
        />

        {/* Main Grid */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Portrait Card */}
            <div
              className="
                relative overflow-hidden
                rounded-[2.7rem]
                border border-white/60
                bg-white/70
                p-5
                backdrop-blur-xl
                shadow-[0_30px_90px_rgba(15,23,42,0.08)]
              "
            >
              <div className="relative overflow-hidden rounded-[2.2rem]">
                <img
                  src={founderPortrait}
                  alt="Founder Portrait"
                  className="h-[720px] w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/10 to-transparent" />

                {/* Floating Label */}
                <div className="absolute left-7 top-7">
                  <div
                    className="
                      inline-flex items-center gap-2
                      rounded-full
                      border border-white/10
                      bg-white/10
                      px-5 py-2.5
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
                      Founder Philosophy
                    </span>
                  </div>
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-cyan-300
                    "
                  >
                    Innovation • Simplicity • Purpose
                  </p>

                  <h2
                    className="
                      mt-5
                      max-w-2xl
                      text-4xl
                      font-black
                      leading-[1]
                      tracking-[-0.05em]
                      text-white
                      lg:text-[4.5rem]
                    "
                  >
                    Building products
                    <br />
                    <span className="text-cyan-400">people genuinely</span>
                    <br />
                    connect with.
                  </h2>

                  <p
                    className="
                      mt-7
                      max-w-xl
                      text-lg
                      leading-9
                      text-white/70
                    "
                  >
                    Combining research, premium product design, and
                    customer-focused thinking to create experiences that feel
                    modern, refined, and meaningful.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quote */}
            <AboutQuoteCard
              quote="I believe the future belongs to products that combine science, simplicity, and meaningful experiences."
              description="The philosophy behind Luka is rooted in thoughtful innovation — creating home essentials that feel modern, purposeful, and globally inspired."
              author="Bbuvhan Cheerla"
            />

            {/* Values */}
            <div className="grid gap-5">
              {values.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    className="
                      relative overflow-hidden
                      rounded-[2rem]
                      border border-white/60
                      bg-white/75
                      p-7
                      backdrop-blur-xl
                      shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                    "
                  >
                    {/* Glow */}
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-100/40 blur-2xl" />

                    <div
                      className="
                        relative flex h-14 w-14
                        items-center justify-center
                        rounded-2xl
                        bg-slate-950
                        shadow-lg
                      "
                    >
                      <Icon size={24} className="text-cyan-400" />
                    </div>

                    <h3
                      className="
                        relative mt-6
                        text-2xl
                        font-black
                        tracking-[-0.04em]
                        text-slate-950
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        relative mt-3
                        text-[15px]
                        leading-8
                        text-slate-600
                      "
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Global Vision Card */}
            <div
              className="
                overflow-hidden
                rounded-[2.5rem]
                border border-white/60
                bg-white/75
                p-5
                backdrop-blur-xl
                shadow-[0_25px_70px_rgba(15,23,42,0.08)]
              "
            >
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={globalNetwork}
                  alt="Global Vision"
                  className="h-[340px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div
                    className="
                      inline-flex items-center gap-2
                      rounded-full
                      border border-white/10
                      bg-black/30
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
                        tracking-[0.22em]
                        text-white/80
                      "
                    >
                      Global Vision
                    </span>
                  </div>

                  <h3
                    className="
                      mt-5
                      max-w-xl
                      text-4xl
                      font-black
                      leading-[1]
                      tracking-[-0.05em]
                      text-white
                    "
                  >
                    Creating products
                    <br />
                    designed for
                    <span className="text-cyan-400"> modern global</span>
                    lifestyles.
                  </h3>

                  <button
                    className="
                      mt-7 inline-flex
                      items-center gap-2
                      text-sm font-semibold
                      text-cyan-300
                    "
                  >
                    Explore Future Vision
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
