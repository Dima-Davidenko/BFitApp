import { List, ListItem, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCurrentDate } from 'redux/date/dateSelector';
import {
  useGetDayInfoQuery,
  useUserDailyRateMutation,
} from 'redux/diet/dietApi';

const DaySummary = () => {
  const currentDay = useSelector(selectCurrentDate);
  const { data: dayInfo } = useGetDayInfoQuery(currentDay, {
    skip: !currentDay,
  });
  const [_, resulDailyRate] = useUserDailyRateMutation();
  const notRecommended = resulDailyRate?.notAllowedProducts ?? [];
  const daySummary = dayInfo?.daySummary;
  return (
    <Box
      sx={{
        padding: '0px 20px',
        width: {
          mobile: 320,
          tablet: 610,
          laptop: 1280,
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        Summary for {currentDay}
      </Typography>
      {daySummary && (
        <List>
          <ListItem
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 0',
            }}
          >
            <Typography variant="body1" color="initial">
              Left
            </Typography>
            <Typography variant="body1" color="initial">
              {daySummary.kcalLeft} kcal
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 0',
            }}
          >
            <Typography>dailyRate </Typography>
            <Typography> {daySummary.dailyRate} kcal</Typography>
          </ListItem>
          <ListItem
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 0',
            }}
          >
            <Typography variant="body1" color="initial">
              kcalConsumed
            </Typography>
            <Typography variant="body1" color="initial">
              {daySummary.kcalConsumed} kcal
            </Typography>
          </ListItem>

          <ListItem
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 0',
            }}
          >
            <Typography variant="body1" color="initial">
              percentsOfDailyRate
            </Typography>
            <Typography variant="body1" color="initial">
              {daySummary.percentsOfDailyRate} %
            </Typography>
          </ListItem>
        </List>
      )}
      {notRecommended.length > 0 && (
        <>
          <p>Not recommended</p>
          <ul>
            {notRecommended.map(product => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </>
      )}
    </Box>
  );
};

export default DaySummary;
