import { Products } from '../pages/products/Products';
import { Request } from '../pages/request/Request';
import { Categories } from '../pages/categories/Categories';
import { Product } from '../pages/product/Product';
import { NotFound } from '../pages/not-found/NotFound';

export const routes = {
  categories: {
    path: '/',
    element: Categories,
    navigation: {
      title: 'Продукция',
    },
  },
  products: {
    path: '/:categoryId/:filterId',
    element: Products,
  },
  product: {
    path: '/:categoryId/:filterId/:productId',
    element: Product,
  },
  notFoundPage: {
    path: '/404',
    element: NotFound,
  },
  request: {
    path: '/request',
    element: Request,
  },
};
