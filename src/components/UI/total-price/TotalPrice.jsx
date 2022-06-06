import React from 'react';
import classes from './TotalPrice.module.css';

export const TotalPrice = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    return (
        cartItems.length !== 0 &&
        <div className={classes.total}>
            <h3>Стоимость:</h3>
            <span>от {totalPrice} руб.</span>
        </div>
    );
};