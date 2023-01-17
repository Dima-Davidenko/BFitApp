import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './authOperations';

const initialState = {
  user: {
    username: '',
    email: '',
    id: '',
  },
  refreshToken: '',
  accessToken: '',
  sid: '',
  isLoggedIn: false,
  isRefreshing: false,
  error: '',
};

const handleUserLogin = (state, { payload: { sid, refreshToken, user, accessToken } }) => {
  state.error = '';
  state.isRefreshing = false;
  state.isLoggedIn = true;
  state.sid = sid;
  state.refreshToken = refreshToken;
  state.accessToken = accessToken;
  state.user.username = user.username;
  state.user.email = user.email;
  state.user.id = user.id;
};

const handleAuthReject = (state, { payload }) => {
  state.error = payload;
};
const handlePendingRequest = state => {
  state.isRefreshing = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleUserLogin)
      .addCase(logIn.fulfilled, handleUserLogin)
      .addCase(refreshUser.fulfilled, handleUserLogin)
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addCase(register.pending, handlePendingRequest)
      .addCase(logIn.pending, handlePendingRequest)
      .addCase(refreshUser.pending, handlePendingRequest)
      .addCase(logOut.pending, handlePendingRequest)
      .addCase(register.rejected, handleAuthReject)
      .addCase(logIn.rejected, handleAuthReject)
      .addCase(refreshUser.rejected, handleAuthReject)
      .addCase(logOut.rejected, handleAuthReject);
  },
});
export const authReducer = authSlice.reducer;
