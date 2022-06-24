import React from 'react';
import { Header } from '../UI/header/Header';
// noinspection ES6CheckImport
import { Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import { routes } from '../../helpers/routes';
import { Navigation } from '../UI/navigation/Navigation';
import { CartQuantity } from '../UI/cart-quantity/CartQuantity';
import { PopupPlace } from '../UI/popup/PopupPlace';

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
            return <Route exact={route.exact ?? false} key={key} path={route.path} element={<route.element />} />;
          })}
        </Routes>
      </div>
    </>
  );
}

export default App;
