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
    return (
      <div className={styles.fullContainer}>
        <div className={styles.space} />
        <div className={styles.hideIconContainer}>
          {ActionIcon({
            icon: ActionIcon.HIDE,
            onClick: this._handleHide,
          })}
        </div>
        <div className={styles.space} />
        <div className={styles.usernameContainer}>
          <div className={styles.calendarIcon} />
          <div className={styles.textContainer}>
            {this.props.username}
          </div>
        </div>
        <div className={styles.space} />
      </div>
    );
  }

  _getMain() {
    const { isDaily } = this.state;

    const radioButtons = (
      <div className={styles.radioButtonsContainer}>
        <div className={styles.radioButtonDailyContainer}>
          {RadioButton({
            label: "Daily",
            selected: isDaily,
            onClick: this._toggleNotifications
          })}
        </div>
        <div>
          {RadioButton({
            label: "Weekly",
            selected: !isDaily,
            onClick: this._toggleNotifications
          })}
        </div>
      </div>
    );

    const notifications = SettingsOptionLabel({
      icon: SettingsOptionLabel.NOTIFICATION,
      text: 'Notifications',
      children: radioButtons,
    });

    const signOut = SettingsOptionLabel({
      icon: SettingsOptionLabel.SIGNOUT,
      text: 'Sign out',
      onClick: this.props.onSignOut,
    });

    return (
      <div className={styles.fullContainer}>
        <div className={styles.marginLeft} />
        <div className={styles.mainContainer}>
          <div className={styles.marginTop} />
          <div>
            <div className={styles.labelContainer}>
              {notifications}
            </div>
            <div  className={styles.labelContainer}>
              {signOut}
            </div>
          </div>
        </div>
      </div>
    );
  }

  _getFooter() {
    return Logo({ size: Logo.BIG });
  }

  render() {
    const header = this._getHeader();
    const main = this._getMain()
    const footer = this._getFooter();

    return (
      <BaseModal
        visible={this.props.visible}
        leftModal={true}
      >
        <div className={styles.container}>
          <div className={styles.headerContainer}>
            {header}
          </div>
          <div className={styles.mainContainer}>
            {main}
          </div>
          <div className={styles.footerContainer}>
            {footer}
          </div>
        </div>
      </BaseModal>
    );
  }
}
