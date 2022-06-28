import React, { useState } from 'react';
import { Formik } from 'formik';
import { validationSchema } from '../../../helpers/validation';
import { RequestFormLayout } from './RequestFormLayout';
import { getFormData, onStateError, onStateSuccess } from '../../../helpers/constants';
import { MailService } from '../../../services/MailService';
import * as cartActions from './../../../services/actions/cart';
import { useDispatch, useSelector } from 'react-redux';

export const RequestForm = () => {
  const initialValues = useSelector((state: any) => state.form.data);
  const [submitState, setSubmitState] = useState(''); // 'Успешно!', 'Ошибка!'
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    try {
      await MailService.sendUserData(getFormData(values));
      setIsPopupOpen(true);
      setSubmitState(onStateSuccess);
      setSubmitting(false);
      dispatch(cartActions.setItems([]));
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
          submitState={submitState}
          setSubmitState={setSubmitState}
          isPopupOpen={isPopupOpen}
          setIsPopupOpen={setIsPopupOpen}
        />
      )}
    </Formik>
  );
};
