import { motion } from "framer-motion";

import FeaturedBlogCard from "@/components/common/blog/FeaturedBlogCard";

const FeaturedBlogSection = ({ featuredBlog }) => {
  if (!featuredBlog) return null;

  return (
    <section
      className="
        relative
        pb-28
        lg:pb-36
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-cyan-100/40
            blur-3xl
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
        "
      >
        {/* SECTION TOP */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
            mb-14
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/70
                bg-white/80
                px-5
                py-2.5
                shadow-[0_15px_40px_rgba(15,23,42,0.05)]
                backdrop-blur-xl
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-cyan-400
                "
              />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-slate-700
                "
              >
                Featured Story
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                mt-7
                text-4xl
                font-black
                tracking-[-0.06em]
                text-slate-950
                sm:text-5xl
                lg:text-6xl
              "
            >
              Editor’s
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-cyan-500
                  to-sky-700
                  bg-clip-text
                  text-transparent
                "
              >
                Spotlight
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              max-w-xl
              text-[15px]
              leading-[2]
              text-slate-500
              lg:text-right
            "
          >
            Carefully selected stories from Luka’s innovation journey, product
            research, and global formulation experiences.
          </p>
        </motion.div>

        {/* FEATURED CARD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          <FeaturedBlogCard blog={featuredBlog} />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBlogSection;
