// Базовые типы

export type TItem = {
  category: string;
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
};

export type TCartItem = TItem & {
  qty: number;
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

// Комбинированные типы

export type TAppState = {
  cart: TCartState;
  form: TFormState;
};
