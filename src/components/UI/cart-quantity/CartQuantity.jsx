import React, { useContext } from 'react';
import classes from './CartQuantity.module.css';
import { AppContext } from '../../../context/appContext';

export const CartQuantity = () => {
  const { cartItems } = useContext(AppContext);
  return cartItems.length > 0 && <span className={classes.badge}>{cartItems.length}</span>;
};
