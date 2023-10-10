import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/category/:id" element={<Catalog />} />
        <Route path="/item/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
