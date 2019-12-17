import * as types from '../../actionTypes/authTypes';
import * as actions from '../../actions/authAction';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('Auth Action', () => {
  const mockStore = configureMockStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it(`Should dispatch ${types.AUTH_STARTED}`, async () => {
    await store.dispatch(actions.authStarted());
    const action = await store.getActions();
    expect(action[0].type).toEqual(types.AUTH_STARTED);
    expect(action.length).toEqual(1);
  });

  it(`Should dispatch ${types.AUTH_FAILED}`, async () => {
    await store.dispatch(actions.authFailed());
    const action = await store.getActions();
    expect(action[0].type).toEqual(types.AUTH_FAILED);
    expect(action.length).toEqual(1);
  });

  it(`Should dispatch ${types.SET_NOT_AUTH}`, async () => {
    await store.dispatch(actions.setNotAuth());
    const action = await store.getActions();
    expect(action[0].type).toEqual(types.SET_NOT_AUTH);
    expect(action.length).toEqual(1);
  });

  it(`Should dispatch ${types.SET_AUTH_USER}`, async () => {
    await store.dispatch(actions.setAuthUser());
    const action = await store.getActions();
    expect(action[0].type).toEqual(types.SET_AUTH_USER);
    expect(action.length).toEqual(1);
  });
});
