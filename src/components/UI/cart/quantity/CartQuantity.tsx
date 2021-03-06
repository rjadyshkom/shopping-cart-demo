import React from 'react';
import classes from './CartQuantity.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const CartQuantity = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const cartItemsTotalQty = cartItems.reduce(
    (previousValue: any, currentItem: any) => previousValue + currentItem.qty,
    0,
  );
  return (
    <NavLink className={({ isActive }) => (isActive ? classes.active : classes.link)} to={'/request'}>
      <svg width="29" height="25" viewBox="0 0 29 25" fill="none" stroke="none" strokeWidth="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.60604 11.4895C1.55703 11.293 1.55342 11.0879 1.59551 10.8898C1.63759 10.6917 1.72425 10.5058 1.84891 10.3461C1.97357 10.1865 2.13296 10.0574 2.31497 9.96857C2.49699 9.87975 2.69684 9.83355 2.89937 9.8335H26.1527C26.3552 9.83355 26.5551 9.87975 26.7371 9.96857C26.9191 10.0574 27.0785 10.1865 27.2032 10.3461C27.3278 10.5058 27.4145 10.6917 27.4566 10.8898C27.4987 11.0879 27.4951 11.293 27.446 11.4895L25.0314 21.1468C24.8872 21.7237 24.5543 22.2359 24.0856 22.6019C23.6169 22.9679 23.0394 23.1667 22.4447 23.1668H6.60737C6.01272 23.1667 5.43515 22.9679 4.96648 22.6019C4.4978 22.2359 4.16491 21.7237 4.0207 21.1468L1.60604 11.4908V11.4895Z"
          strokeLinejoin="round"
        />
        <path
          d="M10.5264 15.1668V17.8335M18.5264 15.1668V17.8335M6.52637 9.8335L11.8597 1.8335M22.5264 9.8335L17.193 1.8335"
          strokeLinecap="round"
        />
      </svg>
      {cartItems.length !== 0 && <span className={classes.badge}>{cartItemsTotalQty}</span>}
    </NavLink>
  );
};
