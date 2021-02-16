import axios from 'axios';
import authActions from '../auth/authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = records => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const response = await axios.post('/users/signup', records);
    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

// const register = records => dispatch => {
//   dispatch(authActions.registerRequest());
//   axios
//     .post('/users/signup', records)
//     .then(response => {
//       token.set(response.data.token);
//       dispatch(authActions.registerSuccess(response.data));
//     })
//     .catch(error => dispatch(authActions.registerError(error)));
// };

const logIn = records => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    const response = await axios.post('users/login', records);
    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

// const logIn = records => dispatch => {
//   dispatch(authActions.loginRequest());
//   axios
//     .post('/users/login', records)
//     .then(response => {
//       token.set(response.data.token);
//       dispatch(authActions.loginSuccess(response.data));
//     })
//     .catch(error => dispatch(authActions.loginError(error)));
// };

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

// const logOut = () => dispatch => {
//   dispatch(authActions.logoutRequest());
//   axios
//     .post('/users/logout')
//     .then(() => {
//       token.unset();
//       dispatch(authActions.logoutSuccess());
//     })
//     .catch(error => dispatch(authActions.logoutError(error)));
// };

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');
    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

// const getCurrentUser = () => (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();
//   if (!persistedToken) {
//     return;
//   }
//   token.set(persistedToken);
//   dispatch(authActions.getCurrentUserRequest());
//   axios
//     .get('/users/current')
//     .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
//     .catch(error => authActions.getCurrentUserError(error));
// };

export default { register, logIn, logOut, getCurrentUser };
