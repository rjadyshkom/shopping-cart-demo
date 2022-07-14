import React from 'react';
import classes from './ProductCard.module.css';
import { Button } from '../../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../../../services/actions/cart';
import { Quantity } from '../../quantity/Quantity';
import { Link} from 'react-router-dom';
import { transliterateUrl } from '../../../../helpers/constants';

export const ProductCard = ({ product }: any) => {
  const dispatch = useDispatch();
  const isExist = useSelector((state: any) => state.cart.items.find((item: any) => item.id === product.id));
  const activeFilter = useSelector((state: any) => state.products.activeFilter);

  return (
    <div className={classes.container}>
      <Link to={`${transliterateUrl(product.id).toLowerCase()}`}>
        <div className={classes.imageWrapper}>
          <img draggable={false} className={classes.image} src={product.image} alt={product.name} />
        </div>
        <div className={classes.info}>
          <span className={classes.id}>{product.id}</span>
          <span className={classes.price}>{`от ${product.price} р.`}</span>
        </div>
        <h2 className={classes.name}>{product.name}</h2>
        <div className={classes.filters}>
          {[...product.filters].sort().map((filter: string, key: number) => (
            <span key={key} className={activeFilter === filter ? classes.active : classes.activity}>
              {filter}
            </span>
          ))}
        </div>
      </Link>
      <div className={classes.controls}>
        {!isExist && (
          <Button isExist={isExist} onClick={() => dispatch(cartActions.addItem(product))}>
            Добавить в заявку
          </Button>
        )}
        {isExist && (
          <div className={classes.controls}>
            <Button disabled={isExist} isExist={isExist}>
              В заявке
            </Button>
            <Quantity product={isExist} isRemovable />
          </div>
        )}
      </div>
    </div>
  );
};
