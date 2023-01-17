import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentDate: '',
  currentDateId: '',
};

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    updateCurrentDay: (state, { payload }) => {
      state.currentDate = payload;
    },
    updateCurrentDayId: (state, { payload }) => {
      state.currentDateId = payload;
    },
  },
});

export const dateReducer = dateSlice.reducer;
export const { updateCurrentDay, updateCurrentDayId } = dateSlice.actions;
