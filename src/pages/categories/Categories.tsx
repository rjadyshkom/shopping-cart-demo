import React from 'react';
import classes from './categories.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { transliterateUrl } from '../../helpers/constants';
import * as productsActions from './../../services/actions/products';
import { RoundedSectionWrapper } from '../../components/UI/rounded-section-wrapper/RoundedSectionWrapper';
import { Layout } from '../../components/UI/layout/Layout';

export const Categories = () => {
  const dispatch: any = useDispatch();

  const categories = useSelector((state: any) => state.products.categories);
  const filters = useSelector((state: any) => state.products.filters);

  return (
    <Layout>
      <section>
        <RoundedSectionWrapper>
          <div>
            <h1 className={classes.heading}>Продукция</h1>
            <div className={classes.description}>
              <p>
                IRON TIGER – это надежный партнёр для тех, кто стремится воплощать инновационные принципы проектирования
                жилой среды.
              </p>
              <p>Мы создаём спортивные площадки для любых возрастов, целей и видов нагрузки. </p>
            </div>
          </div>
        </RoundedSectionWrapper>
        <div className={classes.categories}>
          {categories.map((category: any, key: number) => (
            <Link
              className={classes.link}
              key={key}
              to={`/${transliterateUrl(category)}/${transliterateUrl(filters[0])}`} // написать проверку, чтобы не сбрасывать фильтры при клике
              onClick={() => {
                dispatch(productsActions.setCategory(category));
              }}
            >
              {category}
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};
