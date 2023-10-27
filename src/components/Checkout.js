import React, { useState } from 'react';
import { useCart } from './CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const [purchased, setPurchased] = useState(false);

  const handleRemoveFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleUpdateQuantity = (item, newQuantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: newQuantity } });
  };

  const handlePurchase = () => {
    // Agrega aquí tu lógica de compra (por ejemplo, una solicitud a una API)
    // Aquí solo simularemos la compra con una animación
    setPurchased(true);
    setTimeout(() => {
      setPurchased(false);
      // Limpia el carrito después de la compra
      dispatch({ type: 'CLEAR_CART' });
    }, 2000); // Restablece purchased después de 2 segundos
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-summary">
        <h2 className="checkout-title">Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p>Su carrito está vacío.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="checkout-item">
                <div className="checkout-item-name">{item.name}</div>
                <div className="checkout-item-quantity">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleUpdateQuantity(item, parseInt(e.target.value, 10))}
                  />
                </div>
                <div className="checkout-item-price">${(item.price * item.quantity).toFixed(2)}</div>
                <div className="checkout-item-remove" onClick={() => handleRemoveFromCart(item)}>
                  Eliminar
                </div>
              </div>
            ))}
            <div className="checkout-total">
              Total: ${calculateTotal()}
            </div>
            <button className="checkout-button" onClick={handlePurchase}>
              Comprar
            </button>
            {purchased && <p className="purchase-message">¡Compra exitosa!</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
