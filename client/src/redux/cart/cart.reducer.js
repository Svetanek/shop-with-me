// import { TOGGLE_CART_HIDDEN } from './cart.actions';
import CartActionTypes from './cart.types';
import { addItemToCart, decreaseQuantityInCart } from './cart.utils';
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    // return { ...state, cartItems: [...state.cartItems, action.item] };
    case CartActionTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.id !== action.payload.id
        ),
      };
    case CartActionTypes.DECREASE_COUNT:
      return {
        ...state,
        cartItems: decreaseQuantityInCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ALL:
      return { ...state, cartItems: [] };
    case CartActionTypes.SET_CART_FROM_FIREBASE:
      return { ...state, cartItems: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
