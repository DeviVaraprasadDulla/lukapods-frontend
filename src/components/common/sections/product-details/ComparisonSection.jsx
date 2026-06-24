import { motion } from "framer-motion";

import { Check, X, Sparkles } from "lucide-react";

const rows = [
  {
    feature: "Deep Cleaning",
    luka: true,
    liquid: true,
    powder: false,
  },
  {
    feature: "Fabric Protection",
    luka: true,
    liquid: false,
    powder: false,
  },
  {
    feature: "Long Lasting Fragrance",
    luka: true,
    liquid: true,
    powder: false,
  },
  {
    feature: "Mess Free Usage",
    luka: true,
    liquid: false,
    powder: false,
  },
];

const ComparisonSection = () => {
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

          max-w-7xl
          mx-auto

          px-5
          sm:px-6
          lg:px-10
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
            <Sparkles size={14} className="text-cyan-500" />

            <span
              className="
                text-xs
                font-semibold
                uppercase

                tracking-[2px]

                text-slate-600
              "
            >
              Product Comparison
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
            Why Choose
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
              Luka Pods
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
            Compare Luka Pods with traditional laundry solutions and discover
            the premium difference.
          </p>
        </motion.div>

        {/* DESKTOP TABLE */}

        <motion.div
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
          className="
            hidden
            md:block

            mt-14

            overflow-hidden

            rounded-[36px]

            border
            border-white/30

            bg-white/70

            backdrop-blur-2xl

            shadow-[0_30px_80px_rgba(15,23,42,0.08)]
          "
        >
          <table className="w-full">
            <thead>
              <tr
                className="
                  border-b
                  border-slate-200
                "
              >
                <th
                  className="
                    p-7
                    text-left
                    text-slate-800
                  "
                >
                  Features
                </th>

                <th className="text-cyan-600 font-bold">Luka Pods</th>

                <th className="text-slate-500">Liquid</th>

                <th className="text-slate-500">Powder</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.feature}
                  className="
                    border-b
                    border-slate-100

                    hover:bg-cyan-50/50

                    transition-all
                  "
                >
                  <td
                    className="
                      p-7
                      font-semibold
                      text-slate-800
                    "
                  >
                    {row.feature}
                  </td>

                  <td className="text-center">
                    {row.luka ? (
                      <Check
                        className="
                          mx-auto
                          text-emerald-500
                        "
                      />
                    ) : (
                      <X
                        className="
                          mx-auto
                          text-red-400
                        "
                      />
                    )}
                  </td>

                  <td className="text-center">
                    {row.liquid ? (
                      <Check
                        className="
                          mx-auto
                          text-emerald-500
                        "
                      />
                    ) : (
                      <X
                        className="
                          mx-auto
                          text-red-400
                        "
                      />
                    )}
                  </td>

                  <td className="text-center">
                    {row.powder ? (
                      <Check
                        className="
                          mx-auto
                          text-emerald-500
                        "
                      />
                    ) : (
                      <X
                        className="
                          mx-auto
                          text-red-400
                        "
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* MOBILE VERSION */}

        <div
          className="
            md:hidden
            mt-12
            space-y-4
          "
        >
          {rows.map((row) => (
            <motion.div
              key={row.feature}
              whileHover={{
                y: -4,
              }}
              className="
                rounded-[28px]

                border
                border-white/30

                bg-white/80

                backdrop-blur-xl

                p-5

                shadow-lg
              "
            >
              <h3
                className="
                  font-bold
                  text-lg

                  text-slate-800
                "
              >
                {row.feature}
              </h3>

              <div
                className="
                  mt-4

                  grid
                  grid-cols-3

                  gap-4
                "
              >
                <div className="text-center">
                  <p
                    className="
                      text-xs
                      text-cyan-600
                      font-semibold
                    "
                  >
                    Luka
                  </p>

                  {row.luka ? (
                    <Check
                      className="
                        mx-auto
                        mt-2
                        text-emerald-500
                      "
                    />
                  ) : (
                    <X
                      className="
                        mx-auto
                        mt-2
                        text-red-400
                      "
                    />
                  )}
                </div>

                <div className="text-center">
                  <p
                    className="
                      text-xs
                      text-slate-500
                      font-semibold
                    "
                  >
                    Liquid
                  </p>

                  {row.liquid ? (
                    <Check
                      className="
                        mx-auto
                        mt-2
                        text-emerald-500
                      "
                    />
                  ) : (
                    <X
                      className="
                        mx-auto
                        mt-2
                        text-red-400
                      "
                    />
                  )}
                </div>

                <div className="text-center">
                  <p
                    className="
                      text-xs
                      text-slate-500
                      font-semibold
                    "
                  >
                    Powder
                  </p>

                  {row.powder ? (
                    <Check
                      className="
                        mx-auto
                        mt-2
                        text-emerald-500
                      "
                    />
                  ) : (
                    <X
                      className="
                        mx-auto
                        mt-2
                        text-red-400
                      "
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
