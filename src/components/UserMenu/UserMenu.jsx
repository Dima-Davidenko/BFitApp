import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      UserMenu
      <button onClick={() => dispatch(logOut())}>LogOut</button>
    </div>
  );
};

export default UserMenu;
