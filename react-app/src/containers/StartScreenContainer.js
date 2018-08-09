import React from 'react';
import PropTypes from 'prop-types';

import Account from 'account';
import api from 'api';

import { showLoadingModal, hideLoadingModal } from 'utils/spinner';

import StartScreen from 'components/StartScreen';

const StartScreenContainer = ({ onSignInSuccessfuly, onSignUp }) => {
  async function _performSignIn(username, password) {
    try {
      showLoadingModal('Signing in...');
      const keyPair = await Account.generateKeyPair(username, password)
      api.initAccount(username, keyPair);
      const signedIn = await api.signIn();

      if (signedIn) onSignInSuccessfuly();
      else { /** TODO: Show an alert */ }
    } catch(error) {
      /** TODO: Show an alert */
    } finally {
      hideLoadingModal();
    }
  }

  return <StartScreen
    performSignIn={_performSignIn}
    onSignUp={onSignUp}
  />;
}

StartScreenContainer.propTypes = {
  /**
   * The function to call when successfuly signed in
   */
  onSignInSuccessfuly: PropTypes.func.isRequired,

  /**
   * The function to call when sign up button is clicked
   */
  onSignUp: PropTypes.func.isRequired,
}

export default StartScreenContainer;
