import ShopActionTypes from './shop.types';
import {
  getCollections,
  gotCollections,
  fetchCollectionsFailure,
  gettingCollections,
} from './shop.actions';

describe('getCollections action', () => {
  it('should create the getCollections action', () => {
    expect(getCollections().type).toEqual(ShopActionTypes.GET_COLLECTIONS);
  });
});

describe('fgotCollections action', () => {
  it('should create the fgotCollections action', () => {
    const mockCollectionsMap = {
      hats: {
        id: 1,
      },
    };

    const action = gotCollections(mockCollectionsMap);

    expect(action.type).toEqual(ShopActionTypes.GOT_COLLECTIONS);
    expect(action.payload).toEqual(mockCollectionsMap);
  });
});

describe('fetchCollectionsFailure action', () => {
  it('should create the fetchCollectionsFailure action', () => {
    const action = fetchCollectionsFailure('errored');

    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE);
    expect(action.payload).toEqual('errored');
  });
});
//THUNK
// describe('gettingCollections action', () => {
//   it('should create the gettingCollections action', () => {
//     const mockActionCreator = gettingCollections();
//     const mockDispatch = jest.fn();
//     mockActionCreator(mockDispatch);

//     expect(mockDispatch).toHaveBeenCalledWith(getCollections());
//   });
// });
