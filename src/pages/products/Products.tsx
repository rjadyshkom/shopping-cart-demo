import React, { useEffect } from 'react';
import classes from './Products.module.css';
import { ProductCard } from '../../components/UI/product-card/ProductCard';
import { Filter } from '../../components/UI/filter/Filter';
import { motion, AnimatePresence } from 'framer-motion';
import { Pagination } from '../../components/UI/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../services/selectors/products';
import { getProductsThunk } from '../../services/thunk/products';

export const Products = () => {
  const dispatch: any = useDispatch();
  const { products, pagesCount } = useSelector(productsSelector);
  const isProductsLoading = useSelector((state: any) => state.products.loading);
  const isProductsLoadingError = useSelector((state: any) => state.products.error);

  useEffect(() => {
    dispatch(getProductsThunk);
    // eslint-disable-next-line
  }, []);

  // noinspection JSValidateTypes
  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <Filter />
        <Pagination pagesCount={pagesCount} />
      </div>
      <motion.div layout className={classes.products}>
        <AnimatePresence>
          {isProductsLoading && products.length === 0 && <h2>Загружаю тренажёры...</h2>}
          {isProductsLoadingError && <h2>Не удалось загрузить информацию о тренажёрах с сервера</h2>}
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              image={product.image}
              description={product.description}
              price={product.price}
              product={product}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
