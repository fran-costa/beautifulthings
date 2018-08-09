import React from 'react';
import PropTypes from 'prop-types';

import Account from 'account';
import api from 'api';

import { showLoadingModal, hideLoadingModal } from 'utils/spinner';

import SignUpScreen from 'components/SignUpScreen';

const SignUpScreenContainer = ({ onSignUpSuccessfuly, onSignIn }) => {
  async function _performSignUp(username, password) {
    try {
      showLoadingModal('Signing up...');
      const keyPair = await Account.generateKeyPair(username, password);
      api.initAccount(username, keyPair);
      const signedUp = await api.signUp();

      if (signedUp) { /** TODO: Show an alert indicating the account was created and call onSignUpSuccessfuly */ }
      else { /** TODO: Show an alert */ }
    } catch(error) {
      /** TODO: Show an alert */
    } finally {
      hideLoadingModal();
    }
  }

  return <SignUpScreen
    performSignUp={_performSignUp}
    onSignIn={onSignIn}
  />;
}

SignUpScreenContainer.propTypes = {
  /**
   * The function to call when successfuly signed up
   */
  onSignUpSuccessfuly: PropTypes.func.isRequired,

  /**
   * The function to call when sign in button is clicked
   */
  onSignIn: PropTypes.func.isRequired,
}

export default SignUpScreenContainer;
