import { useSelector } from 'react-redux';
import { selectCurrentDate } from 'redux/date/dateSelector';
import { useGetDayInfoQuery } from 'redux/diet/dietApi';
import { DiaryProductsListItem } from '../DiaryProductsListItem/DiaryProductsListItem';
import { Table, TableContainer, TableBody, Paper } from '@mui/material';

export const DiaryProductsList = () => {
  const currentDate = useSelector(selectCurrentDate);
  const { data } = useGetDayInfoQuery(currentDate, { skip: !currentDate });
  console.log('data', data);
  const eatenProducts = data?.eatenProducts ?? [];
  console.log('eatenProducts', eatenProducts);
  return (
    <div>
      <TableContainer component={Paper} sx={{ height: 300, width: 280 }}>
        <Table aria-label="simple table">
          <TableBody>
            {eatenProducts.length > 0 &&
              eatenProducts.map(({ title, kcal, weight, id } = {}) => (
                <DiaryProductsListItem
                  id={id}
                  name={title}
                  calories={kcal}
                  grams={weight}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <List>
        {eatenProducts.length > 0 &&
          eatenProducts.map(({ title, kcal, weight, id } = {}) => {
            return (
              <DiaryProductsListItem
                key={id}
                id={id}
                name={title}
                grams={weight}
                calories={kcal}
              />
            );
          })}
      </List> */}
    </div>
  );
};
