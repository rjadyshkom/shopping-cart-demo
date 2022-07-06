import produce from 'immer';
import * as cartActions from '../actions/cart';
import { TCartAction, TCartItem, TCartState, TItem } from '../models';

const initialState: TCartState = {
  items: [],
};

export const cartReducer = (state: TCartState = initialState, action: TCartAction) => {
  return produce(state, (draftState: any) => {
    switch (action.type) {
      case cartActions.SET_ITEMS: {
        draftState.items = action.payload;
        break;
      }
      case cartActions.ADD_ITEM: {
        // undefined | не присваивается тип
        const isItemExist: TCartItem | any = state.items.find((item: TItem) => item.id === action.payload.id);
        draftState.items = [...state.items, { ...action.payload, qty: 1 }];

        if (isItemExist) {
          draftState.items = state.items.map((item: TItem) =>
            item.id === action.payload.id
              ? {
                  ...isItemExist,
                  qty: isItemExist.qty + 1,
                }
              : item,
          );
        }
        break;
      }
      case cartActions.DECREASE_ITEM: {
        // undefined | не присваивается тип
        const isItemExist: TCartItem | any = state.items.find((item: TItem) => item.id === action.payload.id);
        if (isItemExist.qty === 1) {
          return null;
        }
        draftState.items = state.items.map((item: TItem) =>
          item.id === action.payload.id
            ? {
                ...isItemExist,
                qty: isItemExist.qty - 1,
              }
            : item,
        );
        break;
      }
      case cartActions.DELETE_ITEM: {
        draftState.items = state.items.filter((item: TItem) => item.id !== action.payload.id);
        break;
      }
      default: {
        return state;
      }
    }
  });
};
