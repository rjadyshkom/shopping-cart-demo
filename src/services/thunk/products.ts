import { ProductsService } from '../ProductsService';
import * as productsActions from '../actions/products';

export function getProductsThunk(dispatch:any) {
  return ProductsService.getAll()
    .then((response) => {
      dispatch(productsActions.setLoading(true));
      dispatch(productsActions.setProducts(response.data));
    })
    .then(() => dispatch(productsActions.setLoading(false)))
    .catch(() => {
      dispatch(productsActions.setLoading(false));
      dispatch(productsActions.setError(true));
    });
}
