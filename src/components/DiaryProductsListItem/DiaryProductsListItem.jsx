import { useSelector } from 'react-redux';
import { selectCurrentDateId } from 'redux/date/dateSelector';
import { useDeleteEatenProductMutation } from 'redux/diet/dietApi';
import { TableRow, TableCell, Icon } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

export const DiaryProductsListItem = ({ id, name, grams, calories }) => {
  const [deleteProduct] = useDeleteEatenProductMutation();
  const currentDateId = useSelector(selectCurrentDateId);
  const handleDelete = async id => {
    deleteProduct({ dayId: currentDateId, eatenProductId: id });
  };

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell
        component="th"
        scope="row"
        sx={{
          fontSize: {
            mobile: 10,
            tablet: 14,
          },
        }}
      >
        {name}
      </TableCell>
      <TableCell
        align="right"
        sx={{
          fontSize: {
            mobile: 10,
            tablet: 14,
          },
        }}
      >
        {grams} g
      </TableCell>
      <TableCell
        align="right"
        sx={{
          fontSize: {
            mobile: 10,
            tablet: 14,
          },
        }}
      >
        {calories} kcal
      </TableCell>
      <TableCell
        onClick={() => handleDelete(id)}
        align="right"
        sx={{
          fontSize: {
            mobile: 10,
            tablet: 14,
          },
        }}
      >
        <Icon>
          <ClearIcon />
        </Icon>
      </TableCell>
    </TableRow>
  );
};
