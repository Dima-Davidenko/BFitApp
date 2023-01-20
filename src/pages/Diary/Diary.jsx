import AddIcon from '@mui/icons-material/Add';
import { Button, CircularProgress, Icon } from '@mui/material';
import AddProductForm from 'components/AddProductForm/AddProductForm';
import Calendar from 'components/Calendar/Calendar';
import DaySummary from 'components/DaySummary/DaySummary';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { selectCurrentDate } from 'redux/date/dateSelector';
import {
  useGetDayInfoQuery,
  useGetUserInfoQuery,
  useUserDailyRateMutation,
} from 'redux/diet/dietApi';
import BackBtn from '../../assets/backArrowModal.png';
import css from './Diary.module.scss';
import { StyledBackBtn, StyledFormMenuWrapper, SWrapper } from './Diary.styles';
const body = document.querySelector('body');

const Diary = () => {
  const navigate = useNavigate();
  const [formMenu, setFormMenu] = useState(false);
  const currentDate = useSelector(selectCurrentDate);
  const accessToken = useSelector(selectAccessToken);
  const { data: userInfo, isLoading, isFetching } = useGetUserInfoQuery();
  const userAge = userInfo?.userData?.age;
  const { isFetching: dayInfoLoading } = useGetDayInfoQuery(currentDate, {
    skip: !currentDate || !accessToken || !userAge,
  });

  const [, { isLoading: mutationLoading }] = useUserDailyRateMutation({
    fixedCacheKey: 'daily-rate',
  });

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
            <>
              <span>To calculate your diet input your data in </span>
              <Button onClick={() => navigate('/calculator')}>Calculator</Button>
            </>
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
      {(isLoading || isFetching || mutationLoading || dayInfoLoading) && (
        <div
          style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <CircularProgress size={200} />
        </div>
      )}
    </div>
  );
};

export default Diary;
