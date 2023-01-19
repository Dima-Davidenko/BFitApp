import AddProductForm from 'components/AddProductForm/AddProductForm';
import Calendar from 'components/Calendar/Calendar';
import DaySummary from 'components/DaySummary/DaySummary';
import { useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { selectCurrentDate } from 'redux/date/dateSelector';
import { useGetDayInfoQuery, useGetUserInfoQuery } from 'redux/diet/dietApi';
import { DiaryProductsListItem } from '../DiaryProductsListItem/DiaryProductsListItem';
import { List } from './DiaryProductsList.styled';

export const DiaryProductsList = () => {
  const currentDate = useSelector(selectCurrentDate);
  const accessToken = useSelector(selectAccessToken);
  const { data: userInfo } = useGetUserInfoQuery();
  const userAge = userInfo?.userData?.age;
  const { data } = useGetDayInfoQuery(currentDate, {
    skip: !currentDate || !accessToken || !userAge,
  });
  const eatenProducts = data?.eatenProducts ?? [];
  return (
    <div>
      <Calendar />
      <AddProductForm />
      <List>
        {eatenProducts.length > 0 &&
          eatenProducts.map(({ title, kcal, weight, id } = {}) => {
            return (
              <DiaryProductsListItem key={id} id={id} name={title} grams={weight} calories={kcal} />
            );
          })}
      </List>
      <DaySummary />
    </div>
  );
};
