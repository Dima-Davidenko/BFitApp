import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './authOperations';

const initialState = {
  user: {
    username: '',
    email: '',
  },
  sid: '',
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.sid = action.payload.sid;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.username = action.payload.user.username;
        state.user.email = action.payload.user.email;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = { ...action.payload, token: state.user.token };
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.sid = '';
      });
  },
});

export const authReducer = authSlice.reducer;
