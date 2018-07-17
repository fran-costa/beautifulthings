import React from 'react';
import PropTypes from 'prop-types';

import ActionIcon from 'components/ActionIcon';
import Header from 'components/Header';
import styles from './index.module.scss';

const HeaderListScreen = props => {
  const { onSettings } = props;

  const settingsIcon = ActionIcon({
    icon: ActionIcon.SETTINGS,
    onClick: onSettings,
  });

  const header = Header({ left: settingsIcon });

  return (
    <div className={styles.container}>
      {header}
    </div>
  );
}

HeaderListScreen.propTypes = {
  /**
   * The function to call when settings icon is pressed.
   */
  onSettings: PropTypes.func.isRequired,
};

export default HeaderListScreen;
