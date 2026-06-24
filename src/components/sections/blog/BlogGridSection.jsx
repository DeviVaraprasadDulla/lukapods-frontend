import { motion } from "framer-motion";

import BlogCard from "@/components/common/blog/BlogCard";

const BlogGridSection = ({ blogs = [] }) => {
  if (!blogs.length) return null;

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
            left-0
            top-20
            h-[320px]
            w-[320px]
            rounded-full
            bg-cyan-100/30
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-10
            h-[320px]
            w-[320px]
            rounded-full
            bg-sky-100/30
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
        {/* HEADER */}
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
            mb-16
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
                bg-white/75
                px-5
                py-2.5
                backdrop-blur-xl
                shadow-[0_15px_40px_rgba(15,23,42,0.05)]
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
                Latest Articles
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
              Premium
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-cyan-500
                  via-sky-500
                  to-cyan-700
                  bg-clip-text
                  text-transparent
                "
              >
                Knowledge Hub
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div
            className="
              max-w-xl
            "
          >
            <p
              className="
                text-[15px]
                leading-[2]
                text-slate-500
              "
            >
              Explore product development stories, formulation insights, startup
              lessons, and innovation experiences from Luka Home Essentials.
            </p>
          </div>
        </motion.div>

        {/* BLOG GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={blog?.id || index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGridSection;
