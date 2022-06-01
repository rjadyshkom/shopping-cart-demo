import React, { useContext } from 'react';
import classes from './Cart.module.css';
import { TrashButton } from '../trash-button/TrashButton';
import { Lightbox } from '../lightbox/Lightbox';
import { AppContext } from '../../../services/appContext';

export const Cart = () => {
    const { cartItems, onAdd, onDecrease, onRemove } = useContext(AppContext);
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Оборудование в заявке:</h2>
            {cartItems.length < 1 && <p className={classes.empty}>Вы ничего не добавили!</p>}
            {cartItems.map(product => (
                <div key={product.id} className={classes.wrapper}>
                    <Lightbox
                        image={product.image}
                        alt={product.description}
                    >
                        <img className={classes.image} src={product.image} alt={product.description} />
                    </Lightbox>
                    <p className={classes.description}>{product.description}</p>
                    <div className={classes.qtyWrapper}>
                        <button onClick={() => onDecrease(product)}>-</button>
                        <span className={classes.qtyNumber}>{product.qty}</span>
                        <button onClick={() => onAdd(product)}>+</button>
                    </div>
                    <p className={classes.price}>от {product.qty * product.price} руб.</p>
                    <TrashButton onClick={() => onRemove(product)} />
                </div>
            ))}
        </div>
    );
};