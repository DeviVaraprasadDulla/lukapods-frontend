import api from "./axios";

/*
|--------------------------------------------------------------------------
| PRODUCTS
|--------------------------------------------------------------------------
*/

export const getProducts = async (params = {}) => {
  const response = await api.get("/products/", {
    params,
  });

  return response.data;
};

export const getFeaturedProducts = async () => {
  const response = await api.get("/products/featured/");

  return response.data;
};

// export const getProductDetails = async (slug) => {
//   const response = await api.get(`/products/${slug}/`);

//   return response.data;
// };

/*
|--------------------------------------------------------------------------
| SEARCH
|--------------------------------------------------------------------------
*/

export const searchProducts = async (query) => {
  const response = await api.get("/products/search/", {
    params: {
      q: query,
    },
  });

  return response.data;
};

/*
|--------------------------------------------------------------------------
| CATEGORIES
|--------------------------------------------------------------------------
*/

export const getCategories = async () => {
  const response = await api.get("/products/categories/");

  return response.data;
};

export const getCategoryDetails = async (slug) => {
  const response = await api.get(`/products/categories/${slug}/`);

  return response.data;
};

//
// GET PRODUCT DETAILS
//
export const getProductDetails = async (slug) => {
  const response = await api.get(`/products/${slug}/`);

  return response.data;
};

//
// GET RELATED PRODUCTS
//
export const getRelatedProducts = async (slug) => {
  const response = await api.get(`/products/${slug}/related/`);

  return response.data;
};
