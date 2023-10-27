import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':

      return [...state, action.payload];
    case 'REMOVE_FROM_CART':

      return state.filter(item => item.id !== action.payload.id);
    case 'UPDATE_QUANTITY':

      return state.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};