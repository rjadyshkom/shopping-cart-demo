import { ProductsService } from '../ProductsService';
import * as productsActions from '../actions/products';
import { makeTimeout } from '../../helpers/constants';

export function getProductsThunk(dispatch: any) {
  dispatch(productsActions.setLoading(true));
  return Promise.all([ProductsService.getAll(), makeTimeout(1500)])
    .then(([response]) => {
      dispatch(productsActions.setProducts(response.data));
      dispatch(productsActions.setLoading(false));
    })
    .catch(() => {
      dispatch(productsActions.setLoading(false));
      dispatch(productsActions.setError(true));
    });
}
