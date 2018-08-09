import React from 'react';
import PropTypes from 'prop-types';

import Account from 'account';

import BaseUserPassScreen from 'components/BaseUserPassScreen';
import Button from 'components/Button';

import styles from './index.module.scss';

export default class StartScreen extends React.PureComponent {
  static propTypes = {
    /**
     * The function to call when sign in button in clicked with valid username-password data
     */
    performSignIn: PropTypes.func.isRequired,

    /**
     * The function to call when sign up button in clicked
     */
    onSignUp: PropTypes.func.isRequired,
  }

  state = {
    username: '',
    password: '',
    usernameError: '',
    passwordError: '',
  };

  _validateForm = () => this.state.username && this.state.password;

  _handleUsernameChange = username => {
    const valid = Account.validateUsername(username);

    if (valid) {
      this.setState({
        username,
        usernameError: '',
      });
    } else {
      this.setState({
        username: '',
        usernameError: 'Username is too short',
      });
    }
  }

  _handlePasswordChange = password => {
    const valid = Account.validatePassword(password);

    if (valid) {
      this.setState({
        password,
        passwordError: '',
      });
    } else {
      this.setState({
        password: '',
        passwordError: 'Password is too short',
      });
    }
  }

  _handlePasswordEnter = () => (this._validateForm()) ? this._signIn() : null;

  _signIn = () => this.props.performSignIn(this.state.username, this.state.password);

  _renderSignInButton() {
    const validFormData = this._validateForm();

    return Button({
      disabled: !validFormData,
      onClick: this._signIn,
      children: "Sign in",
    });
  }

  _renderSignUpButton() {
    return Button({
      onClick: this.props.onSignUp,
      children: "Sign up",
    });
  }

  render() {
    const { usernameError, passwordError } = this.state;

    const signInButton = this._renderSignInButton();
    const signUpButton = this._renderSignUpButton();

    return (
      <BaseUserPassScreen
        usernameError={usernameError}
        passwordError={passwordError}
        onUsernameChange={this._handleUsernameChange}
        onPasswordChange={this._handlePasswordChange}
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
