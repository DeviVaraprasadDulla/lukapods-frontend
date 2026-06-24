import { motion } from "framer-motion";

const categoryThemes = {
  innovation: {
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    text: "text-cyan-700",
    dot: "bg-cyan-500",
    glow: "shadow-[0_10px_30px_rgba(6,182,212,0.14)]",
  },

  science: {
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-700",
    dot: "bg-blue-500",
    glow: "shadow-[0_10px_30px_rgba(59,130,246,0.14)]",
  },

  sustainability: {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
    glow: "shadow-[0_10px_30px_rgba(16,185,129,0.14)]",
  },

  lifestyle: {
    bg: "bg-orange-50",
    border: "border-orange-100",
    text: "text-orange-700",
    dot: "bg-orange-500",
    glow: "shadow-[0_10px_30px_rgba(249,115,22,0.14)]",
  },

  premium: {
    bg: "bg-violet-50",
    border: "border-violet-100",
    text: "text-violet-700",
    dot: "bg-violet-500",
    glow: "shadow-[0_10px_30px_rgba(139,92,246,0.14)]",
  },

  default: {
    bg: "bg-slate-100",
    border: "border-slate-200",
    text: "text-slate-700",
    dot: "bg-slate-500",
    glow: "shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
  },
};

const BlogCategoryPill = ({
  category = "Innovation",
  dark = false,
  className = "",
}) => {
  const normalized = category?.toLowerCase?.() || "default";

  const theme = categoryThemes[normalized] || categoryThemes.default;

  return (
    <motion.div
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        inline-flex items-center gap-2
        rounded-full
        border
        px-4 py-2
        backdrop-blur-xl
        transition-all duration-300
        ${
          dark
            ? "border-white/10 bg-white/10 text-white"
            : `${theme.bg} ${theme.border} ${theme.text} ${theme.glow}`
        }
        ${className}
      `}
    >
      {/* Dot */}
      <div
        className={`
          h-2 w-2 rounded-full
          ${dark ? "bg-cyan-400" : theme.dot}
        `}
      />

      {/* Label */}
      <span
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.22em]
        "
      >
        {category}
      </span>
    </motion.div>
  );
};

export default BlogCategoryPill;
