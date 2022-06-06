import React from 'react';
import classes from './ProductCard.module.css';
import { Button } from '../button/Button';
import { TrashButton } from '../trash-button/TrashButton';
import { Lightbox } from '../lightbox/Lightbox';

export const ProductCard = ({ product, cartItems, onAdd, onRemove }) => {

    const isExist = cartItems.find(item => item.id === product.id);
    return (
        <article className={classes.container}>
            <Lightbox
                image={product.image}
                alt={product.description}
            >
                <img
                    draggable={false}
                    className={classes.image}
                    src={product.image}
                    alt={product.description}
                />
            </Lightbox>

            <p className={classes.description}>{product.description}</p>
            <div className={classes.wrapper}>
                <span className={classes.price}>от {product.price} руб.</span>
                <div className={classes.controls}>
                    <Button
                        onClick={() => onAdd(product)} disabled={isExist}
                    >{
                        isExist
                            ? 'В заявке'
                            : 'Добавить в заявку'
                    }
                    </Button>
                    {isExist && <TrashButton onClick={() => onRemove(product)} />}
                </div>
            </div>
        </article>
    );
};