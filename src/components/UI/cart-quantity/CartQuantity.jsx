import React, { useContext } from 'react';
import classes from './CartQuantity.module.css';
import { AppContext } from '../../../context/appContext';
import { Link } from 'react-router-dom';
import cartIcon from '../../../images/cart-icon.svg';

export const CartQuantity = () => {
  const { cartItems } = useContext(AppContext);
  return (
    <Link className={classes.link} to={'/request'}>
      <img src={cartIcon} alt="Иконка корзины" />
      {cartItems.length > 0 && <span className={classes.badge}>{cartItems.length}</span>}
    </Link>
  );
};
