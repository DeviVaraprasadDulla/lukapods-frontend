import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const MouseGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    damping: 40,
    stiffness: 120,
  });

  const smoothY = useSpring(mouseY, {
    damping: 40,
    stiffness: 120,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="
        fixed
        top-0
        left-0
        z-0
        w-[400px]
        h-[400px]
        rounded-full
        pointer-events-none
        bg-cyan-400/20
        blur-[120px]
      "
    />
  );
};

export default MouseGlow;
