import React from 'react';
import classes from './Error.module.css';

export const Error = () => {
  return (
    <svg className={classes.error} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <circle className={classes.errorCircle} cx="25" cy="25" r="25" fill="none" />
      <path
        className={classes.errorCheck}
        d="M18.55,18.66l7.1,7.2,7.48-7.52"
        transform="translate(-1 -1)"
        fill="none"
      />
      <polyline className={classes.errorCheck} points="17.55 32.37 24.65 24.86 32.45 32.66" fill="none" />
    </svg>
  );
};
