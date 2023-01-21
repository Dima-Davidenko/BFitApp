import { CircularProgress } from '@mui/material';
import Login from 'components/Login/Login';
import 'index.scss';
import Calculator from 'pages/Calculator/Calculator';
import Diary from 'pages/Diary/Diary';
import MainPage from 'pages/MainPage/MainPage';
import NotFound from 'pages/NotFound/NotFound';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsLoggedIn, selectIsRefreshing, selectSid } from 'redux/auth/authSelectors';
import Registration from './Registration/Registration';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import ProtectedRoute from './Routes/ProtectedRoute/ProtectedRoute';
import SharedLayout from './SharedLayout/SharedLayout';

const body = document.querySelector('body');

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  isLoggedIn ? body.classList.remove('loggedOut') : body.classList.add('loggedOut');
  const isLoading = useSelector(selectIsRefreshing);
  let isRefreshing = useRef(false);
  const sid = useSelector(selectSid);
  useEffect(() => {
    if (!isLoggedIn && sid && !isRefreshing.current) {
      isRefreshing.current = true;
      dispatch(refreshUser(sid));
    }
  }, [dispatch, isLoggedIn, sid]);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <ProtectedRoute defaultRoute="/diary">
                <MainPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="login"
            element={
              <ProtectedRoute defaultRoute="/diary">
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="registration"
            element={
              <ProtectedRoute defaultRoute="/calculator">
                <Registration />
              </ProtectedRoute>
            }
          />
          <Route
            path="diary"
            element={
              <PrivateRoute defaultRoute="/">
                <Diary />
              </PrivateRoute>
            }
          />
          <Route
            path="calculator"
            element={
              <PrivateRoute defaultRoute="/">
                <Calculator />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isLoading && (
        <div
          style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <CircularProgress size={200} />
        </div>
      )}
    </div>
  );
};
