import React from 'react';
import classes from './Request.module.css';
import { Cart } from '../../components/UI/cart/Cart';
import { RequestForm } from '../../components/forms/request/RequestForm';

export const Request = () => {
  return (
    <section className={classes.container}>
      <Cart />
      <RequestForm />
    </section>
  );
};
