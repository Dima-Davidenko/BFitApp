import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import scss from './UserMenu.module.scss';

const UserMenu = () => {
  const { username } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={scss.containerName}>
      <span className={scss.userName}> {username}</span>
      <button className={scss.logOut} onClick={() => dispatch(logOut())}>
        EXIT
      </button>
    </div>
  );
};

export default UserMenu;
