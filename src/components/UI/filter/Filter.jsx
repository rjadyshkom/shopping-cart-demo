import React, { useEffect } from 'react';
import classes from './Filter.module.css';

export const Filter = ({ products, setItems, activeCategory, setActiveCategory }) => {
  const chips = [...new Set(Object.values(products).map((label) => label.category))];
  chips.unshift('Все');

  const filter = (category) => {
    const filtered = Object.values(products).filter((product) => product.category.includes(category));
    setActiveCategory(category);
    setItems(filtered);
  };

  useEffect(() => {
    if (activeCategory.toLocaleLowerCase() === 'все') {
      setItems(products);
    }
  }, [activeCategory, products, setItems]);

  return (
    <div className={classes.container}>
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
