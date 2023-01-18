import MainAppBar from 'components/MainAppBar/MainAppBar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <MainAppBar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
