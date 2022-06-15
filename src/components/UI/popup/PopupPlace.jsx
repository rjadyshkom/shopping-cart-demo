import React, { useEffect, useState } from 'react';
import { popupService } from './popup.service';
import { createPortal } from 'react-dom';
import classes from './Popup.module.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const PopupPlace = () => {
  const [popups, setPopups] = useState([]);
  const transition = { duration: 0.3, type: 'spring' };
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (currentPopup.onRequestClose) {
      currentPopup.onRequestClose();
    }
    if (currentPopup.onRequestSetSubmitState) {
      currentPopup.onRequestSetSubmitState(null);
    }
    if (currentPopup.isSubmitSuccess) {
      navigate('/');
    }
  };

  useEffect(() => {
    return popupService.listen((items) => {
      setPopups(items);
    });
  }, []);

  const currentPopup = popups[popups.length - 1];
  return !!currentPopup
    ? createPortal(
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={transition}
          className={classes.overlay}
          onClick={currentPopup.hasOwnProperty('disableOverlayClick') ? null : handleOnClick}
        >
          <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 10 }}
            transition={transition}
            className={classes.content}
            onClick={(event) => event.stopPropagation()}
          >
            {currentPopup.children}
            <button className={classes.close} onClick={handleOnClick}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.627517 0.0246293C0.374555 0.0837416 0.0983411 0.368342 0.036361 0.633642C-0.00334384 0.803698 -0.00115538 0.871423 0.0497652 1.04696C0.10901 1.25103 0.231641 1.37787 4.46986 5.61857L8.82898 9.98031L4.49217 14.3266C1.11261 17.7135 0.137929 18.7117 0.0763393 18.849C-0.031911 19.0904 -0.0253847 19.3003 0.0981457 19.5486C0.272792 19.8997 0.609384 20.0588 1.01171 19.9804L1.22665 19.9385L5.61149 15.5496L9.99633 11.1607L14.3848 15.549L18.7734 19.9373L18.9883 19.9798C19.3899 20.0592 19.727 19.9001 19.9019 19.5486C20.0254 19.3003 20.0319 19.0904 19.9237 18.849C19.8621 18.7117 18.8874 17.7135 15.5079 14.3266L11.1712 9.98047L15.5304 5.61822C19.7337 1.41193 19.8917 1.24861 19.9491 1.05072C20.1067 0.507823 19.7251 -0.00218652 19.1641 0.00141503C19.0171 0.00235456 18.8787 0.0292878 18.7929 0.0736416C18.7177 0.112554 16.7085 2.09352 14.3281 4.47582L10 8.80727L5.67194 4.47582C3.29153 2.09352 1.28859 0.116704 1.22098 0.0829195C1.05344 -0.000894655 0.830418 -0.0227779 0.627517 0.0246293Z" />
              </svg>
            </button>
          </motion.div>
        </motion.div>,
        document.body,
      )
    : null;
};
