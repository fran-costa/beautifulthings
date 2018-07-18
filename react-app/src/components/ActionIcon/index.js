import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

const ActionIcon = props => {
  const {
    icon,
    onClick,
  } = props;

  const _handleClick = () => onClick(icon);

  function _getStyle() {
    switch (icon) {
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
      case ActionIcon.HIDE:
        return styles.hide;
      default:
        return null;
    }
  }

  const style = _getStyle();

  return (
    <div
      className={style}
      onClick={_handleClick}
    />
  );
}

ActionIcon.BACK = 'back';
ActionIcon.APPLY = 'apply';
ActionIcon.EXPAND = 'expand';
ActionIcon.COLLAPSE = 'collapse';
ActionIcon.SETTINGS = 'settings';
ActionIcon.HIDE = 'hide';

ActionIcon.propTypes = {
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

export default ActionIcon;
