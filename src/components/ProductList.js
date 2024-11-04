import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <Typography variant="h6">No products found</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
              component="img"
              height="140"
              image={product.imageUrl}
              alt={product.name}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography>Category: {product.category}</Typography>
              <Typography>Brand: {product.brand}</Typography>
              <Typography>Price: ${product.price}</Typography>
              <Typography>Rating: {product.rating}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
