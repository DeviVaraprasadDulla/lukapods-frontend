import { motion } from "framer-motion";
import { Package, Scale, Sparkles, Info, CheckCircle2 } from "lucide-react";

const iconMap = {
  weight: Scale,
  quantity: Package,
  usage: Sparkles,
};

const ProductSpecificationsSection = ({ specifications = [] }) => {
  if (!specifications?.length) return null;

  return (
    <section
      className="
        relative
        py-16
        sm:py-20
        overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}
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
            top-10
            right-0
            w-[350px]
            h-[350px]
            bg-cyan-200/20
            rounded-full
            blur-[120px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          max-w-6xl
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
            y: 20,
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
            max-w-2xl
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
              bg-white/80
              backdrop-blur-xl
            "
          >
            <span
              className="
                h-2
                w-2
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
              Specifications
            </span>
          </div>

          <h2
            className="
              mt-5
              text-[34px]
              sm:text-[46px]
              leading-[1]
              font-black
              tracking-[-2px]
              text-[#020817]
            "
          >
            Product
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
              Specifications
            </span>
          </h2>

          <p
            className="
              mt-4
              text-sm
              sm:text-base
              leading-relaxed
              text-slate-500
            "
          >
            Detailed information carefully crafted to help you understand every
            aspect of the product.
          </p>
        </motion.div>

        {/* SPECIFICATION CARD */}

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
          transition={{
            duration: 0.6,
          }}
          className="
            mt-10

            rounded-[28px]

            border
            border-white/40

            bg-white/75

            backdrop-blur-2xl

            shadow-[0_20px_60px_rgba(15,23,42,0.06)]

            overflow-hidden
          "
        >
          {specifications.map((spec, index) => {
            const Icon = iconMap[spec.key?.toLowerCase()] || Info;

            return (
              <motion.div
                key={spec.id}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.95)",
                }}
                className={`
                    flex
                    items-center
                    justify-between

                    px-5
                    sm:px-7

                    py-5

                    transition-all
                    duration-300

                    ${
                      index !== specifications.length - 1
                        ? "border-b border-slate-100"
                        : ""
                    }
                  `}
              >
                <div
                  className="
                      flex
                      items-center
                      gap-4
                    "
                >
                  <div
                    className="
                        h-11
                        w-11

                        rounded-xl

                        bg-cyan-50

                        flex
                        items-center
                        justify-center
                      "
                  >
                    <Icon
                      size={18}
                      className="
                          text-cyan-600
                        "
                    />
                  </div>

                  <div>
                    <p
                      className="
                          text-[11px]
                          uppercase
                          tracking-[1.5px]
                          text-slate-400
                        "
                    >
                      {spec.key}
                    </p>

                    <h3
                      className="
                          mt-1
                          text-sm
                          sm:text-base
                          font-semibold
                          text-[#020817]
                        "
                    >
                      {spec.value}
                    </h3>
                  </div>
                </div>

                <CheckCircle2
                  size={18}
                  className="
                      text-cyan-500
                      shrink-0
                    "
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSpecificationsSection;
