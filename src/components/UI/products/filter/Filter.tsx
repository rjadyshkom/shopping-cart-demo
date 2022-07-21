import React from 'react';
import classes from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as productsActions from '../../../../services/actions/products';
import { productsSelector } from '../../../../services/selectors/products';
import { Link } from 'react-router-dom';
import { transliterateUrl } from '../../../../helpers/constants';

export const Filter = () => {
  const { categoryFilters } = useSelector(productsSelector);
  const activeCategory = useSelector((state: any) => state.products.activeCategory);
  const activeFilter = useSelector((state: any) => state.products.activeFilter);

  const dispatch = useDispatch();
  return (
    <div className={classes.container}>
      {categoryFilters.map((filter: any, key: any) => (
        <Link
          to={`/${transliterateUrl(activeCategory)}/${transliterateUrl(activeFilter)}/page-1`} // убрать хардкод
          className={activeFilter === filter ? `${classes.label} ${classes.active}` : classes.label}
          key={key}
          onClick={() => {
            dispatch(productsActions.setPage(1));
            dispatch(productsActions.setFilter(filter));
          }}
        >
          {filter}
        </Link>
      ))}
    </div>
  );
};
