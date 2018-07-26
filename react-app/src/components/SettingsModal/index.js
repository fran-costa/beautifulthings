import React from 'react';
import PropTypes from 'prop-types';

import ActionIcon from 'components/ActionIcon';
import BaseModal from 'components/BaseModal';
import Logo from 'components/Logo';
import RadioButton from 'components/RadioButton';
import SettingsOptionLabel from 'components/SettingsOptionLabel';

import styles from './index.module.scss';

export default class SettingsModal extends React.PureComponent {
  static propTypes = {
    /**
     * Whenever the modal is visible or not
     */
    visible: PropTypes.bool.isRequired,

    /**
     * The username to display
     */
    username: PropTypes.string.isRequired,

    /**
     * Whenever the notifications are set to daily or not
     */
    daily: PropTypes.bool.isRequired,

    /**
     * The function to call when hide icon is tapped
     */
    onHide: PropTypes.func.isRequired,

    /**
     * The function to call when logout option is tapped
     */
    onSignOut: PropTypes.func.isRequired,
  }

  state = {
    isDaily: this.props.daily,
  };

  _toggleNotifications = () => this.setState({ isDaily: !this.state.isDaily });

  _handleHide = () => this.props.onHide(this.state.isDaily);

  _getHeader() {
    const hideIcon = ActionIcon({
      icon: ActionIcon.HIDE,
      onClick: this._handleHide,
    });

    return (
      <div className={styles.container}>
        <div className={styles.hideIconContainer}>
          {hideIcon}
        </div>
        <div className={styles.usernameContainer}>
          <div className={styles.calendarIcon} />
          <div className={styles.textContainer}>
            {this.props.username}
          </div>
        </div>
      </div>
    );
  }

  _getMain() {
    const { isDaily } = this.state;

    const notifications = SettingsOptionLabel({
      icon: SettingsOptionLabel.NOTIFICATION,
      text: 'Notifications',
    });

    const signOut = SettingsOptionLabel({
      icon: SettingsOptionLabel.SIGNOUT,
      text: 'Sign out',
      onClick: this.props.onSignOut,
    });

    const radioButtonDaily = RadioButton({
      label: "Daily",
      selected: isDaily,
      onClick: this._toggleNotifications
    });

    const radioButtonWeekly = RadioButton({
      label: "Weekly",
      selected: !isDaily,
      onClick: this._toggleNotifications
    });

    return (
      <div>
        <div>
          {notifications}
        </div>
        <div className={styles.radioButtonsContainer}>
          <div>
            {radioButtonDaily}
          </div>
          <div>
            {radioButtonWeekly}
          </div>
        </div>
        <div>
          {signOut}
        </div>
      </div>
    );
  }

  render() {
    const header = this._getHeader();
    const main = this._getMain();
    const footer = Logo();

    const modalContent = (
      <div className={styles.container}>
        <div className={styles.header}>
          {header}
        </div>
        <div className={styles.main}>
          {main}
        </div>
        <div className={styles.footer}>
          {footer}
        </div>
      </div>
    );

    return BaseModal({
      visible: this.props.visible,
      leftModal: true,
      children: modalContent,
    });
  }
}
