import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default class Button extends React.PureComponent {
  static propTypes = {
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
  };

  static defaultProps = {
    disabled: false,
  }

  _handleClick = () => {
    const { onClick, disabled } = this.props;

    if (!disabled) onClick();
  };

  render() {
    const { disabled, children } = this.props;
    const style = !disabled ? styles.normal : styles.disabled;

    return (
      <button
        className={style}
        disabled={disabled}
        onClick={this._handleClick}
      >
        {children}
      </button>
    );
  }
}
