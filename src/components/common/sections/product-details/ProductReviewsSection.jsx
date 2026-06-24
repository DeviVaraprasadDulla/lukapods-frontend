import { motion } from "framer-motion";
import { Star, MessageSquare, ShieldCheck } from "lucide-react";

const ProductReviewsSection = ({ reviews = [] }) => {
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, review) => acc + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "5.0";

  return (
    <section
      className="
        relative
        py-20
        overflow-hidden
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[350px]
          bg-cyan-200/20
          blur-[180px]
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
            <MessageSquare size={14} className="text-cyan-500" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[2px]
                text-slate-600
              "
            >
              Customer Reviews
            </span>
          </div>

          <h2
            className="
              mt-5
              text-[34px]
              sm:text-[48px]
              leading-[1]
              font-black
              tracking-[-2px]
              text-[#020817]
            "
          >
            What Customers
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
              Are Saying
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-slate-500
              text-sm
              sm:text-base
            "
          >
            Trusted by customers who value premium cleaning, fabric protection
            and long-lasting freshness.
          </p>
        </motion.div>

        {/* SUMMARY */}

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
          className="
            mt-12
            grid
            lg:grid-cols-2
            gap-6
          "
        >
          {/* LEFT */}

          <div
            className="
              rounded-[28px]
              border
              border-white/30
              bg-white/70
              backdrop-blur-2xl
              p-7
              shadow-[0_20px_60px_rgba(15,23,42,0.06)]
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <h3
                className="
                  text-5xl
                  font-black
                  text-[#020817]
                "
              >
                {averageRating}
              </h3>

              <div>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="
                          fill-yellow-400
                          text-yellow-400
                        "
                    />
                  ))}
                </div>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-500
                  "
                >
                  Based on {reviews.length || 1} review
                  {reviews.length > 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              rounded-[28px]
              border
              border-white/30
              bg-white/70
              backdrop-blur-2xl
              p-7
              shadow-[0_20px_60px_rgba(15,23,42,0.06)]
            "
          >
            <div
              className="
                flex
                justify-between
                items-center
              "
            >
              <div>
                <h4
                  className="
                    text-xl
                    font-bold
                    text-[#020817]
                  "
                >
                  Verified Buyers
                </h4>

                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Real customer feedback
                </p>
              </div>

              <ShieldCheck
                className="
                  text-cyan-500
                "
                size={28}
              />
            </div>
          </div>
        </motion.div>

        {/* REVIEWS */}

        <div
          className="
            mt-10
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {(reviews.length
            ? reviews
            : [
                {
                  id: 1,
                  name: "Verified Customer",
                  rating: 5,
                  comment:
                    "Excellent cleaning performance and long lasting freshness.",
                },
              ]
          ).map((review, index) => (
            <motion.div
              key={review.id}
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
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                  rounded-[28px]
                  border
                  border-white/30
                  bg-white/70
                  backdrop-blur-2xl
                  p-6
                  shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                "
            >
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="
                          fill-yellow-400
                          text-yellow-400
                        "
                  />
                ))}
              </div>

              <p
                className="
                    mt-4
                    text-sm
                    leading-7
                    text-slate-600
                  "
              >
                "{review.comment}"
              </p>

              <div
                className="
                    mt-5
                    flex
                    items-center
                    gap-3
                  "
              >
                <div
                  className="
                      h-10
                      w-10
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-500
                      to-sky-500
                      flex
                      items-center
                      justify-center
                      text-white
                      font-bold
                    "
                >
                  {review.name?.charAt(0)}
                </div>

                <div>
                  <h4
                    className="
                        font-semibold
                        text-[#020817]
                      "
                  >
                    {review.name}
                  </h4>

                  <p
                    className="
                        text-xs
                        text-emerald-600
                        font-medium
                      "
                  >
                    ✓ Verified Buyer
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductReviewsSection;
