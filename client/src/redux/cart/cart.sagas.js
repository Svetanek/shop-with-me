import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import CartActionTypes from './cart.types';
import { clearCart, setCartFromFirebase } from './cart.actions';
import { getUserCartRef } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../user/user.selector';
import { selectCartItems } from './cart.selectors';

export function* clearAndSaveCart() {
  yield put(clearCart());
}
export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearAndSaveCart);
}
export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.DELETE_ITEM,
      CartActionTypes.DECREASE_COUNT,
    ],
    updateCartInFirebase
  );
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCES, checkCartFromFirebase);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onCartChange), call(onUserSignIn)]);
}
