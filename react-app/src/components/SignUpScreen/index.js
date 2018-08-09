import React from 'react';
import PropTypes from 'prop-types';

import Account from 'account';

import BaseUserPassScreen from 'components/BaseUserPassScreen';
import Button from 'components/Button';

import styles from './index.module.scss';

export default class SignUpScreen extends React.PureComponent {
  static propTypes = {
    /**
     * The function to call when sign up button is clicked with valid username-password data
     */
    performSignUp: PropTypes.func.isRequired,

    /**
     * The function to call when sign in label in clicked
     */
    onSignIn: PropTypes.func.isRequired,
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

  _handlePasswordEnter = () => (this._validateForm()) ? this._signUp() : null;

  _signUp = () => this.props.performSignUp(this.state.username, this.state.password);

  _renderSignUpButton() {
    const validFormDate = this._validateForm();

    return Button({
      disabled: !validFormDate,
      onClick: this._signUp,
      children: "Sign up",
    });
  }

  render() {
    const { usernameError, passwordError } = this.state;

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
            {signUpButton}
          </div>
          <div
            className={styles.signInLabelContainer}
            onClick={this.props.onSignIn}
          >
            or sign in
          </div>
        </div>
      </BaseUserPassScreen>
    );
  }
}
