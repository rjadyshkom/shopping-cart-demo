import React, { useContext } from 'react';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { data } from '../../../helpers/constants';
import { AppContext } from '../../../services/appContext';

export const Navigation = () => {
    const { navigation } = data;
    const { cartItems } = useContext(AppContext);
    // noinspection JSValidateTypes
    return (
        <nav className={classes.links}>
            {Object.values(navigation).map((item, key) => (
                <NavLink
                    key={key}
                    className={({ isActive }) => (isActive ? classes.active : classes.link)}
                    to={item.path}
                >{item.name}</NavLink>
            ))}
            {cartItems.length > 0 && <span className={classes.badge}>{cartItems.length}</span>}
        </nav>
    );
};