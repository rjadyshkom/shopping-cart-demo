import React, { useEffect } from 'react';
import classes from './Filter.module.css';

export const Filter = ({ products, setProductsToFilter, activeCategory, setActiveCategory, paginate }) => {
  const chips = [...new Set(products.map((label) => label.category))];

  const filter = (category) => {
    const filtered = products.filter((product) => product.category.includes(category));
    setActiveCategory(category);
    setProductsToFilter(filtered);
    paginate(1);
  };

  useEffect(() => {
    if (activeCategory === 'все') {
      setProductsToFilter(products);
    }
    // eslint-disable-next-line
  }, [products]);

  return (
    <div className={classes.container}>
      <span
        className={activeCategory === 'все' ? `${classes.label} ${classes.active}` : classes.label}
        onClick={() => {
          setActiveCategory('все');
          setProductsToFilter(products);
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
