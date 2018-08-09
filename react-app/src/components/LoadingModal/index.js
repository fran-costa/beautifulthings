import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/fontawesome-free-solid';

import BaseModal from 'components/BaseModal';

import styles from './index.module.scss';

const LoadingModal = ({ visible, message }) => {
  const children = (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <FontAwesomeIcon icon={faSpinner} pulse />
      </div>
      <div>
        {message}
      </div>
    </div>
  );

  return BaseModal({
    visible,
    children,
  });
}

LoadingModal.propTypes = {
  /**
   * Whenever the modal is visible or not
   */
  visible: PropTypes.bool.isRequired,

  /**
   * The message that the modal will show
   */
  message: PropTypes.string.isRequired,
};

export default LoadingModal;
