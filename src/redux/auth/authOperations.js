import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const setAuthHeader = token => {
  if (!token) return;
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  const { email, password } = credentials;
  try {
    await axios.post('/auth/register', credentials);
    const { data } = await axios.post('/auth/login', { email, password });
    setAuthHeader(data.accessToken);
    return data;
  } catch (error) {
    toast.error(`Please use another email adress.`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/login', credentials);
    setAuthHeader(data.accessToken);
    toast.success(`Nice to see you again, ${data.user.name}!`);
    return data;
  } catch (error) {
    toast.error(`Wrong email or password. Please try again.`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    toast.error(`Something went wrong. ${error.message}. Please try again.`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (oldSid, thunkAPI) => {
  const toastId = toast.loading('Перевіряємо дані користувача');
  const state = thunkAPI.getState();
  const refreshToken = state.auth.refreshToken;
  setAuthHeader(refreshToken);
  try {
    const {
      data: { newAccessToken, newRefreshToken: refreshToken, sid },
    } = await axios.post('/auth/refresh', { sid: oldSid });
    setAuthHeader(newAccessToken);
    const {
      data: { username, email, id },
    } = await axios.get('/user');
    toast.update(toastId, {
      render: `Вітаємо ${username}!`,
      type: 'success',
      isLoading: false,
      autoClose: 3000,
    });
    return { user: { username, email, id }, sid, refreshToken };
  } catch (error) {
    toast.update(toastId, {
      render: `Виникла помилка ${error.message}!`,
      type: 'error',
      isLoading: false,
      autoClose: 3000,
    });
    toast.error(`Something went wrong. ${error.message}. Please try again.`);
    return thunkAPI.rejectWithValue(error.message);
  }
});
