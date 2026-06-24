import { motion } from "framer-motion";

import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const socials = [
  {
    icon: FaInstagram,
    link: "#",
  },
  {
    icon: FaLinkedinIn,
    link: "#",
  },
  {
    icon: FaXTwitter,
    link: "#",
  },
];

const FooterSocials = () => {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social, index) => {
        const Icon = social.icon;

        return (
          <motion.a
            key={index}
            href={social.link}
            whileHover={{
              y: -5,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              text-slate-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:bg-cyan-400/10
              hover:text-cyan-300
            "
          >
            <Icon size={18} />
          </motion.a>
        );
      })}
    </div>
  );
};

export default FooterSocials;