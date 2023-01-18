import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentDay } from 'redux/date/dateSlice';
import { selectCurrentDate } from 'redux/date/dateSelector';

const Calendar = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentDate);

  useEffect(() => {
    if (!currentDate) dispatch(updateCurrentDay(new Date().toJSON().slice(0, 10)));
  }, [currentDate, dispatch]);

  const handleChange = e => {
    dispatch(updateCurrentDay(e.target.value));
  };
  return (
    <div>
      <input type="date" value={currentDate} onChange={handleChange} />
    </div>
  );
};

export default Calendar;
