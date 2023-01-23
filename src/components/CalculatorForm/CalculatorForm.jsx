import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  weight: yup
    .number()
    .integer()
    .min(20, 'Should exceed 19')
    .max(500, 'Should not exceed 500')
    .required('This field is required'),
  desiredWeight: yup
    .number()
    .integer()
    .min(20, 'Should exceed 19')
    .max(500, 'Should not exceed 500')
    .required('This field is required'),
  height: yup
    .number()
    .integer()
    .min(100, 'Should exceed 99')
    .max(250, 'Should not exceed 250')
    .required('This field is required'),
  age: yup
    .number()
    .integer()
    .min(18, 'Should exceed 17')
    .max(100, 'Should not exceed 100')
    .required('This field is required'),
  bloodType: yup
    .number('Please choose blood type')
    .oneOf([1, 2, 3, 4])
    .required('This field is required'),
});

const CalculatorForm = ({ onFormSubmit, userData }) => {
  let initialValues = {
    age: '',
    height: '',
    weight: '',
    desiredWeight: '',
    bloodType: null,
  };
  if (userData) {
    const { age, height, weight, desiredWeight, bloodType } = userData;
    initialValues = { age, height, weight, desiredWeight, bloodType };
  }
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      onFormSubmit(values);
      setSubmitting(false);
      resetForm();
    },
    validateOnBlur: true,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: {
          laptop: '520px',
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          marginBottom: {
            mobile: '34px',
            tablet: '68px',
          },
          fontSize: {
            tablet: '34px',
          },
        }}
      >
        Calculate your daily calorie intake right now
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          width: '100%',
        }}
        onSubmit={formik.handleSubmit}
      >
        <Box
          sx={{
            display: 'flex',
            width: '50%',
            marginBottom: {
              mobile: '40px',
              tablet: '60px',
            },
            justifyContent: 'flex-start',
            flexDirection: {
              mobile: 'column',
              tablet: 'row',
            },
          }}
        >
          <Box
            sx={{
              marginRight: {
                tablet: '32px',
              },
            }}
          >
            <TextField
              id="form__input-height"
              name="height"
              label="Height"
              value={formik.values.height}
              onChange={formik.handleChange}
              error={formik.touched.height && Boolean(formik.errors.height)}
              helperText={(formik.touched.height && formik.errors.height) || ' '}
              sx={{
                width: 240,
                marginBottom: {
                  mobile: '32px',
                  tablet: '40px',
                },
              }}
            />
            <TextField
              id="form__input-age"
              name="age"
              label="Age"
              value={formik.values.age}
              onChange={formik.handleChange}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={(formik.touched.age && formik.errors.age) || ' '}
              sx={{
                width: 240,
                marginBottom: {
                  mobile: '32px',
                  tablet: '40px',
                },
              }}
            />
            <TextField
              id="form__input-current-weight"
              name="weight"
              label="Current weight"
              value={formik.values.weight}
              onChange={formik.handleChange}
              error={formik.touched.weight && Boolean(formik.errors.weight)}
              helperText={(formik.touched.weight && formik.errors.weight) || ' '}
              sx={{
                width: 240,
                marginBottom: {
                  mobile: '32px',
                  tablet: '0px',
                },
              }}
            />
          </Box>
          <Box>
            <TextField
              id="form__input-desired-weight"
              name="desiredWeight"
              label="Desired weight"
              value={formik.values.desiredWeight}
              onChange={formik.handleChange}
              error={formik.touched.desiredWeight && Boolean(formik.errors.desiredWeight)}
              helperText={(formik.touched.desiredWeight && formik.errors.desiredWeight) || ' '}
              sx={{
                width: 240,
                marginBottom: {
                  mobile: '32px',
                  tablet: '40px',
                },
              }}
            />
            <FormControl
              sx={{
                width: 240,
              }}
              error={formik.touched.bloodType && Boolean(formik.errors.bloodType)}
            >
              <FormLabel id="bloodType-label">Blood type</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-bloodType-label"
                defaultValue="female"
                name="bloodType"
                value={formik.values.bloodType}
                onChange={formik.handleChange}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label={<Typography variant="caption">1</Typography>}
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label={<Typography variant="caption">2</Typography>}
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label={<Typography variant="caption">3</Typography>}
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label={<Typography variant="caption">4</Typography>}
                />
              </RadioGroup>
              <FormHelperText>
                {(Boolean(formik.errors.bloodType) && 'Please choose blood type') || ' '}
              </FormHelperText>
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: {
              laptop: 'flex-end',
            },
          }}
        >
          <Button type="submit" variant="contained" sx={{ mb: '100px' }}>
            Start loosing weight
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CalculatorForm;
