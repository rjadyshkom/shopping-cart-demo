import produce from 'immer';
import * as productsActions from './../actions/products';

const initialState = {
  products: [],
  productsPerPage: 6,
  currentPage: 1,
};

export const productsReducer = (state = initialState, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case productsActions.SET_PRODUCTS: {
        draftState.products = action.payload;
      }
      case productsActions.SET_PAGE: {
        draftState.currentPage = action.payload;
      }
    }
  });
};
