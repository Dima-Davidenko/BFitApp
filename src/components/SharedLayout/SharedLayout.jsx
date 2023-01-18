import MainAppBar from 'components/MainAppBar/MainAppBar';
import NewAppBar from 'components/NewAppBar/NewAppBar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      {/* <MainAppBar /> */}
      <NewAppBar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
