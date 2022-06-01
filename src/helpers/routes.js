import { Products } from '../pages/products/Products';
import { Request } from '../pages/request/Request';

export const routes = {
    products: {
        path: '/',
        element: Products
    },
    request: {
        path: '/request',
        element: Request
    }
}