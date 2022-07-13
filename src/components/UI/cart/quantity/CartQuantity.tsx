import React from 'react';
import classes from './CartQuantity.module.css';
import { Link } from 'react-router-dom';
import cartIcon from '../../../../images/cart-icon.svg';
import { useSelector } from 'react-redux';

export const CartQuantity = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const cartItemsTotalQty = cartItems.reduce(
    (previousValue: any, currentItem: any) => previousValue + currentItem.qty,
    0,
  );
  return (
    <Link className={classes.link} to={'/request'}>
      <img src={cartIcon} alt="Иконка корзины" />
      {cartItems.length !== 0 && <span className={classes.badge}>{cartItemsTotalQty}</span>}
    </Link>
  );
};
