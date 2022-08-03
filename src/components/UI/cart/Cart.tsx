import React from 'react';
import classes from './Cart.module.css';
import { TrashButton } from '../trash-button/TrashButton';
import { Lightbox } from '../lightbox/Lightbox';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../../services/actions/cart';
import { Quantity } from '../quantity/Quantity';
import { TotalPrice } from './total-price/TotalPrice';
import { useNavigate } from 'react-router-dom';
import { ButtonWithArrow } from '../buttons/ButtonWithArrow';

export const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      {cartItems.length < 1 && (
        <div className={classes.empty}>
          <h2 className={classes.emptyHeading}>Вы ничего не добавили</h2>
          <p className={classes.emptyCaption}>Чтобы отправить заявку, перейдите в раздел «Продукция» и добавьте интересующие вас товары.</p>
          <ButtonWithArrow onClick={() => navigate('/')}>Продукция</ButtonWithArrow>
        </div>
      )}
      {cartItems.map((product: any) => (
        <div key={product.id} className={classes.wrapper}>
          <div className={classes.infoWrapper}>
            <Lightbox image={product.image} alt={product.description}>
              <div className={classes.imageWrapper}>
                <img className={classes.image} src={product.image} alt={product.description} />
              </div>
            </Lightbox>
            <div className={classes.info}>
              <span className={classes.id}>{product.id}</span>
              <h2 className={classes.name}>{product.name}</h2>
              <p className={classes.filters}>{product.filters.join(', ')}</p>
              <Quantity product={product} />
            </div>
          </div>
          <ul className={classes.priceContainer}>
            <li>
              <p>
                от <span className={classes.price}>{(product.qty * product.price).toLocaleString()} руб.</span>
              </p>
              <p className={classes.taxes}>* Без НДС</p>
            </li>
            <li>Стоимость доставки и монтажа уточняется отдельно</li>
          </ul>
          <TrashButton onClick={() => dispatch(cartActions.deleteItem(product))} />
        </div>
      ))}
      <TotalPrice />
    </div>
  );
};
