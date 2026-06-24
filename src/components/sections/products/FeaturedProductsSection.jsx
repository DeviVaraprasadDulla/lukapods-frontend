import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import ProductCard from "@/components/common/product/ProductCard";
import { getFeaturedProducts } from "@/api/productApi";
import { useCart } from "@/context/CartContext";

const FeaturedProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { addToCart } = useCart();

  /*
  |--------------------------------------------------------------------------
  | FETCH FEATURED PRODUCTS
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const fetchFeaturedData = async () => {
      try {
        const data = await getFeaturedProducts();

        setProducts(Array.isArray(data) ? data : data?.results || []);
      } catch (error) {
        console.error("Featured products fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedData();
  }, []);

  /*
  |--------------------------------------------------------------------------
  | QUICK ADD
  |--------------------------------------------------------------------------
  */

  const handleQuickAdd = async (product) => {
    try {
      const result = await addToCart(product.id, 1);

      if (!result.success) {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Add to cart error:", error);
    }
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-32
        bg-[#edf3f8]
      "
    >
      {/* TOP LIGHT */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[300px]
          bg-cyan-200/40
          blur-[140px]
          pointer-events-none
        "
      />

      {/* GRID TEXTURE */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
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

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-8
          "
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
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
              <div
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-cyan-500
                  shadow-[0_0_14px_rgba(6,182,212,0.45)]
                "
              />

              <span
                className="
                  text-slate-600
                  text-[11px]
                  sm:text-xs
                  font-semibold
                  uppercase
                  tracking-[2px]
                "
              >
                Featured Collection
              </span>
            </motion.div>

            <motion.h2
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
                delay: 0.1,
                duration: 0.8,
              }}
              className="
                mt-6
                text-[42px]
                sm:text-[56px]
                lg:text-[74px]
                leading-[0.95]
                tracking-[-3px]
                font-black
                text-[#020817]
              "
            >
              Premium
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-[#020817]
                  via-slate-500
                  to-slate-400
                  bg-clip-text
                  text-transparent
                "
              >
                Laundry Care
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="
                mt-6
                max-w-xl
                text-slate-500
                text-base
                sm:text-lg
                leading-relaxed
              "
            >
              Discover modern luxury detergent pods crafted for freshness, deep
              cleaning, and premium fabric protection.
            </motion.p>

            {!loading && products.length > 0 && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white/70
                    px-4
                    py-2
                    border
                    border-slate-200
                    backdrop-blur-md
                  "
              >
                <span className="font-bold text-slate-800">
                  {products.length}
                </span>

                <span className="text-slate-500 text-sm">
                  Featured Products
                </span>
              </motion.div>
            )}
          </div>

          <motion.button
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() => navigate("/products")}
            className="
              group
              relative
              overflow-hidden
              h-[58px]
              px-7
              rounded-full
              border
              border-slate-200
              bg-white/70
              backdrop-blur-2xl
              text-[#020817]
              text-sm
              font-semibold
              flex
              items-center
              gap-3
              hover:bg-white
            "
          >
            <span className="relative z-10">View All Products</span>

            <ArrowRight
              size={16}
              className="
                relative
                z-10
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </motion.button>
        </div>

        {/* PRODUCTS */}

        <div
          className={`
            mt-16
            grid
            gap-7
            ${
              products.length === 1
                ? "max-w-[430px] mx-auto grid-cols-1"
                : products.length === 2
                  ? "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
                  : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
            }
          `}
        >
          {loading
            ? [...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="
                    h-[620px]
                    rounded-[32px]
                    border
                    border-slate-200
                    bg-white/60
                    animate-pulse
                  "
                />
              ))
            : products.map((product, index) => (
                <motion.div
                  key={product.id}
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
                  transition={{
                    delay: index * 0.1,
                    duration: 0.7,
                  }}
                >
                  <ProductCard
                    product={product}
                    onNavigate={() => navigate(`/products/${product.slug}`)}
                    onQuickAdd={() => handleQuickAdd(product)}
                  />
                </motion.div>
              ))}

          {!loading && products.length === 0 && (
            <div className="col-span-full text-center py-20">
              <h3 className="text-2xl font-bold text-slate-700">
                No Products Found
              </h3>

              <p className="mt-3 text-slate-500">
                Products will appear here soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
