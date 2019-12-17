import * as types from '../../actionTypes/authTypes';
import authReducer from '../../reducers/auth';
import initialState from '../../store/initialState';

describe('Auth Reducer Returned States', () => {
  const reducer = action => {
    return authReducer(initialState.authState, action);
  };

  it(types.AUTH_STARTED, () => {
    const action = {
      type: types.AUTH_STARTED,
    };
    const expectedState = {
      loading: true,
      error: null,
      isAuth: false,
      currentUser: {},
    };
    const currentState = reducer(action);
    expect(currentState).toEqual(expectedState);
  });

  it(types.AUTH_FAILED, () => {
    const error = 'User Not Found';
    const action = {
      type: types.AUTH_FAILED,
      payload: { error },
    };
    const expectedState = {
      loading: false,
      error,
    };
    const currentState = reducer(action);
    expect(currentState).toEqual(expectedState);
  });

  it(types.SET_NOT_AUTH, () => {
    const action = {
      type: types.SET_NOT_AUTH,
    };
    const expectedState = { isAuth: false, currentUser: {} };
    const currentState = reducer(action);
    expect(currentState).toEqual(expectedState);
  });

  it('DEFAULT_STATE', () => {
    const action = {
      type: 'DEFAULT',
    };
    const currentState = reducer(action);
    expect(currentState).toEqual(initialState.authState);
  });

  it(types.SET_AUTH_USER, () => {
    const user = {
      token: 'test-token',
      data: {
        userData: 'test-user-data',
      },
    };
    const action = {
      type: types.SET_AUTH_USER,
      payload: { token: user.token, user },
    };
    const expectedState = {
      loading: false,
      isAuth: user.token,
      currentUser: user,
    };
    const currentState = reducer(action);
    expect(currentState).toEqual(expectedState);
  });
});
