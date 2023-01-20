import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Box, Button, TextField, Typography } from '@mui/material';

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

const Login = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const handleSubmit = evt => {
    evt.preventDefault();
    const email = evt.target.elements.email.value;
    const password = evt.target.elements.password.value;
    dispatch(logIn({ email, password }));
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
        LOG IN
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
          <Button type="submit" variant="contained" style={styleBtn} disabled={isRefreshing}>
            Log in
          </Button>
          <StyledLink to="/registration">Register</StyledLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/authOperations';

// const Login = () => {
//   const dispatch = useDispatch();
//   const handleSubmit = evt => {
//     evt.preventDefault();
//     const email = evt.target.elements.email.value;
//     const password = evt.target.elements.password.value;
//     dispatch(logIn({ email, password }));
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             email <input name="email" type="text"></input>
//           </label>
//         </div>
//         <div>
//           <label>
//             password <input name="password" type="text"></input>
//           </label>
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
