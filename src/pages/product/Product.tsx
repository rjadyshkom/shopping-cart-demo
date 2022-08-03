import React from 'react';
import classes from './product.module.css';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/UI/buttons/Button';
import * as cartActions from '../../services/actions/cart';
import { Quantity } from '../../components/UI/quantity/Quantity';
import { Lightbox } from '../../components/UI/lightbox/Lightbox';
import { RoundedSectionWrapper } from '../../components/UI/rounded-section-wrapper/RoundedSectionWrapper';

export const Product = () => {
  const { productId }: any = useParams();
  const products = useSelector((state: any) => state.products.products);

  console.log(products);
  const dispatch: any = useDispatch();

  const initialProductId = productId.split('-').join(' ').toUpperCase();

  const product = products.find((product: any) => product.id === initialProductId);
  const inCart = useSelector((state: any) => state.cart.items.find((item: any) => item.id === product?.id));

  const notAFitnessCategory = ['благоустройство'];
  const isNotAFitnessMachine = notAFitnessCategory.includes(product?.category);

  return !product ? (
    <Navigate to={'/404'} />
  ) : (
    <section className={classes.product}>
      <RoundedSectionWrapper>
        <div className={classes.productWrapper}>
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
            {/*вынести в отдельный компонент*/}
            <div className={isNotAFitnessMachine ? classes.alertContainerNonFitness : classes.alertContainer}>
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
      </RoundedSectionWrapper>
    </section>
  );
};
