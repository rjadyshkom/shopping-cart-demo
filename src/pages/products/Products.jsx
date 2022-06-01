import React from 'react';
import classes from './Products.module.css';
import { ProductCard } from '../../components/UI/product-card/ProductCard';
import { data } from '../../helpers/constants';

export const Products = () => {
    const { products } = data;
    return (
        <section className={classes.container}>
            {Object.values(products).map(product => (
                <ProductCard
                    key={product.id}
                    image={product.image}
                    description={product.description}
                    price={product.price}
                    product={product}
                />
            ))}
        </section>
    );
};