

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';
import products from './products'; 

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {

    const foundProduct = products.find((product) => product.id === id);

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  return (
    <div className="item-detail-container">
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <p>El producto no se encuentra.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;


