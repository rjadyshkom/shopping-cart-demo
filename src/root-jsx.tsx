import React from 'react';
import { Provider } from 'react-redux';
import { LoadingWrapper } from './components/UI/loading-wrapper/LoadingWrapper';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import { store } from './store';

export const appJsx = (
  <React.StrictMode>
    <Provider store={store}>
      <LoadingWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LoadingWrapper>
    </Provider>
  </React.StrictMode>
);