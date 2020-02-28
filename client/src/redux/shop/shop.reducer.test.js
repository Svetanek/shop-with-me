import ShopActionTypes from './shop.types';
import shopReducer from './shop.reducer';

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

describe('shopReducer', () => {
  it('should return initial state', () => {
    expect(shopReducer(undefined, {})).toEqual(initialState);
  });

  it('should set isFetching to true if getCollections action', () => {
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.GET_COLLECTIONS,
      }).isFetching
    ).toBe(true);
  });

  it('should set isFetching to false and collections to payload if gotCollections', () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.GOT_COLLECTIONS,
        payload: mockItems,
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      collections: mockItems,
    });
  });

  it('should set isFetching to false and errorMessage to payload if fetchingCollectionsFailure', () => {
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: 'error',
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: 'error',
    });
  });
});
