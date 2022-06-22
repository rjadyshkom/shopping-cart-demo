import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import { productsReducer } from './products';

export const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});
