import React from 'react';
import classes from './layout.module.css';

export const Layout = ({ children }: any) => {
  return <main className={classes.layout}>{children}</main>;
};
