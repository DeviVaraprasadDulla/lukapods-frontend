import { motion } from "framer-motion";
import { Target, Feather, PenTool } from "lucide-react";

import machineVisual from "@/assets/images/about/machine/machine.jpeg";

import AboutHeadingBlock from "@/components/common/about/AboutHeadingBlock";
import AboutFloatingParticles from "@/components/common/about/AboutFloatingParticles";

const principles = [
  {
    icon: Target,
    title: "Effective Performance",
    desc: "Products designed to do their job exceptionally well.",
  },
  {
    icon: Feather,
    title: "Everyday Simplicity",
    desc: "Less measuring, less mess, fewer complicated routines.",
  },
  {
    icon: PenTool,
    title: "Thoughtful Design",
    desc: "Products that work well and feel good to use.",
  },
];

const WhyWeBuiltLukaSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#edf4f8] py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <AboutFloatingParticles />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center justify-center gap-4 lg:mb-16"
        >
          <span className="h-px w-10 bg-slate-300" />

          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
            Why We Built Luka
          </span>

          <span className="h-px w-10 bg-slate-300" />
        </motion.div>

        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
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
              Built With Purpose
            </span>
          </div>

          <AboutHeadingBlock
            title="Better Products for"
            highlight="Everyday Routines."
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-2xl space-y-5"
          >
            <p className="text-lg leading-9 text-slate-600 lg:text-[19px]">
              Luka started by rethinking something almost every household
              does—laundry.
            </p>

            <p className="text-lg leading-9 text-slate-600 lg:text-[19px]">
              From concentrated detergent pods to thoughtfully designed
              home-care products, we focus on three things:
            </p>
          </motion.div>
        </div>

        {/* Machine Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            relative mt-16 overflow-hidden
            rounded-[2.5rem]
            border border-white/60
            bg-white/50
            p-3
            backdrop-blur-xl
            shadow-[0_30px_100px_rgba(15,23,42,0.1)]
            lg:mt-20
          "
        >
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={machineVisual}
              alt="Inside Luka's production line"
              className="
                h-[320px]
                w-full
                object-cover
                object-[center_65%]
                sm:h-[420px]
                lg:h-[560px]
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
          </div>
        </motion.div>

        <p className="mt-6 text-center text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
          Where every Luka pod takes shape.
        </p>

        {/* Three Principles */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3 lg:mt-20">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="
                  relative overflow-hidden
                  rounded-[2rem]
                  border border-white/60
                  bg-white/70
                  p-7
                  backdrop-blur-xl
                  shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                "
              >
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
      </div>
    </section>
  );
};

export default WhyWeBuiltLukaSection;
