import { takeLatest, call, all, put } from 'redux-saga/effects';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';
import { gotCollections, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(gotCollections(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.GET_COLLECTIONS, fetchCollectionAsync);
}
export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
