import { motion } from "framer-motion";

import { Plus, Minus, Trash2 } from "lucide-react";

import { useCart } from "@/context/CartContext";

const CartItemCard = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <motion.div
      layout
      whileHover={{
        y: -2,
      }}
      className="
        rounded-[28px]

        border
        border-slate-200

        bg-white/80

        backdrop-blur-xl

        p-4

        shadow-[0_10px_30px_rgba(15,23,42,0.05)]
      "
    >
      <div
        className="
          flex
          gap-4
        "
      >
        {/* IMAGE */}

        <div
          className="
            h-20
            w-20

            rounded-2xl

            overflow-hidden

            bg-slate-50

            border
            border-slate-100

            shrink-0
          "
        >
          <img
            src={item.product_image}
            alt={item.product_name}
            className="
              h-full
              w-full

              object-cover
            "
          />
        </div>

        {/* CONTENT */}

        <div className="flex-1">
          <h3
            className="
              text-sm
              font-semibold

              text-slate-900

              line-clamp-2
            "
          >
            {item.product_name}
          </h3>

          <div
            className="
              mt-2

              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                text-lg
                font-black

                text-[#020817]
              "
            >
              ₹{item.product_price}
            </span>

            <button
              onClick={() => removeItem(item.id)}
              className="
                h-8
                w-8

                rounded-full

                flex
                items-center
                justify-center

                text-red-500

                hover:bg-red-50
              "
            >
              <Trash2 size={16} />
            </button>
          </div>

          {/* QUANTITY */}

          <div
            className="
              mt-4

              flex
              items-center
              justify-between
            "
          >
            <div
              className="
                flex
                items-center

                gap-2

                rounded-full

                bg-slate-100

                p-1
              "
            >
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="
                  h-8
                  w-8

                  rounded-full

                  bg-white

                  flex
                  items-center
                  justify-center
                "
              >
                <Minus size={14} />
              </button>

              <span
                className="
                  w-8

                  text-center

                  font-semibold
                "
              >
                {item.quantity}
              </span>

              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="
                  h-8
                  w-8

                  rounded-full

                  bg-white

                  flex
                  items-center
                  justify-center
                "
              >
                <Plus size={14} />
              </button>
            </div>

            <span
              className="
                text-sm
                font-bold

                text-cyan-600
              "
            >
              ₹{item.total_price}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItemCard;
