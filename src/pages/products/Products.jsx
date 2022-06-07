import React, { useContext } from 'react';
import classes from './Products.module.css';
import { ProductCard } from '../../components/UI/product-card/ProductCard';
import { data } from '../../helpers/constants';
import { AppContext } from '../../services/appContext';

export const Products = () => {
  const { cartItems, onAdd, onRemove } = useContext(AppContext);
  const { products } = data;
  return (
    <section className={classes.container}>
      {Object.values(products).map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          description={product.description}
          price={product.price}
          product={product}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </section>
  );
};
