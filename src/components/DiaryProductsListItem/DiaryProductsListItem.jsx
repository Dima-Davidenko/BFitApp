import { useSelector } from 'react-redux';
import { selectCurrentDateId } from 'redux/date/dateSelector';
import { useDeleteEatenProductMutation } from 'redux/diet/dietApi';
import { TableRow, TableCell } from '@mui/material';
import { Item, Icon } from './DiaryProductsListItem.styled';
import CrossIcon from './images/close.svg';

export const DiaryProductsListItem = ({ id, name, grams, calories }) => {
  const [deleteProduct] = useDeleteEatenProductMutation();
  const currentDateId = useSelector(selectCurrentDateId);
  const handleDelete = async id => {
    deleteProduct({ dayId: currentDateId, eatenProductId: id });
  };

  return (
    <TableRow
      key={id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{calories}</TableCell>
      <TableCell align="right">{grams}</TableCell>
    </TableRow>
  );
};
