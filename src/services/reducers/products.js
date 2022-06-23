import produce from 'immer';
import * as productsActions from './../actions/products';

const initialState = {
  products: [],
  productsPerPage: 6,
  currentPage: 1,
  currentCategory: 'Все',
  categories: ['Все'],
  error: false,
  loading: false,
};

export const productsReducer = (state = initialState, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case productsActions.SET_PRODUCTS: {
        draftState.categories = ['Все', ...new Set(action.payload.map((label) => label.category))];
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
