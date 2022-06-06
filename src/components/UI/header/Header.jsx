import React from 'react';
import classes from './Header.module.css';

export const Header = ({ children }) => {
    return (
        <header className={classes.container}>
            {children}
        </header>
    );
};