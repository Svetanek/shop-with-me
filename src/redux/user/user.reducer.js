import UserActionTypes from './user.types';

const iINITIAL_STATE = { currentUser: null, error: null };

const userReducer = (state = iINITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCES:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCES:
      return { ...state, currentUser: action.payload, error: null };
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
