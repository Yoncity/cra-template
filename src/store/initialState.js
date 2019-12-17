const initialState = {
  authState: {
    isAuth: localStorage.getItem('system-token') || null,
    currentUser: {},
  },
};
export default initialState;
