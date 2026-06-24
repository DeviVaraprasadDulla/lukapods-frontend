import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { getBlogs } from "@/services/blogService";

/*
|--------------------------------------------------------------------------
| SECTIONS
|--------------------------------------------------------------------------
*/

import BlogHeroSection from "@/components/sections/blog/BlogHeroSection";

import FeaturedBlogSection from "@/components/sections/blog/FeaturedBlogSection";

import BlogCategoriesSection from "@/components/sections/blog/BlogCategoriesSection";

import BlogGridSection from "@/components/sections/blog/BlogGridSection";

import NewsletterSection from "@/components/sections/blog/NewsletterSection";

/*
|--------------------------------------------------------------------------
| PAGE
|--------------------------------------------------------------------------
*/

const Blogs = () => {
  /*
  |--------------------------------------------------------------------------
  | STATE
  |--------------------------------------------------------------------------
  */

  const [blogs, setBlogs] = useState([]);

  const [featuredBlog, setFeaturedBlog] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  /*
  |--------------------------------------------------------------------------
  | FETCH BLOGS
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);

        const response = await getBlogs();

        const fetchedBlogs = response?.results || [];

        setBlogs(fetchedBlogs);

        /*
        |--------------------------------------------------------------------------
        | FEATURED BLOG
        |--------------------------------------------------------------------------
        */

        if (fetchedBlogs.length > 0) {
          setFeaturedBlog(fetchedBlogs[0]);
        }
      } catch (err) {
        console.error(err);

        setError("Unable to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  /*
  |--------------------------------------------------------------------------
  | LOADING STATE
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          overflow-hidden
          bg-[#f4f8fb]
        "
      >
        {/* BG GLOW */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[320px]
            w-[320px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-100/40
            blur-3xl
          "
        />

        {/* LOADER */}
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
            relative
            z-10
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
  | ERROR STATE
  |--------------------------------------------------------------------------
  */

  if (error) {
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
              text-4xl
              font-black
              tracking-[-0.05em]
              text-slate-900
            "
          >
            Something Went Wrong
          </h2>

          <p
            className="
              mt-5
              text-lg
              leading-relaxed
              text-slate-500
            "
          >
            {error}
          </p>
        </div>
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | EMPTY STATE
  |--------------------------------------------------------------------------
  */

  if (blogs.length === 0) {
    return (
      <div
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          overflow-hidden
          bg-[#f4f8fb]
          px-6
        "
      >
        {/* BACKGROUND */}
        <div
          className="
            absolute
            inset-0
          "
        >
          <div
            className="
              absolute
              left-[-10%]
              top-[-10%]
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
              bottom-[-10%]
              h-[420px]
              w-[420px]
              rounded-full
              bg-sky-100/40
              blur-3xl
            "
          />
        </div>

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            max-w-2xl
            text-center
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/70
              bg-white/70
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
                tracking-[0.3em]
                text-slate-700
              "
            >
              Luka Journal
            </span>
          </div>

          <h1
            className="
              mt-8
              text-5xl
              font-black
              leading-[0.9]
              tracking-[-0.07em]
              text-slate-950
              lg:text-7xl
            "
          >
            No Stories
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
              Published Yet
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-8
              max-w-xl
              text-lg
              leading-[2]
              text-slate-500
            "
          >
            Premium innovation stories, founder journeys, and product insights
            from Luka Home Essentials will appear here soon.
          </p>
        </div>
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | MAIN PAGE
  |--------------------------------------------------------------------------
  */

  return (
    <main
      className="
        relative
        overflow-hidden
        bg-[#f4f8fb]
      "
    >
      {/* HERO */}
      <BlogHeroSection />

      {/* FEATURED */}
      <FeaturedBlogSection featuredBlog={featuredBlog} />

      {/* CATEGORIES */}
      <BlogCategoriesSection />

      {/* BLOG GRID */}
      <BlogGridSection blogs={blogs.slice(1)} />

      {/* NEWSLETTER */}
      <NewsletterSection />
    </main>
  );
};

export default Blogs;
