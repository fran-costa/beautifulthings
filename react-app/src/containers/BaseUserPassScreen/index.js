import React from 'react';
import PropTypes from 'prop-types';

import InputText from 'components/InputText';
import Logo from 'components/Logo';

import styles from './index.module.scss';

export default class BaseUserPassScreen extends React.PureComponent {
  static propTypes = {
    onChanges: PropTypes.func.isRequired,
    onPasswordEnter: PropTypes.func,
    children: PropTypes.element.isRequired,
  }

  state = {
    username: '',
    password: '',
  };

  componentDidMount() {
    this._usernameInput.focus();
  }

  _setUsernameInputRef = element => this._usernameInput = element;
  _setPasswordInputRef = element => this._passwordInput = element;

  _notifyChanges = () => {
    const { username, password } = this.state;

    this.props.onChanges(username, password);
  }

  _handleUsernameChange = username => this.setState({ username }, this._notifyChanges);
  _handlePasswordChange = password => this.setState({ password }, this._notifyChanges);

  _handleUsernameEnter = () => this._passwordInput.focus();
  _handlePasswordEnter = () => {
    const { onPasswordEnter } = this.props;

    if (onPasswordEnter) onPasswordEnter();
  }

  _getLogo() {
    return Logo({ size: Logo.BIG });
  }

  _getUsernameInput() {
    return (
      <InputText
        type={InputText.TEXT}
        label="Username:"
        onChange={this._handleUsernameChange}
        onEnter={this._handleUsernameEnter}
        ref={this._setUsernameInputRef}
      />
    );
  }

  _getPasswordInput() {
    return (
      <InputText
        type={InputText.PASSWORD}
        label="Password:"
        onChange={this._handlePasswordChange}
        onEnter={this._handlePasswordEnter}
        ref={this._setPasswordInputRef}
      />
    );
  }

  render() {
    const logo = this._getLogo();
    const usernameInput = this._getUsernameInput();
    const passwordInput = this._getPasswordInput();

    return (
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <div className={styles.logoContainer}>
            {logo}
          </div>
          <div className={styles.formContainer}>
            <div className={styles.usernameInputContainer}>
              {usernameInput}
            </div>
            <div>
              {passwordInput}
            </div>
            <div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
