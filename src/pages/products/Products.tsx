import React, { useEffect } from 'react';
import classes from './Products.module.css';
import { Filter } from '../../components/UI/products/filter/Filter';
import { Pagination } from '../../components/UI/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../services/selectors/products';
import { getProductsThunk } from '../../services/thunk/products';
import { ProductCategories } from '../../components/UI/products/categories/ProductCategories';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { transliterateUrl, urlToCyrillic } from '../../helpers/constants';
import { ProductsList } from '../../components/UI/products/list/ProductsList';
import { Loader } from '../../components/UI/products/loader/Loader';
import * as productAction from './../../services/actions/products';

export const Products = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();

  const { pagesCount, filters } = useSelector(productsSelector);

  const activeFilter = useSelector((state: any) => state.products.activeFilter);
  const activeCategory = useSelector((state: any) => state.products.activeCategory);
  const currentPage = useSelector((state: any) => state.products.currentPage);

  const stateCategories = useSelector((state: any) => state.products.categories);

  const categoryFromUrl = urlToCyrillic(params.categoryId);
  const isCategoryFromUrlExist = stateCategories.includes(categoryFromUrl);

  const filterFromUrl = urlToCyrillic(searchParams.get('filter'));
  const isFilterFromUrlExist = filters.includes(filterFromUrl);

  useEffect(() => {
    dispatch(productAction.setCategory(isCategoryFromUrlExist ? categoryFromUrl : activeCategory));
    dispatch(productAction.setFilter(isFilterFromUrlExist ? filterFromUrl : 'все'));
    dispatch(getProductsThunk);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    navigate({
      pathname: `/${transliterateUrl(activeCategory)}`,
      search: createSearchParams({
        filter: `${transliterateUrl(activeFilter)}`,
        ...(pagesCount > 1 && { page: `${currentPage}` }),
      }).toString(),
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
