import ProductsHeroSection from "@/components/sections/products/ProductsHeroSection";
import ProductsGridSection from "@/components/sections/products/ProductsGridSection";

const Products = () => {
  return (
    <main className="min-h-screen bg-[#edf3f8]">
      <ProductsGridSection />
      <ProductsHeroSection />
    </main>
  );
};

export default Products;
