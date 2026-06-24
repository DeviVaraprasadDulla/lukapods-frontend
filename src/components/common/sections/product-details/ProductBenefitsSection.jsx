import { motion } from "framer-motion";

import { Sparkles, ShieldCheck, Droplets, Leaf } from "lucide-react";

const icons = [Sparkles, ShieldCheck, Droplets, Leaf];

const ProductBenefitsSection = ({ features = [] }) => {
  if (!features.length) return null;

  const benefits = features[0]?.description?.split("\n")?.filter(Boolean) || [];

  return (
    <section
      className="
        relative
        py-20
        overflow-hidden
      "
    >
      {/* PREMIUM GLOW */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2

            w-[500px]
            h-[250px]

            bg-cyan-200/20

            blur-[120px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10

          max-w-7xl
          mx-auto

          px-5
          sm:px-6
          lg:px-10
        "
      >
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            text-center
            max-w-3xl
            mx-auto
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2

              px-4
              py-2

              rounded-full

              border
              border-slate-200

              bg-white/70

              backdrop-blur-xl
            "
          >
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-cyan-500
              "
            />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[2px]

                text-slate-600
              "
            >
              Premium Benefits
            </span>
          </div>

          <h2
            className="
              mt-5

              text-[30px]
              sm:text-[38px]
              lg:text-[44px]

              leading-[1]

              font-black

              tracking-[-2px]

              text-[#020817]
            "
          >
            Why Customers
            <br />
            <span
              className="
                bg-gradient-to-r
                from-cyan-500
                to-sky-500

                bg-clip-text
                text-transparent
              "
            >
              Love Luka Pods
            </span>
          </h2>

          <p
            className="
              mt-5

              max-w-2xl
              mx-auto

              text-[15px]
              sm:text-base

              text-slate-500

              leading-relaxed
            "
          >
            Every pod is engineered to deliver premium cleaning performance,
            fabric care and long-lasting freshness.
          </p>
        </motion.div>

        {/* BENEFITS GRID */}
        <div
          className="
            mt-12

            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4

            gap-5
          "
        >
          {benefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="
                    relative

                    rounded-[28px]

                    border
                    border-slate-200/70

                    bg-white/75

                    backdrop-blur-2xl

                    p-6

                    shadow-[0_12px_40px_rgba(15,23,42,0.08)]

                    overflow-hidden

                    transition-all
                    duration-300
                  "
              >
                {/* CARD GLOW */}
                <div
                  className="
                      absolute
                      top-0
                      right-0

                      w-24
                      h-24

                      bg-cyan-200/20

                      rounded-full

                      blur-3xl
                    "
                />

                <div
                  className="
                      relative
                      z-10

                      flex
                      flex-col
                      h-full
                    "
                >
                  {/* ICON */}
                  <div
                    className="
                        w-12
                        h-12

                        rounded-2xl

                        bg-cyan-100

                        flex
                        items-center
                        justify-center

                        shadow-sm
                      "
                  >
                    <Icon
                      size={20}
                      className="
                          text-cyan-600
                        "
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                        mt-4

                        text-[17px]

                        font-bold

                        text-[#020817]
                      "
                  >
                    {benefit}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                        mt-2

                        text-sm

                        text-slate-500

                        leading-6
                      "
                  >
                    Premium fabric care technology designed for modern laundry
                    performance.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductBenefitsSection;
