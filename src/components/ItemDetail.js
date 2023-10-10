import React from 'react';
import './css/ItemDetail.css';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const { id } = useParams();

  return (
    <div className="item-detail">
      <h1>Product Detail for Item {id}</h1>

    </div>
  );
}

export default ItemDetail;

