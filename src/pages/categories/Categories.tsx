import React from 'react';
import classes from './categories.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { transliterateUrl } from '../../helpers/constants';
import * as productsActions from './../../services/actions/products';
import { RoundedSectionWrapper } from '../../components/UI/rounded-section-wrapper/RoundedSectionWrapper';
import { Layout } from '../../components/UI/layout/Layout';
import beautification from './../../images/categories-blagoustrojstvo.jpg';
import outdoorEquipment from './../../images/categories-ulichnye-trenazhyory.jpg';
import { SEO } from '../../helpers/SEO';

export const Categories = () => {
  const dispatch: any = useDispatch();

  const categories = useSelector((state: any) => state.products.categories);
  const filters = useSelector((state: any) => state.products.filters);

  const staticData: any = [
    {
      category: 'благоустройство',
      image: beautification,
      caption: 'Урны, лавочки, информационные стенды, велопарковки',
    },
    {
      category: 'уличные тренажёры',
      image: outdoorEquipment,
      caption: 'Силовые, кардио и многофунциональные тренажёры',
    },
  ];

  return (
    <>
      <Layout>
        <section>
          <RoundedSectionWrapper>
            <div>
              <h1 className={classes.heading}>Продукция</h1>
              <div className={classes.description}>
                <p>
                  IRON TIGER – это надежный партнёр для тех, кто стремится воплощать инновационные принципы
                  проектирования жилой среды.
                </p>
                <p>Мы создаём спортивные площадки для любых возрастов, целей и видов нагрузки. </p>
              </div>
            </div>
          </RoundedSectionWrapper>
          <div className={classes.categories}>
            {categories.map((category: any, key: number) => {
              const currentCategory = staticData.find((cover: any) => cover.category === category);
              return (
                <Link
                  className={classes.link}
                  key={key}
                  to={`/${transliterateUrl(category)}/${transliterateUrl(filters[0])}`} // написать проверку, чтобы не сбрасывать фильтры при клике
                  onClick={() => {
                    dispatch(productsActions.setCategory(category));
                  }}
                >
                  <div className={classes.imageWrapper}>
                    <img src={currentCategory.image} alt={category} className={classes.image} />
                  </div>
                  <div className={classes.nameWrapper}>
                    <h2 className={classes.name}>{category}</h2>
                    <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                      <path
                        className={classes.arrow}
                        d="M19.4551 25.1827L18.5005 24.2281L24.5097 18.2189L8.67295 18.2189L8.67295 16.873L24.5097 16.873L18.5005 10.8638L19.4551 9.90919L27.0918 17.5459L19.4551 25.1827Z"
                      />
                    </svg>
                  </div>
                  <p className={classes.caption}>{currentCategory.caption}</p>
                </Link>
              );
            })}
          </div>
        </section>
      </Layout>
      <SEO title={'Продукция'} description={'Страница продукции'} keywords={'Ключевое слово 1, ключевое слово 2'} />
    </>
  );
};
