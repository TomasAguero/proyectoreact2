import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import termos from "../images/product4.jpeg";
import termos1 from "../images/product2.jpg";
import termos2 from "../images/product3.jpg";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockProducts = [
        {
          id: 1,
          name: "TERMOS OPACOS 1,3LT!",
          description: "Descripción del producto 1",
          price: 10000.99,
          image: termos,
        },
        {
          id: 2,
          name: "3 TERMOS CHARLYS 1LT!",
          description: "Descripción del producto 2",
          price: 20000.99,
          image: termos1, 
        },
        {
          id: 3,
          name: "TERMOS METALIZADOS 1,3LT!",
          description: "Descripción del producto 3",
          price: 21000.99,
          image: termos2, 
        },
      ];
      setProducts(mockProducts);
    }, 10);
  }, []);

  return (
    <div>
      <h1>LA FABRICA PBE IMPORTS.</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
