import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import formatISO from 'date-fns/formatISO';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { updateCurrentDay } from 'redux/date/dateSlice';
import { DesktopDatePicker, MobileDatePicker } from '@mui/x-date-pickers';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    const formatDate = formatISO(date, { representation: 'date' });
    dispatch(updateCurrentDay(formatDate));
  }, [date, dispatch]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ marginBottom: '32px', padding: '0px 15px' }}>
        <DesktopDatePicker
          value={date}
          onChange={newDate => {
            setDate(newDate);
          }}
          renderInput={params => <TextField {...params} />}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default Calendar;
