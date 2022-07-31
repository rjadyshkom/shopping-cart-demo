import React from 'react';
import classes from './categories.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { transliterateUrl } from '../../helpers/constants';
import * as productsActions from './../../services/actions/products';

export const Categories = () => {
  const dispatch: any = useDispatch();

  const categories = useSelector((state: any) => state.products.categories);
  const filters = useSelector((state: any) => state.products.filters);

  return (
    <section className={classes.categories}>
      {categories.map((category: any, key: number) => (
        <Link
          className={classes.link}
          key={key}
          to={`/${transliterateUrl(category)}/${transliterateUrl(filters[0])}`} // написать проверку, чтобы не сбрасывать фильтры при клике
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
