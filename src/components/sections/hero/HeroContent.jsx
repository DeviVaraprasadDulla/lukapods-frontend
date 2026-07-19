// src/components/sections/hero/HeroContent.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const HeroContent = () => {
  return (
    <div
      className="
        relative
        z-20

        text-center
        lg:text-left

        max-w-[560px]
        xl:max-w-[620px]
      "
    >
      {/* BADGE */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          inline-flex
          items-center
          gap-2

          px-4
          sm:px-5

          h-[38px]

          rounded-full

          border
          border-white/60

          bg-white/70
          backdrop-blur-2xl

          shadow-[0_8px_30px_rgba(148,163,184,0.12)]

          mb-5
          sm:mb-7
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
            sm:text-[11px]

            tracking-[0.24em]

            font-semibold

            text-slate-500
          "
        >
          PREMIUM LAUNDRY EXPERIENCE
        </span>
      </motion.div>

      {/* HEADING */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          leading-[0.92]

          font-black

          text-[#0f172a]

          text-[48px]
          sm:text-[58px]
          md:text-[72px]
          lg:text-[78px]
          xl:text-[88px]

          tracking-[-0.05em]
        "
      >
        Clean Clothes.
        <br />
        <span
          className="
            text-slate-500
          "
        >
          Luxury Care.
        </span>
      </motion.h1>

      {/* DESCRIPTION */}
      <motion.p
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
          duration: 0.8,
        }}
        className="
          mt-5
          sm:mt-6

          text-slate-500

          leading-[1.9]

          text-[14px]
          sm:text-[15px]
          lg:text-[16px]

          max-w-[520px]
        "
      >
        Luka Pods delivers premium cleaning performance with luxurious fabric
        care, long-lasting freshness, and a modern washing experience designed
        for everyday elegance.
      </motion.p>

      {/* BUTTONS */}
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
          delay: 0.3,
          duration: 0.8,
        }}
        className="
          flex
          flex-col
          sm:flex-row

          items-center
          lg:items-start

          gap-4

          mt-8
          sm:mt-10
        "
      >
       <Link to="/products">
            <button
              className="
                h-[52px]
                sm:h-[56px]

                px-7
                sm:px-8

                rounded-full

                bg-[#0f172a]

                text-white

                text-[14px]
                sm:text-[15px]

                font-semibold

                shadow-[0_18px_40px_rgba(15,23,42,0.14)]

                transition-all
                duration-300

                hover:scale-[1.03]
                hover:bg-[#111c35]
              "
            >
              Explore Products
            </button>
          </Link>

              <button
                onClick={() => {
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="
                  h-[52px]
                  sm:h-[56px]

                  px-7
                  sm:px-8

                  rounded-full

                  border
                  border-slate-300/80

                  bg-white/75
                  backdrop-blur-xl

                  text-slate-600

                  text-[14px]
                  sm:text-[15px]

                  font-semibold

                  transition-all
                  duration-300

                  hover:bg-white
                "
              >
                Watch Experience
              </button>
      </motion.div>

      {/* STATS */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.4,
          duration: 0.8,
        }}
        className="
          flex
          items-center
          justify-center
          lg:justify-start

          gap-7
          sm:gap-10

          mt-10
          sm:mt-12
        "
      >
        {[
          {
            title: "10K+",
            subtitle: "Happy Customers",
          },
          {
            title: "99%",
            subtitle: "Fabric Protection",
          },
          {
            title: "24hr",
            subtitle: "Long Freshness",
          },
        ].map((item) => (
          <div key={item.title}>
            <h3
              className="
                text-[#0f172a]

                font-bold

                text-[26px]
                sm:text-[30px]
              "
            >
              {item.title}
            </h3>

            <p
              className="
                text-slate-500

                text-[11px]
                sm:text-[13px]

                mt-1
              "
            >
              {item.subtitle}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroContent;
