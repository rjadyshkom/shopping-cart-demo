import { Products } from '../pages/products/Products';
import { Request } from '../pages/request/Request';

export const routes = {
  products: {
    path: '/',
    element: Products,
    exact: true,
    navigation: {
      title: 'Продукты',
    },
  },
  request: {
    path: '/request',
    element: Request,
    navigation: {
      title: 'Заявка',
    },
  },
};
