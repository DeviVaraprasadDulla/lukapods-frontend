import { CalendarDays, Eye } from "lucide-react";
import { motion } from "framer-motion";

const BlogMetaInfo = ({ createdAt, views, dark = false, className = "" }) => {
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "May 26, 2026";

  return (
    <div
      className={`
        flex flex-wrap items-center gap-4
        ${className}
      `}
    >
      {/* Date */}
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
          ${
            dark
              ? "border-white/10 bg-white/5 text-white/80"
              : "border-slate-200/80 bg-white/90 text-slate-700 shadow-[0_6px_30px_rgba(15,23,42,0.05)]"
          }
        `}
      >
        <div
          className={`
            flex h-6 w-6 items-center justify-center
            rounded-full
            ${dark ? "bg-white/10" : "bg-slate-100"}
          `}
        >
          <CalendarDays
            size={12}
            className={`
              ${dark ? "text-cyan-300" : "text-cyan-600"}
            `}
          />
        </div>

        <span
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.16em]
          "
        >
          {formattedDate}
        </span>
      </motion.div>

      {/* Views */}
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
          ${
            dark
              ? "border-white/10 bg-white/5 text-white/80"
              : "border-slate-200/80 bg-white/90 text-slate-700 shadow-[0_6px_30px_rgba(15,23,42,0.05)]"
          }
        `}
      >
        <div
          className={`
            flex h-6 w-6 items-center justify-center
            rounded-full
            ${dark ? "bg-white/10" : "bg-slate-100"}
          `}
        >
          <Eye
            size={12}
            className={`
              ${dark ? "text-cyan-300" : "text-cyan-600"}
            `}
          />
        </div>

        <span
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.16em]
          "
        >
          {views || 0} Views
        </span>
      </motion.div>
    </div>
  );
};

export default BlogMetaInfo;
