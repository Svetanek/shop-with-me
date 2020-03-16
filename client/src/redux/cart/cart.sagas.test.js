import { takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';
import { onSignOutSuccess, clearAndSaveCart } from './cart.sagas';

describe('on sign out success saga', () => {
  it('should trigger on SIGN_OUT_SUCCESS', async () => {
    const generator = onSignOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearAndSaveCart)
    );
  });
});

describe('clear cart on sign out saga', () => {
  it('should fire clearCart', () => {
    const generator = clearAndSaveCart();
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});
