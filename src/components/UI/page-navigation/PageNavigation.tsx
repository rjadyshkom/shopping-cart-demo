import React from 'react';
import classes from './../products/categories/productCategories.module.css';
import { NavLink } from 'react-router-dom';

export const PageNavigation = ({ items }: any) => {
  return (
    <nav className={classes.container}>
      {Object.values(items).map((item: any, key: any) => (
        <NavLink
          key={key}
          className={({ isActive }: any) => (isActive ? `${classes.item} ${classes.active}` : classes.item)}
          to={item.path}
        >
          {item.navigation.title}
        </NavLink>
      ))}
    </nav>
  );
};
