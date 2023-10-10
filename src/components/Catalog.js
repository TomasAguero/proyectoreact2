import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import product1Image from '../image/product1.jpg'; // Ajusta la ruta según la ubicación de tu archivo
import product2Image from '../image/product2.jpg'; // Ajusta la ruta según la ubicación de tu archivo
import product3Image from '../image/product3.jpg';

function Catalog() {

  const products = [
    { id: 1, name: 'TERMO POLAR ROSA', description: 'Termo polar inoxidable, 24 horas de agua caliente!', price: 10000.99, image: product1Image },
    { id: 2, name: 'COMBO 3 TERMOS CHARLY', description: 'Llevate 3 termos a precio de 2!', price: 140000.99, image: product2Image },
    { id: 3, name: 'COMBO 4 TERMOS METALIZADOS', description: 'LLevate 4 termos a precio de 3!', price: 19000.99, image: product3Image },

  ];

  return (
    <div>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Link to={`/item/${product.id}`}>
              <Card>
                <CardContent>
                  <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography color="textSecondary">{product.description}</Typography>
                  <Typography variant="h5" component="div">
                    Price: ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Catalog;





