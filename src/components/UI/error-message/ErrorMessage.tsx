import React from 'react';
import classes from './errorMessage.module.css';

export const ErrorMessage = ({ message }: any) => {
  return (
    <div className={classes.container}>
      <p className={classes.message}>{message}</p>
    </div>
  );
};
