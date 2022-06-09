import React from 'react';
import classes from './Button.module.css';

export const Button = ({ children, isExist, ...props }) => {
  return (
    <button {...props} className={isExist ? `${classes.button} ${classes.exist}` : classes.button}>
      {children}
    </button>
  );
};
