import LoginNavigation from 'components/LoginNavigation/LoginNavigation';
import UserMenu from 'components/UserMenu/UserMenu';
import UserNavigation from 'components/UserNavigation/UserNavigation';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      {!isLoggedIn && <LoginNavigation />}
      {isLoggedIn && (
        <>
          <UserNavigation />
          <UserMenu />
        </>
      )}

      <Outlet />
    </div>
  );
};

export default SharedLayout;
