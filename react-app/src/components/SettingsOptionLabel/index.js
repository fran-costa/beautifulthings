import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default class SettingsOptionLabel extends React.PureComponent {
  static NOTIFICATION = 'notification';
  static SIGNOUT = 'signout';

  static propTypes = {
    /**
     * The icon to display next to the label text
     */
    icon: PropTypes.oneOf([
      SettingsOptionLabel.NOTIFICATION,
      SettingsOptionLabel.SIGNOUT,
    ]).isRequired,

    /**
     * The label text
     */
    text: PropTypes.string.isRequired,

    /**
     * An optional function to call when element is tapped
     */
    onClick: PropTypes.func,

    /**
     * An optional children to display
     */
    children: PropTypes.element,
  };

  static defaultProps = {
    onClick: null,
    children: null,
  };

  _handleClick = () => {
    if (this.props.onClick) this.props.onClick();
  }

  _getIconStyle() {
    switch (this.props.icon) {
      case SettingsOptionLabel.NOTIFICATION:
        return styles.notifications;
      case SettingsOptionLabel.SIGNOUT:
        return styles.signOut;
      default:
        return null;
    }
  }

  render() {
    const { text, children } = this.props;
    const iconStyle = this._getIconStyle();

    return (
      <div
        className={styles.container}
        onClick={this._handleClick}
      >
        <div className={styles.labelContainer}>
          <div className={iconStyle} />
          <div>
            {text}
          </div>
        </div>
        <div>
          {children}
        </div>
      </div>
    );
  }
}
