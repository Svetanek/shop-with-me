import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
//if we have more sagas we place them into an array
//all call allows to run sagas concurrently and initialize them on separate tasks streams
