import { INCREASE_ITEM, DECREASE_ITEM, DELETE_ITEM } from '../actions/cart';

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_ITEM: {
      return {
        ...state,
        items: [...state.items].map((item) => (item.id === action.id ? { ...item, qty: item.qty + 1 } : item)),
      };
    }
    case DECREASE_ITEM: {
      return {
        ...state,
        items: [...state.items].map((item) => (item.id === action.id ? { ...item, qty: item.qty - 1 } : item)),
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        items: [...state.items].filter((item) => item.id !== action.id),
      };
    }
    default: {
      return state;
    }
  }
};
