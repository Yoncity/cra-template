import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SignInPage from '../pages/SignInPage';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import PageNotFound from './PageNotFound/pageNotFound';

import * as routes from '../constants/routes';

const Routes = ({ isAuth }) => (
  <Router>
    <Switch>
      <Route exact path={routes.ABOUT.link} component={AboutPage} />

      {/* This below is an example of a protected `home route`, after implementing login implement similar feature */}
      {/* <Route
        exact
        path={routes.HOME.link}
        render={props => (isAuth ? <HomePage {...props} /> : <Redirect to={routes.SIGN_IN.link} />)}
      /> */}

      <Route exact path={routes.HOME.link} component={HomePage} />

      {/* This has a system if a user is logged, can't go to signin again unless he logsout */}
      <Route
        exact
        path={routes.SIGN_IN.link}
        render={props => (isAuth ? <Redirect to={routes.HOME.link} /> : <SignInPage {...props} />)}
      />

      <Route exact path="*" component={PageNotFound} />
    </Switch>
  </Router>
);

const mapState = ({ authenticate: { isAuth } }) => ({
  isAuth,
});

export default connect(mapState, null)(Routes);
