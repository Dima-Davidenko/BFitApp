import AddIcon from '@mui/icons-material/Add';
import { Button, Icon } from '@mui/material';
import AddProductForm from 'components/AddProductForm/AddProductForm';
import Calendar from 'components/Calendar/Calendar';
import DaySummary from 'components/DaySummary/DaySummary';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUserInfoQuery } from 'redux/diet/dietApi';
import BackBtn from '../../assets/backArrowModal.png';
import css from './Diary.module.scss';
import { StyledBackBtn, StyledFormMenuWrapper, SWrapper } from './Diary.styles';
const body = document.querySelector('body');

const Diary = () => {
  const navigate = useNavigate();
  const [formMenu, setFormMenu] = useState(false);
  const { data: userInfo, isLoading } = useGetUserInfoQuery();
  const userAge = userInfo?.userData?.age;

  const toggleFormModal = () => {
    setFormMenu(!formMenu);
    body.classList.toggle('modalOpen');
    window.scrollTo({ top: 0 });
  };
  return (
    <div className={css.wrapper}>
      {!userAge && (
        <>
          {isLoading ? (
            <span>Get information about user, please wait...</span>
          ) : (
            <div className="mainPageWrapper">
              <span>To calculate your diet input your data in </span>
              <Button onClick={() => navigate('/calculator')}>Calculator</Button>
            </div>
          )}
        </>
      )}
      {userAge > 0 && (
        <>
          <div className={css.calListWrp}>
            <div>
              <Calendar />
              <AddProductForm modalForm={formMenu} />
              <DiaryProductsList />
              <Button
                type="button"
                onClick={toggleFormModal}
                sx={{
                  display: {
                    mobile: 'block',
                    tablet: 'none',
                  },
                  margin: '60px auto',
                  minWidth: '0px',
                  width: '48px',
                  height: '48px',
                  lineHeight: '0px',
                  borderRadius: '100%',
                  padding: 0,
                }}
              >
                <Icon>
                  <AddIcon />
                </Icon>
              </Button>
            </div>
          </div>
          <DaySummary />
          {formMenu && (
            <StyledFormMenuWrapper modalForm={formMenu}>
              <SWrapper>
                <StyledBackBtn source={BackBtn} onClick={toggleFormModal} />
                <AddProductForm modalForm={formMenu} />
              </SWrapper>
            </StyledFormMenuWrapper>
          )}
        </>
      )}
    </div>
  );
};

export default Diary;
