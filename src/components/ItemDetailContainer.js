// src/components/ItemDetailContainer.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from './mocks'; 

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {

    const productDetail = getProductById(id);
    setProduct(productDetail);
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>Categoría: {product.category}</p>
          <p>Descripción: {product.description}</p>
          <p>Precio: ${product.price}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
