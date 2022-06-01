import React from 'react';
import classes from './TrashButton.module.css';

export const TrashButton = ({ ...props }) => {
    return (
        <button {...props} className={classes.trash} />
    );
};