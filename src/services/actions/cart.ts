export const SET_ITEMS = 'SET_ITEMS';
export const setItems = (items:any) => ({ type: SET_ITEMS, payload: items });
export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (item:any) => ({ type: ADD_ITEM, payload: item });
export const DECREASE_ITEM = 'DECREASE_ITEM';
export const decreaseItem = (item:any) => ({ type: DECREASE_ITEM, payload: item });
export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteItem = (item:any) => ({ type: DELETE_ITEM, payload: item });
