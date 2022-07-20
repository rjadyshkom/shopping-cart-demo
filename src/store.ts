import { loadState, saveState } from './helpers/localStorage';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './services/reducers';
import { getProductsThunk } from './services/thunk/products';
import { throttle } from 'lodash';

function thunk(store: any) {
  return function (next: any) {
    return function (action: any) {
      if (typeof action !== 'function') {
        return next(action);
      }
      return action(store.dispatch);
    };
  };
}

const persistedState = loadState();
export const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.dispatch(getProductsThunk);

store.subscribe(
  throttle(() => {
    saveState({ cart: store.getState().cart, form: store.getState().form });
  }, 1000),
);