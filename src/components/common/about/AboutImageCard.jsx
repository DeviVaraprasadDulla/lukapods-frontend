import { motion } from "framer-motion";

const AboutImageCard = ({
  image,
  alt,
  className = "",
  overlay = true,
  children,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5 }}
      className={`
        group relative overflow-hidden
        rounded-[2rem]
        border border-white/40
        bg-white/40
        shadow-[0_20px_80px_rgba(15,23,42,0.08)]
        backdrop-blur-sm
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-10" />

      <motion.img
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 1.2 }}
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
      />

      {overlay && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/10 to-transparent z-20" />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 z-20">
            <div className="absolute inset-0 bg-cyan-400/5" />
          </div>
        </>
      )}

      <div className="absolute inset-0 z-30">
        {children}
      </div>

      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/30 pointer-events-none z-40" />
    </motion.div>
  );
};

export default AboutImageCard;