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
    <TableContainer
      sx={{
        height: { mobile: 250, tablet: 440 },
        width: { mobile: 280, tablet: 610 },
        overflowX: 'hidden',
        marginBottom: '60px',
      }}
    >
      <Table aria-label="simple table" sx={{ height: 'max-content' }}>
        <TableBody>
          {eatenProducts.length > 0 &&
            eatenProducts.map(({ title, kcal, weight, id } = {}) => (
              <DiaryProductsListItem
                key={id}
                id={id}
                name={title}
                calories={kcal}
                grams={weight}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
