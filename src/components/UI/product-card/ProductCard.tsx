import React from 'react';
import classes from './ProductCard.module.css';
import { Button } from '../button/Button';
import { Lightbox } from '../lightbox/Lightbox';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../../services/actions/cart';

export const ProductCard = ({ product }: any) => {
  const dispatch = useDispatch();
  const isExist = useSelector((state: any) => state.cart.items.find((item: any) => item.id === product.id));
  const currentCategory = useSelector((state: any) => state.products.currentCategory);
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, type: 'tween' }}
      className={classes.container}
    >
      <Lightbox image={product.image} alt={product.name}>
        <img draggable={false} className={classes.image} src={product.image} alt={product.name} />
      </Lightbox>
      <div className={classes.specs}>
        <h2 className={classes.name}>{product.name}</h2>
        <p className={classes.description}>{product.description}</p>
        <div className={classes.activities}>
          {product.activities.map((item: string, key: number) => (
            <span key={key} className={currentCategory === item ? classes.active : null}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className={classes.wrapper}>
        <span className={classes.price}>от {product.price} руб.</span>
        <div className={classes.controls}>
          {!isExist && (
            <Button isExist={isExist} onClick={() => dispatch(cartActions.addItem(product))}>
              Добавить в заявку
            </Button>
          )}
          {isExist && (
            <Button isExist={isExist} onClick={() => dispatch(cartActions.deleteItem(product))}>
              Удалить из заявки
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
