import { useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { selectCurrentDate } from 'redux/date/dateSelector';
import {
  useGetDayInfoQuery,
  useGetUserInfoQuery,
  useUserDailyRateMutation,
} from 'redux/diet/dietApi';

const DaySummary = () => {
  const currentDate = useSelector(selectCurrentDate);
  const accessToken = useSelector(selectAccessToken);
  const { data: userInfo } = useGetUserInfoQuery();
  const userAge = userInfo?.userData?.age;
  const { data: dayInfo } = useGetDayInfoQuery(currentDate, {
    skip: !currentDate || !accessToken || !userAge,
  });
  // const [_, resulDailyRate] = useUserDailyRateMutation();
  // const notRecommended = resulDailyRate?.notAllowedProducts ?? [];
  const daySummary = dayInfo?.daySummary;
  return (
    <div>
      {daySummary && (
        <>
          <p>dailyRate {daySummary.dailyRate}</p>
          <p>kcalConsumed {daySummary.kcalConsumed}</p>
          <p>kcalLeft {daySummary.kcalLeft}</p>
          <p>percentsOfDailyRate {daySummary.percentsOfDailyRate}</p>
        </>
      )}
      {/* {notRecommended.length > 0 && (
        <>
          <p>Not recommended</p>
          <ul>
            {notRecommended.map(product => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </>
      )} */}
    </div>
  );
};

export default DaySummary;
