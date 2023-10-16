import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

function MainLayout() {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
