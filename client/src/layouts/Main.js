import React  from 'react';
import NavBar from '../components/General/NavBar';

const MainLayout = Component => ({ history }) => (
  <div>
    <NavBar history={history} />
    <div className="container-fluid">
      <Component history={history} />
    </div>
  </div>
);

export default MainLayout;
