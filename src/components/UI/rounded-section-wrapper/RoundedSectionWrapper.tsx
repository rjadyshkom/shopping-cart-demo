import React from 'react';
import classes from './roundedSectionWrapper.module.css';

export const RoundedSectionWrapper = ({ children }: any) => {
  return (
    <div className={classes.container}>
      {children}
    </div>
  );
};
