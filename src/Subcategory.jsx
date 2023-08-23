import React from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const Subcategory = () => {
  const { subcategoryId } = useParams();
  return <Product render={subcategoryId} />;
};

export default Subcategory;
