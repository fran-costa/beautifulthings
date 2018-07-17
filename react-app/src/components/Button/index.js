import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

const Button = props => {
  const {
    children,
    onClick,
    disabled,
    isSmall,
  } = props;

  const _handleClick = () => {
    if (!disabled) onClick();
  };

  function _getStyle() {
    if (isSmall) {
      if (disabled) return styles.smallDisabled;
      return styles.smallEnabled;
    } else {
      if (disabled) return styles.normalDisabled;
      return styles.normalEnabled;
    }
  }

  const style = _getStyle();

  return (
    <div className={style}>
      <button
        className={styles.button}
        disabled={disabled}
        onClick={_handleClick}
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  /**
   * The label or element the button will show.
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,

  /**
   * The function to call when this button is clicked.
   */
  onClick: PropTypes.func.isRequired,

  /**
   * Whether this button is disabled or not.
   */
  disabled: PropTypes.bool,

  /**
   * Whether this button is the small one or not. Default value: false
   */
  isSmall: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  isSmall: false,
};

export default Button;
