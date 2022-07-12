import React from 'react';
import classes from './product.module.css';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/UI/products/loader/Loader';

export const Product = () => {
  const { productId }: any = useParams();
  return (
    <section className={classes.product}>
      <h2 className={classes.id}>{productId}</h2>
      <Loader />
    </section>
  );
};
