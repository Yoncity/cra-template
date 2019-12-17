import * as types from '../actionTypes/authTypes';
import initialState from '../store/initialState';

const authenticate = (state = initialState.authState, { type, payload }) => {
  switch (type) {
    case types.AUTH_STARTED:
      return {
        loading: true,
        error: null,
        isAuth: false,
        currentUser: {},
      };

    case types.AUTH_FAILED:
      return { loading: false, error: payload.error };

    case types.SET_NOT_AUTH:
      return { isAuth: false, currentUser: {} };

    case types.SET_AUTH_USER:
      return {
        loading: false,
        isAuth: payload.token,
        currentUser: payload.user,
      };

    default:
      return state;
  }
};

export default authenticate;
