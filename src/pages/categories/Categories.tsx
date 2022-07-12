import React, { useEffect } from 'react';
import classes from './categories.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductsThunk } from '../../services/thunk/products';
import { transliterate } from '../../helpers/constants';

export const Categories = () => {
  const categories = useSelector((state: any) => state.products.categories);

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk);
    // eslint-disable-next-line
  }, []);

  return (
    <section className={classes.categories}>
      {categories.map((category: any, key: number) => (
        <Link
          className={classes.link}
          key={key}
          to={`${transliterate(category).toLowerCase()}`}
        >
          {category}
        </Link>
      ))}
    </section>
  );
};
