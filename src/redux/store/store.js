import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { authReducer } from 'redux/auth/authSlice';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { dateReducer } from 'redux/date/dateSlice';
import { dietApi } from 'redux/diet/dietApi';

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
