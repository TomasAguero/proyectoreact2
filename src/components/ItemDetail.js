import React from 'react';
import AddItemButton from './AddItemButton';


const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <div className="item-image">
        <img src={product.image} alt={product.name} />
      </div>
      <h2 className="item-name">{product.name}</h2>
      <p className="item-description">{product.description}</p>
      <p className="item-price">Precio: ${product.price.toFixed(2)}</p>
      <AddItemButton product={product} />
    </div>
  );
};

export default ItemDetail;
