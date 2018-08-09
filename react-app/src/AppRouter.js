import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import StartScreenContainer from 'containers/StartScreenContainer';

const AppRouter = () => {
  const _openSignUpScreen = () => window.location.hash = '/signup';

  const _renderStartScreen = () => StartScreenContainer({
    onSignUp: _openSignUpScreen,
  });

  return (
    <HashRouter>
      <div>
        <Redirect exact path="/" to="/start" />
        <Route exact path="/start" render={_renderStartScreen} />
      </div>
    </HashRouter>
  );
}

export default AppRouter;
