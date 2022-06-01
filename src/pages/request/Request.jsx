import React from 'react';
import classes from './Request.module.css';
import { Cart } from '../../components/UI/cart/Cart';
import { RequestFormik } from '../../components/forms/request/RequestFormik';

export const Request = () => {
    return (
        <section className={classes.container}>
            <Cart/>
            <RequestFormik/>
        </section>
    );
};