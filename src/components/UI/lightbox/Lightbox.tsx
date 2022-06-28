import React, { useState, useRef } from 'react';
import classes from './Lightbox.module.css';
import { motion, useDomEvent } from 'framer-motion';

export const Lightbox = ({ children, image, alt, Wrapper = 'div' }:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  const transition = {
    duration: 0.5,
    type: 'spring',
  };

  useDomEvent(useRef(window), 'scroll', () => isOpen && setIsOpen(false));

  return (
    <Wrapper onClick={toggleIsOpen}>
      {children}
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className={classes.content}
          onClick={toggleIsOpen}
        >
          <motion.img
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={transition}
            draggable={false}
            className={classes.image}
            src={image}
            alt={alt}
          />
        </motion.div>
      ) : null}
    </Wrapper>
  );
};
