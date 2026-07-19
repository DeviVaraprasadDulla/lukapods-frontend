import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmptyCart = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
        flex-1

        flex
        flex-col

        items-center
        justify-center

        px-6
        py-10

        text-center
      "
    >
      {/* ICON AREA */}

      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          relative
        "
      >
        {/* GLOW */}

        <div
          className="
            absolute
            inset-0

            bg-cyan-200/30

            rounded-full

            blur-3xl
          "
        />

        {/* ICON */}

        <div
          className="
            relative

            h-24
            w-24

            rounded-full

            bg-white

            border
            border-slate-200

            flex
            items-center
            justify-center

            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          "
        >
          <ShoppingBag
            size={38}
            className="
              text-cyan-500
            "
          />
        </div>
      </motion.div>

      {/* TITLE */}

      <motion.h3
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
        className="
          mt-8

          text-2xl

          font-black

          text-[#020817]
        "
      >
        Your Cart Is Empty
      </motion.h3>

      {/* DESCRIPTION */}

      <motion.p
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="
          mt-3

          max-w-sm

          text-sm

          leading-7

          text-slate-500
        "
      >
        Looks like you haven't added any premium laundry care products yet.
        Explore our collection and find the perfect pods for your laundry needs.
      </motion.p>

      {/* CTA */}

      <motion.button
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
        onClick={() => {
            onClose?.();
            navigate("/products");
          }}
        className="
          mt-8

          h-12

          px-6

          rounded-full

          bg-[#020817]

          text-white

          font-semibold

          flex
          items-center
          gap-3

          shadow-[0_10px_30px_rgba(15,23,42,0.15)]
        "
      >
        Explore Products
        <ArrowRight size={16} />
      </motion.button>

      {/* BENEFITS */}

      <div
        className="
          mt-10

          grid
          grid-cols-3

          gap-3

          w-full
        "
      >
        <div
          className="
            rounded-2xl

            bg-slate-50

            border
            border-slate-200

            p-3
          "
        >
          <p
            className="
              text-xs

              font-semibold

              text-slate-700
            "
          >
            Deep Clean
          </p>
        </div>

        <div
          className="
            rounded-2xl

            bg-slate-50

            border
            border-slate-200

            p-3
          "
        >
          <p
            className="
              text-xs

              font-semibold

              text-slate-700
            "
          >
            Fabric Care
          </p>
        </div>

        <div
          className="
            rounded-2xl

            bg-slate-50

            border
            border-slate-200

            p-3
          "
        >
          <p
            className="
              text-xs

              font-semibold

              text-slate-700
            "
          >
            Fresh Scent
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
