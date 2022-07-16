import React from 'react';
import classes from './TotalPrice.module.css';
import { useSelector } from 'react-redux';

export const TotalPrice = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const totalPrice = cartItems.reduce((a: any, c: any) => a + c.price * c.qty, 0);
  return (cartItems.length !== 0 && (
    <div className={classes.total}>
      <h3>Стоимость:</h3>
      <span>от {totalPrice.toLocaleString()} руб.</span>
    </div>
  )) as JSX.Element;
};
