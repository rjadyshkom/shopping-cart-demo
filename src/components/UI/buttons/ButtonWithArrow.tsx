import React from 'react';
import classes from './Button.module.css';

export const ButtonWithArrow = ({ children, ...props }: any) => {
  return <button {...props} className={classes.buttonWithArrow}>{children}
    <svg className={classes.arrow} width="26" height="21" viewBox="0 0 26 21" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.2731 20.9103L14.0003 19.6375L22.0126 11.6252L0.896936 11.6252L0.896936 9.8306L22.0126 9.8306L14.0003 1.81838L15.2731 0.545584L25.4555 10.7279L15.2731 20.9103Z"/>
    </svg>
  </button>;
};
