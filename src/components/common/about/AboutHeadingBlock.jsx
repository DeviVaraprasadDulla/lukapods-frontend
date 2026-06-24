import { motion } from "framer-motion";

const AboutHeadingBlock = ({
  title,
  highlight,
  description,
  center = false,
  dark = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}
    >
      <h2
        className={`
          font-black leading-[0.95]
          tracking-[-0.05em]
          text-5xl sm:text-6xl lg:text-7xl
          ${dark ? "text-white" : "text-slate-950"}
        `}
      >
        {title}

        <span
          className="
            block mt-1
            bg-gradient-to-r
            from-cyan-400
            via-sky-500
            to-teal-500
            bg-clip-text
            text-transparent
          "
        >
          {highlight}
        </span>
      </h2>

      {description && (
        <p
          className={`
            mt-8
            text-base sm:text-lg
            leading-9
            max-w-2xl
            ${center ? "mx-auto" : ""}
            ${
              dark
                ? "text-white/65"
                : "text-slate-600"
            }
          `}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default AboutHeadingBlock;