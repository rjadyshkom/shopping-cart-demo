import React from 'react';
import classes from './Pagination.module.css';

export const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
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
