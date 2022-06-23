import { ProductsService } from '../ProductsService';
import * as productsActions from '../actions/products';

export function getProductsThunk(dispatch) {
  return ProductsService.getAll().then((response) => {
    dispatch(productsActions.setProducts(response.data));
  });
}
