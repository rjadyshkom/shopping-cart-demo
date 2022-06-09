import React, { useContext, useState } from 'react';
import classes from './Products.module.css';
import { ProductCard } from '../../components/UI/product-card/ProductCard';
import { products } from '../../helpers/constants';
import { AppContext } from '../../services/appContext';
import { Filter } from '../../components/UI/filter/Filter';
import { motion, AnimatePresence } from 'framer-motion';

export const Products = () => {
  const { cartItems, onAdd, onRemove } = useContext(AppContext);
  const [items, setItems] = useState(products);
  const [activeCategory, setActiveCategory] = useState('все');

  return (
    <section className={classes.container}>
      <Filter
        products={products}
        setItems={setItems}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <motion.div layout className={classes.products}>
        <AnimatePresence>
          {Object.values(items).map((product) => (
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
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
