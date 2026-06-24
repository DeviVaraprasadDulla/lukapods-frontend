import { useMemo } from "react";
import { motion } from "framer-motion";

const FloatingBubbles = () => {
  const bubbles = useMemo(() => {
    return [...Array(28)].map((_, index) => ({
      id: index,
      size: Math.random() * 20 + 8,
      left: Math.random() * 100,
      duration: Math.random() * 18 + 22,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.4 + 0.15,
      moveX: Math.random() * 80 - 40,
    }));
  }, []);

  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
        z-30
      "
    >
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{
            y: 0,
            opacity: 0,
            scale: 0.4,
          }}
          animate={{
            y: -900,
            opacity: [0, bubble.opacity, bubble.opacity, 0],
            scale: [0.4, 1, 1.15],
            x: [0, bubble.moveX, -bubble.moveX / 2, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            repeatType: "loop",
            delay: bubble.delay,
            ease: "linear",
          }}
          className="
            absolute
            rounded-full
            border
            border-cyan-100/30
            bg-gradient-to-br
            from-white/25
            via-cyan-200/15
            to-cyan-400/5
            backdrop-blur-md
            shadow-[0_0_25px_rgba(103,232,249,0.35)]
          "
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: "-40px",
          }}
        >
          {/* INNER HIGHLIGHT */}
          <div
            className="
              absolute
              top-[18%]
              left-[22%]
              w-[22%]
              h-[22%]
              rounded-full
              bg-white/70
              blur-[1px]
            "
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
