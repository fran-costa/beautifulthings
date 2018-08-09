import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import SignUpScreenContainer from 'containers/SignUpScreenContainer';
import StartScreenContainer from 'containers/StartScreenContainer';

const AppRouter = () => {
  const routesNames = {
    start: '/start',
    signUp: '/signup',
  }

  const _openSignUpScreen = () => window.location.hash = routesNames.signUp;
  const _openStartScreen = () => window.location.hash = routesNames.start;

  const _renderStartScreen = () => StartScreenContainer({
    onSignUp: _openSignUpScreen,
  });

  const _renderSignUpScreen = () => SignUpScreenContainer({
    onSignIn: _openStartScreen,
  });

  return (
    <HashRouter>
      <div>
        <Redirect exact path="/" to={routesNames.start} />
        <Route exact path={routesNames.start} render={_renderStartScreen} />
        <Route exact path={routesNames.signUp} render={_renderSignUpScreen} />
      </div>
    </HashRouter>
  );
}

export default AppRouter;
