import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { appJsx } from './root-jsx';

const rootElement: any = document.querySelector('#root') as HTMLElement;

if (rootElement.hasChildNodes()) {
  const root = ReactDOM.hydrateRoot(rootElement, appJsx, {
    onRecoverableError: () => void 0,
  });
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(appJsx);
}
