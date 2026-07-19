import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useCart } from "@/context/CartContext";

import CartItemCard from "./CartItemCard";
import EmptyCart from "./EmptyCart";

const CartDrawer = ({ open, onClose }) => {
  const navigate = useNavigate();

  const { cartItems, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              bg-black/30
              backdrop-blur-sm
              z-[2000]
            "
          />

          {/* DRAWER */}

          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              type: "spring",
              damping: 28,
            }}
            className="
              fixed
              top-0
              right-0

              h-screen

              w-full
              sm:w-[420px]
              lg:w-[460px]

              bg-white

              z-[2001]

              shadow-[-20px_0_50px_rgba(15,23,42,0.15)]

              flex
              flex-col
            "
          >
            {/* HEADER */}

            <div
              className="
                flex
                items-center
                justify-between

                px-6
                py-5

                border-b
                border-slate-200
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <ShoppingBag size={20} className="text-cyan-600" />

                <h2
                  className="
                    text-xl
                    font-bold
                    text-slate-900
                  "
                >
                  Shopping Cart
                </h2>
              </div>

              <button
                onClick={onClose}
                className="
                  h-10
                  w-10

                  rounded-full

                  flex
                  items-center
                  justify-center

                  hover:bg-slate-100

                  transition-all
                "
              >
                <X size={20} />
              </button>
            </div>

            {/* EMPTY STATE */}

            {cartItems.length === 0 && (
                <EmptyCart onClose={onClose} />
              )}

            {/* CART ITEMS */}

            {cartItems.length > 0 && (
              <>
                <div
                  className="
                    flex-1
                    overflow-y-auto

                    px-4
                    py-5

                    space-y-4
                  "
                >
                  {cartItems.map((item) => (
                    <CartItemCard key={item.id} item={item} />
                  ))}
                </div>

                {/* FOOTER */}

                <div
                  className="
                    border-t
                    border-slate-200

                    bg-white/80
                    backdrop-blur-xl

                    p-5
                  "
                >
                  {/* TOTAL */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between

                      mb-4
                    "
                  >
                    <span
                      className="
                        text-sm
                        text-slate-500
                      "
                    >
                      Cart Total
                    </span>

                    <span
                      className="
                        text-2xl
                        font-black

                        text-[#020817]
                      "
                    >
                      ₹{cartTotal}
                    </span>
                  </div>

                  {/* ACTIONS */}

                  <div className="space-y-3">
                    {/* VIEW CART */}

                    <motion.button
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      onClick={() => {
                        onClose();
                        navigate("/cart");
                      }}
                      className="
                        w-full
                        h-12

                        rounded-full

                        bg-[#020817]

                        text-white

                        font-semibold

                        flex
                        items-center
                        justify-center
                        gap-2

                        shadow-[0_10px_25px_rgba(15,23,42,0.15)]
                      "
                    >
                      View Cart
                      <ArrowRight size={16} />
                    </motion.button>

                    {/* CONTINUE SHOPPING */}

                    <button
                      onClick={onClose}
                      className="
                        w-full
                        h-11

                        rounded-full

                        border
                        border-slate-200

                        bg-white

                        text-slate-700

                        font-medium

                        transition-all

                        hover:bg-slate-50
                      "
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
