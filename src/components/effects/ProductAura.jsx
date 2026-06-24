import { motion } from "framer-motion";

const ProductAura = () => {
  return (
    <>
      {/* MAIN BIG GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-[420px]
          h-[420px]
          sm:w-[560px]
          sm:h-[560px]
          lg:w-[760px]
          lg:h-[760px]
          rounded-full
          bg-cyan-400/20
          blur-[180px]
        "
      />

      {/* INNER LIGHT */}
      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-[260px]
          h-[260px]
          sm:w-[340px]
          sm:h-[340px]
          lg:w-[500px]
          lg:h-[500px]
          rounded-full
          bg-cyan-300/20
          blur-[90px]
        "
      />

      {/* ROTATING OUTER RING */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-[320px]
          h-[320px]
          sm:w-[430px]
          sm:h-[430px]
          lg:w-[620px]
          lg:h-[620px]
          rounded-full
          border
          border-cyan-300/15
        "
      />

      {/* SECOND RING */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-[260px]
          h-[260px]
          sm:w-[360px]
          sm:h-[360px]
          lg:w-[520px]
          lg:h-[520px]
          rounded-full
          border
          border-white/10
        "
      />

      {/* ENERGY DOTS */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          className="
            absolute
            rounded-full
            bg-cyan-300
            blur-[2px]
          "
          style={{
            width: `${6 + i}px`,
            height: `${6 + i}px`,
            top: `${15 + i * 7}%`,
            left: `${20 + i * 6}%`,
            boxShadow: "0 0 25px rgba(103,232,249,0.9)",
          }}
        />
      ))}

      {/* VERTICAL LIGHT BEAM */}
      <motion.div
        animate={{
          opacity: [0.05, 0.18, 0.05],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          w-[180px]
          h-[700px]
          rounded-full
          bg-cyan-200/15
          blur-[100px]
        "
      />

      {/* MOVING SHINE */}
      <motion.div
        animate={{
          x: [-120, 120],
          opacity: [0, 0.18, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-[120px]
          h-[520px]
          rotate-12
          bg-white/15
          blur-[55px]
        "
      />

      {/* BOTTOM REFLECTION */}
      <motion.div
        animate={{
          scaleX: [1, 1.12, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[-60px]
          w-[340px]
          h-[120px]
          rounded-full
          bg-cyan-300/20
          blur-[60px]
        "
      />
    </>
  );
};

export default ProductAura;
