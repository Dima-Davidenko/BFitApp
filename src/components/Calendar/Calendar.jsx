import { Box } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format, formatISO, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentDate } from 'redux/date/dateSelector';
import { updateCurrentDay } from 'redux/date/dateSlice';
import css from './Calendar.module.scss';

const Calendar = () => {
  const currentDate = useSelector(selectCurrentDate);
  let savedDate;
  if (currentDate) {
    savedDate = parseISO(currentDate);
  }
  const [date, setDate] = useState(savedDate || new Date());
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const formatDate = formatISO(date, { representation: 'date' });
      dispatch(updateCurrentDay(formatDate));
      setError('');
    } catch (error) {
      setError('Incorrect date');
    }
  }, [date, dispatch]);

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
            error={error}
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
