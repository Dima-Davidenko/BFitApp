import { Button, CircularProgress } from '@mui/material';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { selectCurrentDate } from 'redux/date/dateSelector';
import {
  useGetDayInfoQuery,
  useGetUserInfoQuery,
  useUserDailyRateMutation,
} from 'redux/diet/dietApi';

const Diary = () => {
  const navigate = useNavigate();
  const currentDate = useSelector(selectCurrentDate);
  const accessToken = useSelector(selectAccessToken);
  const { data: userInfo, isLoading, isFetching } = useGetUserInfoQuery();
  const userAge = userInfo?.userData?.age;
  const { data: dayInfo, isFetching: dayInfoLoading } = useGetDayInfoQuery(currentDate, {
    skip: !currentDate || !accessToken || !userAge,
  });

  const [, { isLoading: mutationLoading }] = useUserDailyRateMutation({
    fixedCacheKey: 'daily-rate',
  });
  console.log('dayInfo', dayInfo);
  return (
    <div>
      {!userAge && (
        <>
          {isLoading ? (
            <span>Get information about user, please wait...</span>
          ) : (
            <>
              <span>To calculate your diet input your data in </span>
              <Button onClick={() => navigate('/calculator')}>Calculator</Button>
            </>
          )}
        </>
      )}
      {userAge > 0 && <DiaryProductsList />}
      {(isLoading || isFetching || mutationLoading || dayInfoLoading) && (
        <div
          style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <CircularProgress size={200} />
        </div>
      )}
    </div>
  );
};

export default Diary;
