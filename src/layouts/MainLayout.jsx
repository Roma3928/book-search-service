import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

function MainLayout() {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
