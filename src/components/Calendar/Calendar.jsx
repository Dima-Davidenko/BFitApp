import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCurrentDay } from 'redux/date/dateSlice';

const Calendar = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(updateCurrentDay(e.target.value));
  };
  return (
    <div>
      <input type="date" onChange={handleChange} />
    </div>
  );
};

export default Calendar;
