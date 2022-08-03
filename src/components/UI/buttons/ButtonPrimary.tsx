import React from 'react';
import classes from './Button.module.css';

export const ButtonPrimary = ({children, ...props}:any) => {
  return (
    <button {...props} className={classes.primary}>
      {children}
    </button>
  );
};