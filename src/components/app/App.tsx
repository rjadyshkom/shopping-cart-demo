import React, { useEffect } from 'react';
import { Header } from '../UI/header/Header';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import classes from './App.module.css';
import { Navigation } from '../UI/navigation/Navigation';
import { CartQuantity } from '../UI/cart/quantity/CartQuantity';
import { PopupPlace } from '../UI/popup/PopupPlace';
import { routes } from '../../helpers/routes';

function App() {
  const location = useLocation();

  useEffect(() => {
    //@ts-ignore
    window.ym(90306134, 'hit', location.pathname);
  }, [location]);
  return (
    <>
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
