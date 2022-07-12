import React from 'react';
import classes from './loader.module.css';
import { useSelector } from 'react-redux';
import { productsSelector } from '../../../../services/selectors/products';

export const Loader = () => {
  const isProductsLoading = useSelector((state: any) => state.products.loading);
  const isProductsLoadingError = useSelector((state: any) => state.products.error);
  const { products } = useSelector(productsSelector);
  return (
    <>
      {isProductsLoading && products.length === 0 && <h2 className={classes.message}>Загрузка данных...</h2>}
      {isProductsLoadingError && <h2 className={classes.message}>Не удалось загрузить информацию с сервера</h2>}
    </>
  );
};
