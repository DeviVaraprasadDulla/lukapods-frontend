import { motion } from "framer-motion";

import { fabricTexture } from "@/assets";

const HeroBackground = () => {
  return (
    <>
      {/* MAIN BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(180deg,#f8fbff_0%,#eef5fb_45%,#f9fcff_100%)]
        "
      />

      {/* TOP LIGHT */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[-15%]
          left-1/2
          -translate-x-1/2

          w-[320px]
          h-[320px]

          sm:w-[500px]
          sm:h-[500px]

          lg:w-[760px]
          lg:h-[760px]

          rounded-full

          bg-[#dbeafe]

          blur-[120px]

          opacity-70
          pointer-events-none
        "
      />

      {/* LEFT SOFT GLOW */}
      <div
        className="
          absolute
          top-[12%]
          left-[-8%]

          w-[180px]
          h-[180px]

          sm:w-[260px]
          sm:h-[260px]

          lg:w-[360px]
          lg:h-[360px]

          rounded-full

          bg-sky-100/70

          blur-[100px]

          pointer-events-none
        "
      />

      {/* RIGHT SOFT GLOW */}
      <div
        className="
          absolute
          bottom-[10%]
          right-[-10%]

          w-[180px]
          h-[180px]

          sm:w-[260px]
          sm:h-[260px]

          lg:w-[340px]
          lg:h-[340px]

          rounded-full

          bg-cyan-100/70

          blur-[100px]

          pointer-events-none
        "
      />

      {/* FABRIC TEXTURE */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.025]

          pointer-events-none
        "
        style={{
          backgroundImage: `url(${fabricTexture})`,
          backgroundSize: "420px",
        }}
      />

      {/* FLOATING GLASS SHAPE */}
      <motion.div
        animate={{
          y: [0, -14, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          top-[14%]
          right-[8%]

          w-[90px]
          h-[90px]

          sm:w-[120px]
          sm:h-[120px]

          lg:w-[150px]
          lg:h-[150px]

          rounded-[28px]

          bg-white/40

          backdrop-blur-2xl

          border
          border-white/60

          shadow-[0_15px_50px_rgba(15,23,42,0.05)]

          rotate-12

          pointer-events-none
        "
      />

      {/* SECOND SHAPE */}
      <motion.div
        animate={{
          y: [0, 16, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          bottom-[20%]
          left-[8%]

          w-[70px]
          h-[70px]

          sm:w-[90px]
          sm:h-[90px]

          lg:w-[120px]
          lg:h-[120px]

          rounded-[24px]

          bg-white/30

          backdrop-blur-xl

          border
          border-white/50

          shadow-[0_10px_30px_rgba(15,23,42,0.04)]

          -rotate-12

          pointer-events-none
        "
      />

      {/* OUTER RING */}
      <div
        className="
          absolute

          right-[-10%]
          top-1/2
          -translate-y-1/2

          w-[260px]
          h-[260px]

          sm:w-[420px]
          sm:h-[420px]

          lg:w-[680px]
          lg:h-[680px]

          rounded-full

          border
          border-sky-100/70

          pointer-events-none
        "
      />

      {/* INNER RING */}
      <div
        className="
          absolute

          right-[2%]
          top-1/2
          -translate-y-1/2

          w-[180px]
          h-[180px]

          sm:w-[320px]
          sm:h-[320px]

          lg:w-[520px]
          lg:h-[520px]

          rounded-full

          border
          border-sky-100/60

          pointer-events-none
        "
      />

      {/* BOTTOM LIGHT */}
      <div
        className="
          absolute
          bottom-0
          left-0

          w-full

          h-[120px]

          sm:h-[180px]

          lg:h-[240px]

          opacity-50

          pointer-events-none
        "
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(255,255,255,0.95) 0%,
              rgba(219,234,254,0.45) 45%,
              transparent 80%
            )
          `,
        }}
      />
    </>
  );
};

export default HeroBackground;
