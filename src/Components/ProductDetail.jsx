import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();

  const product = {
    id: productId,
    name: `Product ${productId}`,
    description: 'Product description goes here',
  };

  return (
    <div>
      <h1>Product Detail</h1>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;