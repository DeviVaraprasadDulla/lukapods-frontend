import { motion } from "framer-motion";

const AboutSectionBadge = ({ text = "LUKA EXPERIENCE", dark = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`
        inline-flex items-center gap-3
        px-5 py-3
        rounded-full
        border
        backdrop-blur-xl
        relative overflow-hidden
        ${dark ? "bg-white/10 border-white/10" : "bg-white/70 border-white/60"}
      `}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
      </span>

      <span
        className={`
          text-[11px] sm:text-xs
          tracking-[0.28em]
          font-semibold
          uppercase
          ${dark ? "text-white/80" : "text-slate-600"}
        `}
      >
        {text}
      </span>

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-300/10 to-cyan-400/0 translate-x-[-100%] animate-[shimmer_4s_linear_infinite]" />
    </motion.div>
  );
};

export default AboutSectionBadge;
