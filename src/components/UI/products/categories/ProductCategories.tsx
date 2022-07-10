import React from 'react';
import classes from './productCategories.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as productsActions from '../../../../services/actions/products';

export const ProductCategories = () => {
  const categories = useSelector((state: any) => state.products.categories);
  const activeCategory = useSelector((state: any) => state.products.activeCategory);
  const dispatch = useDispatch();

  return (
    <nav className={classes.container}>
      {categories.map((category: any, key: any) => (
        <span
          key={key}
          className={activeCategory === category ? `${classes.category} ${classes.active}` : classes.category}
          onClick={() => dispatch(productsActions.setCategory(category))}
        >
          {category}
        </span>
      ))}
    </nav>
  );
};
