import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        pb-28
        lg:pb-36
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0
        "
      >
        {/* Gradient Mesh */}
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

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
            [background-size:90px_90px]
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
          className="
            relative
            overflow-hidden
            rounded-[3rem]
            border
            border-white/70
            bg-white/70
            p-8
            shadow-[0_30px_120px_rgba(15,23,42,0.08)]
            backdrop-blur-2xl
            lg:p-16
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              right-0
              top-0
              h-[320px]
              w-[320px]
              rounded-full
              bg-cyan-100/40
              blur-3xl
            "
          />

          {/* TOP BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-slate-200
              bg-white
              px-6
              py-3
              shadow-[0_15px_40px_rgba(15,23,42,0.05)]
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-cyan-100
              "
            >
              <Sparkles
                size={16}
                className="
                  text-cyan-600
                "
              />
            </div>

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-slate-700
              "
            >
              Join The Journal
            </span>
          </div>

          {/* MAIN GRID */}
          <div
            className="
              relative
              z-10
              mt-12
              grid
              gap-14
              lg:grid-cols-[1fr_420px]
              lg:items-end
            "
          >
            {/* LEFT CONTENT */}
            <div>
              <h2
                className="
                  text-5xl
                  font-black
                  leading-[0.9]
                  tracking-[-0.07em]
                  text-slate-950
                  sm:text-6xl
                  lg:text-[6.5rem]
                "
              >
                Stay Ahead
                <br />
                <span
                  className="
                    bg-gradient-to-r
                    from-cyan-500
                    via-sky-500
                    to-cyan-700
                    bg-clip-text
                    text-transparent
                  "
                >
                  Of Innovation
                </span>
              </h2>

              <p
                className="
                  mt-10
                  max-w-2xl
                  text-[17px]
                  leading-[2]
                  text-slate-600
                "
              >
                Receive premium insights into product innovation, formulation
                science, startup journeys, and modern consumer experiences from
                Luka Home Essentials.
              </p>

              {/* FEATURES */}
              <div
                className="
                  mt-12
                  flex
                  flex-wrap
                  gap-4
                "
              >
                {[
                  "Weekly Insights",
                  "Premium Research",
                  "Innovation Stories",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-white
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-slate-700
                      shadow-sm
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CARD */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2.5rem]
                bg-slate-950
                p-8
                shadow-[0_30px_100px_rgba(15,23,42,0.2)]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-48
                  w-48
                  rounded-full
                  bg-cyan-500/10
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  z-10
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/10
                    backdrop-blur-xl
                  "
                >
                  <Mail
                    size={28}
                    className="
                      text-cyan-300
                    "
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-8
                    text-4xl
                    font-black
                    leading-[1]
                    tracking-[-0.05em]
                    text-white
                  "
                >
                  Subscribe
                  <br />
                  To Luka
                  <span
                    className="
                      block
                      text-cyan-400
                    "
                  >
                    Journal
                  </span>
                </h3>

                <p
                  className="
                    mt-6
                    text-[15px]
                    leading-[2]
                    text-white/70
                  "
                >
                  Curated stories and innovation insights delivered directly to
                  your inbox.
                </p>

                {/* FORM */}
                <div
                  className="
                    mt-10
                    space-y-4
                  "
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                      h-16
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-6
                      text-white
                      outline-none
                      backdrop-blur-xl
                      placeholder:text-white/40
                    "
                  />

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      group
                      flex
                      h-16
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-2xl
                      bg-cyan-400
                      text-sm
                      font-bold
                      text-slate-950
                      shadow-[0_20px_50px_rgba(34,211,238,0.24)]
                    "
                  >
                    Subscribe Now
                    <ArrowRight
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </motion.button>
                </div>

                {/* FOOTER */}
                <p
                  className="
                    mt-5
                    text-xs
                    leading-6
                    text-white/40
                  "
                >
                  No spam. Only premium insights and innovation stories.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
