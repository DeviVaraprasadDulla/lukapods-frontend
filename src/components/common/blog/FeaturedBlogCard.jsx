import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import BlogCategoryPill from "./BlogCategoryPill";
import ReadingTimeBadge from "./ReadingTimeBadge";
import BlogMetaInfo from "./BlogMetaInfo";

const FeaturedBlogCard = ({ blog }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        group relative overflow-hidden
        rounded-[2.8rem]
        border border-white/60
        bg-white/80
        backdrop-blur-2xl
        shadow-[0_35px_120px_rgba(15,23,42,0.08)]
      "
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-cyan-100/40 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        {/* IMAGE SIDE */}
        <div className="relative h-[420px] overflow-hidden lg:h-[680px]">
          <img
            src={blog?.featured_image}
            alt={blog?.title}
            className="
              h-full w-full object-cover
              transition-transform duration-1000
              group-hover:scale-105
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/15 to-transparent" />

          {/* Top Floating */}
          <div className="absolute left-8 top-8 flex flex-wrap items-center gap-3">
            <BlogCategoryPill category={blog?.category?.name || "Innovation"} />

            <ReadingTimeBadge readingTime={blog?.reading_time} dark />
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="
                max-w-3xl
                rounded-[2rem]
                border border-white/10
                bg-white/10
                p-6 lg:p-8
                backdrop-blur-2xl
              "
            >
              <BlogMetaInfo
                createdAt={blog?.created_at}
                views={blog?.views}
                dark
              />

              <h2
                className="
                  mt-6
                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.06em]
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {blog?.title}
              </h2>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-[15px]
                  leading-8
                  text-white/75
                "
              >
                {blog?.short_description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative flex flex-col justify-between p-8 lg:p-12">
          {/* Decorative */}
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-cyan-100/40 blur-3xl" />

          {/* Small Label */}
          <div>
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-slate-200
                bg-white
                px-5 py-3
                shadow-[0_10px_30px_rgba(15,23,42,0.06)]
              "
            >
              <div className="h-2 w-2 rounded-full bg-cyan-500" />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-slate-700
                "
              >
                Featured Story
              </span>
            </div>

            {/* Huge Typography */}
            <div className="mt-10">
              <h3
                className="
                  text-5xl
                  font-black
                  leading-[0.92]
                  tracking-[-0.07em]
                  text-slate-950
                  lg:text-[5.5rem]
                "
              >
                Editorial
                <br />
                <span className="text-slate-300">thinking</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 bg-clip-text text-transparent">
                  reimagined.
                </span>
              </h3>

              <p
                className="
                  mt-8
                  max-w-xl
                  text-[16px]
                  leading-9
                  text-slate-600
                "
              >
                Premium storytelling crafted through innovation, science,
                product thinking, and globally inspired experiences.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16">
            <Link to={`/blogs/${blog?.slug}`}>
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group/button
                  inline-flex items-center gap-3
                  rounded-2xl
                  bg-slate-950
                  px-7 py-5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_20px_50px_rgba(15,23,42,0.18)]
                "
              >
                Explore Full Story
                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform duration-300
                    group-hover/button:translate-x-1
                    group-hover/button:-translate-y-1
                  "
                />
              </motion.button>
            </Link>

            {/* Bottom Line */}
            <div className="mt-10 h-[1px] w-full bg-gradient-to-r from-slate-200 via-slate-300 to-transparent" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedBlogCard;
