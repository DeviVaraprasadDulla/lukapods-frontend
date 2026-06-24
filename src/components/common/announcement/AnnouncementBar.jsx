import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Sparkles, X } from "lucide-react";

import { getAnnouncements } from "@/api/settingsApi";

const AnnouncementBar = () => {
  const [announcements, setAnnouncements] = useState([]);

  const [loading, setLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isHidden, setIsHidden] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | FETCH ANNOUNCEMENTS
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const data = await getAnnouncements();

        setAnnouncements(data);
      } catch (error) {
        console.error("Announcement fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  /*
  |--------------------------------------------------------------------------
  | AUTO CHANGE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (announcements.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === announcements.length - 1 ? 0 : prev + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [announcements]);

  /*
  |--------------------------------------------------------------------------
  | HIDE ON SCROLL
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleScroll = () => {
      setIsHidden(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | LOADING / EMPTY
  |--------------------------------------------------------------------------
  */

  if (loading || announcements.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 1,
      }}
      animate={{
        y: isHidden ? -80 : 0,
        opacity: isHidden ? 0 : 1,
        pointerEvents: isHidden ? "none" : "auto",
      }}
      transition={{
        duration: 0.45,
        ease: "easeInOut",
      }}
      className="
        fixed
        top-0
        left-0

        w-full

        z-[1000]

        overflow-hidden

        border-b
        border-slate-200/70

        bg-white/78

        backdrop-blur-2xl
      "
    >
      {/* PREMIUM RED LINE */}
      <div
        className="
          absolute
          top-0
          left-0

          h-[2px]
          w-full

          bg-gradient-to-r
          from-transparent
          via-[#e50913]
          to-transparent
        "
      />

      {/* LIGHT EFFECT */}
      <motion.div
        animate={{
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          pointer-events-none

          absolute
          inset-0

          bg-gradient-to-r
          from-transparent
          via-sky-100/40
          to-transparent
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative

          flex
          items-center
          justify-center

          h-[42px]
          sm:h-[46px]

          px-12
          sm:px-16
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{
              opacity: 0,
              y: 8,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -8,
              filter: "blur(6px)",
            }}
            transition={{
              duration: 0.45,
            }}
            className="
              absolute

              flex
              items-center

              gap-3
              sm:gap-4

              max-w-[95%]
            "
          >
            {/* ICON */}
            <motion.div
              animate={{
                rotate: [0, 8, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                shrink-0

                flex
                items-center
                justify-center

                h-5
                w-5

                rounded-full

                bg-[#fff1f2]

                text-[#e50913]

                shadow-[0_0_12px_rgba(229,9,19,0.18)]
              "
            >
              <Sparkles size={11} />
            </motion.div>

            {/* TEXT */}
            <p
              className="
                truncate

                text-center

                text-[11px]
                sm:text-[13px]

                font-medium

                tracking-[0.3px]

                text-slate-700
              "
            >
              {announcements[currentIndex]?.message}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* CLOSE BUTTON */}
        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.94,
          }}
          onClick={() => setIsHidden(true)}
          className="
            absolute
            right-3
            sm:right-4

            flex
            items-center
            justify-center

            h-7
            w-7

            rounded-full

            border
            border-slate-200/70

            bg-white/70

            text-slate-500

            backdrop-blur-xl

            transition-all
            duration-300

            hover:border-red-200
            hover:bg-red-50
            hover:text-red-500
          "
        >
          <X size={14} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;
