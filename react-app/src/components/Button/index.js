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

    /**
     * Whether this button is the small one or not. Default value: false
     */
    isSmall: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    isSmall: false,
  }

  _handleClick = () => {
    const { onClick, disabled } = this.props;

    if (!disabled) onClick();
  };

  render() {
    const { disabled, isSmall, children } = this.props;
    let style;
    if (isSmall) {
      if (disabled) style = styles.smallDisabled;
      else style = styles.smallEnabled;
    } else {
      if (disabled) style = styles.normalDisabled;
      else style = styles.normalEnabled;
    }

    return (
      <div className={style}>
        <button
          className={styles.button}
          disabled={disabled}
          onClick={this._handleClick}
        >
          {children}
        </button>
      </div>
    );
  }
}
