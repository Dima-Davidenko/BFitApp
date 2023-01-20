import { format, parseISO } from 'date-fns';
import { useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { selectCurrentDate } from 'redux/date/dateSelector';
import {
  useGetDayInfoQuery,
  useGetUserInfoQuery,
  useUserDailyRateMutation,
} from 'redux/diet/dietApi';
import { StyledWrapper } from './DaySummary.styled';
import backgroundImg from '../../images/layer42.png';
import backgroundTabletImg from '../../images/layer41.png';

const DaySummary = () => {
  const currentDate = useSelector(selectCurrentDate);
  const formattedDay = currentDate ? format(parseISO(currentDate), 'dd/MM/Y') : '';
  const accessToken = useSelector(selectAccessToken);
  const { data: userInfo } = useGetUserInfoQuery();
  const userAge = userInfo?.userData?.age;
  const { data: dayInfo } = useGetDayInfoQuery(currentDate, {
    skip: !currentDate || !accessToken || !userAge,
  });
  const [, resulDailyRate] = useUserDailyRateMutation();
  const notRecommended = resulDailyRate?.notAllowedProducts ?? [
    'Flour products',
    'Milk',
    'Read meat',
    'Smoked meats',
  ];
  const daySummary = dayInfo?.daySummary;
  const dailyRate = daySummary?.dailyRate ?? 0;
  const kcalConsumed = daySummary?.kcalConsumed ?? 0;
  const kcalDiff = Math.round(dailyRate - kcalConsumed);
  const percentsOfDailyRate = (kcalConsumed / dailyRate) * 100;
  return (
    <StyledWrapper back={backgroundImg} backTablet={backgroundTabletImg}>
      <div className="wrapper">
        {daySummary && (
          <div className="summary">
            <p className="title">Summary for {formattedDay}</p>
            <div className="list">
              <p className="item">
                Daily Rate <span>{dailyRate.toFixed(0)} kcal</span>
              </p>
              <p className="item">
                Consumed <span>{kcalConsumed.toFixed(0)} kcal</span>
              </p>
              {kcalDiff < 0 ? (
                <p className="item" style={{ color: 'red' }}>
                  Stop eating, already overeat <span>{kcalDiff * -1} kcal</span>
                </p>
              ) : (
                <p className="item" style={{ color: 'green' }}>
                  Left <span>{kcalDiff.toFixed(0)} kcal</span>
                </p>
              )}

              <p className="item">
                n% of normal <span>{percentsOfDailyRate.toFixed(0)}%</span>
              </p>
            </div>
          </div>
        )}
        {notRecommended.length > 0 && (
          <div className="recom">
            <p className="title">Food not recommended</p>
            <ul className="list">
              {notRecommended.map(product => (
                <li className="item" key={product}>
                  {product}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </StyledWrapper>
  );
};

export default DaySummary;
