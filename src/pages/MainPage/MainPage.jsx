import React, { useState } from 'react';
import CalculatorForm from 'components/CalculatorForm/CalculatorForm';
import Container from '@mui/material/Container';
import { Modal } from 'components/Modal';

const MainPage = () => {
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);
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
      <CalculatorForm showModalHandler={openModal} />
      {modal && <Modal closeModalHandler={closeModal} />}
    </Container>
  );
};

export default MainPage;
