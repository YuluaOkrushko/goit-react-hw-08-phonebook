import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducers from './contact/reduser/contactRedusers';
import filterReducers from './contact/reduser/filterReducers';
import authReducer from './auth/authReducer';

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const authPersistConfiguration = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducers,
    auth: persistReducer(authPersistConfiguration, authReducer),
  },
  middleware: [...defaultMiddleware],
});

export const persistor = persistStore(store);
