import React from 'react';
import classes from './product.module.css';
import { useParams } from 'react-router-dom';

export const Product = () => {
  const params: any = useParams();
  return (
    <section className={classes.product}>
      <h2 className={classes.id}>{params.productId.split('-').join(' ')} </h2>
    </section>
  );
};
