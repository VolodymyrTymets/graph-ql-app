import React  from 'react';
import NavBar from './NavBar';

const MainLayout = (Component, props) => ({ history }) => (
  <div>
    <NavBar history={history} {...props} />
    <div className="container-fluid">
      <Component history={history} {...props} />
    </div>
  </div>
);

export default MainLayout;
