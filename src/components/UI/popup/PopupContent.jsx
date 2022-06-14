// eslint-disable-next-line
import React, { useEffect } from 'react';
import { popupService } from './popup.service';

export const PopupContent = (props) => {
  useEffect(() => {
    popupService.open(
      props.id,
      props.children,
      props.onRequestClose,
      props.onRequestSetSubmitState,
      props.isSubmitSuccess,
      props.disableOverlayClick,
    );

    return () => {
      popupService.close(props.id);
    };
    // eslint-disable-next-line
  }, []);
  return null;
};
