// src/mocks.js

export const products = [
    {
      id: '1',
      name: 'Producto 1',
      category: 'Electronics',
      description: 'Descripción del Producto 1',
      price: 99.99,
    },
    {
      id: '2',
      name: 'Producto 2',
      category: 'Clothing',
      description: 'Descripción del Producto 2',
      price: 49.99,
    },

  ];
  
  export function getProductById(id) {
    return products.find((product) => product.id === id);
  }
  
  export function getProductsByCategory(category) {
    return products.filter((product) => product.category === category);
  }
  