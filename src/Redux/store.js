import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducers from './contact/reduser/contactRedusers';
import filterReducers from './contact/reduser/filterReducers';
// import authReducer from './auth/reduser/authReducer';

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducers,
    auth: '',
  },
  middleware: [...defaultMiddleware],
});

export default store;
