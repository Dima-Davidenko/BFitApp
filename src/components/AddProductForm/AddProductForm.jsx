import {
  Autocomplete,
  Button,
  TextField,
  useMediaQuery,
  useTheme,
  Icon,
  Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
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

const AddProductForm = ({ isFormActive }) => {
  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentDate);
  const [query, setQuery] = useState('');
  const [prodId, setProdId] = useState('');
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('tablet'));
  const [addProduct] = useAddEatenProductMutation();
  const { data: productsInfo = [], isFetching } = useSearchProductQuery(query, {
    skip: !query,
  });
  const { data: dayInfo } = useGetDayInfoQuery(currentDate, {
    skip: !currentDate,
  });

  useEffect(() => {
    dispatch(updateCurrentDay(new Date().toJSON().slice(0, 10)));
  }, [dispatch]);

  useEffect(() => {
    if (dayInfo?.id) dispatch(updateCurrentDayId(dayInfo?.id));
  }, [dayInfo, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    addProduct({
      date: currentDate,
      productId: prodId.id,
      weight: e.target.weight.value,
    });
    isFormActive(false);
  };
  const handleChangeQuery = ({ target }) => {
    setQuery(target.value);
  };
  const debouncedHandleChangeQuery = debounce(handleChangeQuery, 300);
  const productList = productsInfo.map(product => ({
    label: product.title.ru,
    id: product._id,
  }));

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        padding: '0px 15px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: {
          tablet: '60px',
        },

        flexDirection: {
          mobile: 'column',
          tablet: 'row',
        },
      }}
    >
      <Autocomplete
        freeSolo
        id="combo-box-demo"
        options={productList}
        sx={{
          width: { mobile: 280, tablet: 240 },
          marginRight: {
            tablet: '22px',
          },
        }}
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
            label="Enter product name"
          />
        )}
      />
      <br></br>
      <TextField
        type="text"
        name="weight"
        label="Grams"
        sx={{
          textAlign: 'right',
          width: { mobile: 280, tablet: 106 },
          marginRight: {
            tablet: '87px',
          },
          marginBottom: {
            mobile: '60px',
            tablet: '0px',
          },
        }}
      />
      {match ? (
        <Button
          type="submit"
          sx={{
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
      ) : (
        <Button type="submit">Add</Button>
      )}
    </Box>
  );
};

export default AddProductForm;
