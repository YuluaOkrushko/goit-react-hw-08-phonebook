import axios from 'axios';
import authActions from '../actions/authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Autorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Autorization = '';
  },
};

const register = records => dispatch => {
  dispatch(authActions.registerRequest());
  axios
    .post('/users/signup', records)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch(error => dispatch(authActions.registerError(error)));
};

const logIn = records => dispatch => {
  dispatch(authActions.loginRequest());
  axios
    .post('/users/login', records)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch(error => dispatch(authActions.loginError(error)));
};

const logOut = () => dispatch => {
  dispatch(authActions.logoutRequest());
  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutError(error)));
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
