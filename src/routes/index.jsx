import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import Blogs from "@/pages/Blogs";
import BlogDetails from "@/pages/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  
]);

export default router;
