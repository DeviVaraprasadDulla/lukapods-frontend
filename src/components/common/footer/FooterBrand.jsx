import { motion } from "framer-motion";
import logo from "@/assets/logos/luka-logo.png";

const FooterBrand = () => {
  return (
    <div className="max-w-md">
      {/* LOGO */}
      <div className="flex items-center gap-4">
        {/* LOGO CARD */}
        <motion.div
          whileHover={{
            y: -3,
            scale: 1.02,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            px-5
            py-4
            backdrop-blur-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          "
        >
          {/* GLOW */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-cyan-500/5
              via-transparent
              to-sky-500/5
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          <img
            src={logo}
            alt="Luka Logo"
            className="
              relative
              z-10
              h-9
              w-auto
              object-contain
            "
          />
        </motion.div>

        {/* TEXT */}
        <div>
          <h2
            className="
              text-[28px]
              font-black
              leading-none
              tracking-[-0.06em]
              text-white
            "
          >
            Luka
          </h2>

          <p
            className="
              mt-1
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-slate-500
            "
          >
            Luxury Laundry
          </p>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p
        className="
          mt-8
          text-[15px]
          leading-[2]
          text-slate-400
        "
      >
        Luka Home Essentials is redefining modern fabric care through
        science-driven innovation, premium design, and sustainable household
        experiences crafted for the next generation of consumers.
      </p>

      {/* PREMIUM BADGE */}
      <motion.div
        whileHover={{
          y: -2,
        }}
        className="
          mt-8
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          px-5
          py-3
          backdrop-blur-2xl
          shadow-[0_10px_40px_rgba(255,255,255,0.03)]
        "
      >
        <span
          className="
            relative
            flex
            h-2.5
            w-2.5
          "
        >
          <span
            className="
              absolute
              inline-flex
              h-full
              w-full
              animate-ping
              rounded-full
              bg-cyan-400
              opacity-75
            "
          />

          <span
            className="
              relative
              inline-flex
              h-2.5
              w-2.5
              rounded-full
              bg-cyan-400
            "
          />
        </span>

        <span
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.3em]
            text-slate-300
          "
        >
          Science Driven Innovation
        </span>
      </motion.div>
    </div>
  );
};

export default FooterBrand;
