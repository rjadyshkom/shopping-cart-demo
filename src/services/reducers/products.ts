import produce from 'immer';
import * as productsActions from '../actions/products';

const initialState = {
  products: [],
  productsPerPage: 6,
  currentPage: 1,
  currentCategory: 'Все',
  categories: ['Все'],
  error: false,
  loading: false,
};

export const productsReducer = (state = initialState, action: any) => {
  return produce(state, (draftState: any) => {
    switch (action.type) {
      case productsActions.SET_PRODUCTS: {
        draftState.categories = [
          'Все',
          ...new Set(
            action.payload
              .map((item: any) => item.activities)
              .join()
              .split(',')
              .sort(),
          ),
        ];
        draftState.products = action.payload;
        break;
      }
      case productsActions.SET_PAGE: {
        draftState.currentPage = action.payload;
        break;
      }
      case productsActions.SET_CATEGORY: {
        draftState.currentCategory = action.payload;
        draftState.currentPage = 1;
        break;
      }
      case productsActions.SET_ERROR: {
        draftState.error = action.payload;
        break;
      }
      case productsActions.SET_LOADING: {
        draftState.loading = action.payload;
        break;
      }
      default: {
        return state;
      }
    }
  });
};
