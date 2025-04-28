// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import HomePage from "./components/home/HomePage";
import Signup from "./components/signup/Signup";
import AboutPage from "./components/about/AboutPage";
import ProductsPage from "./components/products/ProductsPage";
import PricingPage from "./components/pricing/PricingPage";
import SupportPage from "./components/support/SupportPage";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
