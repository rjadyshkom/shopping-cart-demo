import React from 'react';
import classes from './ProductCard.module.css';
import { Button } from '../button/Button';
import { Lightbox } from '../lightbox/Lightbox';
import { motion } from 'framer-motion';

export const ProductCard = ({ product, cartItems, onAdd, onRemove }) => {
  const isExist = cartItems.find((item) => item.id === product.id);
  return (
    <motion.div
      layout
      animate={{ opacity: 1, translateY: 0 }}
      initial={{ opacity: 0, translateY: 20 }}
      exit={{ opacity: 0, translateY: 20 }}
      className={classes.container}
    >
      <Lightbox image={product.image} alt={product.description}>
        <img draggable={false} className={classes.image} src={product.image} alt={product.description} />
      </Lightbox>

      <p className={classes.description}>{product.description}</p>
      <div className={classes.wrapper}>
        <span className={classes.price}>от {product.price} руб.</span>
        <div className={classes.controls}>
          {!isExist && (
            <Button isExist={isExist} onClick={() => onAdd(product)}>
              Добавить в заявку
            </Button>
          )}
          {isExist && (
            <Button isExist={isExist} onClick={() => onRemove(product)}>
              Удалить из заявки
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
