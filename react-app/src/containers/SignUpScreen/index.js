import React from 'react';
import PropTypes from 'prop-types';

import Account from 'account';

import BaseUserPassScreen from 'containers/BaseUserPassScreen';
import Button from 'components/Button';

import styles from './index.module.scss';

export default class SignUpScreen extends React.PureComponent {
  static propTypes = {
    onSignIn: PropTypes.func.isRequired,
  }

  state = {
    username: '',
    password: '',
  };

  _handleChanges = (username, password) => this.setState({ username, password });
  _handlePasswordEnter = () => this._signUp();

  _handleSignUp = () => this._signUp();
  _handleSignIn = () => this.props.onSignIn();

  _signUp() {
    const { username, password } = this.state;

    if (!Account.validateUserPass(username, password)) return;

    // TODO: Show spinner, create account and signup
  }

  _getSignUpButton() {
    const { username, password } = this.state;
    const validUserPass = Account.validateUserPass(username, password);

    return (
      <Button
        disabled={!validUserPass}
        onClick={this._handleSignUp}
      >
        Sign up
      </Button>
    );
  }

  render() {
    const signUpButton = this._getSignUpButton();

    return (
      <BaseUserPassScreen
        onChanges={this._handleChanges}
        onPasswordEnter={this._handlePasswordEnter}
      >
        <div className={styles.container}>
          <div>
            {signUpButton}
          </div>
          <div
            className={styles.signInLinkContainer}
            onClick={this._handleSignIn}
          >
            Or sign in
          </div>
        </div>
      </BaseUserPassScreen>
    );
  }
}
