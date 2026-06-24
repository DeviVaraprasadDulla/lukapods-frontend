import { motion } from "framer-motion";

const ContactInfoCard = ({
  icon,
  title,
  value,
}) => {
  const Icon = icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
        rounded-[2rem]
        border
        border-white/10
        bg-white/[0.5]
        p-7
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(15,23,42,0.08)]
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-cyan-400
          to-blue-500
          text-white
        "
      >
        <Icon size={24} />
      </div>

      <h3
        className="
          mt-6
          text-lg
          font-black
          text-slate-900
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          text-slate-600
          leading-[1.8]
        "
      >
        {value}
      </p>
    </motion.div>
  );
};

export default ContactInfoCard;