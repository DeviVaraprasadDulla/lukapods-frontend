import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How many pods should I use per wash?",
    answer:
      "One pod is perfect for a regular laundry load. For heavily soiled clothes or larger loads, use two pods for maximum cleaning performance.",
  },
  {
    question: "Can I use Luka Pods in front-load machines?",
    answer:
      "Yes. Luka Pods are fully compatible with both front-load and top-load washing machines.",
  },
  {
    question: "Are Luka Pods safe for delicate fabrics?",
    answer:
      "Absolutely. Our advanced formula helps protect fabric fibers while delivering deep cleaning performance.",
  },
  {
    question: "Do the pods dissolve completely?",
    answer:
      "Yes. Luka Pods dissolve quickly in water without leaving any residue behind.",
  },
  {
    question: "Do Luka Pods contain bleach?",
    answer:
      "No. Luka Pods are formulated to clean effectively while being gentle on fabrics and colors.",
  },
];

const FAQSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      className="
        relative
        py-24
        overflow-hidden
      "
    >
      {/* PREMIUM GLOW */}

      <div
        className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2

          w-[500px]
          h-[500px]

          bg-cyan-200/20

          rounded-full

          blur-[140px]

          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10

          max-w-5xl
          mx-auto

          px-5
          sm:px-6
        "
      >
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2

              px-4
              py-2

              rounded-full

              border
              border-slate-200

              bg-white/70

              backdrop-blur-xl
            "
          >
            <HelpCircle
              size={14}
              className="
                text-cyan-500
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase

                tracking-[2px]

                text-slate-600
              "
            >
              Support Center
            </span>
          </div>

          <h2
            className="
              mt-6

              text-[32px]
              sm:text-[42px]
              lg:text-[48px]

              leading-[1]

              font-black

              tracking-[-2px]

              text-[#020817]
            "
          >
            Frequently Asked
            <br />
            <span
              className="
                bg-gradient-to-r
                from-cyan-500
                to-sky-500

                bg-clip-text
                text-transparent
              "
            >
              Questions
            </span>
          </h2>

          <p
            className="
              mt-5

              max-w-2xl
              mx-auto

              text-slate-500

              leading-relaxed
            "
          >
            Everything you need to know about Luka Pods, product usage, laundry
            care and cleaning performance.
          </p>
        </motion.div>

        {/* FAQ LIST */}

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -2,
                }}
                className="
                    overflow-hidden

                    rounded-[28px]

                    border
                    border-white/30

                    bg-white/70

                    backdrop-blur-2xl

                    shadow-[0_15px_40px_rgba(15,23,42,0.05)]
                  "
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="
                      flex
                      w-full
                      items-center
                      justify-between

                      gap-5

                      p-6
                      sm:p-7

                      text-left
                    "
                >
                  <span
                    className="
                        text-base
                        sm:text-lg

                        font-semibold

                        text-slate-800
                      "
                  >
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                        flex-shrink-0
                      "
                  >
                    {isOpen ? (
                      <Minus
                        size={20}
                        className="
                            text-cyan-500
                          "
                      />
                    ) : (
                      <Plus
                        size={20}
                        className="
                            text-slate-500
                          "
                      />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div
                        className="
                            px-6
                            sm:px-7
                            pb-7
                          "
                      >
                        <div
                          className="
                              h-px
                              bg-slate-100
                              mb-5
                            "
                        />

                        <p
                          className="
                              text-slate-500

                              leading-8
                            "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
