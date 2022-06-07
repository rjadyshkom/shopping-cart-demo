import React from 'react';
import classes from './TrashButton.module.css';

export const TrashButton = ({ onClick }) => {
  return <button onClick={onClick} className={classes.trash} />;
};
