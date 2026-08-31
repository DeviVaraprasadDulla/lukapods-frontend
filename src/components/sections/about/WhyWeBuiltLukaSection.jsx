import { motion } from "framer-motion";
import { Target, Feather, PenTool } from "lucide-react";

import machineVisual from "@/assets/images/about/machine/machine.jpeg";
import manufacturingVideo from "@/assets/videos/manufacturing.mp4";
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
{/* Machine Banner */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="
    relative
    mt-16
    overflow-hidden
    rounded-[2.5rem]
    border border-white/70
    bg-white/45
    p-4
    backdrop-blur-2xl
    shadow-[0_30px_100px_rgba(15,23,42,0.10)]
    lg:mt-20
  "
>
  <div
    className="
      grid
      items-center
      gap-8
      lg:grid-cols-[0.85fr_1.15fr]
      lg:gap-12
    "
  >
    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      viewport={{ once: true }}
      className="
        px-5
        py-8
        sm:px-8
        lg:px-10
        lg:py-12
      "
    >
      {/* Label */}
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-slate-200/80
          bg-white/80
          px-4
          py-2
          shadow-sm
        "
      >
        <span className="h-2 w-2 rounded-full bg-cyan-400" />

        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.28em]
            text-slate-500
          "
        >
          Built To Perform
        </span>
      </div>

      {/* Heading */}
      <h2
        className="
          mt-6
          max-w-xl
          text-4xl
          font-black
          leading-[1.05]
          tracking-[-0.05em]
          text-slate-950
          sm:text-5xl
          lg:text-[54px]
        "
      >
        Precision Behind
        <span
          className="
            block
            bg-gradient-to-r
            from-cyan-400
            via-sky-500
            to-blue-600
            bg-clip-text
            text-transparent
          "
        >
          Every Product.
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          mt-6
          max-w-lg
          text-base
          leading-8
          text-slate-600
          lg:text-[17px]
        "
      >
        Our production process brings together modern machinery,
        careful handling, and consistent quality checks to ensure
        every Luka product meets the standards we set for it.
      </p>

      <p
        className="
          mt-4
          max-w-lg
          text-base
          leading-8
          text-slate-500
        "
      >
        From the first stage of production to final packaging,
        every detail matters.
      </p>

      {/* Small stats / details */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        <div
          className="
            rounded-2xl
            border
            border-white
            bg-white/70
            px-4
            py-4
            shadow-sm
          "
        >
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-slate-400
            "
          >
            Standard
          </p>

          <p className="mt-1 text-sm font-bold text-slate-800">
            Consistent Quality
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-white
            bg-white/70
            px-4
            py-4
            shadow-sm
          "
        >
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-slate-400
            "
          >
            Approach
          </p>

          <p className="mt-1 text-sm font-bold text-slate-800">
            Precision First
          </p>
        </div>
      </div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      viewport={{ once: true }}
      className="
        relative
        min-h-[320px]
        overflow-hidden
        rounded-[2rem]
        bg-slate-900
        sm:min-h-[420px]
        lg:min-h-[580px]
      "
    >
      <img
        src={machineVisual}
        alt="Inside Luka's production line"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[center_65%]
        "
      />

      {/* Cinematic overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-tr
          from-slate-950/45
          via-transparent
          to-slate-950/10
        "
      />

      {/* Image label */}
      <div
        className="
          absolute
          left-5
          top-5
          rounded-full
          border
          border-white/20
          bg-black/25
          px-4
          py-2
          backdrop-blur-xl
          sm:left-6
          sm:top-6
        "
      >
        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-white
          "
        >
          Our Production
        </span>
      </div>

      {/* Bottom caption */}
      <div
        className="
          absolute
          bottom-5
          left-5
          right-5
          sm:bottom-6
          sm:left-6
          sm:right-6
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-white/15
            bg-black/25
            p-4
            backdrop-blur-xl
          "
        >
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white/60
            "
          >
            Production Line
          </p>

          <p className="mt-1 text-sm font-medium text-white">
            Technology working behind the scenes.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</motion.div>

{/* Manufacturing Showcase */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="
    relative mt-20
    overflow-hidden
    rounded-[2.5rem]
    border border-white/70
    bg-white/45
    p-4
    backdrop-blur-2xl
    shadow-[0_30px_100px_rgba(15,23,42,0.10)]
    lg:mt-28
  "
>
  <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      viewport={{ once: true }}
      className="px-5 py-8 sm:px-8 lg:px-10 lg:py-12"
    >
      {/* Small label */}
      <div
        className="
          inline-flex items-center gap-2
          rounded-full
          border border-slate-200/80
          bg-white/80
          px-4 py-2
          shadow-sm
        "
      >
        <span className="h-2 w-2 rounded-full bg-cyan-400" />

        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.28em]
            text-slate-500
          "
        >
          Made With Precision
        </span>
      </div>

      {/* Heading */}
      <h2
  className="
    mt-6
    max-w-xl
    text-4xl
    font-black
    leading-[1.05]
    tracking-[-0.05em]
    text-slate-950
    sm:text-5xl
    lg:text-[54px]
  "
>
  Where Every
  <span
    className="
      block
      bg-gradient-to-r
      from-cyan-400
      via-sky-500
      to-blue-600
      bg-clip-text
      text-transparent
    "
  >
    Luka Pod Begins.
  </span>
</h2>

      {/* Description */}
      <p
        className="
          mt-6
          max-w-lg
          text-base
          leading-8
          text-slate-600
          lg:text-[17px]
        "
      >
        Behind every Luka product is a carefully controlled manufacturing
        process. From formulation and filling to quality checks and final
        packing, every step is designed with consistency and care.
      </p>

      {/* Mini details */}
      <div className="mt-8 flex flex-wrap gap-3">
        <div
          className="
            rounded-2xl
            border border-white
            bg-white/70
            px-4 py-3
            shadow-sm
          "
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Process
          </p>

          <p className="mt-1 text-sm font-bold text-slate-800">
            Controlled Production
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border border-white
            bg-white/70
            px-4 py-3
            shadow-sm
          "
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Focus
          </p>

          <p className="mt-1 text-sm font-bold text-slate-800">
            Quality & Consistency
          </p>
        </div>
      </div>
    </motion.div>

    {/* RIGHT VIDEO */}
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      viewport={{ once: true }}
      className="
        relative
        min-h-[360px]
        overflow-hidden
        rounded-[2rem]
        bg-slate-950
        sm:min-h-[440px]
        lg:min-h-[580px]
      "
    >
      <video
        src={manufacturingVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* Cinematic overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-tr
          from-slate-950/45
          via-transparent
          to-slate-950/10
        "
      />

      {/* Video label */}
      <div
        className="
          absolute
          left-5
          top-5
          rounded-full
          border border-white/20
          bg-black/25
          px-4 py-2
          backdrop-blur-xl
          sm:left-6
          sm:top-6
        "
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>

          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
            Inside Luka
          </span>
        </div>
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
        <div
          className="
            rounded-2xl
            border border-white/15
            bg-black/25
            p-4
            backdrop-blur-xl
          "
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Manufacturing
          </p>

          <p className="mt-1 text-sm font-medium text-white">
            Precision at every stage.
          </p>
        </div>
      </div>
    </motion.div>
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
