export const SET_ITEMS = 'SET_ITEMS';
export const setItems = (items) => ({ type: SET_ITEMS, payload: items });
export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (item) => ({ type: ADD_ITEM, payload: item });
export const DECREASE_ITEM = 'DECREASE_ITEM';
export const decreaseItem = (item) => ({ type: DECREASE_ITEM, payload: item });
export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteItem = (item) => ({ type: DELETE_ITEM, payload: item });
