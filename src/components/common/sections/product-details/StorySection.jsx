import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Leaf } from "lucide-react";

const StorySection = ({ product }) => {
  if (!product) return null;

  const storyImage =
    product?.images?.length > 0
      ? product.images[product.images.length - 1]?.image
      : "";

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
          top-0
          left-1/2
          -translate-x-1/2

          w-[600px]
          h-[300px]

          bg-cyan-200/20

          blur-[140px]

          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10

          max-w-7xl
          mx-auto

          px-5
          sm:px-6
          lg:px-10

          grid
          lg:grid-cols-2

          gap-10
          lg:gap-16

          items-center
        "
      >
        {/* IMAGE */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative"
        >
          {/* IMAGE GLOW */}

          <div
            className="
              absolute
              inset-0

              bg-cyan-200/20

              rounded-[36px]

              blur-3xl
            "
          />

          <div
            className="
              relative

              rounded-[32px]

              border
              border-white/40

              bg-white/70

              backdrop-blur-xl

              overflow-hidden

              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
            "
          >
            <img
              src={storyImage}
              alt={product?.name}
              className="
                w-full

                h-[280px]
                sm:h-[380px]
                lg:h-[500px]

                object-contain

                p-6
                lg:p-8

                transition-all
                duration-700

                hover:scale-105
              "
            />
          </div>
        </motion.div>

        {/* CONTENT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          {/* BADGE */}

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
            <Sparkles
              size={14}
              className="
                text-cyan-500
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
              Our Story
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-5

              text-[30px]
              sm:text-[40px]
              lg:text-[48px]

              leading-[1]

              font-black

              tracking-[-2px]

              text-[#020817]
            "
          >
            Luxury Laundry
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
              Reimagined
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6

              text-sm
              sm:text-base

              leading-8

              text-slate-600
            "
          >
            Luka Pods was created to transform everyday laundry into a premium
            care experience. Every pod combines powerful cleaning technology,
            fabric protection, and long-lasting freshness in a simple,
            convenient format.
          </p>

          <p
            className="
              mt-4

              text-sm
              sm:text-base

              leading-8

              text-slate-600
            "
          >
            Designed for modern households, Luka Pods delivers luxury-level
            performance while making laundry easier, cleaner, and smarter.
          </p>

          {/* FEATURE CARDS */}

          <div
            className="
              mt-8

              grid

              grid-cols-1
              sm:grid-cols-3

              gap-4
            "
          >
            <div
              className="
                rounded-2xl

                border
                border-slate-200

                bg-white/70

                backdrop-blur-xl

                p-4

                transition-all
                duration-300

                hover:-translate-y-1
              "
            >
              <ShieldCheck
                size={20}
                className="
                  text-cyan-500
                "
              />

              <p
                className="
                  mt-2

                  text-sm

                  font-semibold

                  text-[#020817]
                "
              >
                Fabric Safe
              </p>
            </div>

            <div
              className="
                rounded-2xl

                border
                border-slate-200

                bg-white/70

                backdrop-blur-xl

                p-4

                transition-all
                duration-300

                hover:-translate-y-1
              "
            >
              <Sparkles
                size={20}
                className="
                  text-cyan-500
                "
              />

              <p
                className="
                  mt-2

                  text-sm

                  font-semibold

                  text-[#020817]
                "
              >
                Deep Cleaning
              </p>
            </div>

            <div
              className="
                rounded-2xl

                border
                border-slate-200

                bg-white/70

                backdrop-blur-xl

                p-4

                transition-all
                duration-300

                hover:-translate-y-1
              "
            >
              <Leaf
                size={20}
                className="
                  text-cyan-500
                "
              />

              <p
                className="
                  mt-2

                  text-sm

                  font-semibold

                  text-[#020817]
                "
              >
                Fresh Fragrance
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
