import React from 'react';
import { useCart } from './CartContext';

const AddItemButton = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
  };

  return (
    <button onClick={handleAddToCart}>Agregar al Carrito</button>
  );
};

export default AddItemButton;
