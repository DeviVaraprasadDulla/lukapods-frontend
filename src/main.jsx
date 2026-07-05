import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "@/context/AuthContext";
import "./styles/blog-content.css";

import App from "./App";
import Providers from "./app/providers";

import { CartProvider } from "@/context/CartContext";

import { initLenis } from "@/lib/lenis";

import "./styles/globals.css";
import "./styles/theme.css";

initLenis();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
    >
      <AuthProvider>
      <Providers>
        <CartProvider>
          <App />
        </CartProvider>
      </Providers>
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);