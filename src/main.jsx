import React from "react";
import ReactDOM from "react-dom/client";

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
    <Providers>
      <CartProvider>
        <App />
      </CartProvider>
    </Providers>
  </React.StrictMode>,
);
