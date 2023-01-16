import Calculator from 'pages/Calculator/Calculator';
import Diary from 'pages/Diary/Diary';
import Login from 'pages/Login/Login';
import MainPage from 'pages/MainPage/MainPage';
import NotFound from 'pages/NotFound/NotFound';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsLoggedIn, selectIsRefreshing, selectSid } from 'redux/auth/authSelectors';
import Registration from './Registration/Registration';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import ProtectedRoute from './Routes/ProtectedRoute/ProtectedRoute';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  const sid = useSelector(selectSid);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoggedIn && !isRefreshing && sid) {
      dispatch(refreshUser());
    }
  }, [dispatch, isLoggedIn, isRefreshing, sid]);
  return (
    <div className="container">
      <Routes>
        <Route path="" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
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
              <ProtectedRoute defaultRoute="/diary">
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
    </div>
  );
};
