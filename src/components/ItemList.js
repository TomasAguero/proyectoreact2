import React from 'react';
import './css/ItemList.css';
import { useParams } from 'react-router-dom';

function ItemList() {
  const { id } = useParams();

  return (
    <div className="item-list">
      <h1>Category {id} Products</h1>

    </div>
  );
}

export default ItemList;

