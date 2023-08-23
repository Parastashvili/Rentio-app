import React from "react";
import { Route, Routes } from "react-router-dom";
import Subcategory from "./Subcategory";
import Product from "./Product";

const Tools = () => {
  return (
    <Routes>
      <Route path=":subcategoryId/*" element={<Subcategory />} />
      <Route path="/" element={<Product />} />
    </Routes>
  );
};

export default Tools;
