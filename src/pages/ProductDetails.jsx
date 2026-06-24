import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductDetails } from "@/api/productApi";
import { useCart } from "@/context/CartContext";

import ProductHeroSection from "@/components/common/sections/product-details/ProductHeroSection";
import ProductBenefitsSection from "@/components/common/sections/product-details/ProductBenefitsSection";
import ProductSpecificationsSection from "@/components/common/sections/product-details/ProductSpecificationsSection";
import ProductReviewsSection from "@/components/common/sections/product-details/ProductReviewsSection";
import RelatedProductsSection from "@/components/common/sections/product-details/RelatedProductsSection";
import StickyBuyBar from "@/components/common/sections/product-details/StickyBuyBar";
import FAQSection from "@/components/common/sections/product-details/FAQSection";
import StorySection from "@/components/common/sections/product-details/StorySection";
import ComparisonSection from "@/components/common/sections/product-details/ComparisonSection";

const ProductDetails = () => {
  const { slug } = useParams();

  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  /*
  |--------------------------------------------------------------------------
  | ADD TO CART
  |--------------------------------------------------------------------------
  */

  const handleAddToCart = async () => {
    if (!product) return;

    const result = await addToCart(product.id, 1);

    if (!result.success) {
      console.error(result.message);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | SCROLL TO TOP
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);

  /*
  |--------------------------------------------------------------------------
  | FETCH PRODUCT
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const data = await getProductDetails(slug);

        setProduct(data);
      } catch (error) {
        console.error("Product Details Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  /*
  |--------------------------------------------------------------------------
  | LOADING STATE
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#edf3f8]
        "
      >
        <div
          className="
            h-14
            w-14
            rounded-full
            border-4
            border-cyan-500
            border-t-transparent
            animate-spin
          "
        />
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | ERROR STATE
  |--------------------------------------------------------------------------
  */

  if (!product) {
    return (
      <div
        className="
          min-h-screen
          flex
          flex-col
          items-center
          justify-center
          bg-[#edf3f8]
        "
      >
        <h2
          className="
            text-2xl
            font-bold
            text-slate-800
          "
        >
          Product Not Found
        </h2>

        <p
          className="
            mt-3
            text-slate-500
          "
        >
          The requested product could not be loaded.
        </p>
      </div>
    );
  }

  return (
    <main
      className="
        min-h-screen
        bg-[#edf3f8]
      "
    >
      {/* HERO */}

      <ProductHeroSection product={product} onAddToCart={handleAddToCart} />

      {/* BENEFITS */}

      <ProductBenefitsSection features={product.features} />

      {/* SPECIFICATIONS */}

      <ProductSpecificationsSection specifications={product.specifications} />

      {/* STORY */}

      <StorySection product={product} />

      {/* COMPARISON */}

      <ComparisonSection />

      {/* REVIEWS */}

      <ProductReviewsSection reviews={product.reviews} />

      {/* FAQ */}

      <FAQSection />

      {/* RELATED PRODUCTS */}

      <RelatedProductsSection
        slug={product.slug}
        category={product.category_name}
      />

      {/* STICKY BUY BAR */}

      <StickyBuyBar product={product} onAddToCart={handleAddToCart} />
    </main>
  );
};

export default ProductDetails;
