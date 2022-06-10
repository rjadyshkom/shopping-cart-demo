import { Products } from '../pages/products/Products';
import { Request } from '../pages/request/Request';

export const routes = {
  products: {
    path: '/',
    element: Products,
    exact: true,
    navigation: {
      title: 'Продукция',
    },
  },
  request: {
    path: '/request',
    element: Request,
  },
};
