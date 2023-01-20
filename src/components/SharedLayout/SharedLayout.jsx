import { CircularProgress } from '@mui/material';
import BackgroundContainer from 'components/BackgroundContainer/BackgroundContainer';
import NewAppBar from 'components/NewAppBar/NewAppBar';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/authSelectors';

const SharedLayout = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {isRefreshing ? (
        <div
          style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <CircularProgress size={200} />
        </div>
      ) : (
        <>
          {!isLoggedIn && <BackgroundContainer />}

          <NewAppBar />
          <Outlet />
        </>
      )}
    </>
  );
};

export default SharedLayout;
