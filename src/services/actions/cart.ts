import { TItem } from '../models';

export const SET_ITEMS = 'SET_ITEMS';
export const setItems = (items: Array<TItem>) => ({ type: SET_ITEMS, payload: items } as const);

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (item: TItem) => ({ type: ADD_ITEM, payload: item } as const);

export const DECREASE_ITEM = 'DECREASE_ITEM';
export const decreaseItem = (item: TItem) => ({ type: DECREASE_ITEM, payload: item } as const);

export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteItem = (item: TItem) => ({ type: DELETE_ITEM, payload: item } as const);
