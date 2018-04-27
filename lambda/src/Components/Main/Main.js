import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';
import SignUpPage from '../SignUp/index.js';
import SignInPage from '../SignIn/index.js';
import PasswordForgetPage from '../PasswordForget/index.js';
import HomePage from '../Home/index.js';
import AccountPage from '../Account/index.js';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../Constants/routes.js';

const Main = () =>
  <Router>
    <div className="main">
      <Navigation />

      <hr/>

      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <hr/>
    </div>
  </Router>

export default withAuthentication(Main);