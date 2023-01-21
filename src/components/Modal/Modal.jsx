import { useCallback, useEffect } from 'react';

import BackArrow from './backArrowModal.png';
import CloseBtn from './closeModalBtn.svg';

import { useDailyRateMutation } from 'redux/diet/dietApi';
import {
  BackButton,
  Button,
  CloseBtnWrapper,
  CloseModalBtn,
  ContentWrap,
  KcalCounter,
  ModalDiv,
  ModalTitle,
  Overlay,
  ProdList,
  Text,
} from './Modal.styled';

export const Modal = ({ closeModalHandler, btnClickHandler }) => {
  const notRecommendedProducts = [];
  const [, result] = useDailyRateMutation({
    fixedCacheKey: 'dailyRate',
  });
  const dailyCalories = result?.data?.dailyRate ?? 0;
  const memoEscKeyHanler = useCallback(
    e => {
      if (e.keyCode === 27) {
        closeModalHandler();
      }
    },
    [closeModalHandler]
  );

  useEffect(() => {
    window.addEventListener('keydown', memoEscKeyHanler);
    return () => {
      window.removeEventListener('keydown', memoEscKeyHanler);
    };
  }, [memoEscKeyHanler]);

  const onClickOvrlHandler = e => {
    if (e.target.id === 'modal-overlay') {
      closeModalHandler();
    }
  };
  const onBtnClickHandler = () => {
    btnClickHandler();
  };

  const onCrossClickHandler = () => {
    closeModalHandler();
  };

  return (
    <Overlay id="modal-overlay" onClick={onClickOvrlHandler}>
      <ModalDiv>
        <CloseBtnWrapper>
          <BackButton onClick={onCrossClickHandler}>
            <img src={BackArrow} alt="IconBack" width={12} height={7} />
          </BackButton>
          <CloseModalBtn onClick={onCrossClickHandler}>
            <img src={CloseBtn} alt="IconClose" width={20} height={20} />
          </CloseModalBtn>
        </CloseBtnWrapper>

        <ContentWrap>
          <ModalTitle>Your recommended daily calorie intake is</ModalTitle>
          <KcalCounter>
            {result?.status === 'pending' && <span>Loading...</span>}
            {dailyCalories > 0 && (
              <>
                {dailyCalories.toFixed(0)}
                <span> ccal</span>
              </>
            )}
          </KcalCounter>
          {notRecommendedProducts.length > 0 && (
            <>
              <Text>Foods you should not eat</Text>
              <ProdList>
                {notRecommendedProducts?.map(product => (
                  <li key={product}>{product}</li>
                ))}
              </ProdList>
            </>
          )}

          <Button onClick={onBtnClickHandler}>Start losing weight</Button>
        </ContentWrap>
      </ModalDiv>
    </Overlay>
  );
};
