import React, { useContext, useEffect } from 'react';
import classes from './Products.module.css';
import { ProductCard } from '../../components/UI/product-card/ProductCard';
import { AppContext } from '../../context/appContext';
import { Filter } from '../../components/UI/filter/Filter';
import { motion, AnimatePresence } from 'framer-motion';
import { Pagination } from '../../components/UI/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../services/selectors/products';
import { getProductsThunk } from '../../services/thunk/products';

export const Products = () => {
  const { cartItems, onAdd, onRemove } = useContext(AppContext);
  const dispatch = useDispatch();
  const { products, pagesCount } = useSelector(productsSelector);

  useEffect(() => {
    dispatch(getProductsThunk);
  }, []);

  const isProductsLoadingError = useSelector(state => state.products.error);

  // noinspection JSValidateTypes
  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <Filter />
        <Pagination pagesCount={pagesCount} />
      </div>
      <motion.div layout className={classes.products}>
        <AnimatePresence>
          {isProductsLoadingError && <h2>Не удалось загрузить информацию о тренажёрах с сервера</h2>}
          {/*{isProductsLoading && <h2>Загружаю тренажёры...</h2>}*/}
          {products.map((product) => (
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
