import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import { motion } from "framer-motion";

import {
  CalendarDays,
  Clock3,
  Eye,
} from "lucide-react";

import {
  getBlogBySlug,
} from "@/services/blogService";

import BlogContentRenderer from "@/components/common/blog/BlogContentRenderer";

import BlogCategoryPill from "@/components/common/blog/BlogCategoryPill";

import ReadingTimeBadge from "@/components/common/blog/ReadingTimeBadge";

const BlogDetails = () => {
  /*
  |--------------------------------------------------------------------------
  | PARAMS
  |--------------------------------------------------------------------------
  */

  const { slug } =
    useParams();

  /*
  |--------------------------------------------------------------------------
  | STATE
  |--------------------------------------------------------------------------
  */

  const [blog, setBlog] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  /*
  |--------------------------------------------------------------------------
  | FETCH BLOG
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const fetchBlog =
      async () => {
        try {
          setLoading(true);

          const data =
            await getBlogBySlug(
              slug
            );

          setBlog(data);
        } catch (err) {
          console.error(err);

          setError(
            "Unable to load article."
          );
        } finally {
          setLoading(false);
        }
      };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#f4f8fb]
        "
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            h-16
            w-16
            rounded-full
            border-[5px]
            border-cyan-400
            border-t-transparent
          "
        />
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | ERROR
  |--------------------------------------------------------------------------
  */

  if (error || !blog) {
    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#f4f8fb]
          px-6
          text-center
        "
      >
        <div>
          <h2
            className="
              text-5xl
              font-black
              tracking-[-0.06em]
              text-slate-950
            "
          >
            Article Not Found
          </h2>

          <p
            className="
              mt-5
              text-lg
              text-slate-500
            "
          >
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <main
      className="
        relative
        overflow-hidden
        bg-[#f4f8fb]
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
            left-[-10%]
            top-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-100/40
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-[-10%]
            top-[20%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-sky-100/30
            blur-3xl
          "
        />
      </div>

      {/* HERO */}
      <section
        className="
          relative
          z-10
          pt-32
          pb-20
        "
      >
        <div
          className="
            max-w-5xl
            mx-auto
            px-6
          "
        >
          {/* CATEGORY */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <BlogCategoryPill
              category={
                blog?.category
                  ?.name
              }
            />
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.6,
            }}
            className="
              mt-8
              text-5xl
              font-black
              leading-[0.92]
              tracking-[-0.07em]
              text-slate-950
              lg:text-7xl
            "
          >
            {blog?.title}
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="
              mt-10
              max-w-4xl
              text-xl
              leading-[2]
              text-slate-500
            "
          >
            {
              blog?.short_description
            }
          </motion.p>

          {/* META */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="
              mt-12
              flex
              flex-wrap
              items-center
              gap-5
            "
          >
            {/* DATE */}
            <div
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/70
                bg-white/70
                px-5
                py-3
                backdrop-blur-xl
                shadow-sm
              "
            >
              <CalendarDays
                size={18}
                className="
                  text-cyan-600
                "
              />

              <span
                className="
                  text-sm
                  font-semibold
                  text-slate-700
                "
              >
                {new Date(
                  blog?.created_at
                ).toDateString()}
              </span>
            </div>

            {/* READING */}
            <ReadingTimeBadge
              readingTime={
                blog?.reading_time
              }
            />

            {/* VIEWS */}
            <div
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/70
                bg-white/70
                px-5
                py-3
                backdrop-blur-xl
                shadow-sm
              "
            >
              <Eye
                size={18}
                className="
                  text-cyan-600
                "
              />

              <span
                className="
                  text-sm
                  font-semibold
                  text-slate-700
                "
              >
                {blog?.views ||
                  0}{" "}
                Views
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section
        className="
          relative
          z-10
          pb-20
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              overflow-hidden
              rounded-[3rem]
              border
              border-white/70
              bg-white/60
              shadow-[0_40px_120px_rgba(15,23,42,0.08)]
              backdrop-blur-2xl
            "
          >
            <img
              src={
                blog?.featured_image
              }
              alt={blog?.title}
              className="
                h-full
                w-full
                object-cover
              "
            />
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section
        className="
          relative
          z-10
          pb-32
        "
      >
        <div
          className="
            max-w-4xl
            mx-auto
            px-6
          "
        >
          {/* ARTICLE CARD */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              rounded-[3rem]
              border
              border-white/70
              bg-white/75
              p-8
              shadow-[0_35px_120px_rgba(15,23,42,0.05)]
              backdrop-blur-2xl
              lg:p-14
            "
          >
            {/* AUTHOR */}
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-6
                border-b
                border-slate-200
                pb-10
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-5
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-cyan-400
                    to-sky-700
                    text-2xl
                    font-black
                    text-white
                  "
                >
                  B
                </div>

                <div>
                  <h4
                    className="
                      text-lg
                      font-black
                      text-slate-950
                    "
                  >
                    Bbuvhan Cheerla
                  </h4>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-slate-500
                    "
                  >
                    Founder & COO,
                    Luka Home
                    Essentials
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-slate-100
                  px-5
                  py-3
                "
              >
                <Clock3
                  size={16}
                  className="
                    text-slate-500
                  "
                />

                <span
                  className="
                    text-sm
                    font-semibold
                    text-slate-600
                  "
                >
                  {
                    blog?.reading_time
                  }{" "}
                  Min Read
                </span>
              </div>
            </div>

            {/* ARTICLE CONTENT */}
            <div
              className="
                mt-14
              "
            >
              <BlogContentRenderer
                content={
                  blog?.content
                }
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;