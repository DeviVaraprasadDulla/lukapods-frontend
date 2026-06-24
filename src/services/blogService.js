import axios from "axios";

/*
|--------------------------------------------------------------------------
| AXIOS INSTANCE
|--------------------------------------------------------------------------
*/

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/blogs",
  headers: {
    "Content-Type": "application/json",
  },
});

/*
|--------------------------------------------------------------------------
| GET ALL BLOGS
|--------------------------------------------------------------------------
*/

export const getBlogs = async (page = 1, pageSize = 6) => {
  try {
    const response = await API.get(`/?page=${page}&page_size=${pageSize}`);

    return response.data;
  } catch (error) {
    console.error("BLOG FETCH ERROR:", error?.response || error);

    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| GET BLOG DETAILS
|--------------------------------------------------------------------------
*/

export const getBlogBySlug = async (slug) => {
  try {
    const response = await API.get(`/${slug}/`);

    return response.data;
  } catch (error) {
    console.error("BLOG DETAIL ERROR:", error?.response || error);

    throw error;
  }
};
