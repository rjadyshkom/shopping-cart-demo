import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './services/reducers';

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

const store = createStore(rootReducer, applyMiddleware(thunk));
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
