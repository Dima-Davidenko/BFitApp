import React from 'react';
import Container from '@mui/material/Container';
import CalculatorForm from 'components/CalculatorForm/CalculatorForm';

const Calculator = () => {
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
      <CalculatorForm />
    </Container>
  );
};

export default Calculator;
