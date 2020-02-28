import CartActionTypes from './cart.types';
import {
  toggleCartHidden,
  addItem,
  decreaseItemsCount,
  deleteItem,
  clearCart,
} from './cart.actions';

describe('toggleCartHidden action', () => {
  it('should create the toggleHidden action', () => {
    expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN);
  });
});

describe('addItem action', () => {
  it('should create the addItem action', () => {
    const mockItem = {
      id: 1,
    };

    const action = addItem(mockItem);

    expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('decreaseItemsCount action', () => {
  it('should create the decreaseItemsCount action', () => {
    const mockItem = {
      id: 1,
    };

    const action = decreaseItemsCount(mockItem);

    expect(action.type).toEqual(CartActionTypes.DECREASE_COUNT);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('deleteItem action', () => {
  it('should create the deleteItem action', () => {
    const mockItem = {
      id: 1,
    };

    const action = deleteItem(mockItem);

    expect(action.type).toEqual(CartActionTypes.DELETE_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('clearCart action', () => {
  it('should create the clearCart action', () => {
    expect(clearCart().type).toEqual(CartActionTypes.CLEAR_ALL);
  });
});
