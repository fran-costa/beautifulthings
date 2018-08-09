import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import EditScreenContainer from 'containers/EditScreenContainer';
import ListScreenContainer from 'containers/ListScreenContainer';
import SignUpScreenContainer from 'containers/SignUpScreenContainer';
import StartScreenContainer from 'containers/StartScreenContainer';

const AppRouter = () => {
  const routesNames = {
    start: '/start',
    signUp: '/signup',
    list: '/list',
    add: '/add',
    edit: (date = null) => (!date) ? '/edit/:date' : `/edit/${date}`,
  }

  const _openSignUpScreen = () => window.location.hash = routesNames.signUp;
  const _openStartScreen = () => window.location.hash = routesNames.start;
  const _openListScreen = () => window.location.hash = routesNames.list;
  const _openAddScreen = () => window.location.hash = routesNames.add;
  const _openEditScreen = date => window.location.hash = routesNames.edit(date);

  const _renderStartScreen = () => StartScreenContainer({
    onSignInSuccessfuly: _openListScreen,
    onSignUp: _openSignUpScreen,
  });

  const _renderSignUpScreen = () => SignUpScreenContainer({
    onSignUpSuccessfuly: _openStartScreen,
    onSignIn: _openStartScreen,
  });

  const _renderListScreen = () => ListScreenContainer({
    onAdd: _openAddScreen,
    onEdit: _openEditScreen,
  });

  const _renderEditScreen = () => EditScreenContainer({
    onBack: _openListScreen,
    onSave: _openListScreen,
  })

  return (
    <HashRouter>
      <div>
        <Redirect exact path="/" to={routesNames.start} />
        <Route exact path={routesNames.start} render={_renderStartScreen} />
        <Route exact path={routesNames.signUp} render={_renderSignUpScreen} />
        <Route exact path={routesNames.list} render={_renderListScreen} />
        <Route exact path={routesNames.add} render={_renderEditScreen} />
        <Route exact path={routesNames.edit()} render={_renderEditScreen} />
      </div>
    </HashRouter>
  );
}

export default AppRouter;
