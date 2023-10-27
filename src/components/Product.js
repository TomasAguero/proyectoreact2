import React from 'react';
import AddItemButton from './AddItemButton';

const Product = ({ product }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Precio: ${product.price.toFixed(2)}</p>
      <AddItemButton product={product} />
    </div>
  );
};

export default Product;
