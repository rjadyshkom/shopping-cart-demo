import produce from 'immer';
import * as cartActions from './../actions/cart';

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case cartActions.SET_ITEMS: {
        draftState.items = action.payload;
        break;
      }
      case cartActions.ADD_ITEM: {
        const isExist = state.items.find((item) => item.id === action.payload.id);
        draftState.items = [...state.items, { ...action.payload, qty: 1 }];

        if (isExist) {
          draftState.items = state.items.map((item) =>
            item.id === action.payload.id
              ? {
                ...isExist,
                qty: isExist.qty + 1,
              }
              : item,
          );
        }
        break;
      }
      case cartActions.DECREASE_ITEM: {
        const isExist = state.items.find((item) => item.id === action.payload.id);
        if (isExist.qty === 1) {
          return null;
        }
        draftState.items = state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...isExist,
                qty: isExist.qty - 1,
              }
            : item,
        );
        break;
      }
      case cartActions.DELETE_ITEM: {
        draftState.items = state.items.filter((item) => item.id !== action.payload.id);
        break;
      }
      default: {
        return state;
      }
    }
  });
};
