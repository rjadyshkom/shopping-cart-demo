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
import { Lightbox } from '../../components/UI/lightbox/Lightbox';

export const Product = () => {
  const { productId }: any = useParams();
  const { products } = useSelector(productsSelector);
  const dispatch: any = useDispatch();

  const product = products.find((product: any) => product.id === productId.split('_').join(' ').toUpperCase());
  const inCart = useSelector((state: any) => state.cart.items.find((item: any) => item.id === product.id));

  const notAFitnessCategory = ['благоустройство'];
  const isNotAFitnessMachine = notAFitnessCategory.includes(product.category);

  useEffect(() => {
    dispatch(getProductsThunk);
    // eslint-disable-next-line
  }, []);

  return (
    <section className={classes.product}>
      <div className={classes.container}>
        <div className={classes.slider}>
          <Lightbox image={product.image} alt={product.name}>
            <img className={classes.image} src={product.image} alt={product.name} />
          </Lightbox>
        </div>
        <div className={classes.wrapper}>
          <h1 className={classes.name}>{product.name}</h1>
          <ul className={isNotAFitnessMachine ? classes.infoNonFitness : classes.infoFitness}>
            <li>
              <span>Артикул:</span> <span className={classes.id}>{product.id}</span>
            </li>
            <li className={classes.activities}>
              <span>Категория:</span> <span>{product.category}</span>
            </li>
            <li className={classes.priceInfo}>
              <span>от:</span> <span className={classes.price}>{product.price.toLocaleString()} руб.</span>
              <span className={classes.taxBadge}>*Без НДС</span>
            </li>
          </ul>
          <div className={classes.alertContainer}>
            <p className={classes.alert}>Цены уточняйте у менеджеров!</p>
            <span className={classes.infoIcon}></span>
          </div>

          {!isNotAFitnessMachine && (
            <button className={classes.link}>
              Каждый тренажёр можно оборудовать уникальной мультимедийной системой
            </button>
          )}
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
