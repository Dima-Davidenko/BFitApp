import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, defaultRoute }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = false;

  return <>{isLoggedIn ? children : <Navigate to={defaultRoute} />}</>;
};

export default PrivateRoute;
