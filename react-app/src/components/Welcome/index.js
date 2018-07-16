import React from 'react';

import Arrow from './Arrow.svg';
import styles from './index.module.scss';

export default class Welcome extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div />
        <div className={styles.messageContainer}>
          What’s your beautiful thing today?
        </div>
        <div>
          <img
            src={Arrow}
            alt=""
          />
        </div>
      </div>
    );
  }
}
