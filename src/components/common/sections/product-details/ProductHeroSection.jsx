import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import {
  Heart,
  ShoppingBag,
  Star,
  ShieldCheck,
  Sparkles,
  Truck,
  Shield,
  Award,
} from "lucide-react";

const ProductHeroSection = ({ product, onAddToCart }) => {
  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || null,
  );
  const [wishlisted, setWishlisted] = useState(false);
  const [showToast, setShowToast] = useState(false);
const navigate = useNavigate();
const { cartItems} = useCart();
  const handleAddToCart = async () => {
    if (onAddToCart) {
      await onAddToCart();
    }

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };
const handleBuyNow = async () => {
  const alreadyInCart = cartItems.some(
    (item) => item.product.id === product.id
  );

  if (!alreadyInCart) {
    await onAddToCart();
  }

  navigate("/cart");
};
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-200/30 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <motion.div
              className="relative rounded-[32px] border border-white/40 bg-white/70 backdrop-blur-2xl overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
              whileHover={{ y: -4 }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage?.id}
                  src={selectedImage?.image}
                  alt={product?.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.04 }}
                  className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-contain p-5 lg:p-8"
                />
              </AnimatePresence>
            </motion.div>

            <div className="mt-5 flex gap-3 flex-wrap">
              {product?.images?.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className={`
                    h-20 w-20 rounded-2xl overflow-hidden border-2
                    transition-all duration-300 hover:scale-105 bg-white
                    ${
                      selectedImage?.id === image.id
                        ? "border-cyan-500 shadow-lg"
                        : "border-slate-200"
                    }
                  `}
                >
                  <img
                    src={image.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold">
              <ShieldCheck size={16} />
              {product?.category_name}
            </div>

            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200">
              <Sparkles size={14} className="text-cyan-500" />
              <span className="text-xs font-semibold text-slate-600">
                Best Selling Product
              </span>
            </div>

            <h1 className="mt-5 text-[32px] sm:text-[40px] lg:text-[48px] leading-none font-black tracking-[-2px] text-[#020817]">
              {product?.name}
            </h1>

            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="font-medium">4.9 Rating</span>
                <span>•</span>
                <span>{product?.review_count || 0} Reviews</span>
              </div>
            </div>

            <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-slate-500">
              {product?.short_description}
            </p>

            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <span className="text-4xl lg:text-5xl font-black text-[#020817]">
                ₹{product?.price}
              </span>

              <span className="text-xl line-through text-slate-400">
                ₹{product?.original_price}
              </span>

              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm">
                {product?.discount_percentage}% OFF
              </span>
            </div>

            <div className="mt-5 inline-flex px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
              In Stock ({product?.stock})
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                [Truck, "Free Shipping", "Across India"],
                [Shield, "Fabric Safe", "Premium Protection"],
                [Award, "Quality", "Luxury Formula"],
                [Sparkles, "Freshness", "Long Lasting"],
              ].map(([Icon, title, value]) => (
                <div
                  key={title}
                  className="p-4 rounded-2xl bg-white/70 border border-slate-200"
                >
                  <Icon size={18} className="text-cyan-500" />
                  <p className="mt-2 text-xs text-slate-500">{title}</p>
                  <p className="font-semibold text-sm">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className="
                flex-1
                min-h-[64px]
                py-5
                rounded-full
                bg-gradient-to-r
                from-[#020817]
                to-[#0f172a]
                text-white
                text-base
                font-semibold
                flex
                items-center
                justify-center
                gap-3
              "
              >
                <ShoppingBag size={18} />
                Add To Cart
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleBuyNow}
                className="
                  flex-1
                  min-h-[64px]
                  py-5
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-cyan-600
                  text-white
                  text-base
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <Sparkles size={18} />
                Buy Now
              </motion.button>

              <motion.button
                whileTap={{ scale: 1.4, rotate: 15 }}
                onClick={() => setWishlisted(!wishlisted)}
                className="
                  h-14
                  w-14
                  rounded-full
                  bg-white
                  border
                  border-slate-200
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <motion.div animate={wishlisted ? { scale: [1, 1.3, 1] } : {}}>
                  <Heart
                    size={20}
                    className={
                      wishlisted
                        ? "fill-red-500 text-red-500"
                        : "text-slate-500"
                    }
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-8 right-8 z-[9999] px-5 py-3 rounded-full bg-[#020817] text-white font-semibold"
            >
              ✓ Added To Cart
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductHeroSection;
