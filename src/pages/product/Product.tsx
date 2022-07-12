import React, { useEffect } from 'react';
import classes from './product.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../services/selectors/products';
import { getProductsThunk } from '../../services/thunk/products';
import { Loader } from '../../components/UI/products/loader/Loader';

export const Product = () => {
  const { productId }: any = useParams();
  const dispatch: any = useDispatch();
  const { products } = useSelector(productsSelector);
  const initialId = productId.split('-').join(' ').toUpperCase();

  const productData = products.find((product: any) => product.id === initialId);

  useEffect(() => {
    dispatch(getProductsThunk);
  }, []);

  return (
    <section className={classes.product}>
      {products.length !== 0 && <h2 className={classes.id}>{productData.name}</h2>}
      <Loader />
    </section>
  );
};
