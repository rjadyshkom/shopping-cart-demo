import React from 'react';
import classes from './Header.module.css';
import { Navigation } from '../navigation/Navigation';

export const Header = () => {
    return (
        <header className={classes.container}>
            <Navigation/>
        </header>
    );
};