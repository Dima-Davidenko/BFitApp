import Container from '@mui/material/Container';
import CalculatorForm from 'components/CalculatorForm/CalculatorForm';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserId } from 'redux/auth/authSelectors';
import { useGetUserInfoQuery, useUserDailyRateMutation } from 'redux/diet/dietApi';

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
        pt: { mobile: '300px', tablet: '200px', laptop: '300px' },
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
