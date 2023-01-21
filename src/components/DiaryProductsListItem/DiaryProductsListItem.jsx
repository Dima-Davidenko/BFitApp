import { useSelector } from 'react-redux';
import { selectCurrentDate, selectCurrentDateId } from 'redux/date/dateSelector';
import { useDeleteEatenProductMutation } from 'redux/diet/dietApi';
import { Icon, Item } from './DiaryProductsListItem.styled';
import CrossIcon from './images/close.svg';

export const DiaryProductsListItem = ({ id, name, grams, calories }) => {
  const [deleteProduct] = useDeleteEatenProductMutation();
  const currentDateId = useSelector(selectCurrentDateId);
  const currentDate = useSelector(selectCurrentDate);
  const handleDelete = async id => {
    deleteProduct({ dayId: currentDateId, eatenProductId: id, date: currentDate });
  };

  return (
    <Item>
      <p className="products-item-name">{name}</p>
      <p className="products-item">{grams}g</p>
      <p className="products-item">
        {calories.toFixed(0)} <span>kcal</span>
      </p>
      <Icon
        back={CrossIcon}
        alt="delete product"
        onClick={() => {
          handleDelete(id);
        }}
      />
    </Item>
  );
};
