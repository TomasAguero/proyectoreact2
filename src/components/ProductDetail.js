import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

function ProductDetail() {
  const { id } = useParams();


    const product = {
    id: id,
    name: 'Product Name',
    description: 'Product Description',
    price: 24.99,
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h4" component="div">
            {product.name}
          </Typography>
          <Typography color="textSecondary">{product.description}</Typography>
          <Typography variant="h6" component="div">
            Price: ${product.price}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductDetail;
