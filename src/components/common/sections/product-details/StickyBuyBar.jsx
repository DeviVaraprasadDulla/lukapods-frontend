import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { ShoppingBag, Heart } from "lucide-react";

const StickyBuyBar = ({ product, onAddToCart }) => {
  const [visible, setVisible] = useState(false);

  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: 100,
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            fixed
            bottom-4
            left-1/2
            -translate-x-1/2

            z-[9999]

            w-[95%]
            max-w-5xl
          "
        >
          <div
            className="
              rounded-2xl

              border
              border-white/40

              bg-white/90

              backdrop-blur-xl

              shadow-[0_12px_40px_rgba(15,23,42,0.12)]

              px-4
              py-3
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
              {/* LEFT */}

              <div
                className="
                  flex
                  items-center
                  gap-3

                  min-w-0
                  flex-1
                "
              >
                {/* IMAGE */}

                <img
                  src={product?.images?.[0]?.image}
                  alt={product?.name}
                  className="
                    hidden
                    sm:block

                    h-12
                    w-12

                    rounded-xl

                    object-cover

                    bg-white

                    border
                    border-slate-200

                    shrink-0
                  "
                />

                {/* INFO */}

                <div
                  className="
                    min-w-0
                  "
                >
                  <h3
                    className="
                      text-sm
                      sm:text-base

                      font-semibold

                      text-[#020817]

                      truncate
                    "
                  >
                    {product?.name}
                  </h3>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      mt-1
                    "
                  >
                    <span
                      className="
                        text-lg
                        sm:text-xl

                        font-bold

                        text-[#020817]
                      "
                    >
                      ₹{product?.price}
                    </span>

                    {product?.original_price && (
                      <span
                        className="
                          hidden
                          sm:block

                          text-sm

                          line-through

                          text-slate-400
                        "
                      >
                        ₹{product.original_price}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* RIGHT */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  shrink-0
                "
              >
                {/* WISHLIST */}

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 1.2,
                  }}
                  onClick={() => setWishlisted(!wishlisted)}
                  className="
                    h-10
                    w-10

                    rounded-full

                    border
                    border-slate-200

                    bg-white

                    flex
                    items-center
                    justify-center
                  "
                >
                  <Heart
                    size={18}
                    className={
                      wishlisted
                        ? "fill-red-500 text-red-500"
                        : "text-slate-500"
                    }
                  />
                </motion.button>

                {/* ADD TO CART */}

                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={onAddToCart}
                  className="
                    h-10

                    px-4
                    sm:px-6

                    rounded-full

                    bg-[#020817]

                    text-white

                    text-sm
                    font-medium

                    flex
                    items-center
                    gap-2

                    shadow-[0_8px_20px_rgba(2,8,23,0.18)]
                  "
                >
                  <ShoppingBag size={16} />

                  <span>Add To Cart</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBuyBar;
