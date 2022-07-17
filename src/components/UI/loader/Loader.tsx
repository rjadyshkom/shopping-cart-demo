import React from 'react';
import classes from './loader.module.css';
import { useSelector } from 'react-redux';
import { productsSelector } from '../../../services/selectors/products';

export const Loader = () => {
  const isProductsLoading = useSelector((state: any) => state.products.loading);
  const isProductsLoadingError = useSelector((state: any) => state.products.error);
  const { products } = useSelector(productsSelector);
  return (
    <>
      {isProductsLoading && products.length === 0 && (
        <svg className={classes.svg} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle
            className={classes.circle}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="30"
          ></circle>
        </svg>
      )}
      {isProductsLoadingError && <h2 className={classes.message}>Не удалось загрузить информацию с сервера</h2>}
    </>
  );
};
