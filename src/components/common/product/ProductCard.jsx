import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShoppingBag } from "lucide-react";

// 1. DATA PARSING LAYER (Staff Engineer Pattern: Keep JSX pure & performant)
const useProductData = (product) => {
  return useMemo(() => {
    const primaryImage = product?.primary_image || "";
    // Robust check: Only use secondary if it differs from primary and exists
    const secondaryImage =
      product?.secondary_image && product?.secondary_image !== primaryImage
        ? product.secondary_image
        : null;

    const discountPercentage = Number(product?.discount_percentage || 0);
    const hasDiscount = discountPercentage > 0;

    const formattedRating = Number(product?.average_rating || 0)
      .toFixed(1)
      .replace(".0", "");

    const isOutOfStock = Number(product?.stock || 0) <= 0;

    return {
      primaryImage,
      secondaryImage,
      hasDiscount,
      discountPercentage,
      formattedRating,
      isOutOfStock,
    };
  }, [product]);
};

const ProductCard = ({ product, onWishlistToggle, onQuickAdd, onNavigate }) => {
  const {
    primaryImage,
    secondaryImage,
    hasDiscount,
    discountPercentage,
    formattedRating,
    isOutOfStock,
  } = useProductData(product);

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      style={{ willChange: "transform" }}
      className="
        group relative overflow-hidden rounded-[32px] border border-white/70
        bg-white/80 backdrop-blur-3xl shadow-[0_16px_50px_rgba(15,23,42,0.06)]
        transition-shadow duration-500 hover:shadow-[0_35px_90px_rgba(15,23,42,0.14)]
      "
    >
      {/* AMBIENT SURFACE */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.05),transparent_60%)] pointer-events-none" />

      {/* FRAME */}
      <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/40 pointer-events-none" />

      {/* INNER CONTENT GRID */}
      <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
        {/* CARD META HEADER */}
        <header className="flex items-center justify-between gap-3 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 bg-white/80">
            <span
              className="w-1.5 h-1.5 rounded-full bg-cyan-500"
              aria-hidden="true"
            />
            <span className="text-[10px] uppercase tracking-[2px] font-semibold text-slate-500">
              {product?.category_name || "Laundry Pods"}
            </span>
          </div>

          {hasDiscount && (
            <span className="px-3 py-2 rounded-full bg-[#020817] text-white text-[10px] font-bold tracking-wide shadow-[0_8px_20px_rgba(2,8,23,0.18)]">
              {discountPercentage}% OFF
            </span>
          )}
        </header>

        {/* HERO VISUAL AREA */}
        <div className="relative mt-5 rounded-[24px] bg-gradient-to-b from-[#f8fbff] to-[#eef4fa] border border-white overflow-hidden h-[250px] sm:h-[270px] flex items-center justify-center">
          {/* Ambient glow — single, slow, restrained */}
          <div className="absolute w-[200px] h-[200px] rounded-full bg-cyan-300/15 blur-[70px] pointer-events-none transition-opacity duration-700 opacity-60 group-hover:opacity-100" />

          {/* ASSET CANVAS PACKAGING */}
          <div className="relative z-20 w-full h-full flex items-center justify-center pb-8 pointer-events-none">
            <motion.img
              whileHover={{ scale: secondaryImage ? 1 : 1.04 }}
              transition={{ duration: 0.5 }}
              src={primaryImage}
              alt={product?.name || "Product Image"}
              loading="lazy"
              className={`
                absolute h-[140px] sm:h-[160px] w-auto max-w-[180px] sm:max-w-[200px] object-contain
                drop-shadow-[0_25px_45px_rgba(15,23,42,0.16)] transition-all duration-700
                ${secondaryImage ? "opacity-100 group-hover:opacity-0 scale-100 group-hover:scale-105" : "opacity-100 group-hover:scale-105"}
              `}
            />

            {secondaryImage && (
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
                src={secondaryImage}
                alt={`${product?.name || "Product"} Alternate Detail`}
                loading="lazy"
                className="
                  absolute h-[140px] sm:h-[160px] w-auto max-w-[180px] sm:max-w-[200px] object-contain
                  drop-shadow-[0_25px_45px_rgba(15,23,42,0.16)] opacity-0 group-hover:opacity-100
                  scale-95 group-hover:scale-100 transition-all duration-700
                "
              />
            )}
          </div>

          {/* QUICK ADD — reveals on hover for a calmer resting state */}
          {!isOutOfStock && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.stopPropagation();
                onQuickAdd();
              }}
              className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                h-[44px]
                px-5
                rounded-full
                bg-[#020817]
                text-white
                text-[13px]
                font-semibold
                flex
                items-center
                gap-2
                shadow-[0_15px_40px_rgba(2,8,23,0.20)]
                whitespace-nowrap
                z-30
                opacity-0
                translate-y-3
                transition-all
                duration-400
                group-hover:opacity-100
                group-hover:translate-y-0
                focus-visible:opacity-100
                focus-visible:translate-y-0
              "
            >
              <ShoppingBag size={14} />
              Quick Add
            </motion.button>
          )}
        </div>

        {/* DETAILS CONTAINER */}
        <div className="mt-6 flex flex-col flex-grow">
          {/* RATING SUB-ROW */}
          <div className="flex items-center gap-2 flex-wrap text-slate-400 font-medium">
            <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-amber-50 border border-amber-100">
              <Star size={11} className="fill-amber-400 text-amber-400" />
              <span className="text-[11px] font-semibold text-amber-700">
                {formattedRating}
              </span>
            </div>
            <span className="text-[12px]">
              ({product?.review_count || 0} reviews)
            </span>
          </div>

          {/* PRODUCT NAME & IDENTIFICATION */}
          <h3 className="mt-3 min-h-[52px] text-[#020817] text-[20px] sm:text-[22px] leading-[1.15] font-black tracking-[-1px]">
            {product?.name}
          </h3>

          {/* DESCRIPTION CAPTURE */}
          <p className="mt-2 text-[14px] leading-7 text-slate-500 line-clamp-2">
            {product?.short_description ||
              "Premium laundry detergent options designed for eco-friendly deep fabric care."}
          </p>

          {/* FULFILLMENT & TRANSACTION BLOCK */}
          <footer className="mt-6 pt-5 border-t border-slate-100 flex items-end justify-between gap-4 w-full">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#020817] text-[30px] leading-none font-black tracking-[-2px]">
                  ₹{product?.price}
                </span>
                {hasDiscount && (
                  <span className="text-slate-400 text-sm font-medium line-through">
                    ₹{product?.original_price}
                  </span>
                )}
              </div>
              <p
                className={`mt-2 text-[11px] font-bold ${isOutOfStock ? "text-rose-600" : "text-emerald-600"}`}
              >
                {isOutOfStock ? "Out of Stock" : `In Stock (${product?.stock})`}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={onNavigate}
              aria-label={`View details for ${product?.name}`}
              className="
                w-[50px] h-[50px] rounded-full bg-[#020817]
                flex items-center justify-center text-white shadow-[0_12px_30px_rgba(2,8,23,0.18)] shrink-0
                transition-shadow duration-300 group-hover:shadow-[0_16px_36px_rgba(2,8,23,0.28)]
              "
            >
              <ArrowRight size={17} />
            </motion.button>
          </footer>
        </div>
      </div>
    </motion.article>
  );
};

export default React.memo(ProductCard);
