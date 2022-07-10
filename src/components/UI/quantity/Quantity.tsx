import React from 'react';
import classes from './quantity.module.css';
import * as cartActions from '../../../services/actions/cart';
import { useDispatch } from 'react-redux';

export const Quantity = ({ product, isRemovable }: any) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.qtyWrapper}>
      <button
        className={classes.button}
        disabled={isRemovable ? false : product.qty === 1}
        onClick={() =>
          isRemovable && product.qty === 1
            ? dispatch(cartActions.deleteItem(product))
            : dispatch(cartActions.decreaseItem(product))
        }
      >
        -
      </button>
      <span className={classes.quantity}>{product.qty}</span>
      <button className={classes.button} onClick={() => dispatch(cartActions.addItem(product))}>
        +
      </button>
    </div>
  );
};
