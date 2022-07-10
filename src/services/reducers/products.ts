import produce from 'immer';
import * as productsActions from '../actions/products';

const initialState = {
  products: [],
  productsPerPage: 7,
  currentPage: 1,
  activeFilter: 'Все',
  filters: ['Все'],
  activeCategory: 'Уличные тренажёры',
  categories: [],
  error: false,
  loading: false,
};

export const productsReducer = (state = initialState, action: any) => {
  return produce(state, (draftState: any) => {
    switch (action.type) {
      case productsActions.SET_PRODUCTS: {
        draftState.categories = [
          ...new Set(
            action.payload
              .map((category: any) => category.category)
              .join()
              .split(',')
              .sort(),
          ),
        ];

        draftState.filters = [
          'Все',
          ...new Set(
            action.payload
              .map((filter: any) => filter.filters)
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
      case productsActions.SET_FILTER: {
        draftState.activeFilter = action.payload;
        draftState.currentPage = 1;
        break;
      }
      case productsActions.SET_CATEGORY: {
        draftState.activeCategory = action.payload;
        draftState.activeFilter = 'Все';
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
