import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import HomePage from "@/pages/HomePage";
import About from "@/pages/About";
import Blogs from "@/pages/Blogs";
import BlogDetails from "@/pages/BlogDetails";
import Contact from "@/pages/Contact";
import Products from "@/pages/Products";
import ScrollToTop from "@/components/common/ScrollToTop";
import ProductDetails from "@/pages/ProductDetails";
// import Test from "@/pages/Test";
// import Test from "@/pages/Test";
import Cart from "@/pages/Cart";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<About />} />

          <Route path="/blogs" element={<Blogs />} />

          <Route path="/blogs/:slug" element={<BlogDetails />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/products" element={<Products />} />

          <Route path="/products/:slug" element={<ProductDetails />} />

          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
