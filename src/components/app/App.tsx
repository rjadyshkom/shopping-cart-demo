import React from 'react';
import { Header } from '../UI/header/Header';
import { Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import { routes } from '../../helpers/routes';
import { Navigation } from '../UI/navigation/Navigation';
import { CartQuantity } from '../UI/cart/quantity/CartQuantity';
import { PopupPlace } from '../UI/popup/PopupPlace';
import { Products } from '../../pages/products/Products';
import { Request } from '../../pages/request/Request';
import { ProductCategories } from '../UI/products/categories/ProductCategories';

function App() {
  return (
    <>
      <PopupPlace />
      <div className={classes.container}>
        <Header>
          <Navigation />
          <CartQuantity />
        </Header>
        <Routes>
          {Object.values(routes).map((route, key) => {
            return <Route key={key} path={route.path} element={<route.element />} />;
          })}
        </Routes>
      </div>
    </>
  );
}

export default App;
