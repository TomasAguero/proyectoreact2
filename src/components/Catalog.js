import React from 'react';
import Product from './Product';
import products from '../data/products';
import './Catalog.css';

const Catalog = () => {
  return (
    <div className="catalog">
      <h2>Productos Disponibles</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
