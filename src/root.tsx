import React from 'react';
import { Provider } from 'react-redux';
import { LoadingWrapper } from './components/UI/loading-wrapper/LoadingWrapper';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import { store } from './store';
import { HelmetProvider } from 'react-helmet-async';

export const appJsx = (
  <React.StrictMode>
    <Provider store={store}>
      <LoadingWrapper>
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </LoadingWrapper>
    </Provider>
  </React.StrictMode>
);