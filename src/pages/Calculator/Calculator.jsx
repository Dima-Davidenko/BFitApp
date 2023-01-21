import React from 'react';
import Container from '@mui/material/Container';
import CalculatorForm from 'components/CalculatorForm/CalculatorForm';
import { useGetUserInfoQuery, useUserDailyRateMutation } from 'redux/diet/dietApi';
import { useSelector } from 'react-redux';
import { selectUserId } from 'redux/auth/authSelectors';
import { useNavigate } from 'react-router-dom';

const Calculator = () => {
  const [postUserDailyRate] = useUserDailyRateMutation({
    fixedCacheKey: 'daily-rate',
  });
  const userId = useSelector(selectUserId);
  const navigate = useNavigate();
  const { data: userInfo } = useGetUserInfoQuery();
  const userData = userInfo?.userData;
  const handleCalculatorFormSubmit = body => {
    postUserDailyRate({ id: userId, body });
    navigate('/diary');
  };
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        height: '100vh',
        padding: {
          mobile: 2.5,
          tablet: 4,
          laptop: 1,
        },
        width: {
          mobile: 320,
          tablet: 768,
          laptop: 1280,
        },
      }}
    >
      <CalculatorForm onFormSubmit={handleCalculatorFormSubmit} userData={userData} />
    </Container>
  );
};

export default Calculator;
