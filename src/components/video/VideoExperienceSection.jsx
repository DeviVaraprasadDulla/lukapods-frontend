import { motion, useMotionValue, useTransform } from "framer-motion";
import { Play, ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";

const VideoExperienceSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [6, -6]);
  const rotateY = useTransform(mouseX, [-100, 100], [-6, 6]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x / 8);
    mouseY.set(y / 8);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
        bg-[#020617]
      "
    >
      {/* BACKGROUND GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(0,180,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,120,255,0.10),transparent_35%)]
        "
      />

      {/* GRID EFFECT */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* FLOATING GLOW */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[18%]
          left-[8%]
          w-[280px]
          h-[280px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[10%]
          right-[8%]
          w-[320px]
          h-[320px]
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.95fr_1.05fr]
            gap-14
            items-center
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-xl"
          >
            {/* LABEL */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-full
                bg-white/[0.05]
                backdrop-blur-xl
                ring-1
                ring-white/10
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-cyan-400
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[3px]
                  font-semibold
                  text-slate-300
                "
              >
                Luka Experience
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                mt-8
                text-[44px]
                sm:text-[58px]
                lg:text-[68px]
                leading-[0.9]
                tracking-[-4px]
                font-black
                text-white
              "
            >
              A Premium
              <span
                className="
                  block
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-white
                  via-slate-300
                  to-cyan-300
                "
              >
                Laundry Story
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-7
                text-[15px]
                sm:text-[16px]
                leading-[2]
                text-slate-400
                max-w-lg
              "
            >
              Experience next-generation fabric care with premium washing
              technology crafted for freshness, luxury, and modern lifestyle
              elegance.
            </p>

            {/* FEATURES */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-4
              "
            >
              {[
                {
                  icon: Sparkles,
                  text: "Luxury Freshness",
                },
                {
                  icon: ShieldCheck,
                  text: "Fabric Protection",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    whileHover={{
                      y: -4,
                    }}
                    key={item.text}
                    className="
                      flex
                      items-center
                      gap-3
                      px-5
                      py-3
                      rounded-[24px]
                      bg-white/[0.05]
                      backdrop-blur-xl
                      ring-1
                      ring-white/10
                    "
                  >
                    <Icon size={17} className="text-cyan-300" />

                    <span
                      className="
                        text-sm
                        font-medium
                        text-slate-200
                      "
                    >
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                relative
                overflow-hidden
                mt-10
                inline-flex
                items-center
                gap-4
                px-7
                py-4
                rounded-full
                bg-gradient-to-b
                from-white/[0.12]
                to-white/[0.04]
                backdrop-blur-xl
                ring-1
                ring-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.4)]
              "
            >
              {/* BUTTON GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700
                  bg-[radial-gradient(circle_at_left,rgba(34,211,238,0.22),transparent_55%)]
                "
              />

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-full
                  bg-white
                "
              >
                <Play
                  size={17}
                  fill="currentColor"
                  className="text-[#020617] ml-0.5"
                />
              </div>

              <div className="relative text-left">
                <p
                  className="
                    text-white
                    text-sm
                    font-semibold
                  "
                >
                  Watch Experience
                </p>

                <p
                  className="
                    text-[12px]
                    text-slate-400
                  "
                >
                  Discover premium care
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="
                  relative
                  text-cyan-300
                  transition-transform
                  duration-500
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </motion.button>
          </motion.div>

          {/* VIDEO SECTION */}
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="
              relative
              perspective-[2000px]
            "
          >
            {/* OUTER SOFT GLOW */}
            <motion.div
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                inset-0
                scale-[1.02]
                rounded-[42px]
                bg-cyan-500/10
                blur-3xl
              "
            />

            {/* MAIN VIDEO CARD */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                bg-white/[0.05]
                backdrop-blur-2xl
                ring-1
                ring-white/10
                shadow-[0_40px_120px_rgba(0,0,0,0.55)]
              "
            >
              {/* TOP LIGHT */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[40px]
                  bg-gradient-to-b
                  from-white/[0.08]
                  to-transparent
                  pointer-events-none
                "
              />

              {/* VIDEO */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="
                  w-full
                  h-[260px]
                  sm:h-[340px]
                  lg:h-[400px]
                  object-cover
                  transition-transform
                  duration-[4000ms]
                  ease-out
                  group-hover:scale-[1.05]
                "
              >
                <source src="/videos/luxury-wash.mp4" type="video/mp4" />
              </video>

              {/* VIDEO OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#020617]/45
                  via-transparent
                  to-transparent
                "
              />

              {/* MOVING LIGHT EFFECT */}
              <motion.div
                animate={{
                  x: ["-150%", "250%"],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1,
                }}
                className="
                  absolute
                  top-0
                  left-0
                  w-[25%]
                  h-full
                  rotate-[18deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  blur-2xl
                "
              />

              {/* CENTER PLAY BUTTON */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    w-20
                    h-20
                    rounded-full
                    bg-white/10
                    backdrop-blur-xl
                    ring-1
                    ring-white/20
                    shadow-[0_0_60px_rgba(255,255,255,0.18)]
                  "
                >
                  {/* RIPPLE */}
                  <motion.div
                    animate={{
                      scale: [1, 1.7],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-white/20
                    "
                  />

                  <Play size={28} fill="white" className="text-white ml-1" />
                </motion.div>
              </div>

              {/* BOTTOM CONTENT */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  p-6
                  sm:p-7
                "
              >
                <div
                  className="
                    flex
                    items-end
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        bg-white/[0.08]
                        backdrop-blur-xl
                        ring-1
                        ring-white/10
                      "
                    >
                      <div
                        className="
                          w-2
                          h-2
                          rounded-full
                          bg-cyan-400
                        "
                      />

                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[2px]
                          font-semibold
                          text-slate-200
                        "
                      >
                        Premium Care
                      </span>
                    </div>

                    <h3
                      className="
                        mt-4
                        text-2xl
                        sm:text-3xl
                        font-black
                        tracking-[-1px]
                        text-white
                      "
                    >
                      Washing
                      <span className="block text-cyan-300">Reimagined</span>
                    </h3>
                  </div>

                  {/* MINI CARD */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      hidden
                      md:flex
                      flex-col
                      gap-3
                      px-5
                      py-4
                      rounded-[26px]
                      bg-white/[0.05]
                      backdrop-blur-xl
                      ring-1
                      ring-white/10
                      min-w-[150px]
                    "
                  >
                    <span
                      className="
                        text-[11px]
                        uppercase
                        tracking-[2px]
                        text-slate-400
                      "
                    >
                      Protection
                    </span>

                    <div
                      className="
                        h-1.5
                        rounded-full
                        bg-white/10
                        overflow-hidden
                      "
                    >
                      <motion.div
                        animate={{
                          width: ["0%", "96%"],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-cyan-400
                          to-blue-400
                        "
                      />
                    </div>

                    <p
                      className="
                        text-3xl
                        font-black
                        text-white
                      "
                    >
                      99%
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoExperienceSection;
