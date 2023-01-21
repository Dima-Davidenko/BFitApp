import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';

import { Box, Button, TextField, Typography } from '@mui/material';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { selectIsRefreshing } from 'redux/auth/authSelectors';

const styleBtn = {
  width: 182,
  height: 44,
  fontSize: 16,
};

const StyledLink = styled(NavLink)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  width: 182px;
  height: 44px;
  color: #fc842d;

  border: 2px solid #fc842d;
  border-radius: 30px;
  transition-duration: 250ms;
  &:hover,
  &:focus {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }
`;

const initialValues = {
  username: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[a-zа-яA-ZА-Яіє'ї ]+$/, 'Should include only symbols')
    .min(3, 'Should exceed 3 letters')
    .max(30, 'Should not exceed 30 letters')
    .required('Name is required'),
  email: yup.string().email('Uncorrect format').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Should be more then 8 symbols')
    .max(20, 'Too many symbols')
    .required('Password is required'),
});

const Registration = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      dispatch(register(values));
      setSubmitting(false);
    },
    validateOnBlur: true,
  });
  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   const username = evt.target.elements.username.value;
  //   const email = evt.target.elements.email.value;
  //   const password = evt.target.elements.password.value;
  //   dispatch(register({ username, email, password }));
  // };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: {
          tablet: 'start',
          mobile: 'center',
        },

        paddingTop: '160px',
        paddingLeft: '16px',
        paddingRight: '16px',

        width: {
          laptop: '520px',
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: '#FC842D',
          marginBottom: {
            mobile: '34px',
            tablet: '34px',
          },
        }}
      >
        REGISTER
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          width: '240px',
        }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          name="username"
          label="Name "
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={
            (formik.touched.username && formik.errors.username) || ' '
          }
          required
          sx={{
            width: 240,
            marginBottom: '20px',
          }}
        />
        <TextField
          name="email"
          label="Email "
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={(formik.touched.email && formik.errors.email) || ' '}
          required
          sx={{
            width: 240,
            marginBottom: '20px',
          }}
        />
        <TextField
          name="password"
          label="Password "
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={
            (formik.touched.password && formik.errors.password) || ' '
          }
          required
          sx={{
            width: 240,
            marginBottom: '60px',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            width: {
              tablet: '396px',
              mobile: '100%',
            },

            height: {
              tablet: '44px',
              mobile: '108px',
            },

            flexDirection: {
              tablet: 'row',
              mobile: 'column',
            },
            justifyContent: {
              tablet: 'space-between',
              mobile: 'space-between',
            },
            alignItems: {
              mobile: 'center',
            },
          }}
        >
          <Button
            type="submit"
            variant="contained"
            style={styleBtn}
            disabled={isRefreshing}
          >
            Register
          </Button>
          <StyledLink to="/login">Log in</StyledLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Registration;

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/authOperations';

// const Registration = () => {
//   const dispatch = useDispatch();
//   const handleSubmit = evt => {
//     evt.preventDefault();
//     const username = evt.target.elements.username.value;
//     const email = evt.target.elements.email.value;
//     const password = evt.target.elements.password.value;
//     dispatch(register({ username, email, password }));
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             username <input name="username" type="text"></input>
//           </label>
//         </div>
//         <div>
//           <label>
//             {' '}
//             email <input name="email" type="text"></input>
//           </label>
//         </div>
//         <div>
//           <label>
//             password <input name="password" type="text"></input>
//           </label>
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Registration;
