import React from "react";
import Home from "./Home";
import Product from "./Product";
import Terms from "./Terms";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<Product />} />
          <Route path="/tools" element={<Product />} />
          <Route path="/car-rental" element={<Product />} />
          <Route path="/homeandgarden" element={<Product />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
