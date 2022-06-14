import React, { useEffect } from 'react';
import classes from '../forms.module.css';
import { ErrorMessage, Field, Form } from 'formik';
import { Button } from '../../UI/button/Button';
import { onStateSuccess, onStateError } from '../../../helpers/constants';
import { Success } from '../../UI/success/Success';
import { Error } from '../../UI/error/Error';
import { TotalPrice } from '../../UI/total-price/TotalPrice';
import { PopupContent } from '../../UI/popup/PopupContent';

export const RequestFormLayout = ({
  formikProps,
  cartItems,
  handleUpdateForm,
  submitState,
  setSubmitState,
  isPopupOpen,
  setIsPopupOpen,
}) => {
  const productsInRequest =
    cartItems.length === 0
      ? '[ Пользователь не добавил тренажёры в заявку ]'
      : cartItems.map((product) => `[ ${product.name}: ${product.qty} шт. ]`);
  const isSubmitError = submitState === onStateError;
  const isSubmitSuccess = submitState === onStateSuccess;

  const handleRequestClose = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    handleUpdateForm(formikProps.values);
  }, [formikProps.values, handleUpdateForm]);

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
          disableOverlayClick // тест
        >
          {isSubmitError ? <Error /> : isSubmitSuccess ? <Success /> : null}
        </PopupContent>
      )}
      <fieldset className={classes.dataWrapper}>
        <label htmlFor={'cartName'} className={classes.fieldWrapper}>
          Имя:
          <Field type="text" name="cartName" placeholder="Сергей" />
          <ErrorMessage name="cartName" component="span" className={classes.error} />
        </label>

        <label htmlFor={'cartEmail'} className={classes.fieldWrapper}>
          Почта:
          <Field type="email" name="cartEmail" placeholder="Заявка придёт на указанную почту" />
          <ErrorMessage name="cartEmail" component="span" className={classes.error} />
        </label>

        <label htmlFor={'cartPhone'} className={classes.fieldWrapper}>
          Телефон:
          <Field type="text" name="cartPhone" placeholder="89663672914" />
          <ErrorMessage name="cartPhone" component="span" className={classes.error} />
        </label>
        <Field type="hidden" name="cartProducts" />
      </fieldset>
      <TotalPrice cartItems={cartItems} />
      <fieldset className={classes.controlsWrapper}>
        <div className={classes.buttonWrapper}>
          <Button type="submit" disabled={!formikProps.isValid || formikProps.isSubmitting}>
            {formikProps.isSubmitting ? 'Заявка отправляется ...' : submitState ? submitState : 'Отправить заявку'}
          </Button>
        </div>
      </fieldset>
    </Form>
  );
};
