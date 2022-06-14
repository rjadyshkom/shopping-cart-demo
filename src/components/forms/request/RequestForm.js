import React, { useState } from 'react';
import { Formik } from 'formik';
import { validationSchema } from '../../../helpers/validation';
import { RequestFormLayout } from './RequestFormLayout';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { requestFormInitialValues } from '../../../helpers/constants';
import { getFormData, onStateError, onStateSuccess } from '../../../helpers/constants';
import { MailService } from '../../../services/MailService';

export const RequestForm = ({ cartItems, setCartItems}) => {
  const [initialValues, handleUpdateForm] = useLocalStorage('form', requestFormInitialValues);
  const [submitState, setSubmitState] = useState(''); // 'Успешно!', 'Ошибка!'
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await MailService.sendUserData(getFormData(values));
      setIsPopupOpen(true);
      setSubmitState(onStateSuccess);
      setSubmitting(false);
      setCartItems([]);
      resetForm({
        values: {
          cartName: '',
          cartEmail: '',
          cartPhone: '',
          cartProducts: [],
        },
      });
    } catch (error) {
      setIsPopupOpen(true);
      setSubmitState(onStateError);
      setSubmitting(false);
      console.log(error);
    }
  };

  return (
    <Formik validateOnChange validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
      {(props) => (
        <RequestFormLayout
          formikProps={props}
          cartItems={cartItems}
          handleUpdateForm={handleUpdateForm}
          submitState={submitState}
          setSubmitState={setSubmitState}
          isPopupOpen={isPopupOpen}
          setIsPopupOpen={setIsPopupOpen}
        />
      )}
    </Formik>
  );
};
