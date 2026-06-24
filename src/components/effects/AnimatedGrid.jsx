import { motion } from "framer-motion";

const AnimatedGrid = () => {
  return (
    <div
      className="
        absolute
        bottom-[-20%]
        left-0
        w-full
        h-[55%]
        overflow-hidden
        pointer-events-none
        z-0
      "
      style={{
        perspective: "900px",
      }}
    >
      {/* MAIN GRID */}
      <motion.div
        animate={{
          backgroundPositionY: ["0px", "120px"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          opacity-40
        "
        style={{
          transform: "rotateX(75deg)",
          transformOrigin: "bottom",
          backgroundImage: `
            linear-gradient(
              rgba(56,189,248,0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(56,189,248,0.12) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* GRID GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-cyan-400/10
          blur-[100px]
        "
      />
    </div>
  );
};

export default AnimatedGrid;