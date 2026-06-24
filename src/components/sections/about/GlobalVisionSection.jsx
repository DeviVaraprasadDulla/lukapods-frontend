import { motion } from "framer-motion";
import { Globe2, Users, Rocket, ArrowUpRight, Sparkles } from "lucide-react";

import globalNetwork from "@/assets/images/about/global/global-network.jpg";
import founderDiscussion from "@/assets/images/about/journey/product-discussion.jpg";

import AboutHeadingBlock from "@/components/common/about/AboutHeadingBlock";
import AboutFloatingParticles from "@/components/common/about/AboutFloatingParticles";

const visionCards = [
  {
    icon: Globe2,
    title: "Global Expansion",
    desc: "Building Luka with a globally inspired mindset focused on modern consumer experiences.",
  },
  {
    icon: Users,
    title: "Community & Collaboration",
    desc: "Connecting with innovators, manufacturers, and creators across international ecosystems.",
  },
  {
    icon: Rocket,
    title: "Future-Driven Innovation",
    desc: "Designing scalable household products that combine science, simplicity, and premium experiences.",
  },
];

const GlobalVisionSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f6fafc] py-24 lg:py-32">
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
          title="Building A"
          highlight="Global Vision"
          description="Luka is driven by the ambition to combine science-led innovation, premium design, and global collaboration into meaningful modern consumer products."
          center
        />

        {/* Main Grid */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT BIG CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="
              relative overflow-hidden
              rounded-[2.8rem]
              border border-white/60
              bg-white/75
              p-5
              backdrop-blur-xl
              shadow-[0_30px_90px_rgba(15,23,42,0.08)]
            "
          >
            <div className="relative overflow-hidden rounded-[2.2rem]">
              <img
                src={globalNetwork}
                alt="Global Vision"
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
                    Future Vision
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
                  Innovation • Scale • Collaboration
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
                  Building brands
                  <br />
                  designed for
                  <span className="text-cyan-400"> global modern</span>
                  <br />
                  lifestyles.
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
                  Luka’s future vision is rooted in modern innovation
                  ecosystems, international collaboration, and creating
                  meaningful products that feel premium, simple, and globally
                  relevant.
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
            {/* Networking Image */}
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
                  src={founderDiscussion}
                  alt="Collaboration"
                  className="h-[320px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

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
                      Collaboration
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
                    Learning through global conversations and innovation
                    networks.
                  </h3>
                </div>
              </div>
            </div>

            {/* Vision Cards */}
            <div className="grid gap-5">
              {visionCards.map((item, index) => {
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

                    <button
                      className="
                        relative mt-5 inline-flex
                        items-center gap-2
                        text-sm font-semibold
                        text-cyan-600
                      "
                    >
                      Explore More
                      <ArrowUpRight size={16} />
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Premium Card */}
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

              <div className="relative">
                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-white/10
                    bg-white/5
                    px-4 py-2
                    backdrop-blur-md
                  "
                >
                  <Sparkles size={14} className="text-cyan-400" />

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-white/80
                    "
                  >
                    The Future Of Luka
                  </span>
                </div>

                <h3
                  className="
                    mt-6
                    max-w-xl
                    text-4xl
                    font-black
                    leading-[1]
                    tracking-[-0.05em]
                    text-white
                  "
                >
                  Creating modern household experiences with a
                  <span className="text-cyan-400"> global mindset.</span>
                </h3>

                <p
                  className="
                    mt-6
                    max-w-xl
                    text-[16px]
                    leading-9
                    text-white/70
                  "
                >
                  Luka continues to evolve through research, collaboration, and
                  the ambition to design products that feel relevant, refined,
                  and future-ready.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalVisionSection;
