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
import Login from "@/pages/Login";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Payment from "@/pages/Payment";
import PaymentSuccess from "@/pages/PaymentSuccess";
import MyOrders from "@/pages/MyOrders";
import Account from "@/pages/Account";

import RefundPolicy from "./pages/legal/RefundPolicy";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import Terms from "./pages/legal/Terms";
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
          <Route path="/login" element={<Login />} />
          <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
                path="/payment"
                element={
                  <ProtectedRoute>
                    <Payment />
                  </ProtectedRoute>
                }
              />
              <Route
                  path="/payment-success"
                  element={
                    <ProtectedRoute>
                      <PaymentSuccess />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/my-orders"
                  element={
                    <ProtectedRoute>
                      <MyOrders />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/account"
                  element={
                    <ProtectedRoute>
                      <Account />
                    </ProtectedRoute>
                  }
                />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
