import React, { useEffect } from 'react';
import classes from './product.module.css';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/UI/products/loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../services/selectors/products';
import { getProductsThunk } from '../../services/thunk/products';

export const Product = () => {
  const { productId }: any = useParams();
  const { products } = useSelector(productsSelector);
  const dispatch: any = useDispatch();

  const productData = products.find((product: any) => product.id === productId.split('_').join(' ').toUpperCase());

  useEffect(() => {
    dispatch(getProductsThunk);
  }, []);
  return (
    <section className={classes.product}>
      <h2 className={classes.id}>{productData.name}</h2>
      <Loader />
    </section>
  );
};
