// src/components/sections/hero/HeroProductShowcase.jsx

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import productImage from "@/assets/images/products/product.png";

const products = [
  {
    id: 1,
    image: productImage,
  },

  {
    id: 2,
    image: productImage,
  },

  {
    id: 3,
    image: productImage,
  },
];

const positions = [
  {
    x: "-32%",
    y: 30,
    scale: 0.76,
    rotateY: 26,
    opacity: 0.22,
    zIndex: 1,
    blur: "blur-[1px]",
  },

  {
    x: "0%",
    y: -8,
    scale: 1,
    rotateY: 0,
    opacity: 1,
    zIndex: 3,
    blur: "blur-0",
  },

  {
    x: "32%",
    y: 30,
    scale: 0.76,
    rotateY: -26,
    opacity: 0.22,
    zIndex: 1,
    blur: "blur-[1px]",
  },
];

const HeroProductShowcase = () => {
  //
  // PRODUCT ORDER
  //
  const [order, setOrder] = useState([0, 1, 2]);

  //
  // AUTO ROTATION
  //
  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => [prev[2], prev[0], prev[1]]);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        relative

        flex
        items-center
        justify-center

        w-full

        h-[340px]
        sm:h-[460px]
        lg:h-[660px]

        overflow-hidden

        -mt-4
        lg:-mt-10
      "
    >
      {/* ========================= */}
      {/* PREMIUM BACK LIGHT */}
      {/* ========================= */}

      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          w-[280px]
          h-[280px]

          sm:w-[420px]
          sm:h-[420px]

          lg:w-[760px]
          lg:h-[760px]

          rounded-full

          bg-[radial-gradient(circle,#dff3ff_0%,transparent_72%)]

          blur-[80px]
        "
      />

      {/* ========================= */}
      {/* ORBITAL RINGS */}
      {/* ========================= */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          w-[260px]
          h-[260px]

          sm:w-[420px]
          sm:h-[420px]

          lg:w-[760px]
          lg:h-[760px]

          rounded-full

          border

          border-[#d7e7f4]/60
        "
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 140,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          w-[220px]
          h-[220px]

          sm:w-[360px]
          sm:h-[360px]

          lg:w-[640px]
          lg:h-[640px]

          rounded-full

          border
          border-dashed

          border-[#dbeaf6]/60
        "
      />

      {/* ========================= */}
      {/* PRODUCT SYSTEM */}
      {/* ========================= */}

      <div
        className="
          relative

          flex
          items-center
          justify-center

          w-full
          h-full
        "
        style={{
          perspective: "2400px",
        }}
      >
        {products.map((product, index) => {
          //
          // CURRENT POSITION
          //
          const currentPosition = order.indexOf(index);

          //
          // POSITION
          //
          const position = positions[currentPosition];

          return (
            <motion.div
              key={product.id}
              animate={{
                x: position.x,
                y: position.y,
                scale: position.scale,
                rotateY: position.rotateY,
                opacity: position.opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 65,
                damping: 18,
                mass: 1,
              }}
              style={{
                zIndex: position.zIndex,
                transformStyle: "preserve-3d",
              }}
              className="
                absolute

                flex
                items-center
                justify-center

                will-change-transform
              "
            >
              {/* CENTER LIGHT */}

              {currentPosition === 1 && (
                <motion.div
                  animate={{
                    opacity: [0.25, 0.45, 0.25],

                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute

                    inset-0

                    rounded-full

                    bg-[radial-gradient(circle,#d9efff_0%,transparent_72%)]

                    blur-[60px]

                    scale-[1.15]
                  "
                />
              )}

              {/* PRODUCT FLOAT */}

              <motion.div
                animate={{
                  y: currentPosition === 1 ? [0, -16, 0] : [0, -8, 0],
                }}
                transition={{
                  duration: currentPosition === 1 ? 5 : 6,

                  repeat: Infinity,

                  ease: "easeInOut",
                }}
                className="
                  relative
                "
              >
                {/* PRODUCT IMAGE */}

                <motion.img
                  animate={{
                    rotateZ: currentPosition === 1 ? [0, 1.2, 0] : 0,
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={product.image}
                  alt="Luka Product"
                  draggable={false}
                  className={`
                    relative

                    w-[120px]
                    sm:w-[200px]
                    lg:w-[330px]

                    object-contain

                    select-none

                    drop-shadow-[0_40px_70px_rgba(15,23,42,0.14)]

                    transition-all
                    duration-700

                    ${position.blur}
                  `}
                />

                {/* DYNAMIC REFLECTION */}

                <motion.div
                  animate={{
                    width:
                      currentPosition === 1 ? ["52%", "58%", "52%"] : "42%",

                    opacity: currentPosition === 1 ? [0.4, 0.7, 0.4] : 0.2,
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute

                    left-1/2
                    bottom-[-8%]

                    -translate-x-1/2

                    h-[18px]

                    rounded-full

                    bg-[#dcecf8]

                    blur-2xl
                  "
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* ========================= */}
      {/* FLOATING PARTICLES */}
      {/* ========================= */}

      <motion.div
        animate={{
          y: [0, -24, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute

          top-[24%]
          right-[18%]

          w-2
          h-2

          rounded-full

          bg-cyan-300

          blur-[2px]
        "
      />

      <motion.div
        animate={{
          y: [0, 18, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute

          bottom-[22%]
          left-[16%]

          w-3
          h-3

          rounded-full

          bg-sky-200

          blur-[2px]
        "
      />
    </div>
  );
};

export default HeroProductShowcase;
