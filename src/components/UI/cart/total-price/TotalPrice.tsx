import React from 'react';
import classes from './TotalPrice.module.css';
import { useSelector } from 'react-redux';

export const TotalPrice = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const cartItemsTotalQty = cartItems.reduce(
    (previousValue: any, currentItem: any) => previousValue + currentItem.qty,
    0,
  );
  const totalPrice = cartItems.reduce((a: any, c: any) => a + c.price * c.qty, 0);
  return (cartItems.length !== 0 && (
    <div className={classes.totalContainer}>
      <div className={classes.totalWrapper}>
        <h3 className={classes.total}>Итого:</h3>
        <span>в заявке {cartItemsTotalQty}</span>
      </div>
      <span className={classes.price}>от {totalPrice.toLocaleString()} руб.</span>
    </div>
  )) as JSX.Element;
};
