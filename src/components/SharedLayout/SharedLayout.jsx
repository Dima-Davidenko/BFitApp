import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <p>SharedLayout</p>
      <div>Navigation</div>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
