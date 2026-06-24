import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import BlogCategoryPill from "./BlogCategoryPill";
import ReadingTimeBadge from "./ReadingTimeBadge";
import BlogMetaInfo from "./BlogMetaInfo";

const BlogCard = ({ blog, featured = false }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
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
        duration: 0.45,
      }}
      className={`
        group relative overflow-hidden
        rounded-[2rem]
        border border-white/60
        bg-white/75
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(15,23,42,0.08)]
        transition-all duration-500
        ${featured ? "lg:grid lg:grid-cols-[1.1fr_0.9fr]" : ""}
      `}
    >
      {/* Glow */}
      <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-cyan-100/40 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* IMAGE */}
      <div
        className={`
          relative overflow-hidden
          ${featured ? "h-[420px]" : "h-[280px]"}
        `}
      >
        <img
          src={blog?.featured_image}
          alt={blog?.title}
          className="
            h-full w-full object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />

        {/* Floating Top */}
        <div className="absolute left-6 top-6 flex flex-wrap items-center gap-3">
          <BlogCategoryPill category={blog?.category?.name || "Innovation"} />

          <ReadingTimeBadge readingTime={blog?.reading_time} />
        </div>

        {/* Floating Arrow */}
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          className="
            absolute bottom-6 right-6
            flex h-14 w-14
            items-center justify-center
            rounded-2xl
            border border-white/20
            bg-white/10
            backdrop-blur-xl
          "
        >
          <ArrowUpRight size={20} className="text-white" />
        </motion.div>
      </div>

      {/* CONTENT */}
      <div
        className={`
          relative flex flex-col justify-between
          p-7 lg:p-9
        `}
      >
        <div>
          {/* Meta */}
          <BlogMetaInfo createdAt={blog?.created_at} views={blog?.views} />

          {/* Title */}
          <Link to={`/blogs/${blog?.slug}`}>
            <h2
              className={`
                mt-6
                font-black
                leading-[1]
                tracking-[-0.05em]
                text-slate-950
                transition-all duration-300
                group-hover:text-cyan-700
                ${featured ? "text-5xl" : "text-3xl"}
              `}
            >
              {blog?.title}
            </h2>
          </Link>

          {/* Description */}
          <p
            className="
              mt-6
              text-[15px]
              leading-8
              text-slate-600
            "
          >
            {blog?.short_description}
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex items-center justify-between">
          <Link
            to={`/blogs/${blog?.slug}`}
            className="
              inline-flex items-center gap-2
              text-sm font-bold
              text-cyan-700
              transition-all duration-300
              hover:gap-3
            "
          >
            Read Article
            <ArrowUpRight size={16} />
          </Link>

          {/* Decorative Line */}
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent ml-6" />
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
