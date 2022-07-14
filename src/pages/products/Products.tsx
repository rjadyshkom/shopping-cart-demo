import React, { useEffect } from 'react';
import classes from './Products.module.css';
import { Filter } from '../../components/UI/products/filter/Filter';
import { Pagination } from '../../components/UI/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../services/selectors/products';
import { getProductsThunk } from '../../services/thunk/products';
import { ProductCategories } from '../../components/UI/products/categories/ProductCategories';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { transliterateUrl } from '../../helpers/constants';
import { ProductsList } from '../../components/UI/products/list/ProductsList';
import { Loader } from '../../components/UI/products/loader/Loader';

export const Products = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  const { pagesCount } = useSelector(productsSelector);

  const activeFilter = useSelector((state: any) => state.products.activeFilter);
  const activeCategory = useSelector((state: any) => state.products.activeCategory);
  const currentPage = useSelector((state: any) => state.products.currentPage);

  useEffect(() => {
    dispatch(getProductsThunk);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    navigate({
      pathname: `/${transliterateUrl(activeCategory).toLowerCase()}`,
      search: createSearchParams({
        filter: `${transliterateUrl(activeFilter)}`,
        ...(pagesCount > 1 && { page: `${currentPage}` }),
      })
        .toString()
        .toLowerCase(),
    });
    // eslint-disable-next-line
  }, [activeFilter, activeCategory, currentPage]);

  // noinspection JSValidateTypes
  return (
    <section className={classes.container}>
      <div className={classes.categoriesWrapper}>
        <ProductCategories />
      </div>
      <div className={classes.filterWrapper}>
        <Filter />
      </div>
      <ProductsList />
      <div className={classes.loaderWrapper}>
        <Loader />
      </div>
      {pagesCount > 1 && <Pagination pagesCount={pagesCount} />}
    </section>
  );
};
