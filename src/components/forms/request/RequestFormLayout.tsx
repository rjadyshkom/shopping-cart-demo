import React, { useEffect } from 'react';
import classes from '../forms.module.css';
import { ErrorMessage, Field, Form } from 'formik';
import { onStateSuccess, onStateError } from '../../../helpers/constants';
import { Success } from '../../UI/success/Success';
import { Error } from '../../UI/error/Error';
import { PopupContent } from '../../UI/popup/PopupContent';
import { useDispatch, useSelector } from 'react-redux';
import * as formActions from '../../../services/actions/form';
import { ButtonPrimary } from '../../UI/buttons/ButtonPrimary';

export const RequestFormLayout = ({ formikProps, submitState, setSubmitState, isPopupOpen, setIsPopupOpen }: any) => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  const productsInRequest =
    cartItems.length === 0
      ? '[ Пользователь не добавил тренажёры в заявку ]'
      : cartItems.map((product: any) => `[ ${product.name}: ${product.qty} шт. ]`);
  const isSubmitError = submitState === onStateError;
  const isSubmitSuccess = submitState === onStateSuccess;

  const handleRequestClose = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    dispatch(formActions.setData(formikProps.values));
  }, [formikProps.values, dispatch]);

  useEffect(() => {
    formikProps.setFieldValue('cartProducts', productsInRequest);
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <Form noValidate className={classes.container}>
      {isPopupOpen && (
        <PopupContent
          id={'cart'}
          onRequestClose={handleRequestClose}
          onRequestSetSubmitState={setSubmitState}
          isSubmitSuccess={isSubmitSuccess}
        >
          {isSubmitError ? <Error /> : isSubmitSuccess ? <Success /> : null}
        </PopupContent>
      )}
      <fieldset className={classes.dataWrapper}>
        <label htmlFor={'cartName'} className={classes.fieldWrapper}>
          <Field type="text" name="cartName" placeholder="ФИО / Организация *" />
          <ErrorMessage name="cartName" component="span" className={classes.error} />
        </label>

        <label htmlFor={'cartEmail'} className={classes.fieldWrapper}>
          <Field type="email" name="cartEmail" placeholder="Эл. почта *" />
          <ErrorMessage name="cartEmail" component="span" className={classes.error} />
        </label>

        <label htmlFor={'cartPhone'} className={classes.fieldWrapper}>
          <Field type="text" name="cartPhone" placeholder="Телефон *" />
          <ErrorMessage name="cartPhone" component="span" className={classes.error} />
        </label>
        <label htmlFor={'cartMessage'} className={classes.fieldWrapper}>
          <Field as="textarea" name="cartMessage" placeholder="Комментарий к заявке" />
        </label>
        <Field type="hidden" name="cartProducts" />
      </fieldset>
      <fieldset>
        <p className={classes.beforeSubmitMessage}>
          Нажимая «Отправить заявку», вы даёте согласие на обработку персональных данных в соответствии с политикой
          конфиденциальности
        </p>
        <ButtonPrimary type="submit">
          {formikProps.isSubmitting ? 'Заявка отправляется ...' : submitState ? submitState : 'Отправить заявку'}
        </ButtonPrimary>
      </fieldset>
    </Form>
  );
};
