import React from 'react';
import PropTypes from 'prop-types';

import Account from 'account';

import BaseUserPassScreen from 'components/BaseUserPassScreen';
import Button from 'components/Button';
import ButtonsModal from 'components/ButtonsModal';

import styles from './index.module.scss';

export default class StartScreen extends React.PureComponent {
  static propTypes = {
    onSignUp: PropTypes.func.isRequired,
  }

  state = {
    username: '',
    password: '',
    usernameError: '',
    passwordError: '',
    isModalVisible: false,
  };

  _validateForm() {
    const { username, password } = this.state;

    return username && password;
  }

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

  _handlePasswordEnter = () => {
    const validForm = this._validateForm();

    if (validForm) this._signIn();
  }

  _toggleModalVisibility = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  _handleSignUp = () => this.props.onSignUp();
  _handleSignIn = () => this._signIn();

  _signIn() { /* TODO: Show spinner, create account and signin or show modal */ }

  _renderSignInButton() {
    const validFormData = this._validateForm();

    return Button({
      disabled: !validFormData,
      onClick: this._handleSignIn,
      children: "Sign in",
    });
  }

  _renderSignUpButton() {
    return Button({
      onClick: this._handleSignUp,
      children: "Sign up",
    });
  }

  _renderWrongUsernameOrPasswordModal() {
    const closeModalButton = Button({
      children: "Try again",
      onClick: this._toggleModalVisibility,
      small: true,
    });

    return ButtonsModal({
      visible: this.state.isModalVisible,
      message: "Your username or password is incorrect",
      primaryButton: closeModalButton,
    });
  }

  render() {
    const { usernameError, passwordError } = this.state;

    const signInButton = this._renderSignInButton();
    const signUpButton = this._renderSignUpButton();
    const wrongUsernameOrPasswordModal = this._renderWrongUsernameOrPasswordModal();

    return (
      <div>
        {wrongUsernameOrPasswordModal}
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
      </div>
    );
  }
}
