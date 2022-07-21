import React from 'react';
import { ProductCard } from '../card/ProductCard';
import { useSelector } from 'react-redux';
import { productsSelector } from '../../../../services/selectors/products';

export const ProductsList = () => {
  const { productsToRender } = useSelector(productsSelector);
  return productsToRender.map((product: any) => (
    <ProductCard
      key={product.id}
      image={product.image}
      description={product.description}
      price={product.price}
      product={product}
    />
  ));
};
