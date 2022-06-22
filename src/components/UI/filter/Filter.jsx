import React from 'react';
import classes from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as productsActions from './../../../services/actions/products';

export const Filter = () => {
  const chips = useSelector((state) => state.products.categories);
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.products.currentCategory);
  return (
    <div className={classes.container}>
      {chips.map((category, key) => (
        <span
          className={activeCategory === category ? `${classes.label} ${classes.active}` : classes.label}
          key={key}
          onClick={() => dispatch(productsActions.setCategory(category))}
        >
          {category}
        </span>
      ))}
    </div>
  );
};
