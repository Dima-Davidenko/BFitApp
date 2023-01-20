import React, { useState } from 'react';
import CalculatorForm from 'components/CalculatorForm/CalculatorForm';
import Container from '@mui/material/Container';
import { Modal } from 'components/Modal';
import { useDailyRateMutation } from 'redux/diet/dietApi';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [postDailyRate] = useDailyRateMutation({
    fixedCacheKey: 'dailyRate',
  });
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const onCloseModal = () => setModal(false);
  const onBtnClick = () => navigate('/registration');
  const handleCalculatorFormSubmit = values => {
    postDailyRate(values);
    openModal();
  };
  return (
    <div
      className="mainPageWrapper"
      // sx={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   maxWidth: '1280px',
      //   alignItems: 'start',
      //   justifyContent: 'center',
      //   padding: {
      //     mobile: 2.5,
      //     tablet: 4,
      //     laptop: 1,
      //   },
      //   width: {
      //     mobile: 320,
      //     tablet: 768,
      //     laptop: 1280,
      //   },
      // }}
    >
      <CalculatorForm onFormSubmit={handleCalculatorFormSubmit} />
      {modal && <Modal closeModalHandler={onCloseModal} btnClickHandler={onBtnClick} />}
    </div>
  );
};

export default MainPage;
