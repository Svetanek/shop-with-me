// import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';

export const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.GET_COLLECTIONS:
      return { ...state, isFetching: true };
    case ShopActionTypes.GOT_COLLECTIONS:
      return { ...state, isFetching: false, collections: action.payload };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
