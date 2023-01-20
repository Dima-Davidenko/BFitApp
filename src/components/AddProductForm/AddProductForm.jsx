import { Autocomplete, Button, Icon, TextField, useMediaQuery } from '@mui/material';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { selectCurrentDate } from 'redux/date/dateSelector';
import { updateCurrentDayId } from 'redux/date/dateSlice';
import {
  useAddEatenProductMutation,
  useGetDayInfoQuery,
  useGetUserInfoQuery,
  useSearchProductQuery,
} from 'redux/diet/dietApi';
import css from './AddProductForm.module.scss';
import { StyledDiv } from './AddProductForm.styles';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@emotion/react';

const AddProductForm = ({ modalForm }) => {
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

  const handleSubmit = e => {
    e.preventDefault();
    addProduct({ date: currentDate, productId: prodId, weight: e.target.weight.value });
  };

  const handleChangeQuery = ({ target }) => {
    setQuery(target.value);
  };

  const debouncedHandleChangeQuery = debounce(handleChangeQuery, 300);

  return (
    <StyledDiv modalForm={modalForm}>
      <form className={css.addForm} onSubmit={handleSubmit}>
        <Autocomplete
          id="combo-box-demo"
          options={productsInfo}
          getOptionLabel={option => {
            return option.title.ru;
          }}
          sx={{ width: { tablet: '350px' }, mr: { tablet: '20px' } }}
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
              fullWidth
              value={query}
              onChange={debouncedHandleChangeQuery}
              label="Enter product name"
              sx={{ width: { mobile: '285px', tablet: '350px' } }}
            />
          )}
        />
        <TextField
          fullWidth
          type="text"
          name="weight"
          label="Grams"
          sx={{ width: { mobile: '285px', tablet: '106px' }, mb: { mobile: '60px', tablet: 0 } }}
        />

        <Button type="submit" sx={{ display: { mobile: 'block', tablet: 'none' } }}>
          Add
        </Button>

        <Button
          type="submit"
          sx={{
            display: {
              mobile: 'none',
              tablet: 'block',
            },
            ml: '80px',
            minWidth: '0px',
            width: '48px',
            height: '48px',
            lineHeight: '0px',
            borderRadius: '100%',
            padding: 0,
          }}
        >
          <Icon>
            <AddIcon />
          </Icon>
        </Button>
      </form>
    </StyledDiv>
  );
};

export default AddProductForm;
