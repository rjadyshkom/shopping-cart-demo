import React from 'react';
import classes from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as productsActions from '../../../../services/actions/products';
import { productsSelector } from '../../../../services/selectors/products';
import { Link } from 'react-router-dom';
import { transliterateUrl } from '../../../../helpers/constants';

export const Filter = () => {
  const { categoryFilters } = useSelector(productsSelector);
  const activeFilter = useSelector((state: any) => state.products.activeFilter);
  const activeCategory = useSelector((state: any) => state.products.activeCategory);
  const dispatch = useDispatch();
  return (
    <div className={classes.container}>
      {categoryFilters.map((filter: any, key: any) => (
        <Link
          to={`/category/${transliterateUrl(activeCategory)}/filter/${transliterateUrl(activeFilter)}`}
          className={activeFilter === filter ? `${classes.label} ${classes.active}` : classes.label}
          key={key}
          onClick={() => dispatch(productsActions.setFilter(filter))}
        >
          {filter}
        </Link>
      ))}
    </div>
  );
};
