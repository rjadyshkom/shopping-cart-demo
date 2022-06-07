import React from 'react';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../helpers/routes';

export const Navigation = () => {
  // noinspection JSValidateTypes
  return (
    <nav className={classes.links}>
      {Object.values(routes).map((item, key) => (
        <NavLink key={key} className={({ isActive }) => (isActive ? classes.active : classes.link)} to={item.path}>
          {item.navigation.title}
        </NavLink>
      ))}
    </nav>
  );
};
