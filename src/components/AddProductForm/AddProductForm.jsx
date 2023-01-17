import { Autocomplete, Button, TextField } from '@mui/material';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentDate } from 'redux/date/dateSelector';
import { updateCurrentDay, updateCurrentDayId } from 'redux/date/dateSlice';
import {
  useAddEatenProductMutation,
  useGetDayInfoQuery,
  useSearchProductQuery,
} from 'redux/diet/dietApi';

const AddProductForm = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentDate);

  const { data: dayInfo } = useGetDayInfoQuery(currentDate, {
    skip: !currentDate,
  });

  useEffect(() => {
    dispatch(updateCurrentDay(new Date().toJSON().slice(0, 10)));
  }, [dispatch]);

  useEffect(() => {
    if (dayInfo?.id) dispatch(updateCurrentDayId(dayInfo?.id));
  }, [dayInfo, dispatch]);

  const [query, setQuery] = useState('');
  const [prodId, setProdId] = useState('');
  const [addProduct] = useAddEatenProductMutation();
  const { data: productsInfo = [], isFetching } = useSearchProductQuery(query, {
    skip: !query,
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log('prodId', prodId);
    console.log(e.target.weight.value);
    addProduct({ date: currentDate, productId: prodId.id, weight: e.target.weight.value });
  };
  const handleChangeQuery = ({ target }) => {
    setQuery(target.value);
  };
  const debouncedHandleChangeQuery = debounce(handleChangeQuery, 300);
  const productList = productsInfo.map(product => ({ label: product.title.ru, id: product._id }));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          freeSolo
          id="combo-box-demo"
          options={productList}
          sx={{ width: 300 }}
          onInputChange={debouncedHandleChangeQuery}
          loading={isFetching}
          loadingText="Loading products..."
          noOptionsText="No options..."
          onChange={(e, value, details) => {
            setProdId(value);
          }}
          renderInput={params => (
            <TextField
              {...params}
              value={query}
              onChange={debouncedHandleChangeQuery}
              label="Product"
            />
          )}
        />
        <br></br>
        <TextField type="text" name="weight" />
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default AddProductForm;
