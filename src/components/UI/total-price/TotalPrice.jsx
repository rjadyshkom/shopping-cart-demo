import React from 'react';
import classes from './TotalPrice.module.css';
import { useSelector } from 'react-redux';

export const TotalPrice = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    cartItems.length !== 0 && (
      <div className={classes.total}>
        <h3>Стоимость:</h3>
        <span>от {totalPrice} руб.</span>
      </div>
    )
  );
};
