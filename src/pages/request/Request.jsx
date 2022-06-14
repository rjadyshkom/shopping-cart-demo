import React, { useContext } from 'react';
import classes from './Request.module.css';
import { Cart } from '../../components/UI/cart/Cart';
import { RequestForm } from '../../components/forms/request/RequestForm';
import { AppContext } from '../../context/appContext';

export const Request = () => {
  const { cartItems, setCartItems, onAdd, onDecrease, onRemove } = useContext(AppContext);
  return (
    <section className={classes.container}>
      <Cart cartItems={cartItems} onAdd={onAdd} onDecrease={onDecrease} onRemove={onRemove} />
      <RequestForm cartItems={cartItems} setCartItems={setCartItems} />
    </section>
  );
};
