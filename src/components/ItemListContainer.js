// src/components/ItemListContainer.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductsByCategory } from './mocks'; 

function ItemListContainer() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productList = id ? getProductsByCategory(id) : getAllProducts();
    setProducts(productList);
  }, [id]);


  function getAllProducts() {

    return [];
  }

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/item/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;


