import { Box } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentDate } from 'redux/date/dateSelector';
import { updateCurrentDay } from 'redux/date/dateSlice';
import css from './Calendar.module.scss';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  // const [, setError] = useState('');

  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentDate);

  useEffect(() => {
    if (!currentDate) {
      const newDate = new Date().toJSON().slice(0, 10);
      dispatch(updateCurrentDay(newDate));
      setDate(parseISO(newDate));
    }
  }, [currentDate, dispatch]);

  // useEffect(() => {
  //   try {
  //     const formatDate = formatISO(date, { representation: 'date' });
  //     dispatch(updateCurrentDay(formatDate));
  //     setError('');
  //   } catch (error) {
  //     setError('Incorrect date');
  //   }
  // }, [date, dispatch]);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ marginBottom: '32px', padding: '0px 15px' }}>
          <DesktopDatePicker
            value={date}
            InputAdornmentProps={{ disabled: true }}
            onChange={newDate => {
              setDate(newDate);
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <input
                  className={css.dateInput}
                  ref={inputRef}
                  {...inputProps}
                  value={format(date, 'dd.MM.Y')}
                  onChange={e => (e.target.value = date)}
                />
                {InputProps?.endAdornment}
              </Box>
            )}
          />
        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
