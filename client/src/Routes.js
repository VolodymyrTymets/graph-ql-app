import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Auth from './containers/Authorization/Authorize';
import HomePage from './pages/Home/HomePage';

import { routeList } from './pages/routes';

const Main = () => (
  <Switch>
    <Route exact path={routeList.HOME} component={HomePage} />
  </Switch>
);

export default Main;
