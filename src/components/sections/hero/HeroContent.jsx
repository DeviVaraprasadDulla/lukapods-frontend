// src/components/sections/hero/HeroContent.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


// ======================================================
// COUNT UP COMPONENT
// ======================================================

const CountUp = ({
  end,
  suffix = "",
  duration = 1800,
  repeatDelay = 12000,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame;
    let interval;

    const startAnimation = () => {
      let startTime = null;

      const animate = (currentTime) => {
        if (!startTime) {
          startTime = currentTime;
        }

        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        // Smooth premium easing
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(easeOut * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    };

    // First animation
    startAnimation();

    // Repeat animation every 12 seconds
    interval = setInterval(() => {
      setCount(0);
      startAnimation();
    }, repeatDelay);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
      clearInterval(interval);
    };
  }, [end, duration, repeatDelay]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};


// ======================================================
// HERO CONTENT
// ======================================================

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

      {/* ==================================================
          BADGE
      ================================================== */}

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
          Designed for Smarter Laundry
        </span>

      </motion.div>


      {/* ==================================================
          HEADING
      ================================================== */}

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


      {/* ==================================================
          DESCRIPTION
      ================================================== */}

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


      {/* ==================================================
          BUTTONS
      ================================================== */}

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

        {/* EXPLORE PRODUCTS */}

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


        {/* WATCH EXPERIENCE */}

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


      {/* ==================================================
          STATS
      ================================================== */}

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
            end: 10,
            suffix: "K+",
            subtitle: "Happy Customers",
          },

          {
            end: 99,
            suffix: "%",
            subtitle: "Fabric Protection",
          },

          {
            prefix: "UP TO",
            end: 24,
            suffix: "hr",
            subtitle: "Long Freshness",
          },

        ].map((item) => (

          <div
            key={item.subtitle}
            className="text-left"
          >

            {/* PREMIUM PREFIX */}

            {item.prefix && (
              <span
                className="
                  block

                  text-[8px]
                  sm:text-[9px]

                  tracking-[0.22em]

                  font-semibold

                  text-slate-400

                  uppercase

                  leading-none

                  mb-1
                "
              >
                {item.prefix}
              </span>
            )}


            {/* ANIMATED NUMBER */}

            <h3
              className="
                text-[#0f172a]

                font-bold

                text-[26px]
                sm:text-[30px]

                leading-none

                tabular-nums
              "
            >

              <CountUp
                end={item.end}
                suffix={item.suffix}
                duration={1800}
                repeatDelay={12000}
              />

            </h3>


            {/* SUBTITLE */}

            <p
              className="
                text-slate-500

                text-[11px]
                sm:text-[13px]

                mt-2
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