import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

const CartSummary = ({ cartItems = [], cartTotal = 0, onCheckout }) => {
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // const shipping = cartTotal > 999 ? 0 : 60;

  // const finalTotal = Number(cartTotal) + shipping;

  return (
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
        rounded-[32px]

        border
        border-slate-200

        bg-white/80

        backdrop-blur-2xl

        p-6

        shadow-[0_20px_60px_rgba(15,23,42,0.06)]
      "
    >
      {/* HEADER */}

      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <h3
          className="
            text-lg
            font-bold

            text-[#020817]
          "
        >
          Order Summary
        </h3>

        <span
          className="
            text-sm
            text-slate-500
          "
        >
          {itemCount} Items
        </span>
      </div>

      {/* DIVIDER */}

      <div
        className="
          my-5
          h-px
          bg-slate-200
        "
      />

      {/* SUBTOTAL */}

      <div
        className="
          flex
          items-center
          justify-between

          py-2
        "
      >
        <span
          className="
            text-slate-500
          "
        >
          Subtotal
        </span>

        <span
          className="
            font-semibold
            text-[#020817]
          "
        >
          ₹{cartTotal}
        </span>
      </div>

      {/* SHIPPING */}

      <div
        className="
          flex
          items-center
          justify-between

          py-2
        "
      >
        <span
          className="
            text-slate-500
          "
        >
          Shipping
        </span>

        <span
          className="
            font-semibold
            text-[#020817]
          "
        >
          Calculated at checkout
        </span>
      </div>

        {/*
        <div
          className="
            flex
            items-center
            justify-between

            py-2
          "
        >
          <span
            className="
              text-slate-500
            "
          >
            Savings
          </span>

          <span
            className="
              font-semibold
              text-green-600
            "
          >
            Included
          </span>
        </div>
        */}

      {/* TOTAL */}

      <div
        className="
          mt-5

          pt-5

          border-t
          border-slate-200
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-lg
              font-bold

              text-[#020817]
            "
          >
            Total
          </span>

          <span
            className="
              text-3xl
              font-black

              text-[#020817]
            "
          >
            ₹{cartTotal}
          </span>
        </div>
      </div>

      {/* TRUST BADGE */}

      <div
        className="
          mt-5

          flex
          items-center
          gap-2

          rounded-2xl

          bg-cyan-50

          p-3
        "
      >
        <ShieldCheck
          size={18}
          className="
            text-cyan-600
          "
        />

        <p
          className="
            text-xs

            text-cyan-700

            font-medium
          "
        >
          Secure checkout with premium order protection.
        </p>
      </div>

      {/* CHECKOUT BUTTON */}

      <motion.button
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        onClick={onCheckout}
        className="
          mt-6

          w-full
          h-14

          rounded-full

          bg-[#020817]

          text-white

          font-semibold

          flex
          items-center
          justify-center
          gap-3

          shadow-[0_12px_30px_rgba(15,23,42,0.18)]
        "
      >
        Proceed To Checkout
        <ArrowRight size={18} />
      </motion.button>

    </motion.div>
  );
};

export default CartSummary;
