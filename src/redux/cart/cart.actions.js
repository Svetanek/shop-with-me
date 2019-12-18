import CartActionTypes from './cart.types';

// export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
export const deleteItem = item => ({
  type: CartActionTypes.DELETE_ITEM,
  payload: item,
});

export const decreaseItemsCount = item => ({
  type: CartActionTypes.DECREASE_COUNT,
  payload: item,
});
export const clearCart = () => ({
  type: CartActionTypes.CLEAR_ALL,
});
