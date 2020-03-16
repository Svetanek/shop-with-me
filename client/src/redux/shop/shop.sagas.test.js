import { takeLatest, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { gotCollections, fetchCollectionsFailure } from './shop.actions';

import ShopActionTypes from './shop.types';

import { fetchCollectionAsync, fetchCollectionsStart } from './shop.sagas';

describe('fetch collections start saga', () => {
  it('should trigger on GET_COLLECTIONS', () => {
    const generator = fetchCollectionsStart();
    expect(generator.next().value).toEqual(
      takeLatest(ShopActionTypes.GET_COLLECTIONS, fetchCollectionAsync)
    );
  });
});

describe('fetch collections async saga', () => {
  const generator = fetchCollectionAsync();

  it('should call firestore collection ', () => {
    const getCollection = jest.spyOn(firestore, 'collection');
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should call convertCollectionsSnapshot saga ', () => {
    const mockSnapshot = {};
    expect(generator.next(mockSnapshot).value).toEqual(
      call(convertCollectionsSnapshotToMap, mockSnapshot)
    );
  });

  it('should fire gotCollections if collectionsMap is succesful', () => {
    const mockCollectionsMap = {
      hats: { id: 1 },
    };

    expect(generator.next(mockCollectionsMap).value).toEqual(
      put(gotCollections(mockCollectionsMap))
    );
  });

  it('should fire fetchCollectionsFailure if get collection fails at any point', () => {
    const newGenerator = fetchCollectionAsync();
    newGenerator.next();
    expect(newGenerator.throw({ message: 'error' }).value).toEqual(
      put(fetchCollectionsFailure('error'))
    );
  });
});
