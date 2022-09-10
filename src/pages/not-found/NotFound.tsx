import React from 'react';
import classes from './NotFound.module.css';
import { SEO } from '../../helpers/SEO';

export const NotFound = () => {
  return (
    <>
      <section className={classes.container}>
        <h1 className={classes.heading}>404</h1>
      </section>
      <SEO title={'Страница не найдена'} description={'Ошибка 404'} keywords={'Не нужны'} />
    </>
  );
};
