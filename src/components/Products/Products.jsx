import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

const Products = ({ categories, onAddToCart }) => {
  const classes = useStyles();

  if (!categories.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {categories.map((category) => {
        return (
          <div className={classes.container}>
          <Typography className={classes.options} variant="h3">
            {category.name}
          </Typography>
          <Grid container justify="center" spacing={4}>
          {category.productsData.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
         </Grid>
         </div>
      );
      })}

    </main>
  );
};

export default Products;