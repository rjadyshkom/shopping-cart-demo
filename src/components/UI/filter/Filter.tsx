import React from 'react';
import classes from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as productsActions from '../../../services/actions/products';

export const Filter = () => {
  const chips = useSelector((state: any) => state.products.filters);
  const dispatch = useDispatch();
  const activeFilter = useSelector((state: any) => state.products.activeFilter);
  return (
    <div className={classes.container}>
      {chips.map((filter: any, key: any) => (
        <span
          className={activeFilter === filter ? `${classes.label} ${classes.active}` : classes.label}
          key={key}
          onClick={() => dispatch(productsActions.setFilter(filter))}
        >
          {filter}
        </span>
      ))}
    </div>
  );
};
