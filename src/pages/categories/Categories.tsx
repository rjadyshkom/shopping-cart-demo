import React from 'react';
import classes from './categories.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { transliterateUrl } from '../../helpers/constants';

export const Categories = () => {
  const categories = useSelector((state: any) => state.products.categories);

  return (
    <section className={classes.categories}>
      {categories.map((category: any, key: number) => (
        <Link className={classes.link} key={key} to={`${transliterateUrl(category)}?filter=vse&page=1`}>
          {category}
        </Link>
      ))}
    </section>
  );
};
