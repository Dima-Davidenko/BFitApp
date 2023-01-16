import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, defaultRoute }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = false;

  return <>{isLoggedIn ? <Navigate to={defaultRoute} /> : children}</>;
};

export default ProtectedRoute;
