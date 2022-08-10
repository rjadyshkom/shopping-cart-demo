import React from 'react';
import { Header } from '../UI/header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import classes from './App.module.css';
import { Navigation } from '../UI/navigation/Navigation';
import { CartQuantity } from '../UI/cart/quantity/CartQuantity';
import { PopupPlace } from '../UI/popup/PopupPlace';
import { routes } from '../../helpers/routes';
import {ScrollToTop} from '../ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop/>
      <PopupPlace />
      <div className={classes.container}>
        <Header>
          <Navigation />
          <CartQuantity />
        </Header>
        <Routes>
          <Route path={'*'} element={<Navigate replace to={'/404'} />} />
          {Object.values(routes).map((route, key) => {
            return <Route key={key} path={route.path} element={<route.element />} />;
          })}
        </Routes>
      </div>
    </>
  );
}

export default App;
