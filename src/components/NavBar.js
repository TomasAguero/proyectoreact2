import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import logo from  '../images/termochiquitoi.png';
import './NavBar.css';

const NavBar = () => {
  const { cart } = useCart();

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src= {logo} alt="Logo" className="logo" />
          Inicio
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/checkout" className="navbar-item">
            <span>Carrito</span>
            {itemCount > 0 && (
              <span className="badge">{itemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;





