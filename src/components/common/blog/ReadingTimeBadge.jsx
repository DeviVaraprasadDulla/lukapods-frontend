import { Clock3 } from "lucide-react";
import { motion } from "framer-motion";

const ReadingTimeBadge = ({
  readingTime = 5,
  dark = false,
  className = "",
}) => {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        inline-flex items-center gap-2
        rounded-full
        border
        px-3.5 py-2
        backdrop-blur-xl
        transition-all duration-300
        ${dark
          ? "border-white/10 bg-white/5 text-white"
          : "border-slate-200/80 bg-white/90 text-slate-700 shadow-[0_6px_30px_rgba(15,23,42,0.06)]"
        }
        ${className}
      `}
    >
      {/* Icon */}
      <div
        className={`
          flex h-6 w-6 items-center justify-center
          rounded-full
          ${dark
            ? "bg-cyan-400/10"
            : "bg-cyan-50"
          }
        `}
      >
        <Clock3
          size={12}
          className="text-cyan-500"
        />
      </div>

      {/* Text */}
      <span
        className="
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.18em]
        "
      >
        {readingTime} Min Read
      </span>
    </motion.div>
  );
};

export default ReadingTimeBadge;