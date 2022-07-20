import React from 'react';
import classes from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as productsActions from '../../../../services/actions/products';
import { productsSelector } from '../../../../services/selectors/products';

export const Filter = () => {
  const { categoryFilters } = useSelector(productsSelector);
  const activeFilter = useSelector((state: any) => state.products.activeFilter);
  const dispatch = useDispatch();
  return (
    <div className={classes.container}>
      {categoryFilters.map((filter: any, key: any) => (
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
