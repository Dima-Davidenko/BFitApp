import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const PrivateRoute = ({ children, defaultRoute }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <>{isLoggedIn ? children : <Navigate to={defaultRoute} />}</>;
};

export default PrivateRoute;
