import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'components/Logo';
import styles from './index.module.scss';

export default class Header extends React.PureComponent {
  static propTypes = {
    /**
     * The element (an ActionIcon) that this element will show in the left.
     */
    left: PropTypes.element,

    /**
     * The element (an ActionIcon) that this element will show in the right.
     */
    right: PropTypes.element,
  };

  static defaultProps = {
    left: null,
    right: null,
  }

  render() {
    const { left, right } = this.props;
    const logo = Logo({
      size: Logo.BIG
    });

    return (
      <div className={styles.container}>
        <div className={styles.left}>
          {left}
        </div>
        <div className={styles.center}>
          {logo}
        </div>
        <div className={styles.right}>
          {right}
        </div>
      </div>
    );
  }
}
