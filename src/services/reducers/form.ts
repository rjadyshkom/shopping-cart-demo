import produce from 'immer';
import * as formActions from '../actions/form';

const initialState = {
  data: {
    cartName: '',
    cartEmail: '',
    cartPhone: '',
    cartProducts: [],
  },
};

export const formReducer = (state = initialState, action:any) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case formActions.SET_DATA: {
        draftState.data = action.payload;
        break;
      }
      default: {
        return state;
      }
    }
  });
};
