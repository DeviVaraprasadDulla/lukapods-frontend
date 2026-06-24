import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import ProductCard from "@/components/common/product/ProductCard";

import { getProducts } from "@/api/productApi";

import { useNavigate } from "react-router-dom";

const RelatedProductsSection = ({ slug, category }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();

        const allProducts = data?.results || [];

        const relatedProducts = allProducts
          .filter(
            (item) => item.slug !== slug && item.category_name === category,
          )
          .slice(0, 3);

        setProducts(relatedProducts);
      } catch (error) {
        console.error("Related Products Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug, category]);

  if (!loading && products.length === 0) {
    return (
      <section className="py-24">
        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            text-center
          "
        >
          <h3
            className="
              text-2xl
              font-bold
              text-slate-700
            "
          >
            More Products Coming Soon
          </h3>

          <p
            className="
              mt-3
              text-slate-500
            "
          >
            New premium laundry care products will be available shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="
        relative
        py-24
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

          w-[600px]
          h-[300px]

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
          className="
            text-center
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
            <span
              className="
                w-2
                h-2

                rounded-full

                bg-cyan-500
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
              Discover More
            </span>
          </div>

          <h2
            className="
              mt-6

              text-[40px]
              sm:text-[56px]

              font-black

              tracking-[-2px]

              text-[#020817]
            "
          >
            You May Also
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
              Like These
            </span>
          </h2>

          <p
            className="
              mt-5

              max-w-2xl
              mx-auto

              text-lg

              leading-relaxed

              text-slate-500
            "
          >
            Explore more premium laundry care products crafted for freshness,
            fabric protection, and convenience.
          </p>
        </motion.div>

        {/* PRODUCTS GRID */}

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
                  />
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProductsSection;
