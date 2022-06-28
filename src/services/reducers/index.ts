import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import { productsReducer } from './products';
import { formReducer } from './form';

export const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  form: formReducer,
});
