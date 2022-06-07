import React, { useState, useEffect } from 'react';
import classes from './Lightbox.module.css';

export const Lightbox = ({ children, image, alt, Wrapper = 'div' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.removeAttribute('style');
    }
  }, [isOpen]);

  return (
    <Wrapper onClick={toggleIsOpen}>
      {children}
      {isOpen ? (
        <div className={classes.content} onClick={toggleIsOpen}>
          <img draggable="false" className={classes.image} src={image} alt={alt} />
        </div>
      ) : null}
    </Wrapper>
  );
};
