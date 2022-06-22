import React from 'react';
import classes from './Pagination.module.css';
import * as productsActions from '../../../services/actions/products';
import { useDispatch, useSelector } from 'react-redux';

export const Pagination = ({ pagesCount }) => {
  const pageNumbers = [];
  const currentPage = useSelector((state) => state.products.currentPage);
  const dispatch = useDispatch();
  const paginate = (pageNumber) => dispatch(productsActions.setPage(pageNumber));
  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={classes.container}>
      {pageNumbers.map((number) => (
        <span
          onClick={() => paginate(number)}
          className={currentPage === number ? `${classes.link} ${classes.active}` : classes.link}
          key={number}
        >
          {number}
        </span>
      ))}
    </nav>
  );
};
