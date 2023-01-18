import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { dietApi } from 'redux/diet/dietApi';

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      UserMenu
      <button
        onClick={() => {
          dispatch(logOut());
          dispatch(dietApi.util.resetApiState());
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
