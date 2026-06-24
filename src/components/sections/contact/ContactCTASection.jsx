import { motion } from "framer-motion";

const ContactCTASection = () => {
  return (
    <section className="px-6 pb-32">
      <motion.div
        whileHover={{
          y: -4,
        }}
        className="
          relative
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-[3rem]
          bg-[#020817]
          px-10
          py-20
          text-center
        "
      >
        {/* GLOW */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[300px]
            w-[300px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/20
            blur-3xl
          "
        />

        <div className="relative z-10">
          <h2
            className="
              text-4xl
              font-black
              tracking-[-0.06em]
              text-white
              md:text-6xl
            "
          >
            Innovation Begins With
            Conversation.
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              leading-[2]
              text-slate-400
            "
          >
            Connect with Luka Home
            Essentials and discover how
            premium science-driven care
            can redefine modern living.
          </p>

          <button
            className="
              mt-10
              rounded-full
              bg-white
              px-8
              py-4
              font-bold
              text-slate-950
            "
          >
            Explore Luka
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTASection;