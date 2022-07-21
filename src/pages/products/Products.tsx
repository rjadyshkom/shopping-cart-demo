import React, { useEffect } from 'react';
import classes from './Products.module.css';
import { Filter } from '../../components/UI/products/filter/Filter';
import { Pagination } from '../../components/UI/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../services/selectors/products';
import { ProductCategories } from '../../components/UI/products/categories/ProductCategories';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { transliterateUrl, urlToCyrillic } from '../../helpers/constants';
import { ProductsList } from '../../components/UI/products/list/ProductsList';
import * as productAction from './../../services/actions/products';

export const Products = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const activeFilter = useSelector((state: any) => state.products.activeFilter);
  const activeCategory = useSelector((state: any) => state.products.activeCategory);
  const currentPage = useSelector((state: any) => state.products.currentPage);
  const stateCategories = useSelector((state: any) => state.products.categories);
  const filters = useSelector((state: any) => state.products.filters);

  const categoryFromUrl = urlToCyrillic(params.categoryId);
  const isCategoryFromUrlExist = stateCategories.includes(categoryFromUrl);

  const filterFromUrl = urlToCyrillic(params.filterId);
  const isFilterFromUrlExist = filters.includes(filterFromUrl);

  const { categoryPagesCount } = useSelector(productsSelector);

  const pageNumberFromUrl = Number(params.pageId);
  // const isPageNumberFromUrlExist = pageNumberFromUrl <= pagesCount;

  useEffect(() => {
    dispatch(productAction.setCategory(isCategoryFromUrlExist ? categoryFromUrl : activeCategory));
    dispatch(productAction.setFilter(isFilterFromUrlExist ? filterFromUrl : filters[0]));
    dispatch(productAction.setPage(pageNumberFromUrl));
  }, []);

  useEffect(() => {
    navigate(`/${transliterateUrl(activeCategory)}/${transliterateUrl(activeFilter)}/${pageNumberFromUrl}`);
  }, [activeCategory, activeFilter, currentPage]);

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
      {categoryPagesCount > 1 && <Pagination pagesCount={categoryPagesCount} />}
    </section>
  );
};
