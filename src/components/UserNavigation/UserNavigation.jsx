import React from 'react';
import { NavLink } from 'react-router-dom';

const UserNavigation = () => {
  return (
    <div>
      <NavLink to="/diary">Diary</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
    </div>
  );
};

export default UserNavigation;
