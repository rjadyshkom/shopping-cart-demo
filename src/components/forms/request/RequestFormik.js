import React, { useContext, useState } from 'react';
import { Formik } from 'formik';
import { validationSchema } from '../../../helpers/validation';
import { RequestForm } from './RequestForm';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { requestFormInitialValues } from '../../../helpers/constants';
import axios from 'axios';
import { getFormData, onStateError, onStateSuccess } from '../../../helpers/constants';
import { AppContext } from '../../../services/appContext';

export const RequestFormik = () => {

    const API_URL = 'https://api.spa.ohuel.ru/wp-json';
    const FORM_ID = '255';
    const { cartItems, setCartItems, modal, setModal } = useContext(AppContext);
    const [initialValues, handleUpdateForm] = useLocalStorage('form', requestFormInitialValues);
    const [submitState, setSubmitState] = useState('');

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            await axios({
                url: `${API_URL}/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                },
                method: 'POST',
                data: getFormData(values)
            })
            setModal(true)
            setSubmitState(onStateSuccess);
            setSubmitting(false);
            setCartItems([]);
            resetForm({
                values: {
                    cartName: '',
                    cartEmail: '',
                    cartPhone: '',
                    cartProducts: []
                }
            });
        }
        catch (error) {
            setModal(true)
            setSubmitState(onStateError);
            setSubmitting(false);
            console.log(error);
        }
    }

    return (
        <Formik
            validateOnChange
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {(props) => (
                <RequestForm
                    {...props}
                    cartItems={cartItems}
                    saveForm={handleUpdateForm}
                    submitState={submitState}
                    setSubmitState={setSubmitState}
                    modal={modal}
                    setModal={setModal}
                />
            )}
        </Formik>
    );
};