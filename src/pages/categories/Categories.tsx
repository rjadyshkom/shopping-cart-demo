import React from 'react';
import classes from './categories.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { transliterateUrl } from '../../helpers/constants';
import * as productsActions from './../../services/actions/products';

export const Categories = () => {
  const categories = useSelector((state: any) => state.products.categories);
  const dispatch: any = useDispatch();
  const activeFilter = useSelector((state: any) => state.products.activeFilter);
  const currentPage = useSelector((state: any) => state.products.currentPage);
  return (
    <section className={classes.categories}>
      {categories.map((category: any, key: number) => (
        <Link
          className={classes.link}
          key={key}
          to={`/${transliterateUrl(category)}/${transliterateUrl(activeFilter)}/${currentPage}`}
          onClick={() => {
            dispatch(productsActions.setCategory(category));
          }}
        >
          {category}
        </Link>
      ))}
    </section>
  );
};
