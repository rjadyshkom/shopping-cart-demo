import React from 'react';
import { Header } from '../UI/header/Header';
import { Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import { Navigation } from '../UI/navigation/Navigation';
import { CartQuantity } from '../UI/cart/quantity/CartQuantity';
import { PopupPlace } from '../UI/popup/PopupPlace';
import { Products } from '../../pages/products/Products';
import { Request } from '../../pages/request/Request';
import { Categories } from '../../pages/categories/Categories';
import { Product } from '../../pages/product/Product';

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
          <Route path={'/'} element={<Categories />} />
          <Route path={'/:categoryId/:filterId/:pageId'} element={<Products />} />
          <Route path={'/:categoryId/:filterId/:pageId/:productId'} element={<Product />} />
          <Route path={'/request'} element={<Request />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
