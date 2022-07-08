// Базовые типы

export type TItem = {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  category: string;
  chips: Array<string>;
  sizes: {
    length: number;
    width: number;
    height: number;
    weight: number;
  };
};

// Типы в экшенах

export type TCartAction =
  | { type: 'SET_ITEMS'; payload: Array<TItem> }
  | { type: 'ADD_ITEM'; payload: TItem }
  | { type: 'DECREASE_ITEM'; payload: TItem }
  | { type: 'DELETE_ITEM'; payload: TItem };

// Типы в редьюсерах

export type TCartState = {
  items: Array<TItem>;
};

export type TFormState = {
  data: {
    cartName: string;
    cartEmail: string;
    cartPhone: string;
    cartProducts: TItem;
  };
};

// Пересечение типов

export type TCartItem = TItem & {
  qty: number;
};

// Комбинированные типы

export type TAppState = {
  cart: TCartState;
  form: TFormState;
};
