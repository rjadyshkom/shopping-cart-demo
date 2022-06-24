import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './services/reducers';
import { loadState, saveState } from './helpers/localStorage';
import { throttle } from 'lodash';

function thunk(store) {
  return function (next) {
    return function (action) {
      if (typeof action !== 'function') {
        return next(action);
      }
      return action(store.dispatch);
    };
  };
}

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(
  throttle(() => {
    saveState({ cart: store.getState().cart });
  }, 1000),
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
