import { useSelector } from 'react-redux';
import { selectCurrentDate } from 'redux/date/dateSelector';
import { useGetDayInfoQuery, useUserDailyRateMutation } from 'redux/diet/dietApi';

const DaySummary = () => {
  const currentDay = useSelector(selectCurrentDate);
  const { data: dayInfo } = useGetDayInfoQuery(currentDay, { skip: !currentDay });
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
