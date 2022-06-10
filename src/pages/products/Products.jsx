import React, { useContext, useState, useEffect } from 'react';
import classes from './Products.module.css';
import { ProductCard } from '../../components/UI/product-card/ProductCard';
import { AppContext } from '../../services/appContext';
import { Filter } from '../../components/UI/filter/Filter';
import { motion, AnimatePresence } from 'framer-motion';
import { useFetching } from '../../hooks/useFetching';
import { ProductsService } from '../../components/ProductsService';

export const Products = () => {
  const { cartItems, onAdd, onRemove } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [productsToFilter, setProductsToFilter] = useState(products);
  const [activeCategory, setActiveCategory] = useState('все');

  const [fetchProducts, isProductsLoading, isProductsLoadingError] = useFetching(async () => {
    return await ProductsService.getAll().then((response) => setProducts(response.data));
  });

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  // noinspection JSValidateTypes
  return (
    <section className={classes.container}>
      <Filter
        products={products}
        setProductsToFilter={setProductsToFilter}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <motion.div layout className={classes.products}>
        <AnimatePresence>
          {isProductsLoadingError && <h2>Не удалось загрузить информацию о тренажёрах с сервера</h2>}
          {isProductsLoading && <h2>Загружаю тренажёры...</h2>}
          {productsToFilter.map((product) => (
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
