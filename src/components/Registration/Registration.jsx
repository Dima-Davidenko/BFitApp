import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

import { Box, Button, TextField, Typography } from '@mui/material';

import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

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

const Registration = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const username = evt.target.elements.username.value;
    const email = evt.target.elements.email.value;
    const password = evt.target.elements.password.value;
    dispatch(register({ username, email, password }));
  };
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
        onSubmit={handleSubmit}
      >
        <TextField
          name="username"
          label="Name "
          required
          sx={{
            width: 240,
            marginBottom: '40px',
          }}
        />
        <TextField
          name="email"
          label="Email "
          required
          sx={{
            width: 240,
            marginBottom: '40px',
          }}
        />
        <TextField
          name="password"
          label="Password "
          type="password"
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
          <Button type="submit" variant="contained" style={styleBtn}>
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
