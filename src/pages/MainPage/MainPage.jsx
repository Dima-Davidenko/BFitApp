import CalculatorForm from 'components/CalculatorForm/CalculatorForm';
import { Modal } from 'components/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDailyRateMutation } from 'redux/diet/dietApi';

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
    <div className="mainPageWrapper">
      <CalculatorForm onFormSubmit={handleCalculatorFormSubmit} />
      {modal && <Modal closeModalHandler={onCloseModal} btnClickHandler={onBtnClick} />}
    </div>
  );
};

export default MainPage;
