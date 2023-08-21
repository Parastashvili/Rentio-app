import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Product from "./Terms";
const Subcategory = () => {
  const { subcategoryId } = useParams();
  return <Product render={subcategoryId} />;
};

const Tools = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path=":subcategoryId" element={<Subcategory />} />
      </Routes>
    </div>
  );
};

export default Tools;
