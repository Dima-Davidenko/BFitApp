import { NavLink } from 'react-router-dom';

const LoginNavigation = () => {
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/registration">Registration</NavLink>
    </div>
  );
};

export default LoginNavigation;
