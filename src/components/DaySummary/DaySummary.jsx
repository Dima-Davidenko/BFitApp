import { format, parseISO } from 'date-fns';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { selectCurrentDate } from 'redux/date/dateSelector';
import { useGetDayInfoQuery, useGetUserInfoQuery } from 'redux/diet/dietApi';
import backgroundTabletImg from '../../images/layer41.png';
import backgroundImg from '../../images/layer42.png';
import { StyledWrapper } from './DaySummary.styled';

const DaySummary = () => {
  const [filter, setFilter] = useState('');
  const currentDate = useSelector(selectCurrentDate);
  const formattedDay = currentDate ? format(parseISO(currentDate), 'dd/MM/Y') : '';
  const accessToken = useSelector(selectAccessToken);
  const { data: userInfo } = useGetUserInfoQuery();
  const userAge = userInfo?.userData?.age;
  const { data: dayInfo } = useGetDayInfoQuery(currentDate, {
    skip: !currentDate || !accessToken || !userAge,
  });
  const notRecommended = userInfo?.userData?.notAllowedProducts ?? [];
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
        <div>
          <p className="title notRec">Food not recommended</p>
          <input
            className="notRecFilter"
            type="text"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
          {notRecommended.length > 0 && (
            <div className="recom">
              <ul className="list">
                {notRecommended
                  .filter(product => product.includes(filter))
                  .map(product => (
                    <li className="item" key={product}>
                      {product}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default DaySummary;
