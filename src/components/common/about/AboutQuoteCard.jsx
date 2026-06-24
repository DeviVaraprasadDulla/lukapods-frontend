import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const AboutQuoteCard = ({ quote, description, author, dark = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`
        relative overflow-hidden
        rounded-[2rem]
        border
        backdrop-blur-xl
        p-7 sm:p-10 lg:p-12
        ${
          dark
            ? "bg-slate-950/70 border-white/10"
            : "bg-white/70 border-white/50"
        }
      `}
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-52 h-52 bg-cyan-400/10 blur-3xl rounded-full" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')]" />

      {/* Quote Icon */}
      <div
        className="
          mb-8
          inline-flex
          h-14 w-14
          items-center justify-center
          rounded-2xl
          bg-cyan-400/10
          border border-cyan-300/10
        "
      >
        <Quote size={28} className="text-cyan-400" />
      </div>

      {/* Quote */}
      <h3
        className={`
          max-w-4xl
          text-3xl sm:text-4xl lg:text-5xl
          leading-[1.08]
          tracking-[-0.04em]
          font-semibold
          ${dark ? "text-white" : "text-slate-900"}
        `}
      >
        “{quote}”
      </h3>

      {/* Description */}
      {description && (
        <p
          className={`
            mt-8
            max-w-2xl
            text-base sm:text-lg
            leading-8
            ${dark ? "text-white/65" : "text-slate-600"}
          `}
        >
          {description}
        </p>
      )}

      {/* Author */}
      {author && (
        <div
          className={`
            mt-10
            text-sm tracking-[0.25em]
            uppercase font-medium
            ${dark ? "text-cyan-300/80" : "text-cyan-700"}
          `}
        >
          — {author}
        </div>
      )}

      {/* Border glow */}
      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10 pointer-events-none" />
    </motion.div>
  );
};

export default AboutQuoteCard;
