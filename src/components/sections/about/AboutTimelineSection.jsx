import { motion } from "framer-motion";
import {
  GraduationCap,
  FlaskConical,
  Rocket,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

import AboutHeadingBlock from "@/components/common/about/AboutHeadingBlock";
import AboutFloatingParticles from "@/components/common/about/AboutFloatingParticles";

const timeline = [
  {
    year: "2020",
    title: "Bachelor’s In Pharmacy",
    desc: "Built strong foundations in pharmaceutical sciences, chemistry, and formulation systems.",
    icon: GraduationCap,
  },
  {
    year: "2022",
    title: "Product Development Journey",
    desc: "Started contributing to formulation-led product innovation and modern consumer thinking.",
    icon: FlaskConical,
  },
  {
    year: "2024",
    title: "Founder Of Luka",
    desc: "Launched Luka Home Essentials to reimagine household products through science and premium design.",
    icon: Rocket,
  },
  {
    year: "2025",
    title: "Global Innovation Vision",
    desc: "Exploring international ecosystems, manufacturing innovation, and scalable consumer experiences.",
    icon: Globe2,
  },
];

const AboutTimelineSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#edf4f8] py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <AboutFloatingParticles />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Heading */}
        <AboutHeadingBlock
          title="The Journey"
          highlight="Behind Luka"
          description="A timeline shaped through research, product development, entrepreneurship, and a vision to build globally inspired consumer experiences."
          center
        />

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Vertical Line */}
          <div
            className="
              absolute left-5 top-0 hidden h-full
              w-[2px]
              bg-gradient-to-b
              from-cyan-400
              via-cyan-200
              to-transparent
              lg:block
            "
          />

          <div className="space-y-10">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    relative
                    grid
                    gap-6
                    lg:grid-cols-[120px_1fr]
                    lg:gap-10
                  "
                >
                  {/* LEFT YEAR */}
                  <div className="relative">
                    {/* Timeline Dot */}
                    <div
                      className="
                        absolute left-0 top-3 hidden
                        h-10 w-10
                        items-center justify-center
                        rounded-full
                        border border-cyan-300/40
                        bg-white
                        shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                        lg:flex
                      "
                    >
                      <div className="h-3 w-3 rounded-full bg-cyan-400" />
                    </div>

                    <p
                      className="
                        pl-16
                        text-sm
                        font-bold
                        uppercase
                        tracking-[0.28em]
                        text-cyan-700
                      "
                    >
                      {item.year}
                    </p>
                  </div>

                  {/* CARD */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="
                      relative overflow-hidden
                      rounded-[2.4rem]
                      border border-white/60
                      bg-white/75
                      p-8
                      backdrop-blur-xl
                      shadow-[0_25px_70px_rgba(15,23,42,0.07)]
                    "
                  >
                    {/* Glow */}
                    <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-100/40 blur-2xl" />

                    {/* Content */}
                    <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-2xl">
                        {/* Icon */}
                        <div
                          className="
                            flex h-14 w-14
                            items-center justify-center
                            rounded-2xl
                            bg-slate-950
                            shadow-lg
                          "
                        >
                          <Icon size={24} className="text-cyan-400" />
                        </div>

                        {/* Title */}
                        <h3
                          className="
                            mt-6
                            text-3xl
                            font-black
                            leading-[1]
                            tracking-[-0.05em]
                            text-slate-950
                          "
                        >
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p
                          className="
                            mt-5
                            text-[16px]
                            leading-9
                            text-slate-600
                          "
                        >
                          {item.desc}
                        </p>
                      </div>

                      {/* CTA */}
                      <button
                        className="
                          inline-flex items-center gap-2
                          text-sm font-semibold
                          text-cyan-600
                          lg:mt-2
                        "
                      >
                        {/* Learn More
                        <ArrowUpRight size={16} /> */}
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
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
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative mt-24 overflow-hidden
            rounded-[2.8rem]
            border border-white/60
            bg-slate-950
            p-10 lg:p-14
            shadow-[0_30px_90px_rgba(15,23,42,0.14)]
          "
        >
          {/* Glow */}
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative max-w-4xl">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.24em]
                text-cyan-300
              "
            >
              The Future Of Luka
            </p>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                leading-[1]
                tracking-[-0.05em]
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Continuing to build
              <br />
              <span className="text-cyan-400">globally inspired</span>
              <br />
              consumer experiences.
            </h2>

            <p
              className="
                mt-8
                max-w-3xl
                text-lg
                leading-9
                text-white/70
              "
            >
              Luka’s journey is only beginning — driven by innovation,
              formulation science, sustainability, and the ambition to create
              meaningful products for modern households worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTimelineSection;
