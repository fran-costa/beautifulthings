import React from 'react';
import PropTypes from 'prop-types';

import AppLogo from './Logo.svg';
import styles from './index.module.scss';

const Logo = props => {
  const { size } = props;

  const style = props.size === Logo.SMALL ? styles.small : styles.big;

  return (
    <img
      className={style}
      src={AppLogo}
      alt=""
    />
  );
}

Logo.BIG = 'big';
Logo.SMALL = 'small';

Logo.propTypes = {
  /**
   * The size for the logo. Possible values: 'small' or 'big'
   */
  size: PropTypes.oneOf([Logo.SMALL, Logo.BIG]).isRequired,
};

export default Logo;
