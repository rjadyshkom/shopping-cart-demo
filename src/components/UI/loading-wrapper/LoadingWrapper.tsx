import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../loader/Loader';
import classes from './loadingWrapper.module.css';

export const LoadingWrapper = (props: any) => {
  const isLoading = useSelector((state: any) => state.products.loading);
  const isProductsLoadingError = useSelector((state: any) => state.products.error);
  if (isLoading) {
    return (
      <div className={classes.container}>
        <Loader />
      </div>
    );
  }
  return isProductsLoadingError ? (
    <div className={classes.container}>
      <h2>Не удалось получить данные с сервера</h2>
    </div>
  ) : (
    props.children
  );
};
