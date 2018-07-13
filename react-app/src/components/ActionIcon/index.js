import React from 'react';
import PropTypes from 'prop-types';

import Apply from './Apply.svg';
import Back from './Back.svg';
import styles from './index.module.scss';

const ActionIcon = props => {
  const {
    icon,
    onClick
  } = props;

  const _handleClick = () => onClick(icon);

  const _getIcon = () => {
    switch (icon) {
      case ActionIcon.BACK:
        return Back;
      case ActionIcon.APPLY:
        return Apply;
      default:
        return null;
    }
  }

  const iconToRender = _getIcon();

  return (
    <img
      className={styles.container}
      src={iconToRender}
      onClick={_handleClick}
      alt=""
    />
  );
}

ActionIcon.BACK = 'back';
ActionIcon.APPLY = 'apply';

ActionIcon.propTypes = {
  /**
   * The icon that this element will show.
   */
  icon: PropTypes.oneOf([
    ActionIcon.BACK,
    ActionIcon.APPLY
  ]).isRequired,

  /**
   * The function to call when this element is clicked.
   */
  onClick: PropTypes.func.isRequired,
}

export default ActionIcon;
