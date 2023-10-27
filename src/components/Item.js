
import React from 'react';
import AddItemButton from './AddItemButton';


const Item = ({ product }) => {
  return (
    <div className="item">
      <div className="item-image">
        <img src={product.image} alt={product.name} />
      </div>
      <h3 className="item-name">{product.name}</h3>
      <p className="item-price">Precio: ${product.price.toFixed(2)}</p>
      <AddItemButton product={product} />
    </div>
  );
};

export default Item;