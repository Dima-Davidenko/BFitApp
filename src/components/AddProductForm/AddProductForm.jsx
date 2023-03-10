import AddIcon from '@mui/icons-material/Add';
import { Autocomplete, Button, Icon, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { selectCurrentDate } from 'redux/date/dateSelector';
import { updateCurrentDayId } from 'redux/date/dateSlice';
import {
  useAddEatenProductMutation,
  useGetDayInfoQuery,
  useGetUserInfoQuery,
  useSearchProductQuery,
} from 'redux/diet/dietApi';
import * as yup from 'yup';
import css from './AddProductForm.module.scss';
import { StyledDiv } from './AddProductForm.styles';

let toastId;
const initialValues = {
  weight: '',
};
const schema = yup.object().shape({
  weight: yup
    .number('Wrong format')
    .positive('Wrong format')
    .integer('Wrong format')
    .max(3000, 'Too big weight (>3000g)')
    .required('Input product weight'),
});
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
  const [autocompleteValue, setAutocompleteValue] = useState(null);
  const [addProduct, { isLoading, isSuccess, isError }] = useAddEatenProductMutation();

  const { data: productsInfo = [], isFetching } = useSearchProductQuery(query, {
    skip: !query,
  });

  useEffect(() => {
    if (isLoading) toastId = toast.loading('Add new product...');
  }, [isLoading]);
  if (isSuccess && toastId) {
    toast.update(toastId, {
      render: 'New product has been added.',
      type: 'success',
      isLoading: false,
      autoClose: 3000,
    });
    toastId = null;
  }

  if (isError && toastId) {
    toast.update(toastId, {
      render: 'An error ocured, try again.',
      type: 'error',
      isLoading: false,
      autoClose: 3000,
    });
    toastId = null;
  }

  const handleChangeQuery = ({ target }) => {
    setQuery(target.value);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      addProduct({ date: currentDate, productId: prodId, weight: values.weight });
      setAutocompleteValue(null);
      setSubmitting(false);
      resetForm();
    },
    validateOnBlur: true,
  });

  const debouncedHandleChangeQuery = debounce(handleChangeQuery, 300);
  return (
    <StyledDiv modalForm={modalForm}>
      <form className={css.addForm} onSubmit={formik.handleSubmit}>
        <Autocomplete
          id="combo-box-demo"
          value={autocompleteValue}
          options={productsInfo}
          getOptionLabel={option => {
            return option.title.ru;
          }}
          sx={{ width: { tablet: '350px' }, mr: { tablet: '20px' } }}
          loading={isFetching}
          loadingText="Loading products..."
          noOptionsText="No options..."
          onChange={(e, value) => {
            setProdId(value?._id);
            setAutocompleteValue(value);
          }}
          renderInput={params => (
            <TextField
              {...params}
              fullWidth
              value={query || ''}
              onChange={debouncedHandleChangeQuery}
              label="Enter product name"
              sx={{ width: { mobile: '285px', tablet: '350px' } }}
            />
          )}
        />
        <TextField
          fullWidth
          type="number"
          name="weight"
          id="weight"
          label="Grams"
          value={formik.values.weight}
          onChange={formik.handleChange}
          error={formik.touched.weight && Boolean(formik.errors.weight)}
          helperText={(formik.touched.weight && formik.errors.weight) || ' '}
          FormHelperTextProps={{
            sx: { width: '300px', position: 'absolute', left: 0, bottom: -22 },
          }}
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
