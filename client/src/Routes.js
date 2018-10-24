import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainLayout } from './layouts';
// import Auth from './containers/Authorization/Authorize';
import HomePage from './pages/Home/HomePage';
import SignInPage from './pages/Auth/SignInPage';
import SignUpPage from './pages/Auth/SignUpPage';
import { routeList } from './pages/routes';

const Main = () => (
  <Switch>
    <Route exact path={routeList.HOME} component={MainLayout(HomePage)} />
    <Route path={routeList.SIGN_IN} component={MainLayout(SignInPage)} />
    <Route path={routeList.SIGN_UP} component={MainLayout(SignUpPage)} />
  </Switch>
);

export default Main;
