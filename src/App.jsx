import React from "react";
import Home from "./Home";
import Terms from "./Terms";
import Contact from "./Contact";
import Product from "./Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Product />} />
        <Route path="/:category/:categoryID" element={<Product />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
