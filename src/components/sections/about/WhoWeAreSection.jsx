import { motion } from "framer-motion";

import founderTeam from "@/assets/images/about/founder/founder-team.jpg";

import AboutFloatingParticles from "@/components/common/about/AboutFloatingParticles";

const WhoWeAreSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fb] pt-8 pb-24 lg:pt-12 lg:pb-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_38%)]" />

        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-sky-100/50 blur-3xl" />
      </div>

      <AboutFloatingParticles />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
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
                About Luka
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-8
                max-w-2xl
                text-[2.75rem]
                font-black
                leading-[0.98]
                tracking-[-0.05em]
                text-slate-950
                sm:text-6xl
                lg:text-7xl
              "
            >
              Making Everyday
              <span
                className="
                  block mt-1
                  bg-gradient-to-r
                  from-cyan-400
                  via-sky-500
                  to-teal-500
                  bg-clip-text
                  text-transparent
                "
              >
                Laundry Simpler.
              </span>
            </h1>

            {/* Body Copy */}
            <div className="mt-8 max-w-xl space-y-6">
              <p className="text-lg leading-9 text-slate-600 lg:text-[19px]">
                Luka was created with a simple belief: everyday home care
                should be effective, effortless, and thoughtfully designed.
              </p>

              <p className="text-lg leading-9 text-slate-600 lg:text-[19px]">
                We combine formulation science with modern design to create
                products that make everyday routines simpler—starting with
                laundry.
              </p>
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
                  src={founderTeam}
                  alt="The Luka founders"
                  className="
                    h-[380px]
                    w-full
                    object-cover
                    sm:h-[460px]
                    lg:h-[640px]
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
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
                        text-white/85
                      "
                    >
                      Luka Founders
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
