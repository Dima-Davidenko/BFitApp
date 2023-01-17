import { authReducer } from 'redux/auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { dietApi } from 'redux/diet/dietApi';
import { dateReducer } from 'redux/date/dateSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['sid', 'refreshToken'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedReducer,
  [dietApi.reducerPath]: dietApi.reducer,
  date: dateReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(dietApi.middleware),
});

export const persistor = persistStore(store);
