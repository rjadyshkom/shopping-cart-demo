import React from 'react';
import classes from './Pagination.module.css';
import * as productsActions from '../../../services/actions/products';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { transliterateUrl } from '../../../helpers/constants';

export const Pagination = ({ pagesCount }: any) => {
  const pageNumbers = [];
  const activeCategory = useSelector((state: any) => state.products.activeCategory);
  const activeFilter = useSelector((state: any) => state.products.activeFilter);
  const currentPage = useSelector((state: any) => state.products.currentPage);
  const dispatch = useDispatch();
  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={classes.container}>
      {pageNumbers.map((number) => (
        <Link
          to={`/${transliterateUrl(activeCategory)}/${transliterateUrl(activeFilter)}`}
          onClick={() => dispatch(productsActions.setPage(number))}
          className={currentPage === number ? `${classes.link} ${classes.active}` : classes.link}
          key={number}
        >
          {number}
        </Link>
      ))}
    </nav>
  );
};
