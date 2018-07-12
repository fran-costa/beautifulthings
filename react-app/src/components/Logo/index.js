import React from 'react';
import PropTypes from 'prop-types';

import AppLogo from './Logo.svg';
import styles from './index.module.scss';

export default class Logo extends React.PureComponent {
  static SMALL = 'small';
  static BIG = 'big';

  static propTypes = {
    /**
     * The size for the logo. Possible values: 'small' or 'big'
     */
    size: PropTypes.oneOf([Logo.SMALL, Logo.BIG]).isRequired,
  };

  render() {
    const style = this.props.size === Logo.SMALL ? styles.small : styles.big;

    return (
      <img
        className={style}
        src={AppLogo}
        alt=""
      />
    );
  }
}
