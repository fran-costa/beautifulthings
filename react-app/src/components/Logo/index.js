import React from 'react';
import PropTypes from 'prop-types';

import LogoBig from './LogoBig.svg';
import LogoSmall from './LogoSmall.svg';
import styles from './index.module.scss';

const Logo = props => {
  const { size } = props;

  const style = size === Logo.SMALL ? styles.small : styles.big;
  const appLogo = size === Logo.SMALL ? LogoSmall : LogoBig;

  return (
    <img
      className={style}
      src={appLogo}
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
