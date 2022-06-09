import React from 'react';
import classes from './Filter.module.css';

export const Filter = ({ products, setItems, activeCategory, setActiveCategory }) => {
  const chips = [...new Set(Object.values(products).map((label) => label.category))];

  const filter = (category) => {
    const filtered = Object.values(products).filter((product) => product.category.includes(category));
    setActiveCategory(category);
    setItems(filtered);
  };

  return (
    <div className={classes.container}>
      <span
        className={activeCategory === 'все' ? `${classes.label} ${classes.active}` : classes.label}
        onClick={() => {
          setActiveCategory('все');
          setItems(products);
        }}
      >
        Все
      </span>
      {chips.map((category, key) => (
        <span
          className={activeCategory === category ? `${classes.label} ${classes.active}` : classes.label}
          key={key}
          onClick={() => filter(category)}
        >
          {category}
        </span>
      ))}
    </div>
  );
};
