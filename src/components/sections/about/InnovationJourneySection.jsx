import { motion } from "framer-motion";
import { FlaskConical, Sparkles, Globe2, ShieldCheck } from "lucide-react";

import productDiscussion from "@/assets/images/about/journey/product-discussion.jpg";
import guangzhouRnd from "@/assets/images/about/journey/guangzhou-rnd.jpg";

import AboutHeadingBlock from "@/components/common/about/AboutHeadingBlock";
import AboutFloatingParticles from "@/components/common/about/AboutFloatingParticles";

const features = [
  {
    icon: FlaskConical,
    title: "Formulation Science",
    desc: "Advanced detergent formulations engineered for performance, care, and premium user experience.",
  },
  {
    icon: ShieldCheck,
    title: "Fabric Protection",
    desc: "Built with modern cleaning technology focused on preserving quality and freshness.",
  },
  {
    icon: Globe2,
    title: "Global Learning",
    desc: "Inspired by international manufacturing ecosystems and modern product innovation.",
  },
  {
    icon: Sparkles,
    title: "Luxury Simplicity",
    desc: "Combining premium aesthetics with everyday functionality and convenience.",
  },
];

const InnovationJourneySection = () => {
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
        {/* Heading */}
        <AboutHeadingBlock
          title="Driven By"
          highlight="Innovation & Research"
          description="Luka’s innovation journey is shaped by formulation science, global product learning, and a deep focus on creating meaningful household experiences."
          center
        />

        {/* Main Grid */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT BIG IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="
              relative overflow-hidden
              rounded-[2.8rem]
              border border-white/60
              bg-white/70
              p-5
              backdrop-blur-xl
              shadow-[0_30px_90px_rgba(15,23,42,0.08)]
            "
          >
            <div className="relative overflow-hidden rounded-[2.2rem]">
              <img
                src={guangzhouRnd}
                alt="Guangzhou Innovation"
                className="h-[760px] w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/20 to-transparent" />

              {/* Top Badge */}
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
                    Global Innovation Journey
                  </span>
                </div>
              </div>

              {/* Bottom Content */}
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
                  Guangzhou • Research • Product Thinking
                </p>

                <h2
                  className="
                    mt-5
                    max-w-3xl
                    text-4xl
                    font-black
                    leading-[1]
                    tracking-[-0.05em]
                    text-white
                    lg:text-[4.5rem]
                  "
                >
                  Learning from
                  <br />
                  <span className="text-cyan-400">world-class product</span>
                  <br />
                  ecosystems.
                </h2>

                <p
                  className="
                    mt-7
                    max-w-2xl
                    text-lg
                    leading-9
                    text-white/70
                  "
                >
                  Exploring formulation science, manufacturing innovation, and
                  premium consumer product experiences that shape the future of
                  Luka Home Essentials.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Product Discussion Card */}
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
                  src={productDiscussion}
                  alt="Product Discussion"
                  className="h-[320px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
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
                      Product Development
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-3xl
                      font-black
                      leading-[1.05]
                      tracking-[-0.05em]
                      text-white
                    "
                  >
                    Conversations that shape premium household innovation.
                  </h3>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    className="
                      relative overflow-hidden
                      rounded-[2rem]
                      border border-white/60
                      bg-white/70
                      p-6
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

            {/* Bottom Luxury Card */}
            <div
              className="
                relative overflow-hidden
                rounded-[2.5rem]
                border border-white/60
                bg-slate-950
                p-8
                shadow-[0_30px_90px_rgba(15,23,42,0.14)]
              "
            >
              {/* Glow */}
              <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />

              <p
                className="
                  relative
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-cyan-300
                "
              >
                Science-Led Thinking
              </p>

              <h3
                className="
                  relative mt-5
                  max-w-lg
                  text-4xl
                  font-black
                  leading-[1]
                  tracking-[-0.05em]
                  text-white
                "
              >
                Designing products that feel modern, intentional, and globally
                inspired.
              </h3>

              <p
                className="
                  relative mt-6
                  max-w-xl
                  text-[16px]
                  leading-9
                  text-white/70
                "
              >
                Luka combines innovation, premium product thinking, and modern
                household experiences to create solutions that go beyond
                conventional home essentials.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InnovationJourneySection;
