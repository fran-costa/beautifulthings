import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default class ActionIcon extends React.PureComponent {
  static BACK = 'back';
  static APPLY = 'apply';
  static EXPAND = 'expand';
  static COLLAPSE = 'collapse';
  static SETTINGS = 'settings';

  static propTypes = {
    /**
     * The icon that this element will show.
     */
    icon: PropTypes.oneOf([
      ActionIcon.BACK,
      ActionIcon.APPLY,
      ActionIcon.EXPAND,
      ActionIcon.COLLAPSE,
      ActionIcon.SETTINGS,
    ]).isRequired,

    /**
     * The function to call when this element is clicked.
     */
    onClick: PropTypes.func.isRequired,
  };

  _handleClick = () => this.props.onClick(this.props.icon);

  _getStyle = () => {
    switch (this.props.icon) {
      case ActionIcon.BACK:
        return styles.back;
      case ActionIcon.APPLY:
        return styles.apply;
      case ActionIcon.EXPAND:
        return styles.expand;
      case ActionIcon.COLLAPSE:
        return styles.collapse;
      case ActionIcon.SETTINGS:
        return styles.settings;
      default:
        return null;
    }
  }

  render() {
    const style = this._getStyle();

    return (
      <div
        className={style}
        onClick={this._handleClick}
      />
    );
  }
}
