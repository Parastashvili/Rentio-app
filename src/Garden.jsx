import React from "react";
import { Route, Routes } from "react-router-dom";
import Subcategory from "./Subcategory";
import NotFound from "./NotFound"; // Your 404 component
import Product from "./Product";

const Tools = () => {
  return (
    <Routes>
      <Route path=":subcategoryId/*" element={<Subcategory />} />
      <Route path="/" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Tools;
