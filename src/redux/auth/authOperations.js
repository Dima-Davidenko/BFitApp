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
  try {
    const { data } = await axios.post('/auth/register', credentials);
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

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedSid = state.auth.sid;
  if (!persistedSid) {
    return thunkAPI.rejectWithValue('');
  }
  const toastId = toast.loading('Перевіряємо дані користувача');
  try {
    const { data } = await axios.post('/auth/refresh', { sid: persistedSid });
    setAuthHeader(data.newAccessToken);
    toast.update(toastId, {
      render: `Вітаємо ${data.name}!`,
      type: 'success',
      isLoading: false,
      autoClose: 3000,
    });
    return data;
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
