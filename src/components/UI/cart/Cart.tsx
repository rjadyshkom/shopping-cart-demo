import React from 'react';
import classes from './Cart.module.css';
import { TrashButton } from '../trash-button/TrashButton';
import { Lightbox } from '../lightbox/Lightbox';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../../services/actions/cart';

export const Cart = () => {
  const cartItems = useSelector((state:any) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Оборудование в заявке:</h2>
      {cartItems.length < 1 && <p className={classes.empty}>Вы ничего не добавили!</p>}
      {cartItems.map((product:any) => (
        <div key={product.id} className={classes.wrapper}>
          <Lightbox image={product.image} alt={product.description}>
            <img className={classes.image} src={product.image} alt={product.description} />
          </Lightbox>
          <p className={classes.description}>{product.description}</p>
          <div className={classes.qtyWrapper}>
            <button disabled={product.qty === 1} onClick={() => dispatch(cartActions.decreaseItem(product))}>
              -
            </button>
            <span className={classes.qtyNumber}>{product.qty}</span>
            <button onClick={() => dispatch(cartActions.addItem(product))}>+</button>
          </div>
          <p className={classes.price}>от {product.qty * product.price} руб.</p>
          <TrashButton onClick={() => dispatch(cartActions.deleteItem(product))} />
        </div>
      ))}
    </div>
  );
};