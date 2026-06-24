import { motion } from "framer-motion";

const particles = [
  {
    size: "w-2 h-2",
    top: "12%",
    left: "18%",
    delay: 0,
  },
  {
    size: "w-1.5 h-1.5",
    top: "22%",
    left: "72%",
    delay: 1,
  },
  {
    size: "w-2.5 h-2.5",
    top: "70%",
    left: "12%",
    delay: 2,
  },
  {
    size: "w-1.5 h-1.5",
    top: "58%",
    left: "82%",
    delay: 1.5,
  },
  {
    size: "w-3 h-3",
    top: "38%",
    left: "48%",
    delay: 0.5,
  },
];

const AboutFloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: [0.15, 0.45, 0.15],
            y: [-10, 10, -10],
            x: [-4, 4, -4],
          }}
          transition={{
            duration: 7 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
          className={`
            absolute rounded-full
            bg-cyan-300/60
            blur-[2px]
            ${particle.size}
          `}
          style={{
            top: particle.top,
            left: particle.left,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_45%)]" />
    </div>
  );
};

export default AboutFloatingParticles;