import React from 'react';

import styles from './index.module.scss';

export default class SplashScreen extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.topSpace} />
        <div className={styles.appLogo} />
        <div className={styles.unixonoLogo} />
      </div>
    );
  }
}
