import ShopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const getCollections = () => ({
  type: ShopActionTypes.GET_COLLECTIONS,
});
export const gotCollections = collectionsMap => ({
  type: ShopActionTypes.GOT_COLLECTIONS,
  payload: collectionsMap,
});
export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
export const gettingCollections = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(getCollections());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(gotCollections(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
