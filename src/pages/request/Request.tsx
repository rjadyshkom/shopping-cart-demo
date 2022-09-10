import React from 'react';
import classes from './Request.module.css';
import { Cart } from '../../components/UI/cart/Cart';
import { RequestForm } from '../../components/forms/request/RequestForm';
import { RoundedSectionWrapper } from '../../components/UI/rounded-section-wrapper/RoundedSectionWrapper';
import { Layout } from '../../components/UI/layout/Layout';
import { SEO } from '../../helpers/SEO';

export const Request = () => {
  return (
    <>
      <Layout>
        <section className={classes.container}>
          <RoundedSectionWrapper>
            <div className={classes.cartWrapper}>
              <div>
                <h1 className={classes.heading}>Заявка на заказ</h1>
                <div className={classes.description}>
                  <p>Отправьте заказ и мы свяжемся с Вами в короткие сроки.</p>
                  {/*вынести в отдельный компонент*/}
                  <div className={classes.alertContainer}>
                    <p className={classes.alert}>Цены уточняйте у менеджеров!</p>
                    <span className={classes.infoIcon}></span>
                  </div>
                  {/*вынести в отдельный компонент*/}
                  <button className={classes.link}>
                    Каждый тренажёр можно оборудовать уникальной мультимедийной системой
                  </button>
                </div>
              </div>
              <div className={classes.printContainer}>
                <p className={classes.alert}>Распечатать заказ</p>
                <span className={classes.printIcon}></span>
              </div>
            </div>
          </RoundedSectionWrapper>
          <Cart />
          <RequestForm />
        </section>
      </Layout>
      <SEO
        title={'Корзина'}
        description={'Страница отправки запроса'}
        keywords={'Ключевое слово 7, ключевое слово 8'}
      />
    </>
  );
};
