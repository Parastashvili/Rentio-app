import React from "react";
import Home from "./Home";
import Product from "./Product";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<Product />} />
          <Route path="/car-rental" element={<Product />} />
          <Route path="/homeandgarden" element={<Product />} />
          <Route path="/terms" element={<Product />} />
          <Route path="/about" element={<Product />} />
          <Route path="/contact" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
