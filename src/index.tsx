import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { appJsx } from './root';

const rootElement: any = document.querySelector('#root') as HTMLElement;

if (rootElement.hasChildNodes()) {
  // eslint-disable-next-line
  const root = ReactDOM.hydrateRoot(rootElement, appJsx, {
    onRecoverableError: () => void 0,
  });
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(appJsx);
}
