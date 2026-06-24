import { motion } from "framer-motion";

const FloatingContactOrb = ({
  className = "",
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -25, 0],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        rounded-full
        bg-cyan-400/20
        blur-3xl
        ${className}
      `}
    />
  );
};

export default FloatingContactOrb;