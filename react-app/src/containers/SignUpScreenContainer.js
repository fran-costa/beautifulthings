import React from 'react';
import PropTypes from 'prop-types';

import SignUpScreen from 'components/SignUpScreen';

const SignUpScreenContainer = ({ onSignIn }) => {
  return <SignUpScreen
    onSignIn={onSignIn}
  />;
}

SignUpScreenContainer.propTypes = {
  /**
   * The function to call when sign in button is clicked
   */
  onSignIn: PropTypes.func.isRequired,
}

export default SignUpScreenContainer;
