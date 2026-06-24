import { motion } from "framer-motion";
import { Sparkles, Package, ShieldCheck } from "lucide-react";

const ProductsHeroSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden

        pt-32
        lg:pt-40

        pb-20
        lg:pb-28
      "
    >
      {/* PREMIUM GLOW */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-[800px]
          h-[400px]

          bg-cyan-200/30

          blur-[180px]

          pointer-events-none
        "
      />

      <div
        className="
          absolute
          right-20
          top-32

          h-40
          w-40

          rounded-full

          bg-cyan-300/10

          blur-3xl
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
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            max-w-5xl
          "
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

              shadow-sm
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
              Premium Collection
            </span>
          </div>

          {/* TITLE */}

          <h1
            className="
              mt-6

              text-[44px]
              sm:text-[62px]
              lg:text-[88px]

              leading-[0.92]

              tracking-[-3px]

              font-black

              text-[#020817]
            "
          >
            Luxury
            <br />
            <span
              className="
                bg-gradient-to-r
                from-[#020817]
                via-slate-500
                to-slate-400

                bg-clip-text
                text-transparent
              "
            >
              Laundry Pods
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6

              max-w-2xl

              text-base
              sm:text-lg

              leading-relaxed

              text-slate-500
            "
          >
            Discover Luka's premium collection of detergent pods engineered for
            deep cleaning, fabric protection, long-lasting freshness, and a
            luxurious laundry experience.
          </p>

          {/* CTA */}

          <div
            className="
              mt-8

              flex
              flex-wrap

              gap-4
            "
          >
            <button
              className="
                h-12

                px-6

                rounded-full

                bg-[#020817]

                text-white

                font-semibold

                shadow-lg

                transition-all

                hover:scale-[1.02]
              "
            >
              Shop Collection
            </button>

            <button
              className="
                h-12

                px-6

                rounded-full

                border
                border-slate-200

                bg-white/70

                backdrop-blur-xl

                font-semibold

                text-slate-700
              "
            >
              Learn More
            </button>
          </div>

          {/* STATS */}

          <div
            className="
              mt-10

              grid
              grid-cols-1
              sm:grid-cols-3

              gap-4
            "
          >
            <div
              className="
                rounded-3xl

                border
                border-white/40

                bg-white/70

                backdrop-blur-xl

                p-5
              "
            >
              <Package
                size={20}
                className="
                  text-cyan-500
                "
              />

              <h3
                className="
                  mt-3

                  text-2xl
                  font-black

                  text-[#020817]
                "
              >
                10+
              </h3>

              <p
                className="
                  text-sm

                  text-slate-500
                "
              >
                Premium Products
              </p>
            </div>

            <div
              className="
                rounded-3xl

                border
                border-white/40

                bg-white/70

                backdrop-blur-xl

                p-5
              "
            >
              <ShieldCheck
                size={20}
                className="
                  text-cyan-500
                "
              />

              <h3
                className="
                  mt-3

                  text-2xl
                  font-black

                  text-[#020817]
                "
              >
                100%
              </h3>

              <p
                className="
                  text-sm

                  text-slate-500
                "
              >
                Fabric Safe Formula
              </p>
            </div>

            <div
              className="
                rounded-3xl

                border
                border-white/40

                bg-white/70

                backdrop-blur-xl

                p-5
              "
            >
              <Sparkles
                size={20}
                className="
                  text-cyan-500
                "
              />

              <h3
                className="
                  mt-3

                  text-2xl
                  font-black

                  text-[#020817]
                "
              >
                Premium
              </h3>

              <p
                className="
                  text-sm

                  text-slate-500
                "
              >
                Long Lasting Freshness
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsHeroSection;
