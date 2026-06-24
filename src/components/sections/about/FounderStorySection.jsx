import { motion } from "framer-motion";
import { Globe2, Sparkles, FlaskConical, ArrowUpRight } from "lucide-react";

import founderDiscussion from "@/assets/images/about/journey/product-discussion.jpg";
import globalTeam from "@/assets/images/about/global/global-network.jpg";
import innovationQuote from "@/assets/images/about/innovation-quote.jpg";

import AboutHeadingBlock from "@/components/common/about/AboutHeadingBlock";
import AboutFloatingParticles from "@/components/common/about/AboutFloatingParticles";

const cards = [
  {
    icon: FlaskConical,
    title: "Research Driven",
    desc: "Science-backed product development focused on premium performance.",
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    desc: "Learning from international markets to build modern essentials.",
  },
  {
    icon: Sparkles,
    title: "Premium Simplicity",
    desc: "Minimal design language with elevated customer experiences.",
  },
];

const FounderStorySection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fb] py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <AboutFloatingParticles />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Heading */}
        <AboutHeadingBlock
          badge="Founder Journey"
          title="Built From"
          highlight="Real Innovation"
          description="A founder story shaped through formulation science, international collaboration, and modern product thinking."
          align="center"
        />

        {/* Main Layout */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Story Card */}
            <div
              className="
                relative overflow-hidden
                rounded-[2.5rem]
                border border-white/60
                bg-white/70
                p-7
                backdrop-blur-xl
                shadow-[0_30px_90px_rgba(15,23,42,0.08)]
              "
            >
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={innovationQuote}
                  alt="Innovation Story"
                  className="h-[620px] w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
                  <div
                    className="
                      inline-flex items-center gap-2
                      rounded-full
                      border border-white/10
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
                        tracking-[0.24em]
                        text-white/80
                      "
                    >
                      Innovation Story
                    </span>
                  </div>

                  <h2
                    className="
                      mt-6
                      max-w-2xl
                      text-4xl
                      font-black
                      leading-[1.02]
                      tracking-[-0.05em]
                      text-white
                      lg:text-[4rem]
                    "
                  >
                    “I spent 8 years in R&D...
                    <br />
                    <span className="text-cyan-400">
                      even my hair is gone.”
                    </span>
                  </h2>

                  <div className="mt-5 h-[4px] w-24 rounded-full bg-cyan-400" />

                  <p
                    className="
                      mt-6
                      max-w-xl
                      text-lg
                      leading-9
                      text-white/72
                    "
                  >
                    A conversation in Guangzhou that changed how Luka approaches
                    product innovation, formulation science, and real-world
                    household performance.
                  </p>

                  {/* Bottom Stats */}
                  <div
                    className="
                      mt-10
                      grid gap-4
                      rounded-[1.8rem]
                      border border-white/10
                      bg-white/5
                      p-5
                      backdrop-blur-xl
                      sm:grid-cols-3
                    "
                  >
                    {[
                      "8+ Years in R&D",
                      "From Guangzhou To Global",
                      "Building Solutions That Matter",
                    ].map((item, index) => (
                      <div key={index}>
                        <p
                          className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-white/65
                          "
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
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
            {/* Founder Discussion */}
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
                  alt="Founder Discussion"
                  className="h-[420px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

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
                      Product Discussions
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-3xl
                      font-black
                      tracking-[-0.05em]
                      text-white
                    "
                  >
                    Learning directly from global manufacturers and innovators.
                  </h3>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {cards.map((item, index) => {
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
                      Learn More
                      <ArrowUpRight size={16} />
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Team Image */}
            <div
              className="
                overflow-hidden
                rounded-[2.5rem]
                border border-white/60
                bg-white/70
                p-4
                backdrop-blur-xl
                shadow-[0_25px_70px_rgba(15,23,42,0.08)]
              "
            >
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={globalTeam}
                  alt="Global Team"
                  className="h-[260px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-cyan-300
                    "
                  >
                    Global Network
                  </p>

                  <h3
                    className="
                      mt-3
                      text-3xl
                      font-black
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    Building relationships across innovation ecosystems
                    worldwide.
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderStorySection;
