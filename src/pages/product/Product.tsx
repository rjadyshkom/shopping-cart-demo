import React, { useEffect } from 'react';
import classes from './product.module.css';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/UI/products/loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../services/selectors/products';
import { getProductsThunk } from '../../services/thunk/products';
import { Button } from '../../components/UI/button/Button';
import * as cartActions from '../../services/actions/cart';
import { Quantity } from '../../components/UI/quantity/Quantity';

export const Product = () => {
  const { productId }: any = useParams();
  const { products } = useSelector(productsSelector);
  const dispatch: any = useDispatch();
  const product = products.find((product: any) => product.id === productId.split('_').join(' ').toUpperCase());
  const inCart = useSelector((state: any) => state.cart.items.find((item: any) => item.id === product.id));

  useEffect(() => {
    dispatch(getProductsThunk);
  }, []);
  return (
    <section className={classes.product}>
      <div className={classes.container}>
        <div className={classes.slider}>
          <img className={classes.image} src={product.image} alt={product.name} />
        </div>
        <div>
          <h1 className={classes.name}>{product.name}</h1>
          <ul className={classes.info}>
            <li>
              <span>Артикул:</span> <span className={classes.id}>{product.id}</span>
            </li>
            <li className={classes.activities}>
              <span>Группы мышц:</span> <span>{product.filters.join(', ')}</span>
            </li>
            <li className={classes.priceInfo}>
              <span>от:</span> <span className={classes.price}>{product.price} руб.</span>
              <span className={classes.taxBadge}>*Без НДС</span>
            </li>
          </ul>
          <p className={classes.alert}>Цены уточняйте у менеджеров!</p>
          <a href="#" className={classes.link}>
            Каждый тренажёр можно оборудовать уникальной мультимедийной системой
          </a>
          <div className={classes.controls}>
            {!inCart && (
              <Button isExist={inCart} onClick={() => dispatch(cartActions.addItem(product))}>
                Добавить в заявку
              </Button>
            )}
            {inCart && (
              <>
                <Button disabled={inCart} isExist={inCart}>
                  В заявке
                </Button>
                <Quantity product={inCart} isRemovable />
              </>
            )}
          </div>
        </div>
      </div>
      <Loader />
    </section>
  );
};
