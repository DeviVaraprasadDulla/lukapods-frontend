import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import ProductCard from "@/components/common/product/ProductCard";
import useProducts from "@/hooks/useProducts";

import { useCart } from "@/context/CartContext";

const ProductsGridSection = () => {
  const { products, loading, error } = useProducts();

  const navigate = useNavigate();

  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const handleQuickAdd = async (product) => {
    const result = await addToCart(product.id, 1);

    if (!result.success) {
      alert(result.message);
      return;
    }

    console.log(`${product.name} added to cart`);
  };

  if (error) {
    return (
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-red-500">
            Failed To Load Products
          </h3>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {!loading && products.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              mb-8
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
            <span className="font-bold text-slate-800">{products.length}</span>

            <span className="text-slate-500 text-sm">
              Premium Products Available
            </span>
          </motion.div>
        )}

        <div
          className={`
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
            ? [...Array(6)].map((_, index) => (
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
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

export default ProductsGridSection;
