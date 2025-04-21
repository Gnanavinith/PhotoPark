import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { FrameProvider } from "./context/frameContext"; // ✅ Import FrameProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <FrameProvider> {/* ✅ Wrap App with FrameProvider */}
      <App />
    </FrameProvider>
  </CartProvider>
);
