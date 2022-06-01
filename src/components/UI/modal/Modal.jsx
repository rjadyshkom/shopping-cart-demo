import React from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';


export const Modal = ({ children, isVisible, setIsVisible, setSubmitState, isSubmitSuccess }) => {
    const rootClasses = [classes.modal];
    let navigate = useNavigate();

    if (isVisible) {
        rootClasses.push(classes.active, 'in')
    }

    return isVisible &&
        createPortal(
            <div
                className={rootClasses.join(' ')} onClick={() => {
                setIsVisible(false);
                setSubmitState('');
                if (isSubmitSuccess) {
                    navigate('/')
                }
            }}
            >
                <div className={classes.content} onClick={e => e.stopPropagation()}>
                    {children}
                    <button
                        className={classes.close} onClick={() => {
                        setIsVisible(false);
                        setSubmitState('');
                        if (isSubmitSuccess) {
                            navigate('/')
                        }
                    }}
                    />
                </div>
            </div>, document.body
        )
};