import { motion } from "framer-motion";

import ContactSectionBadge from "@/components/common/contact/ContactSectionBadge";

import FloatingContactOrb from "@/components/common/contact/FloatingContactOrb";

const ContactHeroSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        pb-24
        pt-36
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_40%)]
        "
      />

      <FloatingContactOrb
        className="
          left-0
          top-20
          h-72
          w-72
        "
      />

      <FloatingContactOrb
        className="
          bottom-0
          right-0
          h-80
          w-80
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          text-center
        "
      >
        <ContactSectionBadge text="Contact Luka" />

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            mt-8
            max-w-5xl
            text-5xl
            font-black
            leading-[0.95]
            tracking-[-0.08em]
            text-slate-950
            md:text-7xl
          "
        >
          Let's Build The Future Of
          <span
            className="
              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-indigo-600
              bg-clip-text
              text-transparent
            "
          >
            {" "}
            Premium Living
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-10
            max-w-3xl
            text-lg
            leading-[2]
            text-slate-600
          "
        >
          Whether you're interested in
          collaboration, innovation,
          retail partnerships, or
          premium product experiences —
          we'd love to hear from you.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactHeroSection;