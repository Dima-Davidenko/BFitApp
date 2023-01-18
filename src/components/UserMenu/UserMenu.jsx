import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { dietApi } from 'redux/diet/dietApi';
import { selectUser } from 'redux/auth/authSelectors';
import scss from './UserMenu.module.scss';

const UserMenu = () => {
  const { username } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={scss.container}>
      <span className={scss.userName}> {username}</span>
      <button
        className={scss.logOut}
        onClick={() => {
          dispatch(logOut());
          dispatch(dietApi.util.resetApiState());
        }}
      >
        EXIT
      </button>
    </div>
  );
};

export default UserMenu;
