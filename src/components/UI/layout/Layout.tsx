import React, { useEffect, useRef } from 'react';
import classes from './layout.module.css';
import { scrollTo } from '../../../helpers/constants';

export const Layout = ({ children }: any) => {
  const pageTop = useRef(null);
  useEffect(() => {
    scrollTo(pageTop, 95, 'auto');
  }, []);
  return (
    <main className={classes.layout} ref={pageTop}>
      {children}
    </main>
  );
};
