import { useEffect, useState } from "react";

import { getFeaturedProducts } from "@/api/productApi";

const useFeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const data = await getFeaturedProducts();

      console.log("FEATURED PRODUCTS:", data);

      setProducts(data?.results || []);
    } catch (err) {
      console.error(err);

      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  };
};

export default useFeaturedProducts;
