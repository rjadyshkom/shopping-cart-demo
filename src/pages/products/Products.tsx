import React, { useEffect } from 'react';
import classes from './Products.module.css';
import { Filter } from '../../components/UI/products/filter/Filter';
import { Pagination } from '../../components/UI/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../services/selectors/products';
import { ProductCategories } from '../../components/UI/products/categories/ProductCategories';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { transliterateUrl, urlToCyrillic } from '../../helpers/constants';
import { ProductsList } from '../../components/UI/products/list/ProductsList';
import * as productAction from './../../services/actions/products';
import { RoundedSectionWrapper } from '../../components/UI/rounded-section-wrapper/RoundedSectionWrapper';
import { Layout } from '../../components/UI/layout/Layout';
import { PageNavigation } from '../../components/UI/page-navigation/PageNavigation';

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

  const pageNumberFromUrl = Number(searchParams.get('page'));

  const notAFitnessCategory = ['благоустройство'];
  const isNotAFitnessMachine = notAFitnessCategory.includes(activeCategory);

  const links = {
    catalogues: {
      path: '/catalogues',
      navigation: {
        title: 'Каталоги PDF',
      },
    },
    guaranties: {
      path: '/guaranties',
      navigation: {
        title: 'Гарантии',
      },
    },
    certificates: {
      path: '/certificates',
      navigation: {
        title: 'Сертификаты',
      },
    },
  };

  useEffect(() => {
    navigate(
      {
        pathname: `/${transliterateUrl(activeCategory)}/${transliterateUrl(activeFilter)}`,
        search: createSearchParams({
          ...(categoryPagesCount > 1 && {
            page: `${currentPage}`,
          }),
        }).toString(),
      },
      { replace: true },
    );
    // eslint-disable-next-line
  }, [activeFilter, activeCategory, currentPage]);

  useEffect(() => {
    dispatch(productAction.setCategory(isCategoryFromUrlExist ? categoryFromUrl : activeCategory));
    dispatch(productAction.setFilter(isFilterFromUrlExist ? filterFromUrl : filters[0]));
    dispatch(productAction.setPage(!pageNumberFromUrl ? currentPage : pageNumberFromUrl));
    // eslint-disable-next-line
  }, []);

  if (pageNumberFromUrl > categoryPagesCount) {
    navigate('/404'); // можно сделать компонент с предложениями похожих товаров и перекидывать на него
  }
  return (
    <Layout>
      <section>
        <RoundedSectionWrapper>
          <PageNavigation items={links} />
          <div>
            <h1 className={classes.heading}>{activeCategory}</h1>
            <div className={classes.description}>
              <p>Всё оборудование сертифицировано и отвечает международным стандартам качества.</p>
              {/*вынести в отдельный компонент*/}
              <div className={classes.alertContainer}>
                <p className={classes.alert}>Цены уточняйте у менеджеров!</p>
                <span className={classes.infoIcon}></span>
              </div>
              {/*вынести в отдельный компонент*/}
              {!isNotAFitnessMachine && (
                <button className={classes.link}>
                  Каждый тренажёр можно оборудовать уникальной мультимедийной системой
                </button>
              )}
            </div>
          </div>
        </RoundedSectionWrapper>
        <div className={classes.container}>
          <div className={classes.categoriesWrapper}>
            <ProductCategories />
          </div>
          <div className={classes.filterWrapper}>
            <Filter />
          </div>
          <ProductsList />
          {categoryPagesCount > 1 && <Pagination pagesCount={categoryPagesCount} />}
        </div>
      </section>
    </Layout>
  );
};
