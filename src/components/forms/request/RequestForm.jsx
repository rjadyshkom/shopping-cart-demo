import React, { useEffect } from 'react';
import classes from '../forms.module.css';
import { ErrorMessage, Field, Form } from 'formik';
import { Button } from '../../UI/button/Button';
import { onStateSuccess, onStateError } from '../../../helpers/constants';
import { Modal } from '../../UI/modal/Modal';
import { Success } from '../../UI/success/Success';
import { Error } from '../../UI/error/Error';

export const RequestForm = ({
                                values,
                                isSubmitting,
                                setFieldValue,
                                isValid,
                                cartItems,
                                saveForm,
                                submitState,
                                setSubmitState,
                                modal,
                                setModal
                            }) => {
    const productsInRequest = cartItems.length === 0 ? '[ Пользователь не добавил тренажёры в заявку]' : cartItems.map(product => `[ ${product.name}: ${product.qty} шт. ]`);
    const productPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

    const isSubmitError = submitState === onStateError;
    const isSubmitSuccess = submitState === onStateSuccess;

    useEffect(() => {
        saveForm(values);
    }, [values, saveForm]);

    useEffect(() => {
        setFieldValue('cartProducts', productsInRequest)
        // eslint-disable-next-line
    }, [cartItems])

    return (
        <Form noValidate className={classes.container}>
            <fieldset className={classes.dataWrapper}>
                <label htmlFor={'cartName'} className={classes.fieldWrapper}>
                    Имя:
                    <Field type="text" name="cartName" placeholder="Сергей" />
                    <ErrorMessage name="cartName" component="span" className={classes.error} />
                </label>

                <label htmlFor={'cartEmail'} className={classes.fieldWrapper}>
                    Почта:
                    <Field type="email" name="cartEmail" placeholder="ya@ohuel.ru" />
                    <ErrorMessage name="cartEmail" component="span" className={classes.error} />
                </label>

                <label htmlFor={'cartPhone'} className={classes.fieldWrapper}>
                    Телефон:
                    <Field type="text" name="cartPhone" placeholder="89663672914" />
                    <ErrorMessage name="cartPhone" component="span" className={classes.error} />
                </label>
                <Field type="hidden" name="cartProducts" />
            </fieldset>
            {cartItems.length !== 0 &&
                <div className={classes.total}>
                    <h3>Стоимость:</h3>
                    <span>от {productPrice} руб.</span>
                </div>}
            <fieldset className={classes.controlsWrapper}>
                <div className={classes.buttonWrapper}>
                    <Button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                    >
                        {isSubmitting
                            ? 'Заявка отправляется ...'
                            : submitState ? submitState : 'Отправить заявку'}
                    </Button>
                </div>
                <Modal isVisible={modal} setIsVisible={setModal} setSubmitState={setSubmitState} isSubmitSuccess={isSubmitSuccess}>
                    {
                        isSubmitError

                            ? <Error />
                            : isSubmitSuccess
                                ? <Success />
                                : null
                    }
                </Modal>
            </fieldset>
        </Form>
    );
};