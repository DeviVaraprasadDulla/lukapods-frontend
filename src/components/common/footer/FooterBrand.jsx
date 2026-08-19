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
            Science Simplified Laundry
          </p>

        </div>

      </div>


      {/* READY TO SIMPLIFY */}
      <h3
        className="
          mt-8
          text-[22px]
          sm:text-[24px]
          font-bold
          leading-tight
          tracking-[-0.03em]
          text-white
        "
      >
        Ready to Simplify Laundry?
      </h3>


      {/* FOUR PILLARS */}
      <p
        className="
          mt-5
          text-[13px]
          sm:text-[14px]
          leading-[1.9]
          font-medium
          text-slate-400
        "
      >
        <span className="text-slate-300">
          Powerful Cleaning
        </span>

        <span className="mx-2 text-cyan-500/60">
          ·
        </span>

        <span className="text-slate-300">
          Effortless Convenience
        </span>

        <span className="mx-2 text-cyan-500/60">
          ·
        </span>

        <span className="text-slate-300">
          Luxury Experience
        </span>

        <span className="mx-2 text-cyan-500/60">
          ·
        </span>

        <span className="text-slate-300">
          Sustainable Innovation
        </span>
      </p>

    </div>
  );
};

export default FooterBrand;