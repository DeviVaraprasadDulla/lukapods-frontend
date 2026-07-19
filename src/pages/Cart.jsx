import { motion } from "framer-motion";

import { ShoppingBag } from "lucide-react";

import { useCart } from "@/context/CartContext";

import CartItemCard from "@/components/cart/CartItemCard";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Cart = () => {
  const navigate = useNavigate();
    const { isAuthenticated } = useAuth();


  const { cartItems, cartTotal, loading } = useCart();

const handleCheckout = () => {

  console.log("Authenticated:", isAuthenticated);

  if (!isAuthenticated) {
    navigate("/login", {
      state: { from: "/checkout" },
    });
    return;
  }

  navigate("/checkout");
    setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
};

  return (
    <main
      className="
        min-h-screen
        bg-[#edf3f8]
        pt-36
        pb-24
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          fixed
          top-0
          left-1/2
          -translate-x-1/2

          w-[700px]
          h-[350px]

          bg-cyan-200/20

          blur-[160px]

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
        {/* PAGE HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            text-center
            mb-12
          "
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
            <ShoppingBag
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
              Shopping Cart
            </span>
          </div>

          <h1
            className="
              mt-6

              text-[36px]
              sm:text-[48px]
              lg:text-[56px]

              font-black

              tracking-[-2px]

              text-[#020817]
            "
          >
            Your
            <span
              className="
                block

                bg-gradient-to-r
                from-cyan-500
                to-sky-500

                bg-clip-text
                text-transparent
              "
            >
              Cart
            </span>
          </h1>

          <p
            className="
              mt-4

              text-slate-500

              max-w-xl
              mx-auto
            "
          >
            Review your selected products before proceeding to checkout.
          </p>
        </motion.div>

        {/* LOADING */}

        {loading && (
          <div
            className="
              grid
              lg:grid-cols-3
              gap-8
            "
          >
            <div
              className="
                lg:col-span-2
                space-y-4
              "
            >
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="
                      h-[140px]

                      rounded-[28px]

                      bg-white/60

                      animate-pulse
                    "
                />
              ))}
            </div>

            <div
              className="
                h-[400px]

                rounded-[32px]

                bg-white/60

                animate-pulse
              "
            />
          </div>
        )}

        {/* EMPTY */}

        {!loading && cartItems.length === 0 && (
          <div
            className="
                max-w-3xl
                mx-auto
              "
          >
           <EmptyCart onClose={closeDrawer} />
          </div>
        )}

        {/* CART CONTENT */}

        {!loading && cartItems.length > 0 && (
          <div
            className="
                grid

                lg:grid-cols-[1.6fr_0.8fr]

                gap-8
                xl:gap-10
              "
          >
            {/* ITEMS */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="
                  space-y-5
                "
            >
              {cartItems.map((item) => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </motion.div>

            {/* SUMMARY */}

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="
                  lg:sticky
                  lg:top-32

                  h-fit
                "
            >
              <CartSummary
                cartItems={cartItems}
                cartTotal={cartTotal}
                onCheckout={handleCheckout}
              />
            </motion.div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
