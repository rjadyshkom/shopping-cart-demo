import React, { useEffect } from 'react';
import classes from './Products.module.css';
import { ProductCard } from '../../components/UI/products/card/ProductCard';
import { Filter } from '../../components/UI/products/filter/Filter';
import { Pagination } from '../../components/UI/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../services/selectors/products';
import { getProductsThunk } from '../../services/thunk/products';
import { ProductCategories } from '../../components/UI/products/categories/ProductCategories';

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
      <div className={classes.categoriesWrapper}>
        <ProductCategories />
      </div>
      <div className={classes.filterWrapper}>
        <Filter />
      </div>
      {products.map((product: any) => (
        <ProductCard
          key={product.id}
          image={product.image}
          description={product.description}
          price={product.price}
          product={product}
        />
      ))}
      {isProductsLoading && products.length === 0 && <h2 className={classes.statusMessage}>Загружаю тренажёры...</h2>}
      {isProductsLoadingError && (
        <h2 className={classes.statusMessage}>Не удалось загрузить информацию о тренажёрах с сервера</h2>
      )}
      {pagesCount > 1 && <Pagination pagesCount={pagesCount} />}
    </section>
  );
};
