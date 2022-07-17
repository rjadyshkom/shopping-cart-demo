import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../loader/Loader';
import classes from './loadingWrapper.module.css';

export const LoadingWrapper = (props: any) => {
  const isLoading = useSelector((state: any) => state.products.loading);
  if (isLoading) {
    return (
      <div className={classes.container}>
        <Loader />
      </div>
    );
  }
  return props.children;
};
