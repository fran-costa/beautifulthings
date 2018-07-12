import React from 'react';

import Account from 'account';

import Button from 'components/Button';
import InputText from 'components/InputText';
import Logo from 'components/Logo';

import styles from './index.module.scss';

export default class StartScreen extends React.PureComponent {
  state = {
    username: '',
    password: '',
  };

  componentDidMount() {
    this._usernameInput.focus();
  }

  _setUsernameInputRef = element => this._usernameInput = element;
  _setPasswordInputRef = element => this._passwordInput = element;

  _handleUsernameChange = username => this.setState({ username });
  _handlePasswordChange = password => this.setState({ password });

  _handleUsernameEnter = () => this._passwordInput.focus();

  _handleSignIn = () => { /* TODO */ }
  _handleSignUp = () => { /* TODO */ }

  render() {
    const validUserPass = Account.validateUserPass(this.state.username, this.state.password);

    return (
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <div className={styles.logoContainer}>
            {Logo({ size: Logo.BIG })}
          </div>
          <div className={styles.formContainer}>
            <div className={styles.usernameInputContainer}>
              <InputText
                type={InputText.TEXT}
                label="Username"
                onChange={this._handleUsernameChange}
                onEnter={this._handleUsernameEnter}
                ref={this._setUsernameInputRef}
              />
            </div>
            <div className={styles.passwordInputContainer}>
              <InputText
                type={InputText.PASSWORD}
                label="Password"
                onChange={this._handlePasswordChange}
                ref={this._setPasswordInputRef}
              />
            </div>
            <div>
              <Button
                disabled={!validUserPass}
                onClick={this._handleSignIn}
              >
                Sign in
              </Button>
            </div>
            <div className={styles.createYourAccountMessage}>
              - Create your account -
            </div>
            <div>
              <Button onClick={this._handleSignUp}>
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
