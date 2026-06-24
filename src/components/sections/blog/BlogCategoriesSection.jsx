import { motion } from "framer-motion";
import { Compass, FlaskConical, Globe2, Sparkles, Rocket } from "lucide-react";

const categories = [
  {
    title: "Innovation",
    icon: Sparkles,
    count: "12 Articles",
    description:
      "Product innovation, premium experiences, and startup thinking.",
  },
  {
    title: "Formulation",
    icon: FlaskConical,
    count: "8 Articles",
    description: "Behind-the-scenes formulation science and R&D insights.",
  },
  {
    title: "Global Journey",
    icon: Globe2,
    count: "5 Articles",
    description: "Experiences from Guangzhou, networking, and global learning.",
  },
  {
    title: "Entrepreneurship",
    icon: Rocket,
    count: "9 Articles",
    description: "Founder lessons, execution mindset, and scaling ideas.",
  },
  {
    title: "Product Vision",
    icon: Compass,
    count: "6 Articles",
    description: "Design philosophy and creating meaningful premium products.",
  },
];

const BlogCategoriesSection = () => {
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
            left-[10%]
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
            right-[5%]
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
                Explore Categories
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
              Topics That
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
                Define Luka
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
            "
          >
            Discover curated knowledge categories covering product innovation,
            formulation science, startup execution, and global experiences.
          </p>
        </motion.div>

        {/* CATEGORY GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-7
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 40,
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
                className="
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/70
                    bg-white/70
                    p-8
                    shadow-[0_25px_80px_rgba(15,23,42,0.05)]
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_35px_100px_rgba(15,23,42,0.08)]
                  "
              >
                {/* HOVER GLOW */}
                <div
                  className="
                      absolute
                      right-[-20%]
                      top-[-20%]
                      h-40
                      w-40
                      rounded-full
                      bg-cyan-100/50
                      blur-3xl
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                />

                {/* ICON */}
                <div
                  className="
                      relative
                      z-10
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-cyan-50
                      to-sky-100
                      shadow-inner
                    "
                >
                  <Icon
                    size={28}
                    className="
                        text-cyan-700
                      "
                  />
                </div>

                {/* CONTENT */}
                <div
                  className="
                      relative
                      z-10
                      mt-8
                    "
                >
                  <div
                    className="
                        flex
                        items-center
                        justify-between
                        gap-4
                      "
                  >
                    <h3
                      className="
                          text-2xl
                          font-black
                          tracking-[-0.04em]
                          text-slate-950
                        "
                    >
                      {category.title}
                    </h3>

                    <span
                      className="
                          rounded-full
                          bg-slate-100
                          px-3
                          py-1
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-slate-500
                        "
                    >
                      {category.count}
                    </span>
                  </div>

                  <p
                    className="
                        mt-5
                        text-[15px]
                        leading-[2]
                        text-slate-500
                      "
                  >
                    {category.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogCategoriesSection;
