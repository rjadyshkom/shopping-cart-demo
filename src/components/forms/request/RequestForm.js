import React, { useState } from 'react';
import { Formik } from 'formik';
import { validationSchema } from '../../../helpers/validation';
import { RequestFormLayout } from './RequestFormLayout';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { requestFormInitialValues } from '../../../helpers/constants';
import axios from 'axios';
import { getFormData, onStateError, onStateSuccess } from '../../../helpers/constants';

export const RequestForm = ({ cartItems, setCartItems, isModalOpen, setIsModalOpen }) => {
  const API_URL = 'https://api.irontiger.ru/wp-json';
  const FORM_ID = '74';
  const [initialValues, handleUpdateForm] = useLocalStorage('form', requestFormInitialValues);
  const [submitState, setSubmitState] = useState(''); // 'Успешно!', 'Ошибка!'

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios({
        url: `${API_URL}/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        method: 'POST',
        data: getFormData(values),
      });
      setIsModalOpen(true);
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
      setIsModalOpen(true);
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
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </Formik>
  );
};
