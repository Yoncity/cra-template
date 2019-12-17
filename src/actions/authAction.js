import * as types from '../actionTypes/authTypes';
import axios from 'axios';

export const authStarted = () => ({
  type: types.AUTH_STARTED,
});

export const setNotAuth = () => ({
  type: types.SET_NOT_AUTH,
});

export const setAuthUser = (user, token) => ({
  type: types.SET_AUTH_USER,
  payload: { user, token },
});

export const authFailed = error => ({
  type: types.AUTH_FAILED,
  payload: { error },
});

export const signOut = () => async dispatch => {
  localStorage.removeItem('system-token');
  dispatch(setNotAuth());
};

const authenticate = ({ username, password }) => async dispatch => {
  dispatch(authStarted());
  try {
    const url = 'LINK_TO_ENDPOINT';
    console.log(url);
    const res = await axios.request({
      method: 'POST',
      url,
      data: {
        username,
        password,
      },
      responseType: 'json',
      transformResponse: [
        data => {
          if (data.status !== 200) throw new Error(data.message);
          return data;
        },
      ],
    });

    const { user, token } = res.data;
    if (user) {
      localStorage.setItem('system-token', token);
      dispatch(setAuthUser(res.data.user, res.data.token));
    }
  } catch (error) {
    dispatch(authFailed(error.message));
  }
};

export default authenticate;
