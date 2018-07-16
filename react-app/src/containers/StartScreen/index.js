import React from 'react';
import PropTypes from 'prop-types';

import Account from 'account';

import BaseUserPassScreen from 'containers/BaseUserPassScreen';
import Button from 'components/Button';

import styles from './index.module.scss';

export default class StartScreen extends React.PureComponent {
  static propTypes = {
    onSignUp: PropTypes.func.isRequired,
  }

  state = {
    username: '',
    password: '',
  };

  _handleChanges = (username, password) => this.setState({ username, password });
  _handlePasswordEnter = () => this._signIn();

  _handleSignUp = () => this.props.onSignUp();
  _handleSignIn = () => this._signIn();

  _signIn() {
    const { username, password } = this.state;

    if (!Account.validateUserPass(username, password)) return;

    // TODO: Show spinner, create account and signin
  }

  _getSignInButton() {
    const { username, password } = this.state;
    const validUserPass = Account.validateUserPass(username, password);

    return (
      <Button
        disabled={!validUserPass}
        onClick={this._handleSignIn}
      >
        Sign in
      </Button>
    );
  }

  _getSignUpButton() {
    return (
      <Button onClick={this._handleSignUp}>
        Sign up
      </Button>
    );
  }

  render() {
    const signInButton = this._getSignInButton();
    const signUpButton = this._getSignUpButton();

    return (
      <BaseUserPassScreen
        onChanges={this._handleChanges}
        onPasswordEnter={this._handlePasswordEnter}
      >
        <div className={styles.container}>
          <div>
            {signInButton}
          </div>
          <div className={styles.createAccountLabelContainer}>
            - Create your account -
          </div>
          <div>
            {signUpButton}
          </div>
        </div>
      </BaseUserPassScreen>
    );
  }
}
