import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainLayout } from './layouts';
// import Auth from './containers/Authorization/Authorize';
import HomePage from './pages/Home/HomePage';
import SignInPage from './pages/Auth/SignInPage';
import SignUpPage from './pages/Auth/SignUpPage';
import { routeList } from './pages/routes';

const Main = ({ apolloClient }) => (
  <Switch>
    <Route exact path={routeList.HOME} component={MainLayout(HomePage, { routeList, apolloClient })} />
    <Route path={routeList.SIGN_IN} component={MainLayout(SignInPage, { routeList, apolloClient })} />
    <Route path={routeList.SIGN_UP} component={MainLayout(SignUpPage, { routeList, apolloClient })} />
  </Switch>
);

export default Main;
