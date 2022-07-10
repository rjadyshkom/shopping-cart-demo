import React from 'react';
import classes from './ProductCard.module.css';
import { Button } from '../button/Button';
import { Lightbox } from '../lightbox/Lightbox';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../../services/actions/cart';
import { TrashButton } from '../trash-button/TrashButton';

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
        <div className={classes.imageWrapper}>
          <img draggable={false} className={classes.image} src={product.image} alt={product.name} />
        </div>
      </Lightbox>
      <div className={classes.info}>
        <span className={classes.id}>{product.id}</span>
        <span className={classes.price}>{`от ${product.price} р.`}</span>
      </div>
      <h2 className={classes.name}>{product.name}</h2>
      <div className={classes.activities}>
        {[...product.chips].sort().map((item: string, key: number) => (
          <span key={key} className={currentCategory === item ? classes.active : classes.activity}>
            {item}
          </span>
        ))}
      </div>
      <div className={classes.controls}>
        {!isExist && (
          <Button isExist={isExist} onClick={() => dispatch(cartActions.addItem(product))}>
            Добавить в заявку
          </Button>
        )}
        {isExist && (
          <div className={classes.controls}>
            <Button disabled={isExist} isExist={isExist}>В заявке</Button>
            <TrashButton onClick={() => dispatch(cartActions.deleteItem(product))} />
          </div>
        )}
      </div>
    </motion.div>
  );
};
