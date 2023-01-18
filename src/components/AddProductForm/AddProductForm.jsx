import { Autocomplete, Button, TextField } from '@mui/material';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { selectCurrentDate } from 'redux/date/dateSelector';
import { updateCurrentDay, updateCurrentDayId } from 'redux/date/dateSlice';
import {
  dietApi,
  useAddEatenProductMutation,
  useGetDayInfoQuery,
  useGetUserInfoQuery,
  useSearchProductQuery,
} from 'redux/diet/dietApi';

const AddProductForm = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentDate);
  const accessToken = useSelector(selectAccessToken);

  const { data: userInfo } = useGetUserInfoQuery();
  const userAge = userInfo?.userData?.age;

  const { data: dayInfo } = useGetDayInfoQuery(currentDate, {
    skip: !currentDate || !accessToken || !userAge,
  });

  useEffect(() => {
    dispatch(updateCurrentDayId(dayInfo?.id ?? ''));
  }, [dayInfo, dispatch]);

  const [query, setQuery] = useState('');
  const [prodId, setProdId] = useState('');
  const [addProduct] = useAddEatenProductMutation();
  const {
    data: productsInfo = [],
    isFetching,
    isError: searchProductError,
  } = useSearchProductQuery(query, {
    skip: !query,
  });

  // if (searchProductError) {
  //   dispatch(dietApi.util.updateQueryData('searchProduct', []));
  // }

  const handleSubmit = e => {
    e.preventDefault();
    addProduct({ date: currentDate, productId: prodId, weight: e.target.weight.value });
  };

  const handleChangeQuery = ({ target }) => {
    setQuery(target.value);
  };

  const debouncedHandleChangeQuery = debounce(handleChangeQuery, 300);
  // const productList = productsInfo.map(product => ({ label: product.title.ru, id: product._id }));
  console.log('productsInfo', productsInfo);
  console.log('searchProductError', searchProductError);

  return (
    <div>
      {!userAge && <p>Input your data</p>}
      <form onSubmit={handleSubmit}>
        <Autocomplete
          // freeSolo
          id="combo-box-demo"
          options={productsInfo}
          getOptionLabel={option => {
            return option.title.ru;
          }}
          sx={{ width: 300 }}
          onInputChange={debouncedHandleChangeQuery}
          loading={isFetching}
          loadingText="Loading products..."
          noOptionsText="No options..."
          onChange={(e, value) => {
            setQuery('');
            setProdId(value?._id);
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
